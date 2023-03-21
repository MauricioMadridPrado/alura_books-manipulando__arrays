// cria array vazia
let livros = [];
// Onde importa a lista
const endPointDaAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json'
// onde manipulamos ela
getBuscarLivrosDaAPI()

// onde vamos inserir os livros


// função que e pega os livros da lista
async function getBuscarLivrosDaAPI() {
    // Realiza a requisição
    // await é pra ele esperar finalizar a requisoção e orgfanizar, se não da ruim
    const res = await fetch(endPointDaAPI);
    // atribuiu a resposta da requisição numa variavel
    livros = await res.json()

    // pega a array e aplica um desconto com método map
    let livrosComDesconto = aplicarDesconto(livros)

    // onde vai criar a exibição dos livros
    exibirOsLivrosNaTela(livrosComDesconto)
}

