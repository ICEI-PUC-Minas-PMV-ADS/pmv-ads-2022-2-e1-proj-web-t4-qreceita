import Forms from "./app.js";

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
    xhr.open("GET", "/scripts/json_archives/receitas_bd.json", true);
    xhr.send(null);

});

const dataLoaded = function(x) {
    if (this.readyState === 4) { //https://www.w3schools.com/xml/ajax_xmlhttprequest_response.asp
        if (this.status === 200) {
            const j = JSON.parse(localStorage.getItem('receitas'));
            const urlSearchParams = new URLSearchParams(window.location.search);
            const params = Object.fromEntries(urlSearchParams.entries());

            var findedData = j.find(element => element._id.$oid === params.id)

            console.log(params)
            console.log(findedData)
            renderData(findedData)
            renderComments()
            appendComments()


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

};

const renderComments = function(){

    const comments = document.getElementById('comment-box');
    const j = JSON.parse(localStorage.getItem('receitas'));
    const urlSearchParams = new URLSearchParams(window.location.search);
    const params = Object.fromEntries(urlSearchParams.entries());
    var commentsList = j.find(element => element._id.$oid === params.id)
    var countComment = document.getElementById('countComment')

    if(typeof commentsList.comentarios == 'object'){
        countComment.innerText = `${commentsList.comentarios.length} comentários`
    }

    if(commentsList.comentarios.length > 0){ //continuar aqui
        let list = '<ul>';
        commentsList.comentarios.forEach((info, _) => {
            list += `<li class="commentList"><div class="profilePhoto"><img class="photo" src="imgs/avatar-padrao2.jpg"></div><div class="containerComment"><div class="commentInfos"><div class="nameUser">${info.nomeUsuario}</div><div class="time"></div></div><div class="comment">${info.comentario}</div></div></li>`;
          })
        list += '</ul>';
        comments.innerHTML = list;
    }
}

const appendComments = function(){

    const submit = document.querySelector('#submit_comment');
    const field = document.querySelector('textarea');
    submit.addEventListener('click', (e) => {

        e.preventDefault();
        try{

            var userInfo = JSON.parse(sessionStorage.getItem('currentUser'))
            const content = {"nomeUsuario": userInfo.nome,"comentario": field.value}
            let recipes = JSON.parse(localStorage.getItem('receitas'))
            const urlSearchParams = new URLSearchParams(window.location.search);
            const params = Object.fromEntries(urlSearchParams.entries());
            let atualRec = recipes.find(element => element._id.$oid === params.id)

            if(content.comentario.length > 0){ 

                if(typeof atualRec.comentarios === 'object') {

                    atualRec.comentarios.push(content)
                    localStorage.setItem('receitas', JSON.stringify(recipes))
                    // re-genrate the comment html list
                    renderComments();
                    // reset the textArea content 
                    field.value = '';

                } else {
                    let voidList = []
                    voidList.push(content)
                    atualRec.comentarios = voidList

                    localStorage.setItem('receitas', JSON.stringify(recipes))
                    renderComments();
                    field.value = '';
                }
            }
        } catch{

            let arrayButton = ['submit_comment'];
            let login = new Forms('main-recipe', arrayButton);
            login.createFormLogin();
            document.getElementById('submit_comment').click()
        }
    })
}