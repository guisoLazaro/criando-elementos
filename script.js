const elementoTitulo = document.createElement("h1")
const listaDeProdutos = document.createElement("div")
const tituloListaDeProdutos = document.createElement("h2")
const produtosDisponiveis = document.createElement("p")
const listaDeProdutosDisponiveis = document.createElement("ul")

let capturarBody = document.querySelector("body")

elementoTitulo.id  = "titulo"
elementoTitulo.innerText = "Produtos a venda"
tituloListaDeProdutos.innerText = "Lista de Produtos"
listaDeProdutos.id = "lista-produtos"
produtosDisponiveis.innerText = "Produtos disponiveis:"
listaDeProdutosDisponiveis.innerHTML = `
    <li>Televisão 40 polegadas</li>
    <li>Fogão 4 bocas</li>
    <li>Microondas</li>
    <li>Notebook</li>
    <li>Caixa de som</li>
`

capturarBody.appendChild(elementoTitulo)
capturarBody.appendChild(listaDeProdutos)
listaDeProdutos.appendChild(tituloListaDeProdutos)
listaDeProdutos.appendChild(produtosDisponiveis)
listaDeProdutos.appendChild(listaDeProdutosDisponiveis)
