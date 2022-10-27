function lerHash () {
    return window.location.hash.substring(1);
}

function escreverHash(str) {
    window.location.hash = str;
}

window.onhashchange = function(e) {

  };

window.addEventListener('reload', () => {
    escreverHash(lerHash())

})




