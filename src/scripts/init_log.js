import search_obj from './dbfake_search.js'

function initPagLogado(){

    const name_user = document.querySelectorAll('.userName');
    const salut = document.querySelector('#main-text-id h1');
    let user = JSON.parse(sessionStorage.usuarioCorrente).nome;
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

    search_obj.search_bar_top('site-content22', 'form-search2')

    search_obj.search_bars_bottom('site-content22', 'recipes_search_login2')

    document.getElementById('profile-container').addEventListener('click', () => {
        location.assign('meu_perfil.html')
    })

}

document.addEventListener("DOMContentLoaded", function (e) {

    initPagLogado();

    myprofile_events();

    let nav1 = document.getElementsByClassName('nav-links')[0].style
    nav1.backgroundColor = '#9dab86'
    nav1.color = 'white'

})