
// função que calcula o total dos livros disponíveis
function calculaOValorTotalDeLivrosDisponiveis(livros) {
    return livros.reduce((acc, livro)=> acc + livro.preco,0)
}