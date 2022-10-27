const dados = [
    {
        "_id": {
            "$oid": "5744eff20ca7832b5c745a48"
        },
        "nome": "Brownie de Chocolate com Gengibre",
        "secao": [
            {
                "nome": " Ingredientes",
                "conteudo": [
                    "50 g farinha de milho fina",
                    "10 g de cacau em pó",
                    "250 g de chocolate meio amargo",
                    "200 g de manteiga sem sal cortada em cubos",
                    "20 ml de suco de gengibre",
                    "5 ovos",
                    "200 g de açúcar",
                    "1 colher (chá) de fermento em pó",
                    "100 g de nozes picadas grosseiramente",
                    " "
                ]
            },
            {
                "nome": " Modo de Preparo",
                "conteudo": [
                    "1 - Coloque numa tigela a farinha de milho fina e o cacau em pó.",
                    "2 - Misture e reserve.",
                    "3 - Numa panela, em banho-maria, derreta o chocolate meio amargo picado com a manteiga sem sal cortada em cubos.",
                    "4 - Retire do fogo.",
                    "5 - Adicione o suco de gengibre e misture.",
                    "6 - Acrescente a mistura de farinha com cacau em pó (reservada acima). Misture bem e reserve.",
                    "7 - Numa batedeira, coloque os ovos e o açúcar. Bata bem até dobrar de volume.",
                    "8 - Com a batedeira ainda ligada, adicione o fermento em pó e bata até misturar.",
                    "9 - Desligue a batedeira. Acrescente a mistura de chocolate (reservada acima) e as nozes picadas. Misture.",
                    "10 - Transfira a massa para uma assadeira retangular (18 cm X 30 cm) untada e forrada com papel manteiga.",
                    "11 - Leve para assar em forno médio pré-aquecido a 180°C por +/- 40 minutos.",
                    "12 - Retire do forno.",
                    "13 - Cubra o brownie com papel manteiga.",
                    "14 - Coloque outra assadeira do mesmo tamanho pressionando levemente o brownie para que fique mais compacto e úmido",
                    "15 - Deixe por +/- 4 horas na geladeira.",
                    "16 - Retire a assadeira de cima do brownie, desenforme, corte em quadrados e sirva em seguida.",
                    " "
                ]
            },
            {
                "nome": " Outras informações",
                "conteudo": [
                    "Rendimento: 20 porções "
                ]
            }
        ]
    }
]
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
var main_content_search = document.getElementById("site-content22");


document.getElementById("form-search2").addEventListener('submit', (e) => {

    let input_user = document.getElementById("search-top")
    e.preventDefault();

    clear_content("site-content22")

    let b = JSON.parse(xhr.responseText);

    b.forEach(function (el, i, _arr1) {
         new_array = b[i].secao[0].conteudo.filter(function(el, i, _arr){
            if(parseInt(el.indexOf(input_user.value)) >= 0){
                return true;
            }
       })
    });

    //new_array = b.filter(function(elm, ind, _arra) {
    //    b[ind].secao[0].conteudo.forEach(function(el, i, _arr) {
    //        if(parseInt(el.indexOf(input_user.value)) >= 0){
    //            return true;
    //       }
    //   });
    //})
    
    console.log(new_array)

    /*for(let a in b){

        console.log(b[a])

    }

    xhr.onreadystatechange = () => {
        console.log(xhr.readyState);
        console.log(xhr.status);
    }*/
});

function test_function() {
    
    let content = document.getElementById("site-content22");
    
    const xhr = new XMLHttpRequest();
    xhr.onload = function() {
        content.innerHTML = this.responseText;
    }
    xhr.open("GET", "https://raw.githubusercontent.com/adrianosferreira/afrodite.json/master/afrodite.json", true);
    xhr.send(null);
    
    xhr.onreadystatechange = () => {
        console.log(xhr.readyState);
        console.log(xhr.status);
    }
}

function showitens() {
    const filterdata = dados.filter()
}


