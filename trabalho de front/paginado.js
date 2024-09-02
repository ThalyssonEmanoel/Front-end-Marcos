const url = "http://localhost:3000";
const tabela = document.querySelector("#tabela");
const page1 = document.querySelector("#pag1");
const page2 = document.querySelector("#pag2");
const page3 = document.querySelector("#pag3");
const page4 = document.querySelector("#pag4");
const page5 = document.querySelector("#pag5");

let produtos = [];
const produtosPorPagina = 3;

async function listarProdutos() {
    try {
        const response = await fetch(`${url}/produtos`);
        produtos = await response.json();
        renderizarTabela(1);  // Renderiza a primeira página por padrão
    } catch (error) {
        console.log('Erro ao listar produtos:', error);
    }
}

function renderizarTabela(pagina) {
    const inicio = (pagina - 1) * produtosPorPagina;
    const fim = inicio + produtosPorPagina;
    const produtosPagina = produtos.slice(inicio, fim);

    tabela.innerHTML = `
    <link rel="stylesheet" href="/assets/css/scriptcss.css">

    <table>
        <tr>
            <th>Nome</th>
            <th>Descrição</th>
            <th>Preço</th>
        </tr>
        ${produtosPagina
            .map(
                produto =>
                `
                <tr>
                <td>${produto.nome}</td>
                <td>${produto.descricao}</td>
                <td>${produto.preco}</td>
                </tr>
                `
            )
            .join("")}
    </table>
    `;
}

function configurarPaginas() {
    page1.addEventListener('click', () => renderizarTabela(1));
    page2.addEventListener('click', () => renderizarTabela(2));
    page3.addEventListener('click', () => renderizarTabela(3));
    page4.addEventListener('click', () => renderizarTabela(4));
    page5.addEventListener('click', () => renderizarTabela(5));
}

function run() {
    listarProdutos();
    configurarPaginas();
}

run();
