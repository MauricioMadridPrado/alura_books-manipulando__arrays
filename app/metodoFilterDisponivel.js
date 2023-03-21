const btnFiltroDisponivel = document.getElementById('btnLivrosDisponiveis')

btnFiltroDisponivel.addEventListener('click', ordenarSeDisponivel)

function ordenarSeDisponivel () {
    valor_total_livros_disponiveis.innerHTML = `    <div class="livros__disponiveis">
    <p>Todos os livros disponíveis por R$ <span id="valor">299,00</span></p>
  </div>`
    const livrosDisponiveis = livros.filter(livro => livro.quantidade > 0)
    exibirOsLivrosNaTela(livrosDisponiveis)
}