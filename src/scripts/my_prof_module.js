import SuperJson from './superJson.js'

let enviarReceitas = 
`<div id="top-enviarReceitas" class="postRecipe">
    <div id="grid1-foto-da-receita" >
        <h1> Envie sua receita: </h1>
        <img src="imgs/foto_padrao.png" alt="">
    </div>

    <div id="grid2-enviar-receita">
        <ul id="enviar-receita">
            <li><label> Nome da receita:<input id="nome-receita" type="text"></label><span id="recipeNamesp" style="color: red; visibility: hidden">Insira um nome para sua receita</span></li>
            <li><label> Número de porções:<input id="numero-porcoes" min="1" max="99" maxLength="2" type="number"></label><span id="nPorcoes" style="color: red; visibility: hidden">A receita deve conter o número de porções</span></li>
            <li><label> Grau de dificuldade:<input id="dificult" type="text" placeholder="Fácil, Médio ou Difícil"></label><span id="gDificult" style="color: red; visibility: hidden">O grau de dificuldade é obrigatório</span></li>
            <li><label> Tempo de preparo:<input id="tempo-preparo" type="text"></label><span id="tPrep" style="color: red; visibility: hidden">Informe o tempo de preparo</span></li>
        </ul>    
    </div>
</div>
<div id="middle-enviarReceitas" class="postRecipe">
    <div class="div-middle" id="grid3-medidas-ingredientes">
        <h2>Medida dos Ingredientes</h2>
        <ol class="ol-info" id="medidas">
            <li><input class="medida-dos-ingreditentes" type="text"></li>
            <li><input class="medida-dos-ingreditentes" type="text"></li>
            <li><input class="medida-dos-ingreditentes" type="text"></li>
            <li><input class="medida-dos-ingreditentes" type="text"></li>
            <li><input class="medida-dos-ingreditentes" type="text"></li>
        </ol>
        <span style="color:red; visibility:hidden" id="warnMedida">Insira pelomenos uma medida</span>
    </div>

    <div class="div-middle" id="grid4-modo-preparo">
        <h2>Modo de Preparo</h2>
        <ol class="ol-info" id="modo-preparo">
            <li><input class="modo-de-preparo" type="text"></li>
            <li><input class="modo-de-preparo" type="text"></li>
            <li><input class="modo-de-preparo" type="text"></li>
            <li><input class="modo-de-preparo" type="text"></li>
            <li><input class="modo-de-preparo" type="text"></li>
        </ol>
        <span style="color:red; visibility:hidden" id="warnModPrep">Preencha pelo menos um campo modo de preparo</span>
    </div>
</div>

<div class="postRecipe" id="grid5-botao-enviar">
    <button id="sendRecDbfake" class="login2">
        Enviar
    </button>
</div>`

let meuPerfil = `<div id="cabecalho-menu-perfil">
<h2> Perfil </h2>
<p> Altere ou adicione informações sobre você</p>
</div>
<div id="dynamic" class="dynamic-content">
<div id="input_top" class="inputs-prof">
    <input class="input-data-user" id="user_name" type="text" placeholder="Username">
    <input class="input-data-user" id="profissao" type="text" placeholder="Profissão">
</div>
<div id="grid4-sobre-voce">
    <textarea id="user-info" cols="35" rows="8" placeholder="O que eu mais gosto de fazer é..."></textarea>
</div>
<div id="input_bottom" class="inputs-prof">
    <input class="input-data-user" id="Linkedin" type="link" placeholder="Linkedin">
    <input class="input-data-user" id="Instagram" type="text" placeholder="Instagram">
    <input class="input-data-user" id="Twitter" type="text" placeholder="Twitter">
</div>
<div id="grid-botao-enviar">
    <button id="SaveProfileData" class="login2">
        Salvar
    </button>
</div>
</div>
</div>`

function remove_class_list(elem) {

    let ecl = elem.classList
    if(ecl.length > 1) {
        for(let c = 1; c <= ecl.length; c++){
            ecl.remove(ecl.item(c))
        }
    }
}

class MeuPefil {
    constructor(classOptions) {
        this.classOptions = classOptions
    }

    PerfilEventos(){

        let nav1 = document.getElementsByClassName(this.classOptions)[0]
        let nav2 = document.getElementsByClassName(this.classOptions)[1]

        nav1.addEventListener('click', () => {

            remove_class_list(nav1)
            remove_class_list(nav2)
            nav1.classList.add('profile')

            let div = document.getElementById('profile-left')
            let main_child = div.firstElementChild;
            while (main_child) {
                div.removeChild(main_child);
                main_child = div.firstElementChild;
            }

            div.innerHTML = meuPerfil

        })

        nav2.addEventListener('click', () => {
            
            remove_class_list(nav1)
            remove_class_list(nav2)
            nav2.classList.add('enviarReceitas')

            let div = document.getElementById('profile-left')
            let main_child = div.firstElementChild;
            while (main_child) {
                div.removeChild(main_child);
                main_child = div.firstElementChild;
            }

            div.innerHTML = enviarReceitas

            document.getElementById('sendRecDbfake').addEventListener('click', (e) => {
                
                //fazer as validações de entrada aqui
                let recipeName = document.getElementById('nome-receita').value
                let nPorcoes = document.getElementById('numero-porcoes').value
                let gDificult = document.getElementById('dificult').value
                let prepTime = document.getElementById('tempo-preparo').value
                let medIngred = document.querySelectorAll('.medida-dos-ingreditentes')
                let modPrep = document.querySelectorAll('.modo-de-preparo')
                e.preventDefault()
                let arrayInputUser = [recipeName, nPorcoes, gDificult, prepTime, medIngred, modPrep]
                const update = new SuperJson(arrayInputUser)
                update.dataValSR()

            })

        })

        document.getElementById('button_logout_logado').addEventListener('click', () => {
            location.assign('./index.html')
        })
        document.getElementById('my-profile-nav').addEventListener('click', (e) => {
            e.preventDefault()
        })
        document.getElementsByClassName('title')[0].addEventListener('click', () => {
            location.assign('./user-logado.html')
        })
        document.getElementById('first-nav').addEventListener('click', (e) => {
            e.preventDefault()
            location.assign('./user-logado.html')
        })

        document.getElementById('saveProfileData').addEventListener('click', () => {

            //trazer SuperJason updatelogin
            let name = document.getElementById('user_name').value
            let prof = document.getElementById('profissao').value
            let bio = document.getElementById('user-info').value
            let linkedin = document.getElementById('Linkedin').value
            let insta = document.getElementById('Instagram').value
            let twitter = document.getElementById('Twitter').value
            let dataArray = [name, prof, bio, linkedin, insta, twitter]

            let dataUp = new SuperJson(dataArray)
            dataUp.updateLogin()

            const name_user = document.querySelectorAll('.userName');
            let user = JSON.parse(sessionStorage.currentUser).nome;
            let formatedUser = user[0].toUpperCase() + user.slice(1, user.length).toLowerCase()
            document.getElementById('user_name').value = formatedUser

            name_user.forEach((i) => {
                i.innerText = formatedUser
            });
        })
    }
}

export default MeuPefil