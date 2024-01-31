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
        </main>
        <footer>

        </footer>
    </body>
</html>