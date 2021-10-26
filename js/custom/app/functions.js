// Получение обзервера окна
function isMutationObserver() {
  return window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
}

// Установка обзервера
function initObserver(el, config, callback) {
  const done = () => {
    callback(el);
  };

  if (isMutationObserver) {
    const observer = new MutationObserver(done);
    observer.observe(el, config);
    return observer;
  }
  return null;
}

// Поиск элемента
function getElement(root, element) {
  const content = root.outerHTML;
  const parser = new DOMParser();
  const contentDOM = parser.parseFromString(content, 'text/html');
  return contentDOM.querySelector(element);
}

// Отключение обзервера
function disconnectObserver(observer) {
  observer.disconnect();
}

export async function observer(selector) {
  return new Promise((res) => {
    const { body } = document;
    let domElQuiz = document.querySelector(`#${selector}`);
    if (!domElQuiz) {
      const observer = initObserver(
        body,
        {
          childList: true,
          subtree: true,
        },
        () => {
          const el = getElement(body, `#${selector}`);
          if (el) {
            domElQuiz = document.querySelector(`#${selector}`);
            disconnectObserver(observer);
            res(domElQuiz);
          }
        },
      );
    } else {
      res(domElQuiz);
    }
  });
}