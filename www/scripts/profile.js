import setSites from './functions.js';

document.addEventListener('DOMContentLoaded', function() {
    if(sessionStorage.getItem('id')) {
        document.querySelector('.b-user__name').innerHTML = sessionStorage.getItem('login');
        getSites();
    } else {
        document.querySelector('.b-sites').style.display = 'none';
    }

    function getSites() {
        let data = {
            url: 'site/user/' + sessionStorage.getItem('id'),
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
                setSites(text);

                if(text.length == 0) {
                    let mes = document.createElement('p');
                    mes.classList.add('c-font-white');
                    mes.style.fontStyle = 'italic';
                    mes.innerHTML = 'На данный момент у вас нет сайтов...'
                    document.querySelector('.b-sites__list').appendChild(mes);
                }
            });
        })
    }
});