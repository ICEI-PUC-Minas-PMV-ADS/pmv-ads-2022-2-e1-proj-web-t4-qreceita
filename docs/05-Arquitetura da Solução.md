# Arquitetura da Solução

<span style="color:red">Pré-requisitos: <a href="04-Projeto de Interface.md"> Projeto de Interface</a></span>

Nesta seção são apresentados os detalhes técnicos da solução criada pela equipe, tratando dos componentes que fazem parte da solução e do ambiente de hospedagem da solução.

## Diagrama de componentes

Os componentes que fazem parte da solução são apresentados na Figura que se segue:

<div align="center">
  <img class="componentes" src="img/Arquitetura_de_Soluções.jpg">
</div>
<p align="center">Figura 15 - Arquitetura da Solução</p>

A solução implementada conta com os seguintes módulos:

<li>Navegador - Interface básica do sistema</li>
<br>
 <ul>
  <li>Páginas Web - Conjunto de arquivos HTML, CSS, JavaScript, imagens e gifs que implementam e compõem as funcionalidades do sistema.</li>
  <li>Local Storage - armazenamento mantido no diretório da aplicação, onde são implementados bancos de dados baseados em JSON. São eles:</li>
</ul>
    <ul>
        <ul>
          <li>Usuários - registro de informações (ID, nome, e-mail, senha, receitas favoritas, receitas postadas, redes sociais inseridas e informações adicionais) sobre os usuários cadastrados</li>
          <li>Comentários - registro de opiniões dos usuários sobre as receitas</li>
          <li>Receitas - lista de receitas e informações associadas (ingredientes, modo de preparo, avaliações, porções, imagem, tempo de preparo e usuário)</li>
        </ul>
    </ul>
    
<li>Hospedagem - local na Internet onde as páginas são mantidas e acessadas pelo navegador.</li>

## Tecnologias Utilizadas

Serão utilizadas na aplicação as seguintes tecnologias: JavaScript, HTML, CSS, Visual Studio Code.

## Hospedagem

O site utiliza a plataforma do Heroku como ambiente de hospedagem do site do projeto. O site é mantido no ambiente da URL:
 
https://link_exemplo.herokuapp.com
 
A publicação do site no Heroku é feita por meio de uma submissão do projeto (push) via git para o repositório remoto que se encontra no endereço:
https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-2-e1-proj-web-t4-qreceita
