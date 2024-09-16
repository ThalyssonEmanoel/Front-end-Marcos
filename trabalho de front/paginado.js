const url = "http://localhost:3000";
const tabela = document.querySelector("#tabela");
const paginacao = document.querySelector(".paginacao");

let produtos = [];
let qtdPaginas = 0;
let paginaAtual = 0;

async function listarProdutos(pagina = 1) {
    try {
        const response = await fetch(`${url}/produtos?_page=${pagina}`);
        if (!response.ok) {
            throw new Error(`${response.status}`);
        }
        const result = await response.json();
        produtos = result.data;
        qtdPaginas = result.pages; 
        result.next == null ? paginaAtual = result.prev + 1 : paginaAtual = result.next - 1;
    } catch (error) {
        console.error(error.message);
    }
}

async function excluirProduto(id) {
    try {
        const response = await fetch(`${url}/produtos/${id}`, {
            method: 'DELETE',
        });
        if (!response.ok) {
            throw new Error('Erro ao excluir o produto.');
        }
        console.log(`Produto com ID ${id} excluído.`);
        await listarProdutos(paginaAtual);
        renderizarTabela();
        renderizarPaginacao();
    } catch (error) {
        console.error(error.message);
    }
}

async function mudarPagina(pagina) {
    console.log(`Mudando para a página ${pagina}`);
    await listarProdutos(pagina);
    renderizarTabela();
    renderizarPaginacao();
}

function renderizarTabela() {
    tabela.innerHTML = `
    <link rel="stylesheet" href="./assets/css/scriptcss.css">
        <table>
            <tr>
                <th>Nome</th>
                <th>Descrição</th>
                <th>Preço</th>
                <th>Ações</th>
            </tr>
            ${produtos.map(produto =>
                `
                <tr>
                    <td>${produto.nome}</td>
                    <td>${produto.descricao}</td>
                    <td>${produto.preco}</td>
                    <td><img src="assets/img/lixeira.png" alt="Excluir" class="icon-delete" onClick="excluirProduto(${produto.id})"></td>
                </tr>
                `
            ).join("")}
        </table>
    `;
}

function renderizarPaginacao() {
    if (qtdPaginas > 0) {
        let p = "";
        for (let i = 1; i <= qtdPaginas; i++) {
            p += `<a href='#' onClick='mudarPagina(${i})' style="${i === paginaAtual ? 'background-color: #ccc;' : ''}">${i}</a> `;
        }
        paginacao.innerHTML = p;
    }
}

async function run() {
    await listarProdutos(); 
    renderizarPaginacao();
    renderizarTabela();
}

run();
