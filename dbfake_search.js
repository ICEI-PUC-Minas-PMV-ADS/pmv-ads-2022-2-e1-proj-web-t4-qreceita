const dados = {
    "receitas": [ 
    
        {
            "nome": "teste1",
            "classificacao": "facil",
            "avaliacao": 4,
            "ingredientes": ["ingrediente1", "ingrediente2"],
            "temp_prep": 25,
            "porcoes": 4,
            "med_ingred": ["1/2 pacote", "4 colheres de sopa"],
            "modo_prep": ["preparo1", "preparo2"]
        },
        {
            "nome": "teste2",
            "classificacao": "facil2",
            "avaliacao": 42,
            "descrição": "qualquer coisa2",
            "temp_prep": 252,
            "porcoes": 42,
            "med_ingred": ["ingrediente2", "ingrediente3"],
            "modo_prep": ["preparo2", "preparo3"]
        }
    ]
}

function test_function() {
    let content = document.getElementById("site-content22");
    
    const xhr = new XMLHttpRequest();
    xhr.onload = function() {
        content.innerHTML = this.responseText;
    }
    xhr.open("GET", "receitas.json", true);
    xhr.send();
    console.log('fim func')
};

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
    input_email.className = "login_input"
    input_email.type = "e-mail"
    input_email.placeholder = "E-mail"
    input_password.className = "login_input"
    input_password.type = "password"
    input_password.placeholder = "Senha"

    main.insertAdjacentElement("beforeend", main_div);
    main_div.insertAdjacentElement("beforeend", main_form);
    main_form.insertAdjacentElement("beforeend", input_email);
    main_form.insertAdjacentElement("beforeend", input_password);
    main_form.insertAdjacentElement("beforeend", div_sec);
    main_form.insertAdjacentElement("beforeend", div_ter);

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

    main.insertAdjacentElement("beforeend", main_div);
    main_div.insertAdjacentElement("beforeend", main_form);
    main_form.insertAdjacentElement("beforeend", name);
    main_form.insertAdjacentElement("beforeend", input_email);
    main_form.insertAdjacentElement("beforeend", input_password);
    main_form.insertAdjacentElement("beforeend", confirm_password);
    main_form.insertAdjacentElement("beforeend", div_sec);

}

function valid_search() {
    const q = document.getElementById("search-top");
    let result = q.value;
    console.log(result)
}

