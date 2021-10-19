## Архитектурные решения

- общие компоненты
- декомпозиция и принцип единой ответственности???
- нормальная стилизация/темизация
- наследование???
- отдельные контейнеры экранов и вопросов
- стор и его функционирование

-----

### Приложение

<div class="wrap">
  <img src="slides/05-architectural-solutions/dirs.png" alt="Директория" class="dir" />
    <div>
        <img />
    </div>
</div>

<style>
    .wrap {
        display: flex;
        flex-direction: column;
    }
    .dir {
        width: 100px;
    }
</style>

-----

### Layouts

<img src="slides/05-architectural-solutions/screens.png" alt="Экраны" />

-----

<img src="slides/05-architectural-solutions/component.png" alt="Компонент" />

-----

<img src="slides/05-architectural-solutions/another-component.png" alt="Другой компонент" />

-----

### Store

<pre>
<code class="javascript" data-trim>
{
    app: {...}
}
</code>
</pre>

