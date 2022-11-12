import search_obj from './dbfake_search.js'

const header_events = {

    events_clicks: () => {
        document.getElementById('button_logout_logado').addEventListener('click', () => {
            location.assign('./index.html')
        })
        document.getElementById('my-profile-nav').addEventListener('click', (e) => {
            e.preventDefault()
        })
        document.getElementsByClassName('title')[0].addEventListener('click', () => {
            location.assign('./user-logado.html')
        })
        document.getElementById('first-nav').addEventListener('click', (e) => {
            e.preventDefault()
            location.assign('./user-logado.html')
        })
    },

}

const my_prof_content = {

    

}

function userNameMyProf(){

    const name_user = document.querySelectorAll('.userName');
    let user = JSON.parse(sessionStorage.usuarioCorrente).nome;
    let formatedUser = user[0].toUpperCase() + user.slice(1, user.length).toLowerCase()

    name_user.forEach((i) => {
        i.innerText = formatedUser
    });

}

document.addEventListener('DOMContentLoaded', () => {

    header_events.events_clicks()

    search_obj.search_bar_top('site-content22', 'form-search2')

    userNameMyProf()

    let nav2 = document.getElementById('my-profile-nav').style
    nav2.backgroundColor = '#9dab86'
    nav2.color = 'white'


})
