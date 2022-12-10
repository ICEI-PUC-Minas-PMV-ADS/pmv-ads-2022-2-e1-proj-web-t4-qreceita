function remove_class_list(elem) {

    let ecl = elem.classList
    if(ecl.length > 1) {
        for(let c = 1; c <= ecl.length; c++){
            ecl.remove(ecl.item(c))
        }
    }
}

class SuperJson {
    constructor(list_data) {
        this.list_data = list_data
    }

    validateLogin() {

        let dataBWarn = document.getElementById('dbFalse')
        let void_true = document.getElementById('VoidTrue')

        if(typeof this.list_data == "object" && this.list_data.length == 2) {

            console.log('primeiro if')
            if(this.list_data[0] == "" || this.list_data[1] == ""){

                void_true.style.visibility = 'visible'

            } else {
                console.log('else segundo if')
                void_true.style.visibility = 'hidden'
                if(localStorage.db_fake) {

                    let current = JSON.parse(localStorage.getItem('db_fake')).usuarios
                    let flag = false

                    current.forEach((el, i) => {

                        if(el.email === this.list_data[0] && el.senha === this.list_data[1]){

                            console.log('terceiro if')
                            dataBWarn.style.visibility = 'hidden'
                            sessionStorage.setItem('currentUser', JSON.stringify(current[i]))
                            flag = true
                        
                        } 

                    })

                    if(!flag) {

                        dataBWarn.style.visibility = 'visible'

                    } else {

                        location.assign('user-logado.html')

                    }
    
                } else {
    
                    alert('não há usuários cadastrados, faça o cadastro')
    
                }

            }
        }
    }

    setDataSign() {

        if(typeof this.list_data == "object" && this.list_data.length == 4) {

            let dataS  = {
                usuarios: [
                    {
                        nome: "",
                        email: "",
                        senha: "",
                        confirm_senha: "",
                        profissao: "",
                        linkedin: "",
                        Instagram: "",
                        bio: "",
                        twitter: ""
                    }
                ]
            }

            let warnPassword = document.getElementById('senha')
            let warnEmail = document.getElementById('userFinded')
            let voidWarn = document.getElementById('void')

            if(this.list_data[0] == "" || this.list_data[1] == "" || this.list_data[2] == "" || this.list_data[3] == ""){

                voidWarn.style.visibility = 'visible'

            } else {

                voidWarn.style.visibility = 'hidden'

                dataS.usuarios[0].nome = this.list_data[0]
                dataS.usuarios[0].email = this.list_data[1]
                dataS.usuarios[0].senha = this.list_data[2]
                dataS.usuarios[0].confirm_senha = this.list_data[3]

                //se as senhas coincidirem
                if(dataS.usuarios[0].senha === dataS.usuarios[0].confirm_senha) {
                    warnPassword.style.visibility = 'hidden'
                    //se o localstorage está vazio
                    if(localStorage.getItem('db_fake') === null) {
                        localStorage.setItem('db_fake', JSON.stringify(dataS))
                        sessionStorage.getItem('currentUser') = JSON.stringify(dataS.usuarios[0])
                        location.assign('user-logado.html')
                    } else {

                        let newData = JSON.parse(localStorage.getItem('db_fake'))
                        let flag = true

                        //verifica se o usuário já está cadastrado
                        newData.usuarios.forEach(el => {

                            if(el.email == this.list_data[1]){
                                flag = false
                            }

                        })
                        //se o usuário não está cadastrado
                        if(flag){
                            warnEmail.style.visibility = 'hidden'
                            newData.usuarios.push(dataS.usuarios[0])
                            localStorage.setItem('db_fake', JSON.stringify(newData))
                            sessionStorage.getItem('currentUser') = JSON.stringify(dataS.usuarios[0])
                            location.assign('user-logado.html')

                        } else {
                            warnEmail.style.visibility = 'visible'
                        }
                    }

                } else {
                    warnPassword.style.visibility = 'visible'
                }
            }
        }
    }

    updateLogin() {

        let current = sessionStorage.getItem('currentUser')

        if(typeof this.list_data == "object" && this.list_data.length <= 6 && current != undefined) {

            let email = JSON.parse(current).email
            let senha = JSON.parse(current).senha
            let confirmSenha = JSON.parse(current).confirm_senha

            let updateData = {
                nome: this.list_data[0],
                email: email,
                senha: senha,
                confirm_senha: confirmSenha,
                profissao: this.list_data[1],
                linkedin: this.list_data[3],
                Instagram: this.list_data[4],
                bio: this.list_data[2],
                twitter: this.list_data[5]
            }
            
            sessionStorage.setItem('currentUser', JSON.stringify(updateData))

            const h3divs = '<div id="button-out-alert"><button id="buttonClose"></button></div><div id="textAlert"><h3>Informações do perfil alteradas!</h3></div>'
            const imgClose = document.createElement('img')
            imgClose.src = "imgs/close.png"
            const divAlert = document.getElementsByClassName('divAlert')[0]
            divAlert.innerHTML = h3divs

            const buttonOut = document.getElementById('buttonClose')
            buttonOut.appendChild(imgClose)
            divAlert.classList.add('divAlertactive')
            
            buttonOut.addEventListener('click', () => {
                divAlert.innerHTML = ''
                remove_class_list(divAlert)
            })


        }
    }

    sendRecipe() {

        let updateStorage = JSON.parse(localStorage.getItem('receitas'))
        let nameUser = JSON.parse(sessionStorage.getItem('currentUser')).nome
        let emUser = JSON.parse(sessionStorage.getItem('currentUser')).email

        let arrayFlagContent = []
        let arrayflagIngred = []
        let userBasicInfo = [nameUser, emUser]
        this.list_data[4].forEach(i => {

            if(i.value != ""){
                arrayFlagContent.push(i.value)
            }

        })
        
        let recipeContent = ""

        arrayFlagContent.forEach(el => {
            recipeContent += `${el} `
        });

        this.list_data[5].forEach(i => {

            if(i.value != ""){
                arrayflagIngred.push(i.value)
            }

        })
        let recipeIngred = ""

        arrayflagIngred.forEach(el => {
            recipeIngred += `${el} `
        });

        let newRecipe = {
            "_id": {
                "$oid": updateStorage.length.toString()
            },
            "nome": this.list_data[0],
            "link_imagem": "imgs/foto_padrao.png",
            "grau_de_dificuldade": this.list_data[2],
            "avaliacao": 0,
            "tempo_de_preparo": this.list_data[3],
            "serve": this.list_data[1],
            "postado_por": userBasicInfo,
            "comentarios": [],
            "secao": [
                {
                    "nome": "Ingredientes",
                    "conteudo": [
                        recipeContent
                    ]
                },
                {
                    "nome": "Modo de Preparo",
                    "conteudo": [
                        recipeIngred
                    ]
                }
            ]
        }

        updateStorage.push(newRecipe)
        localStorage.setItem('receitas', JSON.stringify(updateStorage))

        let recipesUser = []
        recipesUser.push(newRecipe)

        if(sessionStorage.recipesCurrentUser){
            let storageRecipe = JSON.parse(sessionStorage.getItem('recipesCurrentUser'))
            storageRecipe.push(newRecipe)
            sessionStorage.setItem('recipesCurrentUser', JSON.stringify(storageRecipe))
        } else{
            sessionStorage.setItem('recipesCurrentUser', JSON.stringify(recipesUser))
        }

    }

    dataValSR(){

        let warnName = document.getElementById('recipeNamesp')
        let warnPrc = document.getElementById('nPorcoes')
        let warnDif = document.getElementById('gDificult')
        let warnTPrep = document.getElementById('tPrep')
        let warnIng = document.getElementById('warnMedida')
        let warnPrep = document.getElementById('warnModPrep')

        if(this.list_data[0] != "" && this.list_data[1] != "" && this.list_data[2] != "" && this.list_data[3] != ""){
            
            warnName.style.visibility = 'hidden'
            warnPrc.style.visibility = 'hidden'
            warnDif.style.visibility = 'hidden'
            warnTPrep.style.visibility = 'hidden'

            let flag = false
            let flag2 = false

            this.list_data[4].forEach((_, i) => {

                if(this.list_data[4][i].value.length > 0){
                    flag = true
                    warnIng.style.visibility = 'hidden'
                }

            })

            this.list_data[5].forEach((_, i) => {

                if(this.list_data[5][i].value.length > 0){
                    flag2 = true
                    warnPrep.style.visibility = 'hidden'
                }

            })

            if(flag && flag2){

                this.sendRecipe()

                const h3divs = '<div id="button-out-alert"><button id="buttonClose"></button></div><div id="textAlert"><h3>Receita adicionada com sucesso!</h3></div>'
                const imgClose = document.createElement('img')
                imgClose.src = "imgs/close.png"
                const divAlert = document.getElementsByClassName('divAlert')[0]
                divAlert.innerHTML = h3divs

                const buttonOut = document.getElementById('buttonClose')
                buttonOut.appendChild(imgClose)
                divAlert.classList.add('divAlertactive')
                
                buttonOut.addEventListener('click', () => {
                    divAlert.innerHTML = ''
                    remove_class_list(divAlert)
                })

            } else {

                if(flag == false){

                    warnIng.style.visibility = 'visible'

                }

                if(flag2 == false){

                    warnPrep.style.visibility = 'visible'

                }

            }

        } else {
            
            if(this.list_data[0] == ""){
                warnName.style.visibility = 'visible'
            } else {
                warnName.style.visibility = 'hidden'
            }

            if(this.list_data[1] == ""){
                warnPrc.style.visibility = 'visible'
            } else {
                warnPrc.style.visibility = 'hidden'
            }

            if(this.list_data[2].length == 0){
                warnDif.style.visibility = 'visible'
            } else {
                warnDif.style.visibility = 'hidden'
            }

            if(this.list_data[3] == ""){
                warnTPrep.style.visibility = 'visible'
            } else {
                warnTPrep.style.visibility = 'hidden'
            }

            let flag3 = false
            let flag4 = false
            this.list_data[4].forEach((_, i) => {

                if(this.list_data[4][i].value.length > 0){
                    flag3 = true
                    warnIng.style.visibility = 'hidden'
                }
            })

            this.list_data[5].forEach((_, i) => {

                if(this.list_data[5][i].value.length > 0){
                    flag4 = true
                    warnPrep.style.visibility = 'hidden'
                }
            })

            if(!flag3){
                console.log(flag3)
                warnIng.style.visibility = 'visible'
            }

            if(!flag4){
                warnPrep.style.visibility = 'visible'
            }
        }
    }
}

export default SuperJson