import SearchClass from './dbfake_search.js'
import SuperJson from './superJson.js';

const bar_top = new SearchClass('site-content22', 'form-search2', true)
const bar_bottom = new SearchClass('site-content22', 'recipes_search_login2', true)

function initPagLogado(){

    const name_user = document.querySelectorAll('.userName');
    const salut = document.querySelector('#main-text-id h1');
    let user = JSON.parse(sessionStorage.currentUser).nome;
    let formatedUser = user[0].toUpperCase() + user.slice(1, user.length).toLowerCase()

    name_user.forEach((i) => {
        i.innerText = formatedUser
    });
    salut.innerText = `Qual será a receita de hoje, ${formatedUser}?`

    document.getElementById("button_logout_logado").addEventListener('click', () => {

        location.assign('index.html')

    })
}

//^CRIAÇÃO DO CONTEÚDO---/---/---/---/---/---/---/---/---/---/---/---/---/---/---/---/---/---/---/---/---/---/---/---/---/---/---/

function myprofile_events(){

    document.getElementById("my-profile-nav").addEventListener('click', (e) => {
        e.preventDefault()
        location.assign('meu_perfil.html')
    })

    bar_top.search_bar_top()

    bar_bottom.search_bars_bottom()

    document.getElementById('profile-container').addEventListener('click', () => {
        location.assign('meu_perfil.html')
    })

    document.getElementById("button_logout_logado").addEventListener('click', () => {

        location.assign('index.html')

    })

}

document.addEventListener("DOMContentLoaded", function (e) {

    initPagLogado();

    myprofile_events();

    let nav1 = document.getElementsByClassName('nav-links')[0].style
    nav1.backgroundColor = '#9dab86'
    nav1.color = 'white'

})