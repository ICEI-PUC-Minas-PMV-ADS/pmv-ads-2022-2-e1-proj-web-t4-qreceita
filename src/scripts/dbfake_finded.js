

document.addEventListener("DOMContentLoaded", function(e) {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = dataLoaded;
    //xhr.open("GET", "https://raw.githubusercontent.com/adrianosferreira/afrodite.json/master/afrodite.json", true);
    xhr.open("GET", "/scripts/json_archives/recetias_bd_json", true);
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

    const main_content_itens = document.getElementById("det_receita");

    findedData.secao.forEach(s => {
        //alert(seção.nome);
        let h2 = document.createElement('h2');
        h2.innerText = secao.nome;
        main_content_itens.appendChild(h2);
        
        let ul = document.createElement('ul');
        main_content_itens.appendChild(ul);
        secao.conteudo.forEach(conteudo => {
            //alert(conteudo)
            let li = document.createElement('li');
            li.innerText = conteudo;
            ul.appendChild(li);
        });
    });   
      
    const infoRigth = document.getElementById("info_right");
    let tempoPreparo = document.createElement(h4);
    let serve = document.createElement(h4);
    let grauDificuldade = document.createElement(h4);

    tempoPreparo.innerHTML = findedData.tempo_de_preparo
    tempoPreparo.innerHTML = findedData.serve
    tempoPreparo.innerHTML = findedData.grau_de_difilcudade

    infoRigth.appendChild(tempoPreparo)
    infoRigth.appendChild(serve)
    infoRigth.appendChild(grauDificuldade)

};



