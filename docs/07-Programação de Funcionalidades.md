# Funcionalidade do Sistema (Telas)

Nesta seção são apresentadas as telas desenvolvidas para cada uma das funcionalidades do sistema. O respectivo endereço (URL) e outras orientações de acesso são apresentadas na sequência.

## Pesquisa de Receitas (RF-05)

A tela principal do sistema apresenta as barras de pesquisa para que o usuário possa informar quais os ingredientes tem disponível. A tela possui também a opção de login, para usuários já cadastrados, e cadastro, para usuários que ainda não estejam cadastrados. As receitas são armazenadas no LocalStorage com estruturas de dados baseada em JSON. Um exemplo da tela é apresentada na Figura 16.

<div align="center">
  <img src="img/UserFlow.jpg">
</div>

<p align="center">Template Padrão do Site</p>

### Requisitos atendidos

●  	RF-05 

### Artefatos da funcionalidade

•	index.html

•	dbfake_search.js

•	footer_style.css

•	header_style.css

•	content_style.css

### Instruções de Acesso

1. Insira nas barras de pesquisas os ingredientes que estiverem disponíveis;
2. Após, clique em buscar.
3. Para buscas de receitas mais abrangentes, utilize a barra de pesquisa disposta no cabeçalho da Página Inicial e pesquisar, clicando no botão de Lupa ao lado esquerdo.

## Fazer Cadastro (RF-01)

A tela de efetuar cadastro permite ao usuário se cadastrar no site para que possa ter acesso a outras funcionalidades como salvar suas receitas favoritas, incluir receitas e etc.

<div align="center">
  <img src="img/UserFlow.jpg">
</div>

<p align="center">Template Padrão do Site</p>

### Requisitos atendidos

●  	RF-01

### Artefatos da funcionalidade

●  	cadastre-se.html

●  	forms-val.js

●  	cadastre-se_style.css

### Estrutura de Dados

{usuarios: [{
		“id”: 1,
    		"login": "admin",
	 	"senha": "123",
    		"nome": "Administrador do Sistema",
    		"email": "admin@abc.com"
    	}]}
 
 ### Instruções de acesso
 
1. Clique no botão no canto superior direito da tela indicado como Cadastre-se
2. Preencha as informações de acordo com o solicitado pelo site (Nome, Email, Senha e Confirme Senha)
3. Clique em Cadastre-se





