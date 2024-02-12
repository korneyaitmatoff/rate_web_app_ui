<!DOCTYPE html>
<html>
    <head>
        <link rel="stylesheet" href="./styles/style.css"/>
        <link rel="stylesheet" href="./styles/index.css"/>
        <script src="./scripts/auth.js"></script>
        <script type="module" src="./scripts/index.js"></script>
    </head>
    <body>
        <?php include("./partials/header.html") ?>
        <main>
            <div class="b-sites">
                <p class="c-font-white">Все сайты: </p>
                <div class="b-sites__list">
                </div>
                <div class="b-button-container">
                    <button class="b-load-more c-button disabled">Загрузить ещё</button>
                </div>
            </div>
        </main>
        <footer>

        </footer>
    </body>
</html>