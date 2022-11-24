
//importar clear_content para forms-val
function clear_content(id) {
    const main = document.getElementById(id)
    let main_child = main.firstElementChild;
    while (main_child) {
        main.removeChild(main_child);
        main_child = main.firstElementChild;
    }
}
class SearchClass {
    constructor(main_id, event_id, flag_log = false){
        this.main_id = main_id
        this.event_id = event_id
        this.flag_log = flag_log
    }

    search_bar_top(){

        /*const xhr = new XMLHttpRequest();
        xhr.open("GET", "/scripts/json_archives/receitas_bd.json", true);
        xhr.send(null);*/
        //console.log('xhr')
        const main_content_search = document.getElementById(this.main_id);

        document.getElementById(this.event_id).addEventListener('submit', (e) => {
            //console.log('addevent')
            const input_user = document.getElementById("search-top")
            e.preventDefault();

            clear_content(this.main_id)

            const j = JSON.parse(localStorage.recipes);

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

                    if(this.flag_log) {
                        article.innerHTML = `<div class="img_div"><img src="${j[c].link_imagem}"></div><div class="recipe_info"><h3 class="info"><a href="./receita-escolhida-logado.html?id=${j[c]._id.$oid}" target="_self"/>${j[c].nome}</h3><h4 class="info">"Postado por: ${j[c].postado_por}"</h4><h4 class="info">${j[c].grau_de_dificuldade}</h4></div><div class="hating">${j[c].avaliacao}</div>`
                    } else {
                        article.innerHTML = `<div class="img_div"><img src="${j[c].link_imagem}"></div><div class="recipe_info"><h3 class="info"><a href="./receita-escolhida.html?id=${j[c]._id.$oid}" target="_self"/>${j[c].nome}</h3><h4 class="info">"Postado por: ${j[c].postado_por}"</h4><h4 class="info">${j[c].grau_de_dificuldade}</h4></div><div class="hating">${j[c].avaliacao}</div>`
                    }

                    document.getElementById('result_count').insertAdjacentElement('afterend', article)
                }

            }
            h2.innerText = `Encontramos ${count} resultados de receitas que se enquadram na sua busca por ${input_user.value.trim().toLowerCase()}`

        });

    }

    search_bars_bottom(){

        /*const xhr = new XMLHttpRequest();
        xhr.open("GET", "/scripts/json_archives/receitas_bd.json", true);
        xhr.send(null);*/

        const main_content_search = document.getElementById(this.main_id);

        document.getElementById(this.event_id).addEventListener('click', (e) => {

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
                clear_content(this.main_id)

                const j = JSON.parse(localStorage.recipes);

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
                        let article = document.createElement('article')
                        article.className = "result_recipe"

                         if(this.flag_log) {
                        article.innerHTML = `<div class="img_div"><img src="${j[c].link_imagem}"></div><div class="recipe_info"><h3 class="info"><a href="./receita-escolhida-logado.html?id=${j[c]._id.$oid}" target="_self"/>${j[c].nome}</h3><h4 class="info">"Postado por: ${j[c].postado_por}"</h4><h4 class="info">${j[c].grau_de_dificuldade}</h4></div><div class="hating">${j[c].avaliacao}</div>`
                    } else {
                        article.innerHTML = `<div class="img_div"><img src="${j[c].link_imagem}"></div><div class="recipe_info"><h3 class="info"><a href="./receita-escolhida.html?id=${j[c]._id.$oid}" target="_self"/>${j[c].nome}</h3><h4 class="info">"Postado por: ${j[c].postado_por}"</h4><h4 class="info">${j[c].grau_de_dificuldade}</h4></div><div class="hating">${j[c].avaliacao}</div>`
                    }

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
export default SearchClass

