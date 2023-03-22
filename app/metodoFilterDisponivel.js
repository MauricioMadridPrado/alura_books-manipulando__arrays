// captura o botão que filtra os itens disponiveis
const btnFiltroDisponivel = document.getElementById('btnLivrosDisponiveis')
// coloca a ação de filtro no botão
btnFiltroDisponivel.addEventListener('click', ordenarSeDisponivel)
// função que filtra os livros disponíveis
function ordenarSeDisponivel() {
  // Onde filtra e exibe os livros disponíveis
  const livrosDisponiveis = livros.filter(livro => livro.quantidade > 0)
  exibirOsLivrosNaTela(livrosDisponiveis)
  const valorTotalDosLivrosDisponiveis = calculaOValorTotalDeLivrosDisponiveis(livrosDisponiveis);
  // onde faço a parte do valor total de livros aparecer
  elementoComValorTotalDeLivrosDisponiveis.innerHTML =
    `
      <div class="livros__disponiveis">
        <p>Todos os livros disponíveis por R$ <span id="valor">${valorTotalDosLivrosDisponiveis.toFixed(2)}</span></p>
      </div>
    `
}