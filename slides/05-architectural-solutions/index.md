## Архитектурные решения

- общие компоненты
- декомпозиция и принцип единой ответственности
- нормальная стилизация/темизация
- отдельные контейнеры экранов и вопросов
- стор и его функционирование

-----

### Приложение

<div class="wrap">
    <div class="dir">
        <img src="slides/05-architectural-solutions/dirs.png" alt="Директория" style="margin-top: 200px !important;" />
    </div>
    <div class="app">
        <img src="slides/05-architectural-solutions/app.png" />
    </div>
</div>

<style>
    .wrap {
        display: flex;
        flex-direction: row;
    }
    .dir {
        width: 20%;
    }
    .app {
        width: 70%;
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

-----

<img src="slides/05-architectural-solutions/another-component.png" alt="Другой компонент" />

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
