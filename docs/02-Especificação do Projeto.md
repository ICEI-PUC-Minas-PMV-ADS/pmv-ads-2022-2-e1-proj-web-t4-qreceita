# Especificações do Projeto

<span style="color:red">Pré-requisitos: <a href="1-Documentação de Contexto.md"> Documentação de Contexto</a></span>

A definição exata do problema e os pontos mais relevantes a serem tratados neste projeto foi consolidada com a participação dos usuários em um trabalho de imersão feita pelos membros da equipe a partir da observação dos usuários em seu local natural e por meio de entrevistas. Os detalhes levantados nesse processo foram consolidados na forma de personas e histórias de usuários.

## Personas

As personas levantadas durante o processo de entendimento do problema são apresentadas na Figuras que se seguem.

Larissa Cunha tem 21 anos, é graduanda em Psicologia e atualmente faz estágio em uma clínica no centro da cidade de Belo Horizonte. Suas principais motivações são: ter uma alimentação que lhe traga uma vida mais saudável e gastar menos dinheiro com fast food. Como frustrações, ela não tem criatividade para cozinhar e acaba comendo fast food, o que não é saudável e ainda a faz gastar muito dinheiro diariamente com comida. Uma outra frustração apontada por ela é a dependência do auxílio de outras pessoas para o preparo de refeições. Larissa tem como Hobbies ver filmes, ler e andar de bike. Os aplicativos que ela mais utiliza são: Instagram, Pinterest, Twitter.

Vinicius Tadashi tem 41 anos, é professor universitário e atualmente trabalha em dois turnos e vive com suas duas filhas, uma de 10 e outra de 8 anos. Suas motivações são: fornecer uma alimentação saudável para a família e aproveitar alimentos esquecidos na geladeira para evitar desperdícios e assim promovendo economia financeira. Sua frustração é a falta de criatividade no preparo das refeições para suas filhas. Como Hobbies ele gosta de praticar tênis e passear com as filhas. Seus aplicativos mais usados são: Facebook, LinkedIn e Youtube.

Samanta Mendes tem 29 anos, é formada em Gastronomia, faz estágio em um restaurante de renome da sua cidade. Em seu tempo livre, grava vídeos curtos no TikTok com receitas descomplicadas e simples de fazer (ou, descomplicando receitas mais elaboradas que prepara no seu trabalho). Suas motivações sao: Compartilhar seus conhecimentos adquiridos na Universidade e em seu Estágio com o público e mostrar que é possível adaptar receitas “chiques” com alimentos simples que se tem em casa. Como frustrações ela diz não ter amigos/familiares que apreciem culinária como ela. Seus Hobbies são: ler, testar novas receitas e gravar vídeos para redes sociais.

## Histórias de Usuários

A partir da compreensão do dia a dia das pessoas identificadas para o projeto, foram registradas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Larissa Cunha       | ter acesso a receitas disponíveis  | para facilitar minha alimentação no    |
|                    | com base nos ingredientes que      | dia-a-dia                              |
|                    | possuo (RF-03, RF-05)              |                                        | 
|                    |                                    |                                        |     
|Samanta Mendes      | ter acesso a um mecanismo de       | para dar um feedback das receitas que  |
|                    | avaliação de receitas (RF-07,RF-09)| recebi e acompanhar as receitas mais   |
|                    | possuo (RF-03, RF-05)              | bem avaliadas.                         |
|                    |                                    |                                        |
|Samanta Mendes      | incluir novas receitas (RF-08)     | para compartilhar meus conhecimentos   |
|                    |                                    | gastronômicos                          |
|                    |                                    |                                        |
|Larissa Cunha       | manter um registro de receitas     | visualizar depois e manter um histórico|
|                    | favoritas (RF-04).                 | das receitas salvas para acessar       |
|                    |                                    | posteriormente                         |
|                    |                                    |                                        |
|Vinicius Tadashi    | fazer comentários em receitas de   | para trocar experiências com outras    |
|                    | terceiros. (RF-06)                 | pessoas.                               |
|                    |                                    |                                        |    
|Larissa Cunha       | poder aplicar um filtro quanto a   | adaptar minhas pesquisas de acordo com |
|                    | dificuldade da elaboração das      | o nível da minha experiência           |
|                    | receitas (RF-02)                   |                                        |
|                    |                                    |                                        |
|Larissa Cunha       | ter um link de compartilhamento de | compartilhar externamente as minhas    |
|                    | receitas (RF-10)                   | receitas favoritas com outras pessoas  |
|                    |                                    |                                        |
|Vinicius Tadashi    | ter acesso a sugestões de receitas | ter mais opções de receitas além das   |
|                    | com todos ou parte dos ingredientes| que envolvem apenas os ingredientes    |
|                    | informados na busca (RF-03)        | informados                             |
|                    |                                    |                                        |
|Samanta Mendes      | acessar o sistema com o meu login  | ter um registro e acesso mais completo |
|                    | (RF-01)                            | no site                                |

Apresente aqui as histórias de usuário que são relevantes para o projeto de sua solução. As Histórias de Usuário consistem em uma ferramenta poderosa para a compreensão e elicitação dos requisitos funcionais e não funcionais da sua aplicação. Se possível, agrupe as histórias de usuário por contexto, para facilitar consultas recorrentes à essa parte do documento.

> **Links Úteis**:
> - [Histórias de usuários com exemplos e template](https://www.atlassian.com/br/agile/project-management/user-stories)
> - [Como escrever boas histórias de usuário (User Stories)](https://medium.com/vertice/como-escrever-boas-users-stories-hist%C3%B3rias-de-usu%C3%A1rios-b29c75043fac)
> - [User Stories: requisitos que humanos entendem](https://www.luiztools.com.br/post/user-stories-descricao-de-requisitos-que-humanos-entendem/)
> - [Histórias de Usuários: mais exemplos](https://www.reqview.com/doc/user-stories-example.html)
> - [9 Common User Story Mistakes](https://airfocus.com/blog/user-story-mistakes/)

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001| Permitir que o usuário cadastre tarefas | ALTA | 
|RF-002| Emitir um relatório de tarefas no mês   | MÉDIA |


### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O sistema deve ser responsivo para rodar em um dispositivos móvel | MÉDIA | 
|RNF-002| Deve processar requisições do usuário em no máximo 3s |  BAIXA | 

Com base nas Histórias de Usuário, enumere os requisitos da sua solução. Classifique esses requisitos em dois grupos:

- [Requisitos Funcionais
 (RF)](https://pt.wikipedia.org/wiki/Requisito_funcional):
 correspondem a uma funcionalidade que deve estar presente na
  plataforma (ex: cadastro de usuário).
- [Requisitos Não Funcionais
  (RNF)](https://pt.wikipedia.org/wiki/Requisito_n%C3%A3o_funcional):
  correspondem a uma característica técnica, seja de usabilidade,
  desempenho, confiabilidade, segurança ou outro (ex: suporte a
  dispositivos iOS e Android).
Lembre-se que cada requisito deve corresponder à uma e somente uma
característica alvo da sua solução. Além disso, certifique-se de que
todos os aspectos capturados nas Histórias de Usuário foram cobertos.

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| Não pode ser desenvolvido um módulo de backend        |


Enumere as restrições à sua solução. Lembre-se de que as restrições geralmente limitam a solução candidata.

> **Links Úteis**:
> - [O que são Requisitos Funcionais e Requisitos Não Funcionais?](https://codificar.com.br/requisitos-funcionais-nao-funcionais/)
> - [O que são requisitos funcionais e requisitos não funcionais?](https://analisederequisitos.com.br/requisitos-funcionais-e-requisitos-nao-funcionais-o-que-sao/)
