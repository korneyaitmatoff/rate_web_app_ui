<!DOCTYPE html>
<html>
    <head>
        <link rel="stylesheet" href="./styles/style.css"/>
        <link rel="stylesheet" href="./styles/details.css"/>
		<script src="./scripts/auth.js"></script>
		<script src="./scripts/details.js"></script>
    </head>
    <body>
        <?php include("./partials/header.html") ?>
        <main>
            <div class="b-container">
                <h1 class="b-title"></h1>
                <p class="b-url c-font-white"></p>
                <img class="b-image" src="./images/default.jpg">
                <p class="c-font-white">Ошибки валидации</p>
                <ul class="b-validation">
                </ul>
				<div class="b-feedback disabled">
					<p class="c-font-white">Ваш комментарий</p>
					<textarea class="b-feedback__comment"></textarea>
					<button class="b-feedback__comment-button c-button">Оставить комментарий</button>
				</div>
            </div>
        </main>
        <footer>

        </footer>
    </body>
</html>