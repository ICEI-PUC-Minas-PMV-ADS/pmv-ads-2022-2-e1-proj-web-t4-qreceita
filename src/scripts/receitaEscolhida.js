import SearchClass from "./dbfake_search.js";

let flagLog = new SearchClass('main-recipe', 'form-search2', true)

document.addEventListener('DOMContentLoaded', () => {

    flagLog.search_bar_top()

    const name_user = document.querySelectorAll('.userName');
    let user = JSON.parse(sessionStorage.currentUser).nome;
    let formatedUser = user[0].toUpperCase() + user.slice(1, user.length).toLowerCase()

    name_user.forEach((i) => {
        i.innerText = formatedUser
    });

    document.getElementById("button_logout_logado").addEventListener('click', () => {
        location.assign('index.html')
    })

    document.getElementById('profile-container').addEventListener('click', () => {
        location.assign('meu_perfil.html')
    })

    document.getElementById("my-profile-nav").addEventListener('click', (e) => {
        e.preventDefault()
        location.assign('meu_perfil.html')
    })

    document.getElementById('first-nav').addEventListener('click', (e) => {
        e.preventDefault()
        location.assign('user-logado.html')
    })

    document.getElementById('logo').addEventListener('click', (e) => {
        e.preventDefault()
        location.assign('user-logado.html')
    })
})