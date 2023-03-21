// captura o botão
const btnOrdenaListaPorPreco = document.getElementById('btnOrdenarPorPreco')
// toda vez que clica no botão faz a função
btnOrdenaListaPorPreco.addEventListener('click', ordenarListaDePrecos)
// função que ordena os precos
function ordenarListaDePrecos () {
    // const que recebe a lista de livros ordenada... nota que, preciso estabelecer após ela como ordenar, se não ela usa código unicode
    const livrosOrdenados = livros.sort((a,b) => a.preco - b.preco)
    // exibe os livros na tela
    exibirOsLivrosNaTela(livrosOrdenados)
}