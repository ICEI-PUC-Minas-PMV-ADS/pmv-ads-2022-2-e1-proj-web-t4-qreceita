import Forms from "./app.js";

let arrayButton = ['button_login1', 'button-sign']
const header = new Forms('main-recipe', arrayButton)


document.addEventListener('DOMContentLoaded', () => {

    header.createFormLogin()
    header.createFormSign()

    document.getElementById('first-nav').addEventListener('click', (e) => {
        e.preventDefault()
        location.assign('index.html')
    })

    document.getElementsByClassName('title')[0].addEventListener('click', (e) => {
        location.assign('index.html')
    })

})