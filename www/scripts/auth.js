document.addEventListener("DOMContentLoaded", function() {
    let profile = document.querySelector('.b-profile');
    document.querySelectorAll('.link').forEach(link => {
        link.addEventListener('click', function() {
            document.querySelectorAll('.b-auth > div').forEach(container => {
                container.classList.toggle('active');
            });
        });  
    });

    if(sessionStorage.getItem('login')) {
        setProfData();
    }

    document.querySelector('.b-profile__exit').addEventListener('click', function(){
        logOut();
    })

    document.querySelector('.b-profile__name').addEventListener('click', function() {
        if(!this.classList.contains('authorized')) {
            document.querySelector('.b-auth').classList.remove('disabled');
        } else {
            window.location.replace('/profile.php');
        }
    })

    document.querySelector('.b-auth').addEventListener('click', function(e) {
        if(e.target == this) {
            this.classList.add('disabled');
        }
    });

    document.querySelector('.b-login__form').onsubmit = function(e) {
        e.preventDefault();
        if(!check(document.querySelector('.b-login__form'))) {
            alert('Заполните все поля!');
            return;
        }
        let formData = new FormData(document.querySelector('.b-login__form'));
        let data = {
            url: 'user/auth',
            login: formData.get('login'),
            password: formData.get('password'),
            type: 'post',
            auth: true
        }
        fetch('/php/controller.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        }).then(function(res) {
            res.json().then(function(text) {
                let result = text != -1;
                if(result) {
                    logIn({
                        id: text,
                        login: formData.get('login'),
                        password: formData.get('password')
                    });
                } else {
                    alert('Неверное имя пользователя или пароль!');
                }
            });
        })
    }

    document.querySelector('.b-register__form').onsubmit = function(e) {
        e.preventDefault();
        let chck = check(document.querySelector('.b-register__form'));
        if(!chck) {
            alert('Заполните все поля!');
            return;
        }
        let formData = new FormData(document.querySelector('.b-register__form'));
        let data = {
            url: 'user',
            login: formData.get('login'),
            name: formData.get('name'),
            password: formData.get('password'),
            type: 'post',
        }
        fetch('/php/controller.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        }).then(function(res) { 
            res.json().then(function(json) {
                logIn({
                    id: json.id,
                    login: json.login,
                    password: json.password
                });
            });
        })
    }

    function logIn(data) {
        sessionStorage.setItem('id', data.id);
        sessionStorage.setItem('login', data.login);
        sessionStorage.setItem('password', data.password);
        setProfData();
        location.reload();
    }

    function logOut() {
        sessionStorage.removeItem('id');
        sessionStorage.removeItem('login');
        sessionStorage.removeItem('password');
        location.reload();
    }

    function setProfData() {
        profile.querySelector('.b-profile__name').innerHTML = sessionStorage.getItem('login')
        profile.querySelector('.b-profile__name').classList.add('authorized');
        profile.querySelector('.b-profile__exit').classList.remove('disabled');
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