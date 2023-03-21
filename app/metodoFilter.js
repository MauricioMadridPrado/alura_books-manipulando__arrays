// seleciona os botoes pela classe
botoes = document.querySelectorAll('.btn')
// pra cada botão tu da uma ação de click com uma função
botoes.forEach((botao)=> botao.addEventListener('click', filtraLista))
// ai tu cria a função
function filtraLista () {
    // propriedade que captura qual botão está sendo clicado
    const elementoBtn = document.getElementById(this.id)
    // onde tu separa somente o valor do botao que está sendo clicado
    const categoria = elementoBtn.value
    // onde faz o filtro, pra cada livro dentro de livros ele separa somente a mesma categoria
    const livrosFiltrados = livros.filter(livro => livro.categoria == categoria)
    // função que exibe os livros, que vem lá do metodo ForEach
    exibirOsLivrosNaTela(livrosFiltrados)
}