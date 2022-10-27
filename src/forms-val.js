
document.getElementsByClassName('login2')[0].addEventListener('click', func_login);
document.getElementsByClassName('login2')[1].addEventListener('click', func_cadastro);

let db_usuarios = {usuarios: [
    { "login": "admin", "senha": "123", "nome": "Administrador do Sistema", "email": "admin@abc.com"},
    { "login": "user", "senha": "123", "nome": "Usuario Comum", "email": "user@abc.com"},
]}

let usuarioCorrente = {}


localStorage.setItem('db_usuarios',JSON.stringify(db_usuarios))

function valid_search_fl(id_form) {
    'user strict';

    const U2_melhor_banda = document.getElementById(id_form);
    U2_melhor_banda.addEventListener('submit', (e) => {

        let result = U2_melhor_banda.value;
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

    main.className = 'site-content-bofore-click-button-cl'

    main.insertAdjacentElement("beforeend", main_div);
    main_div.insertAdjacentElement("beforeend", main_form);
    main_form.insertAdjacentElement("beforeend", input_email);
    main_form.insertAdjacentElement("beforeend", input_password);
    main_form.insertAdjacentElement("beforeend", div_sec);
    main_form.insertAdjacentElement("beforeend", div_ter);

    //estilizar em html + css
    input_email.maxLength = 64;
    input_password.maxLength = 14;

    main_form.addEventListener('submit', () => {

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

    if(a){
        console.log('logado')
    } else{
        alert('usuário não cadastrado')
    }

    })

}

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

    main.className = 'site-content-bofore-click-button-cl'

    main.insertAdjacentElement("beforeend", main_div);
    main_div.insertAdjacentElement("beforeend", main_form);
    main_form.insertAdjacentElement("beforeend", name);
    main_form.insertAdjacentElement("beforeend", input_email);
    main_form.insertAdjacentElement("beforeend", input_password);
    main_form.insertAdjacentElement("beforeend", confirm_password);
    main_form.insertAdjacentElement("beforeend", div_sec);

    main_form.addEventListener('submit', () => {

        let usuario = {"nome": name.value, "email": input_email.value, "senha": input_password.value, "confirm_senha": confirm_password.value};

        db_usuarios.usuarios.push(usuario);

        localStorage.setItem('db_usuarios', JSON.stringify(db_usuarios));

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