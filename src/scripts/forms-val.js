
document.getElementById('button_login1').addEventListener('click', func_login);
document.getElementById('button_sign1').addEventListener('click', func_cadastro);

let db_usuarios = {usuarios: [
    { "login": "admin", "senha": "123", "nome": "Administrador do Sistema", "email": "admin@abc.com"},
    { "login": "user", "senha": "123", "nome": "Usuario Comum", "email": "user@abc.com"},
]}

let usuarioCorrente = {}


localStorage.setItem('db_usuarios',JSON.stringify(db_usuarios))

function valid_search_fl(id_form) {
    'user strict';
    //verifica se o formulário está vazio
    const form_ = document.getElementById(id_form);
    form_.addEventListener('submit', (e) => {

        let result = form_.value;
        if(!result) {
            alert('preencha os campos')
            e.preventDefault();
        }

    })
}

function func_login() {

    //Cria a tela de login no DOM
    const main = document.getElementById("site-content22")
    let main_child = main.firstElementChild;
    while (main_child) {
        main.removeChild(main_child);
        main_child = main.firstElementChild;
    }

    const main_div = document.createElement("div");
    const div_sec = document.createElement("div");
    const div_ter = document.createElement("div");
    const main_form = document.createElement("form");
    const input_email = document.createElement("input");
    const input_password = document.createElement("input");
    main_div.className = "flex_container";
    main_div.innerHTML = `<h1 style="color: white" class="login_title">Login</h1>
                        <p style="color: white">Faça o Login com sua conta QReceita</p>`;
    div_sec.className = "button_login";
    div_sec.innerHTML = `<button class="login2">Fazer Login</button>`;
    div_ter.className = "esqueceu_sua_senha";
    div_ter.innerHTML = `<a class="login_reset" href="#" style="color: white">Esqueceu sua senha?</a>
                        <p style="color: white">Não tem uma conta?<a class="Cadastre-se" href="#" style="color: white">Cadastre-se</a></p>`;
    main_form.className = "login-form";
    main_form.id = "formLogin";
    input_email.className = "login_input"
    input_email.type = "e-mail"
    input_email.placeholder = "E-mail"
    input_password.className = "login_input"
    input_password.type = "password"
    input_password.placeholder = "Senha"

    //main.className = 'site-content-bofore-click-button-cl'

    main.insertAdjacentElement("beforeend", main_div);
    main_div.insertAdjacentElement("beforeend", main_form);
    main_form.insertAdjacentElement("beforeend", input_email);
    main_form.insertAdjacentElement("beforeend", input_password);
    main_form.insertAdjacentElement("beforeend", div_sec);
    main_form.insertAdjacentElement("beforeend", div_ter);

    //estilizar em html + css
    input_email.maxLength = 64;
    input_password.maxLength = 14;

    //insere o evento submit no form criado
    main_form.addEventListener('submit', (e) => {

    e.preventDefault();
    
    //verifica se há algum usuário corrente no sessionStorage
        usuarioCorrenteJSON = sessionStorage.getItem('usuarioCorrente');
    if (usuarioCorrenteJSON) {
        usuarioCorrente = JSON.parse(usuarioCorrenteJSON);
    }
    
    var usuariosJSON = localStorage.getItem('db_usuarios');

    if (!usuariosJSON) {
        
        alert('Dados de usuários não encontrados no localStorage. \n -----> Fazendo carga inicial.');

    }
    else  {
        
        db_usuarios = JSON.parse(usuariosJSON);    
    }

    let a = interacao(input_email.value, input_password.value);

    //renderiza a tela inicial com usuário logado
    if(a){
        cria_logado();
    } else{
        alert('usuário não cadastrado')
    }

    })

}

function cria_logado(){

    const main = document.getElementById("site-content22")

    main.innerHTML = ` <div id="main-text-id" class="main-text">
    <h1 id="text1" class="top-text">
        Receitas com base nos ingredientes que você tem na geladeira
    </h1>
    <h3 id="text2" class="top-text">
        Digite os ingredientes que você tem em casa e nós selecionaremos para você as receitas que mais se
        enquadram
        na sua busca.
    </h3>
</div>
<div id="search-form-id" class="search-form2">
    <div class="input-ingrediente-box">
        <ul class="list-ul-inputs">
            <li class="list-inputs"><input class="input-ingrediente" type="text"
                    placeholder="Inclua o ingrediente">
            </li>
            <li class="list-inputs"><input class="input-ingrediente" type="text"
                    placeholder="Inclua o ingrediente">
            </li>
            <li class="list-inputs"><input class="input-ingrediente" type="text"
                    placeholder="Inclua o ingrediente">
            </li>
            <li class="list-inputs"><input class="input-ingrediente" type="text"
                    placeholder="Inclua o ingrediente">
            </li>
            <li class="list-inputs"><input class="input-ingrediente" type="text"
                    placeholder="Inclua o ingrediente">
            </li>
        </ul>
    </div>
    <div class="input-ingrediente-box">
        <ul class="list-ul-inputs">
            <li class="list-inputs"><input class="input-ingrediente" type="text"
                    placeholder="Inclua o ingrediente">
            </li>
            <li class="list-inputs"><input class="input-ingrediente" type="text"
                    placeholder="Inclua o ingrediente">
            </li>
            <li class="list-inputs"><input class="input-ingrediente" type="text"
                    placeholder="Inclua o ingrediente">
            </li>
            <li class="list-inputs"><input class="input-ingrediente" type="text"
                    placeholder="Inclua o ingrediente">
            </li>
            <li class="list-inputs"><input class="input-ingrediente" type="text"
                    placeholder="Inclua o ingrediente">
            </li>
        </ul>
    </div>
    <div class="input-ingrediente-box">
        <button class="login2">
            <a style="color: white;" href="resultado_pesquisa.html">Buscar</a>
        </button>
    </div>
</div>
<div id="space"></div>`

    let div_login = document.getElementById("button-login")
    let div_login2 = document.getElementById("button-sign")
    //let button2 = document.getElementById('button_sign1')

    const button_logout = document.createElement('button')
    button_logout.id = 'button2_logout'
    button_logout.innerHTML = '<img id="button-out" src="/imgs/button-out.png" alt="">'

    div_login2.removeChild(div_login2.firstElementChild)
    div_login2.insertAdjacentElement('beforeend', button_logout)

    div_login.className = "foto-perfil-logado"
    div_login.removeAttribute("id")
    div_login.innerHTML = `<img id="foto-perfil-logado" src="imgs/larissa_cunha.jpg" alt="">
                            <p id="nome_usuario_logado">Larissa Cunha</p>`
    div_login2.className = "button-out"
    div_login2.removeAttribute("id")

    document.getElementById("nome_usuario_logado").innerText = JSON.parse(sessionStorage.usuarioCorrente).nome;

    document.getElementById("button2_logout").addEventListener('click', () => {

        location.assign('index.html')

    })

}

//verifica se o email e senha inseridos estão no localstorage
function interacao(email, senha){

    let flag = false

    for (var i = 0; i < db_usuarios.usuarios.length; i++) {
        var usuario = db_usuarios.usuarios[i];

        if (email == usuario.email && senha == usuario.senha) {

            usuarioCorrente.nome = usuario.nome;
            usuarioCorrente.email = usuario.email;
            usuarioCorrente.senha = usuario.senha;

            sessionStorage.setItem('usuarioCorrente', JSON.stringify(usuarioCorrente));

            flag = true
            break

        }

    }

    return flag
}


function func_cadastro() {

    const main = document.getElementById("site-content22")
    let main_child = main.firstElementChild;
    while (main_child) {
        main.removeChild(main_child);
        main_child = main.firstElementChild;
    }

    const main_div = document.createElement("div");
    const main_form = document.createElement("form");
    const name = document.createElement("input");
    const input_email = document.createElement("input");
    const input_password = document.createElement("input");
    const confirm_password = document.createElement("input");
    const div_sec = document.createElement("div");

    main_div.className = "flex_container2";
    main_div.innerHTML = `<h1 class="cadastro_title">Cadastro</h1>
                        <p>Inscreva-se e comece a preparar sua receita</p>`;

    main_form.className = "cadastro-form";
    main_form.innerHTML = '<p>Ao se increver, você concorda com nossos Termos de Uso e Privacidade</p>';
    div_sec.className = "Cadastre-se";
    div_sec.innerHTML = '<button class="login2">Cadastre-se</button>';

    name.className = "cadastro_input";
    input_email.className = "cadastro_input";
    input_password.className = "cadastro_input";
    confirm_password.className = "cadastro_input";

    name.type = "name";
    input_email.type = "e-mail";
    input_password.type = "password";
    confirm_password.type = "password";

    name.placeholder = "Nome";
    input_email.placeholder = "E-mail";
    input_password.placeholder = "Senha";
    confirm_password.placeholder = "Confirme a senha";

    //main.className = 'site-content-bofore-click-button-cl'

    main.insertAdjacentElement("beforeend", main_div);
    main_div.insertAdjacentElement("beforeend", main_form);
    main_form.insertAdjacentElement("beforeend", name);
    main_form.insertAdjacentElement("beforeend", input_email);
    main_form.insertAdjacentElement("beforeend", input_password);
    main_form.insertAdjacentElement("beforeend", confirm_password);
    main_form.insertAdjacentElement("beforeend", div_sec);

    main_form.addEventListener('submit', (e) => {

        let usuario = {"nome": name.value, "email": input_email.value, "senha": input_password.value, "confirm_senha": confirm_password.value};

        db_usuarios.usuarios.push(usuario);

        localStorage.setItem('db_usuarios', JSON.stringify(db_usuarios));
        sessionStorage.usuarioCorrente = JSON.stringify(usuario);
        e.preventDefault();

        cria_logado();

    })

}

function data_validation(string) {
    let flag = true

    for(let c in localStorage){
        if(string === localStorage.user._email){
            alert('usuário já está cadastrado')
            flag = false
            break
        }
    }

    return flag
}

