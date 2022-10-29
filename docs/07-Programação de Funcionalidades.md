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


## Fazer Login (RF-01)

A tela de login permite ao usuário já cadastrado ter acesso a suas informações pessoais e a funcionalidades do site disponíveis apenas para os que já possuam login.

<div align="center">
  <img src="img/UserFlow.jpg">
</div>

<p align="center">Template Padrão do Site</p>

### Requisitos atendidos

●  	RF-01

### Artefatos da funcionalidade

●  	login.html

●  	forms-val.js

●  	login_style.css

## Instruções de acesso

1. Clique no botão no canto superior direito da tela indicado como Login;
2. Preencha as informações de acordo com o solicitado pelo site (Email e Senha);
3. Clique em Fazer login.


## Receitas Encontradas e Filtro de Receitas (RF-02, RF-03 e RF-07)

Após efetuar a busca na Página inicial o usuário será redirecionado para a Tela de Receitas Encontradas. Nela, ficará disponível todas as receitas localizadas pelo site de acordo com os ingredientes informados pelo usuário. Logo ao lado da primeira opção informada há um filtro, no qual ele poderá restringir suas opções de visualização de acordo com as opções: Receitas mais fáceis, Receitas mais difíceis, Receitas mais avaliadas e Receitas menos avaliadas.

<div align="center">
  <img src="img/UserFlow.jpg">
</div>

<p align="center">Template Padrão do Site</p>

### Requisitos atendidos

●  	RF-02,  RF-03 e RF-07
 

### Artefatos da funcionalidade

●  	receitas_encontradas.html

●  	receitas_encontradas.css

### Estrutura de Dados



### Instruções de acesso

1. Clique em uma das receitas encontradas 
2. Caso deseje filtrar as opções, clicar no botão ao lado da primeira receita informada e selecionar um dos filtros.
3. A página será recarregada de acordo com a opção de filtragem escolhida.


## Receita Escolhida (RF-06 e RF-09)

Na tela Receita Escolhida, o usuário irá visualizar informações relevantes como o número de porções, tempo de preparo, grau de dificuldade e o detalhamento da receita escolhida, com ingredientes e o modo de preparo. Há também um ícone para o compartilhamento da receita, avaliá-la utilizando os ícones de estrelas e a opção de adicionar um comentário além de visualizar comentários de outros usuários.

<div align="center">
  <img src="img/UserFlow.jpg">
</div>

<p align="center">Template Padrão do Site</p>

### Requisitos atendidos

●  	RF-06 e RF-09


### Artefatos da funcionalidade

receita-escolhida.html

receita-escolhida.css

forms-val.js

### Estrutura de Dados
 

 
### Instruções de acesso

1. Clicar na receita escolhida na página anterior;
2. Abrirá uma nova página com todo o detalhamento da receita;
3. Para compartilhar a receita o usuário deverá clicar no ícone de compartilhamento.
4. Para enviar e/ou ler comentários o usuário deverá descer até o rodapé da página onde fica localizado uma caixa de texto para comentários e os comentários anteriores.
5. Para avaliar a receita, o usuário deverá contar com o sistema de estrelas, clicando em cada uma de acordo com o favoritismo por ela.












