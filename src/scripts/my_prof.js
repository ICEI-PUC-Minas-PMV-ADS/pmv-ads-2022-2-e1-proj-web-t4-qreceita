import SearchClass from './dbfake_search.js'
import MeuPefil from './my_prof_module.js'

let x = new MeuPefil('nav-options')
const bar_top = new SearchClass('site-content22', 'form-search2', true)

function userNameMyProf(){

    const name_user = document.querySelectorAll('.userName');
    let user = JSON.parse(sessionStorage.currentUser).nome;
    let formatedUser = user[0].toUpperCase() + user.slice(1, user.length).toLowerCase()
    document.getElementById('user_name').value = formatedUser

    name_user.forEach((i) => {
        i.innerText = formatedUser
    });

}

document.addEventListener('DOMContentLoaded', () => {

    bar_top.search_bar_top()

    userNameMyProf()

    let nav2 = document.getElementById('my-profile-nav').style
    nav2.backgroundColor = '#9dab86'
    nav2.color = 'white'

    document.getElementsByClassName('nav-options')[0].classList.add('profile')

    x.PerfilEventos()

})
