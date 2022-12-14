import Forms from './app.js'

let x = new Forms('site-content22', ['button_login1', 'button_sign1'])

document.addEventListener('DOMContentLoaded', () => {

    x.createFormLogin()
    x.createFormSign()
    const xhr = new XMLHttpRequest();
    let r = "scripts/receitas_bd.json"
    xhr.open("GET", r, true);
    xhr.send(null);
    xhr.onreadystatechange = () => {

        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                const j = xhr.responseText;
                if(!localStorage.getItem('receitas')) localStorage.setItem('receitas', j)

            } 
        }
    };
    
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
