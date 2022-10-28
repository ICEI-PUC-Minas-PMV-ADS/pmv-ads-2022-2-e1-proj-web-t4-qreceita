
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


