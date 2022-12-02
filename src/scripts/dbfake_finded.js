
function remove_class_list(elem) {

    let ecl = elem.classList
    if(ecl.length >= 1) {
        for(let c = 0; c < ecl.length; c++){
            ecl.remove(ecl.item(c))
        }
    }
}

document.addEventListener("DOMContentLoaded", function(e) {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = dataLoaded;
    //xhr.open("GET", "https://raw.githubusercontent.com/adrianosferreira/afrodite.json/master/afrodite.json", true);
    xhr.open("GET", "/scripts/receitas_bd.json", true);
    xhr.send(null);

});

const dataLoaded = function(x) {
    if (this.readyState === 4) { //https://www.w3schools.com/xml/ajax_xmlhttprequest_response.asp
        if (this.status === 200) {
            const j = JSON.parse(this.responseText);

            const urlSearchParams = new URLSearchParams(window.location.search);
            const params = Object.fromEntries(urlSearchParams.entries());

            var findedData = j.find(element => element._id.$oid === params.id)
            console.log(findedData)

            if(sessionStorage.recipesFav){

                try {
                    JSON.parse(sessionStorage.recipesFav).forEach((el,_) => {
                        console.log(el._id.$oid)
                        if(el._id.$oid == findedData._id.$oid){
                            document.getElementById('button-fav').innerHTML = `<img src="imgs/fav_checked.png">`
                        }
                    })
                } catch {
                    document.getElementById('button-fav').innerHTML = `<img src="imgs/fav_icon.png">`
                }
            }   
            renderData(findedData);
        } 
    }
};

const renderData = function(findedData) {

    document.getElementById('recipeName').innerText = findedData.nome;
    document.getElementById('imgPrato').src = findedData.link_imagem;

    const main_content_itens = document.getElementById("det_receita");

    findedData.secao.forEach(secao => {

        let divs = document.createElement('div')
        divs.className = 'det_receita_child'
        let h2 = document.createElement('h2');
        h2.innerText = secao.nome;
        main_content_itens.appendChild(divs);
        divs.appendChild(h2);
        
        let ul = document.createElement('ul');
        divs.appendChild(ul);
        secao.conteudo.forEach(conteudo => {
            //alert(conteudo)
            let li = document.createElement('li');
            li.innerText = conteudo;
            ul.appendChild(li);
        });
    });   

    const infoRigth = document.getElementById("recipe-info-right");

    let tempoPreparo = document.createElement('h4');
    let serve = document.createElement('h4');
    let grauDificuldade = document.createElement('h4');

    tempoPreparo.innerHTML = findedData.tempo_de_preparo
    serve.innerHTML = findedData.serve
    grauDificuldade.innerHTML = findedData.grau_de_dificuldade

    infoRigth.appendChild(tempoPreparo)
    infoRigth.appendChild(serve)
    infoRigth.appendChild(grauDificuldade)

    const buttonFav = document.getElementById('button-fav')

    buttonFav.addEventListener('click', () => {

        if(buttonFav.classList.length == 0){
            buttonFav.classList.add('checked')
            buttonFav.innerHTML = `<img src="imgs/fav_checked.png">`
            if(sessionStorage.recipesFav) {

                try {
                    let myFav = JSON.parse(sessionStorage.recipesFav)
                    myFav.push(findedData)
                }
                catch(err) {
                    sessionStorage.setItem('recipesFav', JSON.stringify([findedData]))
                }

            } else {
                let list = JSON.stringify([findedData])
                sessionStorage.setItem('recipesFav', list)
            }   
        } else {

            remove_class_list(buttonFav)
            let myFavRecipes = sessionStorage.recipesFav
            let myFav = JSON.parse(myFavRecipes)
            myFav.splice(myFav.indexOf(findedData), 1)
            sessionStorage.setItem('recipesFav', myFav)
            buttonFav.innerHTML = `<img src="imgs/fav_icon.png">`
        }
    })

};


