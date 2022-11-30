import Forms from './app.js'

let x = new Forms('site-content22', ['button_login1', 'button_sign1'])

document.addEventListener('DOMContentLoaded', () => {

    x.createFormLogin()
    x.createFormSign()
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {

        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                const j = xhr.responseText;
                if(localStorage.recipes === undefined) localStorage.setItem('recipes', j)

            } 
        }
    };
    xhr.open("GET", "/icei-puc-minas-pmv-ads.github.io/pmv-ads-2022-2-e1-proj-web-t4-qreceita/src/scripts/json_archives/receitas_bd.json", true);
    xhr.send(null);

    document.getElementById('my_profile_login').addEventListener('click', (e) => {

    e.preventDefault();
    x.createFormLogin();

    });
    document.getElementById('first-nav').addEventListener('click', (e) => {

    if(document.getElementsByClassName('navs')[0].id === 'page_log') {
        e.preventDefault();
        location.assign('user-logado.html');
    }

    })
})
