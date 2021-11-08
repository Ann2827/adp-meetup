## Quizy.World

### О проекте

- Сбор и квилификация лидов.
- Удержание пользователя на сайте.

[comment]: <> (Пердставляет собой опросник, который клиент может интегрировать на свой сайт)
<img src="slides/02-project/quiz.gif" alt="Quiz" class="project-gif" />
<img src="slides/02-project/blue_shape.png" alt="Decor" class="project-img" />

-----

<div id="qw-quiz-c1eba035241062e56ee2a90d96f49089" class="qw-quiz" style="width: 100%;"></div>

[comment]: <> (<video data-autoplay src="slides/02-project/passing.mov" controls='controls'></video>)

-----

### Модификации открытия

<p class="reveal justify-start r-hstack"><b>Standalone:</b></p>

<img src="slides/02-project/standalone.png" alt="Standalone" class="project-image" />

-----

<p class="reveal justify-start r-hstack"><b>Embed:</b></p>

<img src="slides/02-project/embed.png" alt="Embed" class="project-image" />

-----

<p class="reveal justify-start r-hstack"><b>Popup:</b></p>

<img src="slides/02-project/popup.png" alt="Popup" class="project-image" />

-----

<p class="reveal justify-start r-hstack"><b>Mobile:</b></p>

<img src="slides/02-project/mobile.png" alt="Mobile" class="project-image" />

-----

### Составляющие проекта

- Приложение-квиз *(React, TypeScript)*
- Embed *(JavaScript)*
- Бэкенд *(Node, TypeScript, Nest)*
- БД *(MySQL 8, Clickhouse, MongoDB)*
- Админка *(React, TypeScript)*
- Лэндинг *(Tilda)*

-----

### Что было до нас

<img src="slides/02-project/old.png" alt="Quizes" class="quizes" />

-----

### Команда разработки

<img src="slides/02-project/developers.png" alt="Developers" class="project-full-image" />


<style>
    .project-gif {
        margin: 0 !important;
        position: absolute;
        top: -80px;
        right: -20px;
        z-index: -1;
    }
    .project-img {
        position: absolute;
        bottom: -400px;
        left: -100px;
        z-index: -1;
    }
    .project-image {
        margin: 0 !important;
        height: calc(100vh - 200px);
    }
    .project-full-image {
        margin: 0 !important;
        height: calc(100vh - 100px);
    }
    li > em {
        color: gray;
        font-style: normal !important;
        font-size: 30px;
    }
    .quizes {
        height: calc(100vh - 100px);
    }
</style>
