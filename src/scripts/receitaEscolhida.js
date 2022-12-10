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

    let rFav = sessionStorage.getItem('recipesFav')
    let bdRecipes = localStorage.getItem('receitas')
    const buttonFav = document.getElementById('button-fav')
    const urlSearchParams = new URLSearchParams(window.location.search);
    const params = Object.fromEntries(urlSearchParams.entries());

    if(rFav && bdRecipes){

        const fav = JSON.parse(rFav)
        const buttonFav = document.getElementById('button-fav')
        var findedDataFav = fav.find(element => element._id.$oid === params.id)

        if(findedDataFav){
            buttonFav.classList.add('checked')
            document.getElementById('button-fav').innerHTML = `<img src="imgs/fav_checked.png">`
        }
        
    } 

    buttonFav.addEventListener('click', () => {

        const urlSearchParams = new URLSearchParams(window.location.search);
        const params = Object.fromEntries(urlSearchParams.entries());
        let rJFav2 = sessionStorage.getItem('recipesFav')
        let rJFav = JSON.parse(rJFav2);

        if(rJFav === null){

            let list = []
            const j = JSON.parse(localStorage.getItem('receitas'))
            var findRFav = j.find(el => el._id.$oid === params.id)
            list.push(findRFav)
            buttonFav.classList.add('checked');
            buttonFav.innerHTML = `<img src="imgs/fav_checked.png">`
            sessionStorage.setItem('recipesFav', JSON.stringify(list))

        } else {

            if (typeof rJFav === 'object') {
                
                var findRFav = rJFav.find(el => el._id.$oid === params.id)

                if (findRFav === undefined) {

                    const j = JSON.parse(localStorage.getItem('receitas'))
                    var findRFav = j.find(el => el._id.$oid === params.id)
                    buttonFav.classList.add('checked');
                    buttonFav.innerHTML = `<img src="imgs/fav_checked.png">`
                    rJFav.push(findRFav)
                    sessionStorage.setItem('recipesFav', JSON.stringify(rJFav))

                } else {
                    remove_class_list(buttonFav)
                    rJFav.forEach((el, i) => {
                        if (el._id.$oid === params.id) {
                            rJFav.splice(i, 1)
                        }
                    })

                    sessionStorage.setItem('recipesFav', JSON.stringify(rJFav))
                    buttonFav.innerHTML = `<img src="imgs/fav_icon.png">`
                }
            }
        }
    })

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