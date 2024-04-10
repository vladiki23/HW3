<h1>Приложение "Курсы Валют"</h1>
<p>Приложение "Курсы Валют" предоставляет актуальную информацию о курсах валют по данным Национального банка Украины. Информация обновляется ежедневно и доступна для просмотра в удобном табличном формате. Пользователи могут также искать конкретную валюту по её названию или коду, используя поле поиска.</p>

<h2>Основные Функции</h2>
    <ul>
        <li><strong>Отображение курсов валют:</strong> Приложение динамически загружает и отображает информацию о курсах валют на определённую дату с сайта Национального банка Украины.</li>
        <li><strong>Поиск по валюте или коду:</strong> Предусмотрена функция поиска, позволяющая пользователю фильтровать таблицу валют по названию валюты или её коду для удобства нахождения нужной информации.</li>
    </ul>

<h2>Технологии</h2>
<p>HTML5 и Bootstrap 5 для верстки и стилизации интерфейса.<br>JavaScript (ES6+) для асинхронного запроса данных через API и динамического обновления содержимого страницы.</p>

<h2>Использование</h2>
<p>При открытии главной страницы приложения пользователь видит таблицу с текущими курсами валют. Данные для таблицы загружаются автоматически при первом посещении страницы. В поле поиска можно ввести название валюты или её международный код, и таблица динамически обновится, показывая только те валюты, которые соответствуют запросу поиска.</p>

<h2>Структура проекта</h2>
    <ul>
        <li><code>index.html</code>: Основная страница приложения с разметкой интерфейса.</li>
        <li><code>app.js</code>: Скрипт приложения, реализующий логику запроса данных о валютах, их отображения и поиска.</li>
        <li><code>README.md</code>: Документация проекта, описывающая его функциональность и способы использования.</li>
    </ul>

<h2>Запуск приложения</h2>
<p>Для запуска приложения откройте файл <code>index.html</code> в вашем веб-браузере. Убедитесь, что у вас есть активное интернет-соединение, чтобы приложение могло получить данные о курсах валют.</p>