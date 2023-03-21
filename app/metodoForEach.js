const elementoParaInserirLivros = document.getElementById('livros')
const elementoComValorTotalDeLivrosDisponiveis = document.getElementById('valor_total_livros_disponiveis')
// função que exibe os livros na tela
function exibirOsLivrosNaTela(listaDeLivros) {
    elementoComValorTotalDeLivrosDisponiveis.innerHTML = ''
    // zera a lista antes de completar ela
    elementoParaInserirLivros.innerHTML = ''

    // Pra cada livro dentro da listaDeLivros
    listaDeLivros.forEach((livro) => {

        // operador ternario para verificação de disponibilidade
        //       nome                 o que quero ver
            let disponibilidade = livro.quantidade > 0 ? 'livro__imagens' :'livros__imagens indisponivel'

        // insere 
        elementoParaInserirLivros.innerHTML +=
        // isso daqui
            `<div class="livro">
                <img class="${disponibilidade}"
                src="${livro.imagem}"
                alt="${livro.alt}" />
                <h2 class="livro__titulo">
                ${livro.titulo}
                </h2>
                <p class="livro__descricao">${livro.autor}</p>
                <p class="livro__preco" id="preco">R$${livro.preco.toFixed(2)}</p>
                <div class="tags">
                ${livro.categoria}
                </div>
            </div>`
    });
}

