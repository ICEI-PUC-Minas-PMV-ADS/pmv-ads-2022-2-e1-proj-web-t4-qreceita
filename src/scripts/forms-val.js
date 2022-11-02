
document.getElementById('button_login1').addEventListener('click', func_login);
document.getElementById('button_sign1').addEventListener('click', func_cadastro);
document.getElementById('my_profile_login').addEventListener('click', (e) => {

    e.preventDefault();

    if(document.getElementsByClassName('navs')[1].id === 'my_profile_login'){
        func_login();
    }else {
        cria_myprofile();
    }

});
document.getElementById('first-nav').addEventListener('click', (e) => {

    if(document.getElementsByClassName('navs')[0].id === 'page_log') {
        e.preventDefault();
        cria_logado();
    }

})

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
    remove_class_list(main)
    let main_child = main.firstElementChild;
    while (main_child) {
        main.removeChild(main_child);
        main_child = main.firstElementChild;
    }

    main.classList.add('login_sign')
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

    //renderiza a tela inicial com usuário logado
    if(input_email.value === usuarioCorrente.email && input_password.value === usuarioCorrente.senha){
        cria_logado();
    } else{
        alert('usuário não cadastrado')
    }

    })

}

function cria_logado(){

    const main = document.getElementById("site-content22");
    remove_class_list(main)

    if(document.getElementsByClassName('navs')[1].id === 'my_profile_login'){
        let = myprofile = document.getElementById("my_profile_login");
        myprofile.id = "my_profile";
        let = myprofile1 = document.getElementById("first-nav");
        myprofile1.id = "page_log"
    }

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
        <button id="recipes_search_login2" class="login2">
            <a style="color: white;">Buscar</a>
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
    //repetido - trabalhar OO
    document.getElementById("recipes_search_login2").addEventListener('click', (e) => {

        e.preventDefault();
        let inputs_recipe = document.getElementsByClassName('input-ingrediente')
        let inputs = []
        //array com itens pesquisados
        for(let c = 0; c < 10; c++){
            if(inputs_recipe[c].value.trim() != "") inputs.push(inputs_recipe[c].value.trim().toLowerCase())
        }
    
        clear_content("site-content22")
    
        const j = JSON.parse(xhr.responseText);
    
        main_content_search.classList.add('show-recipe')
    
        let h2 = document.createElement('h2')
        h2.id = 'result_count'
        main_content_search.appendChild(h2)
        //contador de receitas encontradas
        countRecipe = 0
    
        let countIngredients = 0
        for(let c in j)
        {
            for(e in inputs)
            {
                //Se a conteúdo da receita conter a palavra inserida pelo usuário na barra de pesquisa, adiciona uma unidade ao contador 2
                if(j[c].secao[0].conteudo.filter(retur => retur.indexOf(inputs[e]) >= 0).length > 0) countIngredients += 1
    
            }
            if(countIngredients >= 3 && inputs.length > 3 || inputs.length === countIngredients)
                {
                    //carrega os dados no DOM
                    let article = document.createElement('article')
                    article.className = "result_recipe"
                    article.innerHTML = '<h3>' + j[c].nome + '</h3>'
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
    })

}

function func_cadastro() {

    const main = document.getElementById("site-content22")
    remove_class_list(main)

    let main_child = main.firstElementChild;
    while (main_child) {
        main.removeChild(main_child);
        main_child = main.firstElementChild;
    }
    main.classList.add('login_sign')
    const main_div = document.createElement("div");
    const main_form = document.createElement("form");
    const name = document.createElement("input");
    const input_email = document.createElement("input");
    const input_password = document.createElement("input");
    const confirm_password = document.createElement("input");
    const div_sec = document.createElement("div");
    const div_modal_container = document.createElement("div")

    div_modal_container.id = "modal_container"
    div_modal_container.className = "modal-container"
    div_modal_container.innerHTML = `<div class="modal">
    <h1>Termos de Uso</h1>
    <h4>1 Do aceite dos termos de uso</h4>
        <p>A sua utilização desta plataforma implica na sua aceitação integral e plena do presente Termos de Uso. Por isso, sua leitura atenciosa é imprescindível.
        O uso da nossa plataforma também lhe submete aos demais termos, regulamentos, políticas, avisos que são disponibilizados ao usuário, assim como a atualização destes documentos.</p> 
        <h4>2 Condições de acesso</h4>
        <p>Essa plataforma está disponível para ser acessada gratuitamente a todos os usuários, mas pode conter serviços e produtos próprios ou de terceiros que podem ser cobrados. Inicialmente não se faz necessário nenhum cadastro para acessar a nossa plataforma, por isso são considerados serviços abertos, já para os que exigem uma inscrição, cadastros etc. são considerados serviços fechados.</p>
        
        
        <p>Para a devida utilização dos denominados serviços fechados, o usuário deve apresentar dados e este declara desde já que todas as informações apresentadas são verdadeiras e corretas e declara estar ciente que responderá pelas falsas ou erros e informações apresentados.</p> 
        <p>Caso o usuário for menor de idade, deve abster-se de utilizar a nossa plataforma e pedir aos seus pais ou responsáveis para utilizarem a plataforma, serviços ou produtos.</p> 
        <p>O usuário declara que concorda e compromete-se a usar a nossa plataforma, serviços ou produtos somente para os fins permitidos e de acordo com os termos constantes neste instrumento e que é o responsável integral pelo uso em desacordo com nossos Termos de Uso e Serviços, devendo assumir todas as consequências dessa atitude, reconhecendo que o Site QReceita não tem nenhuma responsabilidade por esses atos perante ele ou a terceiros. Responde ainda por todo e qualquer prejuízo causado a Guia da Culinária.</p> 
        <p>O acesso a nossa plataforma não lhe permite utilizar, copiar, reproduzir, modificar etc qualquer conteúdo, serviço ou produto. Fica permitido o compartilhamento junto às redes sociais, no entanto, o usuário que fizer isso está sujeito aos termos de uso e serviços e política de privacidade destes sites.</p> 
        <h4>3 Política de privacidade</h4> 
        <p>Todas as informações inerentes sobre a proteção de privacidade dos usuários encontram-se na Política de Privacidade do Site QReceita.</p> 
        <h4>4 Responsabilidades</h4>    
        <p>O Site QReceita sempre busca oferecer o acesso a plataforma, serviços e produtos com a maior qualidade possível, por isso, pode haver casos que esta prestação pode ser momentaneamente interrompida para que sejam realizadas reparações técnicas e operacionais (marcadas ou não). Caso enfrente algum problema em nossa plataforma, entre em contato conosco o mais rápido possível.</p>
        <p>Nossa plataforma pode aceitar expor banner, botões, backlinks, ferramentas etc. de terceiros, com isso, o usuário deve estar ciente que ao clicar neles, serão redirecionados para outros locais fora da nossa responsabilidade, devendo buscar ler e aceitar os termos de uso e serviços desses terceiros.</p> 
        <p>Nas páginas da nossa plataforma podem haver espaços para comentário dos usuários, esses declaram que todo e qualquer conteúdo publicado será apenas de sua responsabilidade, respondendo sobre perdas e danos causados ao QReceita ou a terceiros. Caso veja algo ofensivo ou de alguma forma prejudicial, entre em contato conosco imediatamente.</p> 
        <h4>6 Denúncia de violação aos termos de uso</h4>
        <p>Em seu comunicado, o usuário deve apresentar com a maior riqueza de detalhes possível o que lhe levou a reportar tal situação.</p>
        <h4>8 Legislação aplicável<h4>
        
        <p>Este Termo de Uso é regido dentro das legislações vigentes na República Federativa do Brasil.</p> 
        <h4>Fale conosco</h4>
        <p>Você pode falar com o site QReceita por meio do WhatSapp (31) 9999-1111 ou no e-mail: contatos@qreceita.com.br, sempre que tiver alguma dúvida ou alguma necessidade de contatar nossa equipe.
        É importante estar atento(a) e verificar se os Termos de Uso é a versão mais atualizada, ao navegar pela nossa plataforma.</p> 
    <button id="close">Fechar</button>
</div>`

    main_div.className = "flex_container2";
    main_div.innerHTML = `<h1 class="cadastro_title">Cadastro</h1>
                        <p>Inscreva-se e comece a preparar sua receita</p>`;

    main_form.className = "cadastro-form";
    main_form.innerHTML = '<p>Ao se increver, você concorda com nossos Termos de Uso e Privacidade<button id="leia">Leia</button></p>';
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
    main_form.insertAdjacentElement("beforeend", div_modal_container);

    const open1 = document.getElementById('leia')
    const modal_container = document.getElementById('modal_container')
    const close1 = document.getElementById('close')


    open1.addEventListener('click', (e) => {
        e.preventDefault()
        modal_container.classList.add('show');
    })

    close1.addEventListener('click', (e) => {
        e.preventDefault()
        modal_container.classList.remove('show');
    })

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

function cria_myprofile(){

    let main = document.getElementById('site-content22');
    main.remove();
    let main2 = document.createElement('main')

    let body = document.getElementsByTagName('body')[0];
    body.insertAdjacentElement('beforebegin', main2)
    let section2 = document.createElement('section');
    section2.id = 'section_profile';
    body.insertAdjacentElement('afterend', section2);
    
    section2.innerHTML = `<article class="grid">

    <div id="cabecalho-menu-perfil">
        <br>
        <h2> Perfil </h2></br>
        <p> Altere ou adicione informações sobre você</p>
    </div>


    <div id="grid1-foto-de-perfil">

        <img id="avatar" src="/docs/img/fotoLarissa.png" alt="">
        <input type="image" value="Alterar foto">

    </div>

    <div id="grid2-username">
        <label>Nome de usuário: <input id="username" type="text" placeholder="Username"></label>

    </div>

    <div id="grid3-profissao">

        <label>Profissão: <input id="profissao" type="text" placeholder="Profissão"></label>

    </div>

    <div id="grid4-sobre-voce">

        <label>Sobre você:</label><br><textarea class="msg" cols="35" rows="8"
            placeholder="O que eu mais gosto de fazer é... :)"></textarea><br>


    </div>

    <div id="grid5-links">

        <input id="Linkedin" type="link" placeholder="Linkedin">
        <input id="Instagram" type="text" placeholder="Instagram">
        <input id="Twitter" type="text" placeholder="Twitter">
    </div>


    <div id="grid-botao-enviar">
        <button class="login2">
            <a style="color: white;" href="">Salvar</a>
        </button>
    </div>

</article>

<aside id="aside_my_prof">
    <div class="wrapper_aside">
        <div class="foto-perfil-logado">
            <img id="foto-perfil-logado" src="imgs/larissa_cunha.jpg" alt="">
            <h4 id="username">Larissa Cunha</h4>
            <br>
        </div>
        <div id="opcoes">
            <a class="perfil-user" href="">Perfil</a></p>
            <br>
            <a class="enviar_receitas" href="">Enviar Receitas</a></p>
            <br>
            <a class="minhas_receitas" href="">Minhas Receitas</a></p>
        </div>
    </div>
</aside>`

}

//verifica se um elemento possui classlist

function remove_class_list(elem) {

    let ecl = elem.classList
    if(ecl.length > 1) {
        for(let c = 1; c <= ecl.length; c++){
            ecl.remove(ecl.item(c))
        }
    }
}