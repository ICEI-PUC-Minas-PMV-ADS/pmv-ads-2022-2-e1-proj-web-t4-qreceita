function acao(){

    let modal = document.querySelector(".modal")
  
    modal.style.display = "block";
  }
  
  
  function fechar(){
  
    let modal = document.querySelector(".modal")
  
    modal.style.display = "none";
  
}

//para fazer o compartilhamento da receita por meio da URL
var copyBtn = document.getElementById('copyBtn');

copyBtn.addEventListener('click', function(event) {

    /*Pega url*/
    var url = window.location.href.toString();

    document.getElementById('cont6input').value = url;

});