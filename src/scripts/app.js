import SuperJson from "./superJson.js"

function remove_class_list(elem) {

    let ecl = elem.classList
    if(ecl.length > 1) {
        for(let c = 1; c <= ecl.length; c++){
            ecl.remove(ecl.item(c))
        }
    }
}

const ajaxModal = `<div class="modal">
<h1>Termos de Uso</h1>
<h4>1 Do aceite dos termos de uso</h4>
    <p>A sua utilização desta plataforma implica na sua aceitação integral e plena do presente Termos de Uso. Por isso, sua leitura atenciosa é imprescindível.
    O uso da nossa plataforma também lhe submete aos demais termos, regulamentos, políticas, avisos que são disponibilizados ao usuário, assim como a atualização destes documentos.</p> 
    <h4>2 Condições de acesso</h4>
    <p>Essa plataforma está disponível para ser acessada gratuitamente a todos os usuários, mas pode conter serviços e produtos próprios ou de terceiros que podem ser cobrados. Inicialmente não se faz necessário nenhum cadastro para acessar a nossa plataforma, por isso são considerados serviços abertos, já para os que exigem uma inscrição, cadastros etc. são considerados serviços fechados.</p>
    
    
    <p>Para a devida utilização dos denominados serviços fechados, o usuário deve apresentar dados e este declara desde já que todas as informações apresentadas são verdadeiras e corretas e declara estar ciente que responderá pelas falsas ou erros e informações apresentados.</p> 
    <p>Caso o usuário for menor de idade, deve abster-se de utilizar a nossa plataforma e pedir aos seus pais ou responsáveis para utilizarem a plataforma, serviços ou produtos.</p> 
    <p>O usuário declara que concorda e compromete-se a usar a nossa plataforma, serviços ou produtos somente para os fins permitidos e de acordo com os termos constantes neste instrumento e que é o responsável integral pelo uso em desacordo com nossos Termos de Uso e Serviços, devendo assumir todas as consequências dessa atitude, reconhecendo que o Site QReceita não tem nenhuma responsabilidade por esses atos perante ele ou a terceiros. Responde ainda por todo e qualquer prejuízo causado ao Site QReceita.</p> 
    <p>O acesso a nossa plataforma não lhe permite utilizar, copiar, reproduzir, modificar etc qualquer conteúdo, serviço ou produto. Fica permitido o compartilhamento junto às redes sociais, no entanto, o usuário que fizer isso está sujeito aos termos de uso e serviços e política de privacidade destes sites.</p> 
    <h4>3 Política de privacidade</h4> 
    <p>Todas as informações inerentes sobre a proteção de privacidade dos usuários encontram-se na Política de Privacidade do Site QReceita.</p> 
    <h4>4 Responsabilidades</h4>    
    <p>O Site QReceita sempre busca oferecer o acesso a plataforma, serviços e produtos com a maior qualidade possível, por isso, pode haver casos que esta prestação pode ser momentaneamente interrompida para que sejam realizadas reparações técnicas e operacionais (marcadas ou não). Caso enfrente algum problema em nossa plataforma, entre em contato conosco o mais rápido possível.</p>
    <p>Nossa plataforma pode aceitar expor banner, botões, backlinks, ferramentas etc. de terceiros, com isso, o usuário deve estar ciente que ao clicar neles, serão redirecionados para outros locais fora da nossa responsabilidade, devendo buscar ler e aceitar os termos de uso e serviços desses terceiros.</p> 
    <p>Nas páginas da nossa plataforma podem haver espaços para comentário dos usuários, esses declaram que todo e qualquer conteúdo publicado será apenas de sua responsabilidade, respondendo sobre perdas e danos causados ao QReceita ou a terceiros. Caso veja algo ofensivo ou de alguma forma prejudicial, entre em contato conosco imediatamente.</p> 
    <h4>5 Denúncia de violação aos termos de uso</h4>
    <p>Em seu comunicado, o usuário deve apresentar com a maior riqueza de detalhes possível o que lhe levou a reportar tal situação.</p>
    <h4>6 Legislação aplicável<h4>
    
    <p>Este Termo de Uso é regido dentro das legislações vigentes na República Federativa do Brasil.</p> 
    <h4>Fale conosco</h4>
    <p>Você pode falar com o site QReceita por meio do WhatSapp (31) 9999-1111 ou no e-mail: contatos@qreceita.com.br, sempre que tiver alguma dúvida ou alguma necessidade de contatar nossa equipe.
    É importante estar atento(a) e verificar se os Termos de Uso é a versão mais atualizada, ao navegar pela nossa plataforma.</p> 
<button id="close">Fechar</button>
</div>`

class Header {
    constructor(log = false) {
        //log é um booleano que define se o usuário está logado ou não
        this.log = log
    }

    headerLogado() {
        if(this.log) {
            let first_div = document.getElementById('button-login')
            first_div.innerHTML = `<img class="avatar" src="imgs/avatar-padrao2.jpg" alt="">
            <p class="userName" id="nome_usuario_logado"></p>`
            first_div.id = "profile-container"
            first_div.className = "avatar-container"

            let second_div = document.getElementById('button-sign')
            second_div.innerHTML = `<button id="button_logout_logado" type="button-out">
            <img src="imgs/button-out.png" alt=""></button>`
            second_div.className = "button-out"
            second_div.removeAttribute('id')
        }
    }
}

class Forms extends Header {
    constructor(main_id, arrayButton) {
        super()
        this.main_id = main_id
        this.arrayButton = arrayButton
    }

    createFormLogin() {

        if(!this.log) {
            document.getElementById(this.arrayButton[0]).addEventListener('click', () => {

                const main = document.getElementById(this.main_id)
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
                                    <p id="ni27" style="color: white">Faça o Login com sua conta QReceita</p>`;
                div_sec.className = "button_login";
                div_sec.innerHTML = `<button id="login-form" class="login2">Fazer Login</button>`;
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

                main.insertAdjacentElement("beforeend", main_div);
                main_div.insertAdjacentElement("beforeend", main_form);
                main_form.insertAdjacentElement("beforeend", input_email);
                main_form.insertAdjacentElement("beforeend", input_password);
                main_form.insertAdjacentElement("beforeend", div_sec);
                main_form.insertAdjacentElement("beforeend", div_ter);

                let spanWarn = document.createElement('span')
                spanWarn.id = "dbFalse"
                spanWarn.innerText = 'E-mail ou senha inválidos'
                spanWarn.style.color = 'red'
                spanWarn.style.visibility = 'hidden'
                document.getElementById('ni27').insertAdjacentElement('afterend', spanWarn)

                let spanWarnVoid = document.createElement('span')
                spanWarnVoid.id = "VoidTrue"
                spanWarnVoid.innerText = 'Preencha todos os campos'
                spanWarnVoid.style.color = 'red'
                spanWarnVoid.style.visibility = 'hidden'
                document.getElementById('ni27').insertAdjacentElement('afterend', spanWarnVoid)

                //estilizar em html + css
                input_email.maxLength = 64;
                input_password.maxLength = 14;

                document.getElementById('formLogin').addEventListener('submit', (e) => {

                    e.preventDefault();
                    //verifica se há algum usuário corrente no sessionStorage
                    let listDataLogin = [input_email.value.toString(), input_password.value.toString()]
                    let validation = new SuperJson(listDataLogin)
                    validation.validateLogin()
                    
                })
            })
        }
    }

    //melhorar
    createFormSign() {

        if(!this.log) {
            document.getElementById(this.arrayButton[1]).addEventListener('click', () => {

                const main = document.getElementById(this.main_id)
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
                const div_modal_container = document.createElement("div");
                const div_verif = document.createElement("div");

                div_verif.id = "verification-span"

                const spanSenha = document.createElement('span')
                spanSenha.id = "senha"
                spanSenha.style.color = 'red'
                spanSenha.style.visibility = 'hidden'
                spanSenha.innerText = "Senhas não coincidem"

                const spanCadastro = document.createElement('span')
                spanCadastro.style.color = 'red'
                spanCadastro.style.visibility = 'hidden'
                spanCadastro.id = "userFinded"
                spanCadastro.innerText = "E-mail informado já foi utilizado"

                const spanVoid = document.createElement('span')
                spanVoid.id = "void"
                spanVoid.style.visibility = 'hidden'
                spanVoid.style.color = 'red'
                spanVoid.innerText = 'Preencha todos os campos'
                //let validEmail = `<span style="color: red;" id="valid_email">E-mail informado não é válido</span>`

                div_verif.appendChild(spanCadastro)
                div_verif.appendChild(spanSenha)
                div_verif.appendChild(spanVoid)

                div_modal_container.id = "modal_container"
                div_modal_container.className = "modal-container"
                div_modal_container.innerHTML = ajaxModal

                main_div.className = "flex_container2";
                main_div.innerHTML = `<h1 class="cadastro_title">Cadastro</h1>
                                    <p>Inscreva-se e comece a preparar sua receita</p>`;

                main_form.className = "cadastro-form";
                main_form.id = "signForm"
                main_form.innerHTML = '<p>Ao se increver, você concorda com nossos Termos de Uso e Privacidade <a id="leia">(Leia)</a></p>';
                div_sec.className = "Cadastre-se";
                div_sec.innerHTML = '<button id="cadastro-form" class="login2">Cadastre-se</button>';

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
                main_form.insertAdjacentElement("afterend", div_verif)
                

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

                    e.preventDefault();
                    let listSign = [name.value, input_email.value, input_password.value, confirm_password.value]
                    let setSign = new SuperJson(listSign)

                    setSign.setDataSign();

                })
            })
        }
    }
}

export default Forms
