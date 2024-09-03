const url = "http://localhost:3000";
const tabela = document.querySelector("#tabela");
const page1 = document.querySelector("#pag1");
const page2 = document.querySelector("#pag2");
const page3 = document.querySelector("#pag3");
const page4 = document.querySelector("#pag4");
const page5 = document.querySelector("#pag5");

let produtos = [];
let pagina = 1;

renderizarTabela()

    page1.addEventListener('click', (e) =>{
        e.preventDefault();
        pagina = 1
        renderizarTabela()
    });
    page2.addEventListener('click', (e) => {
        e.preventDefault();
        pagina = 2
        renderizarTabela()
    });
    page3.addEventListener('click', (e) =>{
        e.preventDefault();
        pagina = 3
        renderizarTabela()
    });
    page4.addEventListener('click', (e) =>{
        e.preventDefault();
        pagina = 4
        renderizarTabela()
    });
    page5.addEventListener('click', (e) => {
        e.preventDefault();
        pagina = 5
        renderizarTabela()
    });

    async function listarProdutos(pagina) {
        const response = await fetch(`${url}/produtos?_page=${pagina}`);
        try {
            if (!response.ok) {
                throw new Error(`${response.status}`);
            }
            const json = await response.json();
            produtos = json.data; 
            console.log(produtos);
        } catch (error) {
            console.error(error.message);
        }
    }    

 async function renderizarTabela() {
    await listarProdutos(pagina);   

    tabela.innerHTML = `
    <link rel="stylesheet" href="/assets/css/scriptcss.css">

    <table>
        <tr>
            <th>Nome</th>
            <th>Descrição</th>
            <th>Preço</th>
        </tr>
        ${produtos.map((produto) =>
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
