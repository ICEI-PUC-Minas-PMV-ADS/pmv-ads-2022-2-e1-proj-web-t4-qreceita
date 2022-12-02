import Forms from './app.js'

let x = new Forms('site-content22', ['button_login1', 'button_sign1'])

document.addEventListener('DOMContentLoaded', () => {

    x.createFormLogin()
    x.createFormSign()
    const xhr = new XMLHttpRequest();
    let r = "/scripts/json_archives/receitas_bd.json"
    console.log(r)
    xhr.open("POST", r, true);
    xhr.onreadystatechange = () => {

        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                const j = xhr.responseText;
                if(localStorage.recipes === undefined) localStorage.setItem('recipes', j)

            } 
        }
    };
    xhr.send(null);

    document.getElementById('my_profile_login').addEventListener('click', (e) => {

    e.preventDefault();
    x.createFormLogin();

    });

    document.getElementsByClassName('title')[0].addEventListener('click', () => {

        location.assign('index.html')

    })

    document.getElementById('first-nav').addEventListener('click', (e) => {

    if(document.getElementsByClassName('navs')[0].id === 'page_log') {
        e.preventDefault();
        location.assign('user-logado.html');
    }

    })
})
