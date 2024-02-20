<!DOCTYPE html>
<html>
    <head>
        <link rel="stylesheet" href="./styles/style.css"/>
        <script src="./scripts/auth.js"></script>
        <script type="module" src="./scripts/profile.js"></script>
    </head>
    <body>
        <?php include("./partials/header.html") ?>
        <main>
            <div class="b-sites">
                <h1 class="b-user">Профиль пользователя "<span class="b-user__name"></span>"</h1>
                <p class="c-font-white">Ваши сайты: </p>
                <div class="b-sites__list">
                </div>
            </div>
            <button class="b-create-button c-button">Добавить сайт</button>
            <div class="b-create disabled">
                <div class="b-create__form-container active">
                    <form class="b-create__form">
                            <div class="b-create__input input-container">
                                <label for="name">Название:</label>
                                <input name="name"/>
                            </div>
                            <div class="b-create__input input-container">
                                <label for="description">Описание:</label>
                                <input name="description"/>
                            </div>
                            <div class="b-create__input input-container">
                                <label for="url">URL:</label>
                                <input name="url"/>
                            </div>
                            <button class="b-create__submit">Добавить сайт</button>
                    </form>
                </div>
            </div>
        </main>
        <footer>

        </footer>
    </body>
</html>