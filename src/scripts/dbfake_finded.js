

//Odair: trouxe uma cópia do arquivo para trabalhar a busca dos detalhes de cada receita, adotando a orientação a objeto, comando this -> respostas stackoverflow:


document.addEventListener("DOMContentLoaded", function(e) {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = dataLoaded;
    xhr.open("GET", "https://raw.githubusercontent.com/adrianosferreira/afrodite.json/master/afrodite.json", true);
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

    findedData.secao.forEach(secao => {
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
        })
                
        //let p = document.createElement('p');
        //p.innerText = secao.nome;
        //main_content_itens.appendChild(p);
        //alert(conteudo)
    });
}
