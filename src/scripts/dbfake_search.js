
//importar clear_content para forms-val
function clear_content(id) {
    const main = document.getElementById(id)
    let main_child = main.firstElementChild;
    while (main_child) {
        main.removeChild(main_child);
        main_child = main.firstElementChild;
    }
}
const search_obj = {

    search_bar_top:function(main_id, form_id){

        const xhr = new XMLHttpRequest();
        //xhr.open("GET", "https://raw.githubusercontent.com/adrianosferreira/afrodite.json/master/afrodite.json", true);
        xhr.open("GET", "/scripts/json_archives/recetias_bd_json", true);
        xhr.send(null);
        //console.log('xhr')
        const main_content_search = document.getElementById(main_id);

        document.getElementById(form_id).addEventListener('submit', (e) => {
            //console.log('addevent')
            const input_user = document.getElementById("search-top")
            e.preventDefault();

            clear_content(main_id)

            const j = JSON.parse(xhr.responseText);

            main_content_search.classList.add('show-recipe')
            let count = 0

            let h2 = document.createElement('h2')
            h2.id = 'result_count'
            main_content_search.appendChild(h2)


            for (let c in j) {
                //Se o conteúdo da receita conter a palavra inserida pelo usuário na barra de pesquisa
                if (j[c].secao[0].conteudo.filter(retur => retur.indexOf(input_user.value.trim().toLowerCase()) >= 0).length > 0) {
                    count += 1
                    let article = document.createElement('article')
                    article.className = "result_recipe"

                    //Odair: link direto no "article.innerHTML considerando a inclusão da string '+j[c]._id.$oid +'" target="blank"/>' antes do objeto j[c].nome +"                
                    //article.innerHTML = '<h1><a href="./receita-escolhida.html?id=' + j[c]._id.$oid + '" target="_self"/>' + j[c].nome + + j[c].link_imagem +'</a></h1>'

                    article.innerHTML = `<div class="img_div"><img src="${j[c].link_imagem}"></div><div class="recipe_info"><h3 class="info"><a href="./receita-escolhida.html?id=${j[c]._id.$oid}" target="_self"/>${j[c].nome}</h3><h4 class="info">"Postado por: ${j[c].postado_por}"</h4><h4 class="info">${j[c].grau_de_dificuldade}</h4></div><div class="hating">${j[c].avaliacao}</div>`


                    
                    //article.innerHTML = `<div class="img_div"><img src="${j[c].link_imagem}"></div><div class="recipe_info"><h3><a href="./receita-escolhida.html?id=${j[c]._id.$oid}" target="_self"/>${j[c].nome}</h3></div><div class="hating"></div>`
                    
                    //article.innerHTML = `<h3><a href="./receita-escolhida.html?id=${j[c]._id.$oid}" target="_self"/>${j[c].nome}</h3><div class="img_div"><img src="${j[c].link_imagem}"></div>`



                    //article.innerHTML = '<h3><a href onClick="openRecipe('+j[c]+')"/>' + j[c].nome + '</h3>'
                    document.getElementById('result_count').insertAdjacentElement('afterend', article)
                }

            }
            h2.innerText = `Encontramos ${count} resultados de receitas que se enquadram na sua busca por ${input_user.value.trim().toLowerCase()}`

        });

    },

    search_bars_bottom:function(main_id, buttom_id){

        const xhr = new XMLHttpRequest();
        //xhr.open("GET", "https://raw.githubusercontent.com/adrianosferreira/afrodite.json/master/afrodite.json", true);
        xhr.open("GET", "/scripts/json_archives/recetias_bd_json", true);
            xhr.send(null);

        const main_content_search = document.getElementById(main_id);

        document.getElementById(buttom_id).addEventListener('click', (e) => {

            e.preventDefault();
            let inputs_recipe = document.getElementsByClassName('input-ingrediente')
            let inputs = []
            //array com itens pesquisados
            for (let c = 0; c < 10; c++) {
                if (inputs_recipe[c].value.trim() != "") inputs.push(inputs_recipe[c].value.trim().toLowerCase())
            }

            let flag = true
            if (inputs.length === 0) {
                alert('Insira pelo menos 1 ingrediente.')
                flag = false
            }

            if (flag) {
                clear_content(main_id)

                const j = JSON.parse(xhr.responseText);

                main_content_search.classList.add('show-recipe')

                let h2 = document.createElement('h2')
                h2.id = 'result_count'
                main_content_search.appendChild(h2)
                //contador de receitas encontradas
                let countRecipe = 0

                let countIngredients = 0
                for (let c in j) {
                    for (e in inputs) {
                        //Se a conteúdo da receita conter a palavra inserida pelo usuário na barra de pesquisa, adiciona uma unidade ao contador 2
                        if (j[c].secao[0].conteudo.filter(retur => retur.indexOf(inputs[e]) >= 0).length > 0) countIngredients += 1

                    }
                    if (countIngredients >= 3 && inputs.length > 3 || inputs.length === countIngredients) {
                        //carrega os dados no DOM

                        //Odair: link direto no "article.innerHTML considerando a inclusão da string '+j[c]._id.$oid +'" target="_self"/>' antes do objeto j[c].nome +"

                        let article = document.createElement('article')
                        article.className = "result_recipe"
                        //article.innerHTML = '<h3>' + j[c].nome + '</h3>'
                        article.innerHTML = '<h3><a href="./receita-escolhida.html?id=' + j[c]._id.$oid + '" target="_self"/>' + j[c].nome + '</h3>'
                        //article.innerHTML = '<h3><a href onClick="openRecipe('+j[c]+')"/>' + j[c].nome + '</h3>'
                        
                        //article.innerText = + j[c]._id.$oid + j[c].grau_de_dificuldade +

                        document.getElementById('result_count').insertAdjacentElement('afterend', article)
                        countRecipe += 1

                    }
                    countIngredients = 0
                }
                let ingredients = ""
                inputs.forEach(el => {
                    ingredients += `${el} `
                });

                h2.innerText = `Encontramos ${countRecipe} resultados de receitas que se enquadram na sua busca por: ${ingredients}.`
            }

        });

    }

}
export default search_obj
/*document.addEventListener("DOMContentLoaded", function (e) {

        teste.teste1("site-content22", "form-search2");

        teste.teste2("site-content22", "recipes_search_login2");


    //Odair incluir a funcionalidade de apresentação dos dados da receita ao clicar em uma receita encontrada

});*/
