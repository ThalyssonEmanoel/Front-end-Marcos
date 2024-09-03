# Loja da fazendinha
 Esse projetinho consiste, basicamente, em um sistema de gerenciamento de produtos animais, no qual o usuário poderá adicionar produtos e também listar os mesmos.

## Principais funções:

- O usuário irá escolher o que irá fazer(Adicionar e listar produtos ou apenas Listar produtos paginados)
- `Adicionar e listar produtos`: Aqui o usuário poderá adicionar os produtos que ele quiser, os produtos os quais ele estiver adicionando irão aparecer na sua tela em forma de tabela. OBS: Apenas os produtos colocados na hora irão aparecer;
- `Listar produtos`: Irá para uma página a qual terá todos os produtos páginados de 5 em 5, ou seja, a primeira página da tabela terá apenas 5 elementos, a segunda terá mais 5 ou a quantidade restante, e assim por diante;

## Objetivo

 O objetivo desse projeto foi criar um projetinho, o qual criasse e armazenasse dados em uma tabela, o fato de existirem duas tabelas se dar pelo simples fato de facilitar o entendimento do que foi pedido pelo professor Marco.


 ## Código 

- `npx json-server dados.json`






async function renderizarTabela() {
    await fetchData(pagina);
    table.innerHTML =
    `<table>
        <thead>
            <tr>
                <th scope="col">Nome</th>
                <th scope="col">Idade</th>
                <th scope="col">Curso</th>
                <th scope="col">Email</th>
            </tr>
        </thead>
        <tbody>
            ${alunos.map((aluno) => `
                <tr>
                    <th scope="row">${aluno.nome}</th>
                    <td scope="row">${aluno.idade}</td>
                    <td scope="row">${aluno.curso}</td>
                    <td scope="row">${aluno.email}</td>
                </tr>
            `).join('')}
        </tbody>
    </table>