
document.addEventListener("DOMContentLoaded", function(e) {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = dataLoaded;
    //xhr.open("GET", "https://raw.githubusercontent.com/adrianosferreira/afrodite.json/master/afrodite.json", true);
    xhr.open("GET", "/src/scripts/json_archives/receitas_bd.json", true);
    xhr.send(null);

});

const dataLoaded = function(x) {
    if (this.readyState === 4) { //https://www.w3schools.com/xml/ajax_xmlhttprequest_response.asp
        if (this.status === 200) {
            const j = JSON.parse(this.responseText);

            const urlSearchParams = new URLSearchParams(window.location.search);
            const params = Object.fromEntries(urlSearchParams.entries());

            var findedData = j.find(element => element._id.$oid === params.id)
            
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

};


