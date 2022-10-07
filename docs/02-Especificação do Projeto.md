# Especificações do Projeto

<span style="color:red">Pré-requisitos: <a href="1-Documentação de Contexto.md"> Documentação de Contexto</a></span>

A definição exata do problema e os pontos mais relevantes a serem tratados neste projeto foi consolidada com a participação dos usuários em um trabalho de imersão feita pelos membros da equipe a partir da observação dos usuários em seu local natural e por meio de entrevistas. Os detalhes levantados nesse processo foram consolidados na forma de personas e histórias de usuários.

## Personas

As personas levantadas durante o processo de entendimento do problema são apresentadas na Figuras que se seguem.

Larissa Cunha tem 21 anos, é graduanda em Psicologia e atualmente faz estágio em uma clínica no centro da cidade de Belo Horizonte. Suas principais motivações são: ter uma alimentação que lhe traga uma vida mais saudável e gastar menos dinheiro com fast food. Como frustrações, ela não tem criatividade para cozinhar e acaba comendo fast food, o que não é saudável e ainda a faz gastar muito dinheiro diariamente com comida. Uma outra frustração apontada por ela é a dependência do auxílio de outras pessoas para o preparo de refeições. Larissa tem como Hobbies ver filmes, ler e andar de bike. Os aplicativos que ela mais utiliza são: Instagram, Pinterest, Twitter.

Vinicius Tadashi tem 41 anos, é professor universitário e atualmente trabalha em dois turnos e vive com suas duas filhas, uma de 10 e outra de 8 anos. Suas motivações são: fornecer uma alimentação saudável para a família e aproveitar alimentos esquecidos na geladeira para evitar desperdícios e assim promover economia financeira. Sua frustração é a falta de criatividade no preparo das refeições para suas filhas. Como Hobbies ele gosta de praticar tênis e passear com as filhas. Seus aplicativos mais usados são: Facebook, LinkedIn e Youtube.

Samanta Mendes tem 29 anos, é formada em Gastronomia, faz estágio em um restaurante de renome da sua cidade. Em seu tempo livre, grava vídeos curtos no TikTok com receitas descomplicadas e simples de fazer. Suas motivações sao: Compartilhar seus conhecimentos adquiridos na Universidade e em seu Estágio com o público e mostrar que é possível adaptar receitas “chiques” com alimentos simples que se tem em casa. Como frustrações ela diz não ter amigos/familiares que apreciem culinária como ela. Seus Hobbies são: ler, testar novas receitas e gravar vídeos para redes sociais.

## Histórias de Usuários

A partir da compreensão do dia a dia das pessoas identificadas para o projeto, foram registradas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Larissa Cunha       | ter acesso a receitas disponíveis com base nos ingredientes que possuo (RF-03, RF-05)  | para facilitar minha alimentação no dia-a-dia    |   
|Samanta Mendes      | ter acesso a um mecanismo de avaliação de receitas (RF-07, RF-09)| para dar um feedback das receitas que recebi e acompanhar as receitas mais bem avaliadas  |
|Samanta Mendes      | incluir novas receitas (RF-08)| para compartilhar meus conhecimentos gastronômicos  |
|Larissa Cunha       | manter um registro de receitas favoritas (RF-04) | visualizar depois e manter um histórico das receitas salvas para acessar posteriormente|
|Vinicius Tadashi    | fazer comentários em receitas de terceiros. (RF-06)   | para trocar experiências com outras pessoas  | 
|Larissa Cunha       | poder aplicar um filtro quanto a dificuldade da elaboração das receitas (RF-02) | adaptar minhas pesquisas de acordo com o nível da minha experiência|
|Larissa Cunha       | ter um link de compartilhamento de receitas (RF-10) | compartilhar externamente as minhas receitas favoritas com outras pessoas |
|Vinicius Tadashi    | ter acesso a sugestões de receitas com todos ou parte dos ingredientes informados na busca (RF-03) | ter mais opções de receitas além das que envolvem apenas os ingredientes informados |
|Samanta Mendes      | acessar o sistema com o meu login (RF-01) | ter um registro e acesso mais completo no site |

## Requisitos

O escopo funcional do projeto é definido por meio dos requisitos funcionais que descrevem as possibilidades de interação dos usuários, bem como os requisitos não funcionais que descrevem os aspectos que o sistema deverá apresentar de maneira geral. Estes requisitos são apresentados a seguir.

### Requisitos Funcionais

A tabela a seguir apresenta os requisitos do projeto, identificando a prioridade em que os mesmos devem ser entregues.

|ID    | Descrição do Requisito  | Prioridade |
|------|-------------------------------------------|----|
|RF-01 | O site deve permitir que o usuário realize o cadastro no sistema | Média |
|RF-02 | O site deve permitir o filtro de receitas pelo grau de dificuldade | Média |
|RF-03 | O site deve apresentar uma lista de opções de receitas que contenham ao menos parte dos ingredientes informados| Média |
|RF-04 | O site deve permitir o usuário favoritar as receitas que mais gosta | Baixa |            
|RF-05 | O site deve permitir realizar a busca de receitas a partir de ingredientes informados| Alta  |
|RF-06 | O site deve permitir a inclusão e a exposição de comentários sobre as receitas sugeridas | Baixa |
|RF-07 | O site deve apresentar um ranqueamento das receitas mais bem avaliadas | Baixa |
|RF-08 | O site deve permitir a inclusão de receitas pelos usuários | Média |
|RF-09 | O site deve conter uma opção de avaliação de 0 a 5 estrelas das receitas | Baixa |
|RF-10 | O site deve disponibilizar o compartilhamento de receitas | Média |

### Requisitos não Funcionais

A tabela a seguir apresenta os requisitos não funcionais que o projeto deverá atender.

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-01 | O site deve ser publicado em um ambiente acessível publicamente na Internet (GitHub Pages) | Alta | 
|RNF-02 | O site deverá ser responsivo permitindo a visualização em um celular de forma adequada | Alta | 
|RNF-03 | O site deve ter bom nível de contraste entre os elementos da tela | Média | 
|RNF-04 | O site deve ser compatível com os principais navegadores do mercado (Google Chrome, Firefox, Microsoft Edge) | Alta | 
|RNF-05 | O site deve apresentar na página principal imagens de alimentos com ótima aparência formada em grupos com o resultado de uma possível receita com cores vivas que atraiam o público | Baixa | 
|RNF-06 | O site deve apresentar as informações de contato do mantenedor do site | Média | 

## Descrições

As questões que limitam a execução desse projeto e que se configuram como obrigações claras para o desenvolvimento do projeto em questão são apresentadas na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue no final do semestre letivo, não podendo extrapolar a data de 11/12/2022 |
|02| O site deve se restringir às tecnologias básicas da Web no Front-end |
|03| A equipe não pode subcontratar o desenvolvimento do trabalho |
