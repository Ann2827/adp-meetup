## Архитектурные решения

- общие компоненты
- декомпозиция и принцип единой ответственности
- нормальная стилизация/темизация
- store и его функционирование

-----

### Приложение

<video id="app-video" src="slides/05-architectural-solutions/app.mp4" style="height: calc(100vh - 100px)"></video>
<div id="app-button" class="app-button">
    <svg class="app-svg" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="m6 18 8.5-6L6 6v12zM16 6v12h2V6h-2z"></path></svg>
</div>

<style>
    .app-button {
        border-radius: 10px;
        width: 54px;
        height: 54px;
        cursor: pointer;
        position: absolute;
        bottom: 10%;
        right: 20%;
    }
    .app-button:hover {
        background-color: rgba(128,128,128,0.49);
    }
    .app-svg {
        width: 24px;
        height: 24px;
    }
</style>

-----

### Layouts

<img src="slides/05-architectural-solutions/screens.png" alt="Экраны" class="screens" />

<style>
    .screens {
        height: calc(100vh - 100px);
    }
</style>

-----

<img src="slides/05-architectural-solutions/component.png" alt="Компонент" />

[comment]: <> (не все такие сложные, где-то разруливалось стилями?)

-----

### Reducers

<img src="slides/05-architectural-solutions/reducers.png" alt="Редьюсеры" />

-----

### Store

<pre>
<code class="javascript" data-trim>
{
    analytics: {
        fbPixelInit: false
        loadedSent: false
        logsScreen: []
        quizShow: true
        ymInit: false
    }
    app: {
        config: {...}
        imagesPath: 'https://nginx.static.qw.loc/e77c7e82-cb25-52f8-bb9e-483bb2b4c226/images/'
        language: 'ru'
        mode: 'standalone'
        userResponses: null
    }
    debug: {
        analytics: false
        answerDebug: false
        debug: true
        formSubmit: false
    }
    errors: {
        configLoading: null
        contactFormSubmit: null
        ...
    }
    loadings: {
        config: false
        ...
    }
    progress: {...}
}
</code>
</pre>

-----

<pre>
<code class="javascript" data-trim>
{
    analytics: {...}
    app: {...}
    debug: {...}
    errors: {...}
    loadings: {...}
    progress: {
        composite: {is: false, ...}
        contactData: [{name: 'phone', answerValues: ['+79061232323']}]
        history: ['343a40d7-1f9a-4f30-906f-db145b2ce9f3']
        passing: {
            0e9e71dd-854b-4082-8009-ace5d5e690e1: {questionPassed: true, ...}
            5e0e59b0-079e-459e-aebb-a53ceab4454f: {questionPassed: false, ...}
        }
        pointsSum: 7
        progressBar: {
            0e9e71dd-854b-4082-8009-ace5d5e690e1: {questionNumber: 14, questionPassed: false}
        }
        results: ['0c5d1865-bc5a-44d3-8fa6-992ba3fed71e']
        screenUuid: '6f1946cf-2e60-4a32-a743-f1107be18074'
        weight: {0c5d1865-bc5a-44d3-8fa6-992ba3fed71e: 3}
    }
}
</code>
</pre>

-----

### Sagas

<img src="slides/05-architectural-solutions/sagas.png" alt="Саги" />
