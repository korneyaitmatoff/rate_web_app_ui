document.addEventListener("DOMContentLoaded", function() {
    let params = new URLSearchParams(window.location.search);
	let data = {
		url: 'site/' + params.get('id')
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
	})
});