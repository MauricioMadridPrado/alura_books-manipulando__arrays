// função que aplica desconto
function aplicarDesconto (livros) {
    // valor do desconto
    const desconto = 0.3;

    // metodo map, que pega a array e aplica algo a transformando e passando ela pra frente
    livrosComDesconto = livros.map (livro => {
        // retuorna todos os dados dos livros alterando apenas o preco
        return {...livro, preco: livro.preco - (livro.preco*desconto)}
 
    })
    // retorno do metodo map
    return livrosComDesconto
}