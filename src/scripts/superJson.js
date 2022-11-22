
class SuperJson {
    constructor(list_data) {
        this.list_data = list_data
    }

    validateLogin() {

        let current = sessionStorage.currentUser
        let dataBWarn = document.getElementById('dbFalse')
        let void_true = document.getElementById('VoidTrue')

        if(typeof this.list_data == "object" && this.list_data.length == 2 && current != undefined) {

            console.log('primeiro if')
            if(this.list_data[0] == "" || this.list_data[1] == ""){
                console.log('segundo if')
                void_true.style.visibility = 'visible'

            } else {
                console.log('else segundo if')
                void_true.style.visibility = 'hidden'
                if(JSON.parse(current).email === this.list_data[0] && JSON.parse(current).senha === this.list_data[1]) {
                    console.log('terceiro if')
                    dataBWarn.style.visibility = 'hidden'
                    location.assign('user-logado.html')
    
                } else {
    
                    dataBWarn.style.visibility = 'visible'
    
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
                    if(localStorage.db_fake === undefined) {
                        localStorage.setItem('db_fake', JSON.stringify(dataS))
                        sessionStorage.currentUser = JSON.stringify(dataS.usuarios[0])
                        location.assign('user-logado.html')
                    } else {

                        let newData = JSON.parse(localStorage.db_fake)
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
                            sessionStorage.currentUser = JSON.stringify(dataS.usuarios[0])
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

        let current = sessionStorage.currentUser

        if(typeof this.list_data == "object" && this.list_data.length <= 6 && current != undefined) {

            let email = JSON.parse(sessionStorage.currentUser).email
            let senha = JSON.parse(sessionStorage.currentUser).senha
            let confirmSenha = JSON.parse(sessionStorage.currentUser).confirm_senha

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

        }
    }

    sendRecipe() {

        updateStorage = JSON.parse(localStorage.recipes)
        nameUser = JSON.parse(sessionStorage.currentUser).nome

        arrayFlagContent = []
        arrayflagIngred = []
        this.list_data[4].forEach(i => {

            if(i.value != ""){
                arrayFlagContent.push(i.value)
            }

        })
        console.log(arrayFlagContent)
        recipeContent = ""

        arrayFlagContent.forEach(el => {
            recipeContent += `${el} `
        });

        this.list_data[5].forEach(i => {

            if(i.value != ""){
                arrayflagIngred.push(i.value)
            }

        })
        recipeIngred = ""

        arrayflagIngred.forEach(el => {
            recipeIngred += `${el} `
        });

        let newRecipe = {
            "_id": {
                "$oid": updateStorage.length
            },
            "nome": this.list_data[0],
            "link_imagem": "imgs/foto_padrao.png",
            "grau_de_dificuldade": this.list_data[2],
            "avaliacao": 0,
            "tempo_de_preparo": this.list_data[3],
            "serve": this.list_data[1],
            "postado_por": nameUser,
    
    
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
        localStorage.setItem('recipes', JSON.stringify(updateStorage))

    }

    dataValSR(){
        
        let warnIng = document.getElementById('warnMedida').style.visibility
        let warnPrep = document.getElementById('modo-preparo').style.visibility
        let warnNmae = document.getElementById('nome-receita').style.visibility
        let warnPrc = document.getElementById('numero-porcoes').style.visibility
        let warnDif = document.getElementById('dificult').style.visibility
        let warnTPrep = document.getElementById('tempo-preparo').style.visibility

        if(this.list_data[0] != "" && this.list_data[1] != "" && this.list_data[2] != "" && this.list_data[3] != ""){
            console.log('entrou no if')
            warnPrep = 'hidden'
            warnNmae = 'hidden'
            warnPrc = 'hidden'
            warnDif = 'hidden'
            warnTPrep = 'hidden'

            let flag = false
            let flag2 = false
            this.list_data[4].forEach(el => {

                if(el != ""){
                    flag = true
                }

            })

            this.list_data[5].forEach(el => {

                if(el != ""){
                    flag2 = true
                }

            })

            if(flag && flag2){

                this.sendRecipe()

            } else {

                if(flag === false){

                    warnIng = 'visible'

                }

                if(flag2 === false){

                    warnPrep = 'visible'

                }

            }

        } else {

            if(this.list_data[0] == ""){
                
                warnNmae = 'visible'

            }

            if(this.list_data[1] == ""){

                warnPrc = 'visible'

            }

            if(this.list_data[2] == ""){

                warnDif = 'visible'

            }

            if(this.list_data[3] == ""){

                warnTPrep = 'visible'

            }

            let flag = false
            let flag2 = false
            this.list_data[4].forEach(el => {

                if(el != ""){
                    flag = true
                }

            })

            this.list_data[5].forEach(el => {

                if(el != ""){
                    flag2 = true
                }

            })

            if(!flag && !flag2){

                if(flag === false){

                    warnIng = 'visible'

                }

                if(flag2 === false){

                    warnPrep = 'visible'

                }
            }
        }
    }

}

export default SuperJson