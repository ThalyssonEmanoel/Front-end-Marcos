const url = "http://localhost:3000";//<------post
const tabela = document.querySelector("#tabela");
const produtoInput = document.querySelector("#Produto");
const descricaoInput = document.querySelector("#descricao");
const precoInput = document.querySelector("#preco");
const btnAdicionar = document.querySelector("#btnReservar");

let produtos = [];

/** 
if (userinfo.cookies.agreed) {
    Collect(user.data)
} else {
    Collect(user.data)
}
*/

async function listarProdutos() {
    try {
        const response = await fetch(`${url}/produtos`);
        produtos = await response.json();
    } catch (error) {
        console.log('Erro ao listar produtos:', error);
    }
}

async function adicionarProduto() {
    const produto = {
        nome: produtoInput.value,
        descricao: descricaoInput.value,
        preco: parseFloat(precoInput.value) 
    };
    

    try {
        const response = await fetch(`${url}/produtos`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(produto)
        });

        if (response.ok) {
            console.log('Produto adicionado com sucesso');
            await listarProdutos();
            renderizarTabela();
        } else {
            console.log('Erro ao adicionar produto:', response.statusText);
        }
    } catch (error) {
        console.log('Erro na requisição:', error);
    }
}

async function run() {
    await listarProdutos();
    renderizarTabela();
}

run();

function renderizarTabela() {
    tabela.innerHTML = `
    <link rel="stylesheet" href="/assets/css/scriptcss.css">

    <table>
        <tr>
            <th>Nome</th>
            <th>Descrição</th>
            <th>Preço</th>
        </tr>
        ${produtos
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

btnAdicionar.addEventListener("click", adicionarProduto);


listarProdutos()