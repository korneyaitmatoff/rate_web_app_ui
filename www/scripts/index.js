import setSites from './functions.js';

document.addEventListener("DOMContentLoaded", function() {
    let limit = 10;
    let offset = 0;

    function getSites() {
		let data = {
			url: 'site?limit=' + limit + '&offset=' + offset
		}
		fetch('/php/controller.php', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data)
		}).then(function(res) {
			res.json().then(function(text) {
				setSites(text);
				offset += text.length;
				if(document.querySelectorAll('.b-sites__site').length % limit == 0 && text.length != 0) {
					document.querySelector('.b-load-more').classList.remove('disabled')
				} else {
					document.querySelector('.b-load-more').classList.add('disabled')
				}
			})
		})
    }

	getSites();

	document.querySelector('.b-load-more').addEventListener('click', function() {
		getSites();
	});
});