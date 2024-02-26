document.addEventListener("DOMContentLoaded", function() {
    let params = new URLSearchParams(window.location.search);
	let data = {
		url: 'site/' + params.get('id'),
		type: 'get',
		port: 84
	}
	fetch('/php/controller.php', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(data)
	}).then(function(res) {
		res.json().then(function(text) {
			document.querySelector('.b-title').innerHTML = text.name;
			document.querySelector('.b-url').innerHTML = text.url;
			if(text.image) {
				document.querySelector('.b-image').src = text.image;
			}
		})
	});

	let dataValid = {
		url: 'html_val/' + params.get('id'),
		type: 'get',
		port: 81
	}
	fetch('/php/controller.php', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(dataValid)
	}).then(function(res) {
		res.json().then(function(text) {
			text.forEach(element => {
				let result = JSON.parse(element.logs);
				let date = new Date(Date.parse(element.created_at));
				let validItem = document.createElement('li');
				validItem.classList.add('b-validation__item');
				
				let dateElement = document.createElement('p');
				dateElement.classList.add('b-validation__date');
				dateElement.classList.add('c-font-black');
				let dd = date.getDate() > 10 ? date.getDate() : "0" + date.getDate();
				let mm = date.getMonth() > 10 ? (date.getMonth() + 1) : "0" + (date.getMonth() + 1);
				dateElement.innerHTML = dd+"."+mm+"."+date.getFullYear().toString().substr(-2);

				let errorsContainer = document.createElement('div');
				errorsContainer.classList.add('b-validation__errors');

				let addText = document.createElement('p');
				addText.classList.add('c-font-black');
				addText.innerHTML = "Посмотреть ошибки";

				result.forEach((line, id) => {
					let errorItem = document.createElement('div');
					errorItem.classList.add('b-validation__error');

					let lineNumber = document.createElement('p');
					lineNumber.classList.add('c-font-black');
					lineNumber.classList.add('b-validation__line-number');
					lineNumber.innerHTML = id;

					let lineString = document.createElement('p');
					lineString.classList.add('b-validation__line-string');
					lineString.classList.add('c-font-black');
					lineString.innerHTML = line;

					errorItem.appendChild(lineNumber);
					errorItem.appendChild(lineString);
					errorsContainer.appendChild(errorItem);
				});

				validItem.addEventListener('click', clickEvent);
				validItem.appendChild(dateElement);
				validItem.appendChild(addText);
				validItem.appendChild(errorsContainer);
				document.querySelector('.b-validation').appendChild(validItem);
			});
		})
	});

	document.querySelectorAll('.b-validation__item').forEach(element => {
		element.addEventListener('click', clickEvent);
	});

	if(sessionStorage.getItem('id')) {
		document.querySelector('.b-feedback').classList.remove('disabled');
	}

	document.querySelector('.b-feedback__comment-button').addEventListener('click', function() {
		if(sessionStorage.getItem('id')) {
			let dataComment = {
				url: 'comment/' + params.get('id') + '/' + sessionStorage.getItem('id'),
				type: 'post',
				text: document.querySelector('.b-feedback__comment').value,
				port: 83
			}
			fetch('/php/controller.php', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(dataComment)
			}).then(function(res) {
				res.json().then(function(text) {
					if(text.id) {
						document.querySelector('.b-feedback__comment').value = "";
						alert("Комментарий успешно оставлен");
					} else {
						alert("Возникла ошибка при оставлении комментария. Попробуйте позже");
					}
				});
			});
		}
	});

	function clickEvent(e) {
		if(!this.querySelector('.b-validation__errors')) {
			return;
		}
		this.querySelector('.b-validation__errors').classList.toggle('active');
	}
});