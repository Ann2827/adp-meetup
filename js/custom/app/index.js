class App {
  constructor() {
    this.step = 1;
    this.container = this.init();
    this.step1();

    this.next = this.next.bind(this);
    this.back = this.back.bind(this);
  }

  init() {
    const root = document.getElementById('app-root');
    const back = document.createElement('div');
    back.addEventListener('click', this.back);
    back.textContent = 'Назад';
    root.append(back);

    const next = document.createElement('div');
    next.addEventListener('click', () => this.next(this.step));
    next.textContent = 'Далее';
    root.append(next);

    const container = document.createElement('div');
    root.append(container);

    return container;
  }

  next(step) {
    this.step = step + 1;
    switch (this.step) {
      // case 1:
      //   this.step1();
      //   break;
      case 2:
        this.step2();
        break;
      default:
        break;
    }
  }

  back() {

  }

  step1() {
    const title = document.createElement('p');
    title.textContent = 'index.js';
    this.container.append(title);

    const text = document.createElement('p');
    text.textContent = '+ store';
    this.container.append(text);
  }

  step2() {
    // this.container

    const text = document.createElement('p');
    text.textContent = '+ test';
    this.container.append(text);
  }

}

export default App;