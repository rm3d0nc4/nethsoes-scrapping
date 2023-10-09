# Teste - Netshoes Scrapping
Este readme descreve o web scrapper construído para o site da [Netshoes]( www.netshoes.com.br).

## Desafio
O desafio consiste em realizar uma requisição em uma página de um produto, pegar o html e extrair informações deste produto (título, preço, imagem, descrição).
- Exemplo: A requisição neste [Produto](https://www.netshoes.com.br/camiseta-dc-shoes-square-star-masculina-preto-PFI-3243-006) deve retornar os seguintes dados:
![enter image description here](https://github.com/rm3d0nc4/nethsoes-scrapping/blob/main/images/netshoes-pagina-produto.png)
	- **Título**:  Camiseta DC Shoes Square Star Masculina - Preto
	- **Preço**: 64.99
	- **Imagem**: https://static.netshoes.com.br/produtos/camiseta-dc-shoes-square-star-masculina/06/PFI-3243-006/PFI-3243-006_zoom1.jpg?ts=1695613462&ims=544x
	- **Descrição**: Em modelagem oversized e com estampa exclusiva, a camiseta masculina DC Shoes Square Star leva a atitude do skate style ao seu visual. Além disso, é uma opção prática e confortável para aproveitar diferentes momentos, do dia a dia ao lazer. Garanta a sua!

## Solução

A solução construída consiste em um projeto desenvolvido em NodeJs, que possui as seguintes dependências:

- [puppeteer](https://www.npmjs.com/package/puppeteer): Biblioteca Node.js que permite controlar e automatizar navegadores da web, como o Google Chrome, para realizar tarefas como navegação, captura de tela, interação com páginas da web e testes automatizados. É amplamente utilizado para desenvolvimento web e automação de tarefas em navegadores.
- [promt-sync](https://www.npmjs.com/package/prompt-sync): Biblioteca JavaScript que permite solicitar entrada do usuário pelo prompt de comando.
- [ts-node-dev](https://www.npmjs.com/package/ts-node-dev): Biblioteca que auxilia na execução de códigos escritos em Typescript. Oferece uma séria de funcionalidades, como transpiração eficiente, reinicialização automática, entre outras.

A estrutura do projeto é a seguinte:
```
📦src 
 ┣ 📂contracts
 ┃ ┗ 📜scrapping_service.ts
 ┣ 📂exceptions
 ┃ ┗ 📜invalid_url_exception.ts
 ┣ 📂models
 ┃ ┗ 📜product.ts
 ┣ 📂services
 ┃ ┗ 📜scrapping_service_impl.ts
 ┗ 📜index.ts

```

## Teste

Para tesar o projeto, basta executar as seguintes instruções:

1. Clonar o projeto e instalar dependências
```
git clone 
cd nome
yarn
```

2. executar projeto utilizando a através da seguinte instrução:
```
yarn dev
```

Como isso as seguintes mensagem deve ser visualizada no terminal:
![enter image description here](https://github.com/rm3d0nc4/nethsoes-scrapping/blob/main/images/terminal1.png)

Ao inserir um link de produto, um resultado será devolvido:
![enter image description here](https://github.com/rm3d0nc4/nethsoes-scrapping/blob/main/images/terminal2.png)

