
//importar clear_content para forms-val
function clear_content(id) {
    const main = document.getElementById(id)
    let main_child = main.firstElementChild;
    while (main_child) {
        main.removeChild(main_child);
        main_child = main.firstElementChild;
    }
}

const xhr = new XMLHttpRequest();
xhr.open("GET", "https://raw.githubusercontent.com/adrianosferreira/afrodite.json/master/afrodite.json", true);
xhr.send(null);
const main_content_search = document.getElementById("site-content22");


document.getElementById("form-search2").addEventListener('submit', (e) => {

    const input_user = document.getElementById("search-top")
    e.preventDefault();

    clear_content("site-content22")

    const j = JSON.parse(xhr.responseText);

    main_content_search.classList.add('show-recipe')
    count = 0

    let h2 = document.createElement('h2')
    h2.id = 'result_count'
    main_content_search.appendChild(h2)


    for(let c in j)
    {
        //Se a conteúdo da receita conter a palavra inserida pelo usuário na barra de pesquisa
        if(j[c].secao[0].conteudo.filter(retur => retur.indexOf(input_user.value) >= 0).length > 0)
        {
            count += 1
            let article = document.createElement('article')
            article.className = "result_recipe"
            article.innerHTML = '<h3>' + j[c].nome + '</h3>'
            document.getElementById('result_count').insertAdjacentElement('afterend', article)
        }

    }
    h2.innerText = 'Encontramos ' + count + ' resultados de receitas que se enquadram na sua busca por ' + '"'+ input_user.value +'"'

});



