import setSites from './functions.js';

document.addEventListener('DOMContentLoaded', function() {
    if(sessionStorage.getItem('id')) {
        document.querySelector('.b-user__name').innerHTML = sessionStorage.getItem('login');
        getSites();
    } else {
        document.querySelector('.b-sites').style.display = 'none';
    }

    document.querySelector('.b-create-button').addEventListener('click', function() {
        document.querySelector('.b-create').classList.remove('disabled');
    });

    document.querySelector('.b-create').addEventListener('click', function(e) {
        if(e.target == this) {
            this.classList.add('disabled');
        }
    });

    document.querySelector('.b-create__form').onsubmit = function(e) {
        e.preventDefault();
        if(!check(document.querySelector('.b-create__form'))) {
            alert('Заполните все поля!');
            return
        }
        let formData = new FormData(document.querySelector('.b-create__form'));
        let data = {
            url: 'site',
            port: 84,
            type: 'post',
            siteName: formData.get('name'),
            siteDescription: formData.get('description'),
            siteUrl: formData.get('url'),
            userId: sessionStorage.getItem('id')
        }
        fetch('/php/controller.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        }).then(function(res) {
            res.json().then(function(json) {
                location.reload();
            });
        });
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

    function check(form) {
        let bool = true;
        form.querySelectorAll('input').forEach(input => {
            if(input.value == '') {
                bool = false;
                return;
            }
            return true;
        });
        return bool;
    }
});