
//importar clear_content para forms-val
function clear_content(id) {
    const main = document.getElementById(id)
    let main_child = main.firstElementChild;
    while (main_child) {
        main.removeChild(main_child);
        main_child = main.firstElementChild;
    }
}

function remove_class_list(elem) {

    let ecl = elem.classList
    if(ecl.length >= 1) {
        for(let c = 0; c < ecl.length; c++){
            ecl.remove(ecl.item(c))
        }
    }
}

class SearchClass {
    constructor(main_id, event_id, flag_log = false){
        this.main_id = main_id
        this.event_id = event_id
        this.flag_log = flag_log
    }

    search_bar_top(){

        document.getElementById(this.event_id).addEventListener('submit', (e) => {

            const main_content_search = document.getElementById(this.main_id);
            const div_content_search = document.createElement('div')
            div_content_search.id = 'show-recipe'
            const div_filter = document.createElement('div')
            const filtro_and_clear_container = document.createElement('div')
            const filter = document.createElement('div')
            const filter_clear = document.createElement('div')
            filtro_and_clear_container.id = 'div-filter-clear'
            filter.id = 'filter'
            filter_clear.id = 'filter_clear'

            //console.log('addevent')
            const input_user = document.getElementById("search-top")
            e.preventDefault();

            clear_content(this.main_id)

            const j = JSON.parse(localStorage.getItem('receitas'));

            remove_class_list(main_content_search)
            main_content_search.classList.add(`show-result-recipe`)
            main_content_search.classList.add(`${input_user.value}`)
            main_content_search.appendChild(div_content_search)
            div_content_search.insertAdjacentElement('afterend', div_filter)
            div_filter.appendChild(filtro_and_clear_container)
            filtro_and_clear_container.appendChild(filter)
            filter.insertAdjacentElement('afterend', filter_clear)
            filter.innerHTML = `<div class="div-sec-filter"><select required="" aria-invalid="false" form="filter-form" id="u5-form-group--23" class="ud-select"><option value="most-evaluated">Classificação mais alta</option><option value="less-evaluated">Classificação mais baixa</option><option value="hard">Difíceis</option><option value="middle">Médias</option><option value="easy">Fáceis</option></select></div></div>`
            let count = 0

            const div_recipes_articles = document.createElement('div')
            div_recipes_articles.id = 'div_recipes_articles'
            const divH2 = document.createElement('div')
            divH2.id = 'result-count-div'
            let h2 = document.createElement('h2')
            h2.id = 'result_count'
            divH2.appendChild(h2)
            div_content_search.appendChild(divH2)
            divH2.insertAdjacentElement('afterend', div_recipes_articles)

            let listRecipesFinded = []
            for (let c in j) {
                //Se o conteúdo da receita conter a palavra inserida pelo usuário na barra de pesquisa
                if (j[c].secao[0].conteudo.filter(retur => retur.indexOf(input_user.value.trim().toLowerCase()) >= 0).length > 0) {
                    count += 1
                    listRecipesFinded.push(j[c])
                    let article = document.createElement('article')
                    article.className = "result_recipe"

                    if(this.flag_log) {
                        if(typeof j[c].postado_por == 'object'){
                            article.innerHTML = `<div class="img_div"><img src="${j[c].link_imagem}"></div><div class="recipe_info"><h3 class="info"><a href="./receita-escolhida-logado.html?id=${j[c]._id.$oid}" target="_self"/>${j[c].nome}</h3><h4 class="info">Postado por: ${j[c].postado_por[0]}</h4><h4 class="info">${j[c].grau_de_dificuldade}</h4></div><div class="hating">${j[c].avaliacao}</div>`
                        } else{
                            article.innerHTML = `<div class="img_div"><img src="${j[c].link_imagem}"></div><div class="recipe_info"><h3 class="info"><a href="./receita-escolhida-logado.html?id=${j[c]._id.$oid}" target="_self"/>${j[c].nome}</h3><h4 class="info">Postado por: ${j[c].postado_por}</h4><h4 class="info">${j[c].grau_de_dificuldade}</h4></div><div class="hating">${j[c].avaliacao}</div>`
                        }
                    } else {
                        if(typeof j[c].postado_por == 'object'){
                            article.innerHTML = `<div class="img_div"><img src="${j[c].link_imagem}"></div><div class="recipe_info"><h3 class="info"><a href="./receita-escolhida.html?id=${j[c]._id.$oid}" target="_self"/>${j[c].nome}</h3><h4 class="info">Postado por: ${j[c].postado_por[0]}</h4><h4 class="info">${j[c].grau_de_dificuldade}</h4></div><div class="hating">${j[c].avaliacao}</div>`
                        } else{
                            article.innerHTML = `<div class="img_div"><img src="${j[c].link_imagem}"></div><div class="recipe_info"><h3 class="info"><a href="./receita-escolhida.html?id=${j[c]._id.$oid}" target="_self"/>${j[c].nome}</h3><h4 class="info">Postado por: ${j[c].postado_por}</h4><h4 class="info">${j[c].grau_de_dificuldade}</h4></div><div class="hating">${j[c].avaliacao}</div>`
                        }
                    }

                    document.getElementById('div_recipes_articles').appendChild(article)
                }

            }
            h2.innerText = `Encontramos ${count} resultados de receitas que se enquadram na sua busca por ${input_user.value.trim().toLowerCase()}`

            this.filter(listRecipesFinded)

        });

    }

    search_bars_bottom(){

        const main_content_search = document.getElementById(this.main_id);
        const div_content_search = document.createElement('div')
        div_content_search.id = 'show-recipe'
        const div_filter = document.createElement('div')
        const filtro_and_clear_container = document.createElement('div')
        const filter = document.createElement('div')
        const filter_clear = document.createElement('div')
        filtro_and_clear_container.id = 'div-filter-clear'
        filter.id = 'filter'
        filter_clear.id = 'filter_clear'

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

                const j = JSON.parse(localStorage.getItem('receitas'));

                remove_class_list(main_content_search)
                main_content_search.classList.add(`show-result-recipe`)
                main_content_search.appendChild(div_content_search)
                div_content_search.insertAdjacentElement('afterend', div_filter)
                div_filter.appendChild(filtro_and_clear_container)
                filtro_and_clear_container.appendChild(filter)
                filter.insertAdjacentElement('afterend', filter_clear)
                filter.innerHTML = `<div class="div-sec-filter"><select required="" aria-invalid="false" form="filter-form" id="u5-form-group--23" class="ud-select"><option value="most-evaluated">Classificação mais alta</option><option value="less-evaluated">Classificação mais baixa</option><option value="hard">Difíceis</option><option value="middle">Médias</option><option value="easy">Fáceis</option></select></div></div>`    

                const div_recipes_articles = document.createElement('div')
                div_recipes_articles.id = 'div_recipes_articles'
                const divH2 = document.createElement('div')
                divH2.id = 'result-count-div'
                let h2 = document.createElement('h2')
                h2.id = 'result_count'
                divH2.appendChild(h2)
                div_content_search.appendChild(divH2)
                divH2.insertAdjacentElement('afterend', div_recipes_articles)
                //contador de receitas encontradas
                let countRecipe = 0
                let listRecipesFinded = []
                let countIngredients = 0
                for (let c in j) {
                    for (e in inputs) {
                        //Se a conteúdo da receita conter a palavra inserida pelo usuário na barra de pesquisa, adiciona uma unidade ao contador 2
                        if (j[c].secao[0].conteudo.filter(retur => retur.indexOf(inputs[e]) >= 0).length > 0) countIngredients += 1

                    }
                    if (countIngredients >= 3 && inputs.length > 3 || inputs.length === countIngredients) {
                        //carrega os dados no DOM
                        listRecipesFinded.push(j[c])
                        let article = document.createElement('article')
                        article.className = "result_recipe"

                        if(this.flag_log) {
                            if(typeof j[c].postado_por == 'object'){
                                article.innerHTML = `<div class="img_div"><img src="${j[c].link_imagem}"></div><div class="recipe_info"><h3 class="info"><a href="./receita-escolhida-logado.html?id=${j[c]._id.$oid}" target="_self"/>${j[c].nome}</h3><h4 class="info">Postado por: ${j[c].postado_por[0]}</h4><h4 class="info">${j[c].grau_de_dificuldade}</h4></div><div class="hating">${j[c].avaliacao}</div>`
                            } else{
                                article.innerHTML = `<div class="img_div"><img src="${j[c].link_imagem}"></div><div class="recipe_info"><h3 class="info"><a href="./receita-escolhida-logado.html?id=${j[c]._id.$oid}" target="_self"/>${j[c].nome}</h3><h4 class="info">Postado por: ${j[c].postado_por}</h4><h4 class="info">${j[c].grau_de_dificuldade}</h4></div><div class="hating">${j[c].avaliacao}</div>`
                            }
                        } else {
                            if(typeof j[c].postado_por == 'object'){
                                article.innerHTML = `<div class="img_div"><img src="${j[c].link_imagem}"></div><div class="recipe_info"><h3 class="info"><a href="./receita-escolhida.html?id=${j[c]._id.$oid}" target="_self"/>${j[c].nome}</h3><h4 class="info">Postado por: ${j[c].postado_por[0]}</h4><h4 class="info">${j[c].grau_de_dificuldade}</h4></div><div class="hating">${j[c].avaliacao}</div>`
                            } else{
                                article.innerHTML = `<div class="img_div"><img src="${j[c].link_imagem}"></div><div class="recipe_info"><h3 class="info"><a href="./receita-escolhida.html?id=${j[c]._id.$oid}" target="_self"/>${j[c].nome}</h3><h4 class="info">Postado por: ${j[c].postado_por}</h4><h4 class="info">${j[c].grau_de_dificuldade}</h4></div><div class="hating">${j[c].avaliacao}</div>`
                            }
                        }

                        document.getElementById('div_recipes_articles').appendChild(article)
                        countRecipe += 1

                    }
                    countIngredients = 0
                }
                let ingredients = ""
                inputs.forEach(el => {
                    ingredients += `${el} `
                });

                h2.innerText = `Encontramos ${countRecipe} resultados de receitas que se enquadram na sua busca por: ${ingredients}.`
                
                this.filter(listRecipesFinded)
            }

        });

    }

    filter(listData){
        let filter = document.getElementById('u5-form-group--23')

        filter.addEventListener('change', () => {

            if(filter.value == 'most-evaluated'){

                listData.sort(function (x, y){
                    return y.avaliacao - x.avaliacao
                }) 
                clear_content('div_recipes_articles')

                listData.forEach(el => {

                    let article = document.createElement('article')
                    article.className = "result_recipe"

                    if(this.flag_log) {
                        if(typeof el.postado_por == 'object'){
                            article.innerHTML = `<div class="img_div"><img src="${el.link_imagem}"></div><div class="recipe_info"><h3 class="info"><a href="./receita-escolhida-logado.html?id=${el._id.$oid}" target="_self"/>${el.nome}</h3><h4 class="info">Postado por: ${el.postado_por[0]}</h4><h4 class="info">${el.grau_de_dificuldade}</h4></div><div class="hating">${el.avaliacao}</div>`
                        } else{
                            article.innerHTML = `<div class="img_div"><img src="${el.link_imagem}"></div><div class="recipe_info"><h3 class="info"><a href="./receita-escolhida-logado.html?id=${el._id.$oid}" target="_self"/>${el.nome}</h3><h4 class="info">Postado por: ${el.postado_por}</h4><h4 class="info">${el.grau_de_dificuldade}</h4></div><div class="hating">${el.avaliacao}</div>`
                        }
                    } else {
                        if(typeof el.postado_por == 'object'){
                            article.innerHTML = `<div class="img_div"><img src="${el.link_imagem}"></div><div class="recipe_info"><h3 class="info"><a href="./receita-escolhida.html?id=${el._id.$oid}" target="_self"/>${el.nome}</h3><h4 class="info">Postado por: ${el.postado_por[0]}</h4><h4 class="info">${el.grau_de_dificuldade}</h4></div><div class="hating">${el.avaliacao}</div>`
                        } else{
                            article.innerHTML = `<div class="img_div"><img src="${el.link_imagem}"></div><div class="recipe_info"><h3 class="info"><a href="./receita-escolhida.html?id=${el._id.$oid}" target="_self"/>${el.nome}</h3><h4 class="info">Postado por: ${el.postado_por}</h4><h4 class="info">${el.grau_de_dificuldade}</h4></div><div class="hating">${el.avaliacao}</div>`
                        }
                    }

                    document.getElementById('div_recipes_articles').appendChild(article)

                })
            }

            if(filter.value == 'less-evaluated'){

                listData.sort(function (x, y){
                    return x.avaliacao - y.avaliacao
                }) 
                clear_content('div_recipes_articles')

                listData.forEach(el => {

                    let article = document.createElement('article')
                    article.className = "result_recipe"

                    if(this.flag_log) {
                        if(typeof el.postado_por == 'object'){
                            article.innerHTML = `<div class="img_div"><img src="${el.link_imagem}"></div><div class="recipe_info"><h3 class="info"><a href="./receita-escolhida-logado.html?id=${el._id.$oid}" target="_self"/>${el.nome}</h3><h4 class="info">Postado por: ${el.postado_por[0]}</h4><h4 class="info">${el.grau_de_dificuldade}</h4></div><div class="hating">${el.avaliacao}</div>`
                        } else{
                            article.innerHTML = `<div class="img_div"><img src="${el.link_imagem}"></div><div class="recipe_info"><h3 class="info"><a href="./receita-escolhida-logado.html?id=${el._id.$oid}" target="_self"/>${el.nome}</h3><h4 class="info">Postado por: ${el.postado_por}</h4><h4 class="info">${el.grau_de_dificuldade}</h4></div><div class="hating">${el.avaliacao}</div>`
                        }
                    } else {
                        if(typeof el.postado_por == 'object'){
                            article.innerHTML = `<div class="img_div"><img src="${el.link_imagem}"></div><div class="recipe_info"><h3 class="info"><a href="./receita-escolhida.html?id=${el._id.$oid}" target="_self"/>${el.nome}</h3><h4 class="info">Postado por: ${el.postado_por[0]}</h4><h4 class="info">${el.grau_de_dificuldade}</h4></div><div class="hating">${el.avaliacao}</div>`
                        } else{
                            article.innerHTML = `<div class="img_div"><img src="${el.link_imagem}"></div><div class="recipe_info"><h3 class="info"><a href="./receita-escolhida.html?id=${el._id.$oid}" target="_self"/>${el.nome}</h3><h4 class="info">Postado por: ${el.postado_por}</h4><h4 class="info">${el.grau_de_dificuldade}</h4></div><div class="hating">${el.avaliacao}</div>`
                        }
                    }

                    document.getElementById('div_recipes_articles').appendChild(article)

                })        
            }

            if(filter.value == 'hard'){

                clear_content('div_recipes_articles')

                listData.forEach(el => {

                    if(el.grau_de_dificuldade == 'Difícil'){

                        let article = document.createElement('article')
                        article.className = "result_recipe"

                        if(this.flag_log) {
                            if(typeof el.postado_por == 'object'){
                                article.innerHTML = `<div class="img_div"><img src="${el.link_imagem}"></div><div class="recipe_info"><h3 class="info"><a href="./receita-escolhida-logado.html?id=${el._id.$oid}" target="_self"/>${el.nome}</h3><h4 class="info">Postado por: ${el.postado_por[0]}</h4><h4 class="info">${el.grau_de_dificuldade}</h4></div><div class="hating">${el.avaliacao}</div>`
                            } else{
                                article.innerHTML = `<div class="img_div"><img src="${el.link_imagem}"></div><div class="recipe_info"><h3 class="info"><a href="./receita-escolhida-logado.html?id=${el._id.$oid}" target="_self"/>${el.nome}</h3><h4 class="info">Postado por: ${el.postado_por}</h4><h4 class="info">${el.grau_de_dificuldade}</h4></div><div class="hating">${el.avaliacao}</div>`
                            }
                        } else {
                            if(typeof el.postado_por == 'object'){
                                article.innerHTML = `<div class="img_div"><img src="${el.link_imagem}"></div><div class="recipe_info"><h3 class="info"><a href="./receita-escolhida.html?id=${el._id.$oid}" target="_self"/>${el.nome}</h3><h4 class="info">Postado por: ${el.postado_por[0]}</h4><h4 class="info">${el.grau_de_dificuldade}</h4></div><div class="hating">${el.avaliacao}</div>`
                            } else{
                                article.innerHTML = `<div class="img_div"><img src="${el.link_imagem}"></div><div class="recipe_info"><h3 class="info"><a href="./receita-escolhida.html?id=${el._id.$oid}" target="_self"/>${el.nome}</h3><h4 class="info">Postado por: ${el.postado_por}</h4><h4 class="info">${el.grau_de_dificuldade}</h4></div><div class="hating">${el.avaliacao}</div>`
                            }
                        }

                        document.getElementById('div_recipes_articles').appendChild(article)
                    }
                })        
            }

            if(filter.value == 'easy'){

                clear_content('div_recipes_articles')

                listData.forEach(el => {

                    if(el.grau_de_dificuldade == 'Fácil'){

                        let article = document.createElement('article')
                        article.className = "result_recipe"

                        if(this.flag_log) {
                            if(typeof el.postado_por == 'object'){
                                article.innerHTML = `<div class="img_div"><img src="${el.link_imagem}"></div><div class="recipe_info"><h3 class="info"><a href="./receita-escolhida-logado.html?id=${el._id.$oid}" target="_self"/>${el.nome}</h3><h4 class="info">Postado por: ${el.postado_por[0]}</h4><h4 class="info">${el.grau_de_dificuldade}</h4></div><div class="hating">${el.avaliacao}</div>`
                            } else{
                                article.innerHTML = `<div class="img_div"><img src="${el.link_imagem}"></div><div class="recipe_info"><h3 class="info"><a href="./receita-escolhida-logado.html?id=${el._id.$oid}" target="_self"/>${el.nome}</h3><h4 class="info">Postado por: ${el.postado_por}</h4><h4 class="info">${el.grau_de_dificuldade}</h4></div><div class="hating">${el.avaliacao}</div>`
                            }
                        } else {
                            if(typeof el.postado_por == 'object'){
                                article.innerHTML = `<div class="img_div"><img src="${el.link_imagem}"></div><div class="recipe_info"><h3 class="info"><a href="./receita-escolhida.html?id=${el._id.$oid}" target="_self"/>${el.nome}</h3><h4 class="info">Postado por: ${el.postado_por[0]}</h4><h4 class="info">${el.grau_de_dificuldade}</h4></div><div class="hating">${el.avaliacao}</div>`
                            } else{
                                article.innerHTML = `<div class="img_div"><img src="${el.link_imagem}"></div><div class="recipe_info"><h3 class="info"><a href="./receita-escolhida.html?id=${el._id.$oid}" target="_self"/>${el.nome}</h3><h4 class="info">Postado por: ${el.postado_por}</h4><h4 class="info">${el.grau_de_dificuldade}</h4></div><div class="hating">${el.avaliacao}</div>`
                            }
                        }

                        document.getElementById('div_recipes_articles').appendChild(article)
                    }
                })        
            }

            if(filter.value == 'middle'){

                clear_content('div_recipes_articles')

                listData.forEach(el => {

                    if(el.grau_de_dificuldade == 'Médio'){

                        let article = document.createElement('article')
                        article.className = "result_recipe"

                        if(this.flag_log) {
                            if(typeof el.postado_por == 'object'){
                                article.innerHTML = `<div class="img_div"><img src="${el.link_imagem}"></div><div class="recipe_info"><h3 class="info"><a href="./receita-escolhida-logado.html?id=${el._id.$oid}" target="_self"/>${el.nome}</h3><h4 class="info">Postado por: ${el.postado_por[0]}</h4><h4 class="info">${el.grau_de_dificuldade}</h4></div><div class="hating">${el.avaliacao}</div>`
                            } else{
                                article.innerHTML = `<div class="img_div"><img src="${el.link_imagem}"></div><div class="recipe_info"><h3 class="info"><a href="./receita-escolhida-logado.html?id=${el._id.$oid}" target="_self"/>${el.nome}</h3><h4 class="info">Postado por: ${el.postado_por}</h4><h4 class="info">${el.grau_de_dificuldade}</h4></div><div class="hating">${el.avaliacao}</div>`
                            }
                        } else {
                            if(typeof el.postado_por == 'object'){
                                article.innerHTML = `<div class="img_div"><img src="${el.link_imagem}"></div><div class="recipe_info"><h3 class="info"><a href="./receita-escolhida.html?id=${el._id.$oid}" target="_self"/>${el.nome}</h3><h4 class="info">Postado por: ${el.postado_por[0]}</h4><h4 class="info">${el.grau_de_dificuldade}</h4></div><div class="hating">${el.avaliacao}</div>`
                            } else{
                                article.innerHTML = `<div class="img_div"><img src="${el.link_imagem}"></div><div class="recipe_info"><h3 class="info"><a href="./receita-escolhida.html?id=${el._id.$oid}" target="_self"/>${el.nome}</h3><h4 class="info">Postado por: ${el.postado_por}</h4><h4 class="info">${el.grau_de_dificuldade}</h4></div><div class="hating">${el.avaliacao}</div>`
                            }
                        }

                        document.getElementById('div_recipes_articles').appendChild(article)
                    }
                })        
            }
        })
    }

    returnFlagLog(){
        return this.flag_log
    }
}
export default SearchClass

