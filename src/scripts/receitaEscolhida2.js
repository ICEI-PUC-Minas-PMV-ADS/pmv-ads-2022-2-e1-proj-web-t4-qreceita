import Forms from "./app.js";

let arrayButton = ['button_login1', 'button_sign1']
const header = new Forms('main-recipe', arrayButton)
let arrayButton2 = ['myprofile']
const header2 = new Forms('main-recipe', arrayButton2)
let arrayButton3 = ['button-fav']
const header3 = new Forms('main-recipe', arrayButton3)

document.addEventListener('DOMContentLoaded', () => {

    header.createFormLogin()
    header2.createFormLogin()
    header3.createFormLogin()
    header.createFormSign()

    document.getElementById('first-nav').addEventListener('click', (e) => {
        e.preventDefault()
        location.assign('index.html')
    })

    document.getElementsByClassName('title')[0].addEventListener('click', (e) => {
        location.assign('index.html')
    })

})