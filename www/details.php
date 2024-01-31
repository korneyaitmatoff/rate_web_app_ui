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
					<li class="b-validation__item">
						<p class="b-validation__date c-font-black">21.12.22</p>
						<p class="b-validation__type b-validation__type--pass">Passed</p>
					</li>
					<li class="b-validation__item">
						<p class="b-validation__date c-font-black">21.12.22</p>
						<p class="b-validation__type b-validation__type--pass">Passed</p>
					</li>
					<li class="b-validation__item">
						<p class="b-validation__date c-font-black">21.12.22</p>
						<p class="b-validation__type b-validation__type--fail">Fail</p>
						<div class="b-validation__errors">
							<p class="b-validation__error c-font-black">Error 1</p>
							<p class="b-validation__error c-font-black">Error 2</p>
							<p class="b-validation__error c-font-black">Error 3</p>
							<p class="b-validation__error c-font-black">Error 4</p>
							<p class="b-validation__error c-font-black">Error 5</p>
						</div>
					</li>
					<li class="b-validation__item">
						<p class="b-validation__date c-font-black">21.12.22</p>
						<p class="b-validation__type b-validation__type--pass">Passed</p>
					</li>
					<li class="b-validation__item">
						<p class="b-validation__date c-font-black">21.12.22</p>
						<p class="b-validation__type b-validation__type--pass">Passed</p>
					</li>
                </ul>
            </div>
        </main>
        <footer>

        </footer>
    </body>
</html>