let inputTarefa = document.querySelector("#tarefa");
let inputAno = document.querySelector("#ano");
let inputSubmit = document.querySelector("#btnAddTarefa");
let conteudoTabela = document.querySelector("#conteudoTabela");
let mensagem = document.querySelector("#mensagem");

let modalEditar = document.querySelector("#modalEditar");
let spanClose = document.querySelector(".close");
let btnConfirmarEdicao = document.querySelector("#btnConfirmarEdicao");
let btnCancelarEdicao = document.querySelector("#btnCancelarEdicao");
let inputEditTarefa = document.querySelector("#editTarefa");
let inputEditAno = document.querySelector("#editAno");
let inputEditIndex = document.querySelector("#editIndex");

let tarefas = [];

getTarefas();
renderizarTabela();

function getTarefas() {
    tarefas = JSON.parse(localStorage.getItem("tarefas")) || [];
}

function setTarefas() {
    localStorage.setItem("tarefas", JSON.stringify(tarefas));
}

function formatarData(data) {
    const [ano, mes, dia] = data.split('-');
    return `${dia}/${mes}/${ano}`;
}

function addTarefa(tarefa, ano) {
    let novaTarefa = {
        tarefa: tarefa,
        ano: formatarData(ano)
    };
    tarefas.push(novaTarefa);
    setTarefas();
    mostrarMensagem("Tarefa adicionada com sucesso!");
}

inputSubmit.addEventListener('click', function(e) {
    e.preventDefault();
    addTarefa(inputTarefa.value, inputAno.value);
    limparFormulario();
    renderizarTabela();
});

function excluirTarefa(index) {
    tarefas.splice(index, 1);
    setTarefas();
    mostrarMensagem("Tarefa excluída com sucesso!");
    renderizarTabela();
}

function editarTarefa(index) {
    inputEditTarefa.value = tarefas[index].tarefa;
    inputEditAno.value = tarefas[index].ano.split('/').reverse().join('-');
    inputEditIndex.value = index;
    modalEditar.style.display = "block";
}

function confirmarEdicao() {
    let index = inputEditIndex.value;
    tarefas[index].tarefa = inputEditTarefa.value;
    tarefas[index].ano = formatarData(inputEditAno.value);
    setTarefas();
    mostrarMensagem("Tarefa editada com sucesso!");
    renderizarTabela();
    modalEditar.style.display = "none";
}

spanClose.onclick = function() {
    modalEditar.style.display = "none";
}

btnCancelarEdicao.onclick = function() {
    modalEditar.style.display = "none";
}

btnConfirmarEdicao.onclick = function() {
    confirmarEdicao();
}

window.onclick = function(event) {
    if (event.target == modalEditar) {
        modalEditar.style.display = "none";
    }
}

function limparFormulario() {
    inputTarefa.value = "";
    inputAno.value = "";
    inputTarefa.focus();
}

function renderizarTabela() {
    conteudoTabela.innerHTML =
    `
    <style>
        table {
            width: 560px;
            border-collapse: collapse;
            margin: 20px 0 0 0;
        }

        table, th, td {
            border: 1px solid #000000;
        }

        th, td {
            padding: 12px;
            text-align: left;
        }

        th {
            background-color: #f4f4f4;
            font-weight: bold;
        }

        tr:nth-child(even) {
            background-color: #f9f9f9;
        }
    
        .segundo {
            background-color: white;
        }

        .segundo:hover {
            background-color: #1C6E8C;
            color: white;
        }

        .btnExcluir {
            border: 1px solid black;
            border-radius: 5px; 
            padding: 5px 10px;
            cursor: pointer;
            background:white
        }

        .btnEditar {
            padding: 5px 10px;
            cursor: pointer;
            background-color: white;
            border: 1px solid black;
            border-radius: 5px; 
            margin-left: 5px;
            
        }

        .btnExcluir:hover {
            background-color: #ca0303;
            color:white;
        }

        .btnEditar:hover {
            background-color: darkblue;
            color:white
        }
    </style>

    <table>
        <tr>
            <th>Tarefa</th>
            <th>Data de conclusão</th>
            <th>Ações</th>    
        </tr>
        ${tarefas.map((tarefa, index) =>
            `<tr class="segundo">
                <td>${tarefa.tarefa}</td>
                <td>${tarefa.ano}</td>
                <td>
                    <button class="btnExcluir" onclick="excluirTarefa(${index})">Excluir</button>
                    <button class="btnEditar" onclick="editarTarefa(${index})">Editar</button>
                </td>
            </tr>`
        ).join('')}
    </table>
    `;
}

function mostrarMensagem(texto) {
    mensagem.style.display = 'block';
    mensagem.innerHTML = texto;

    setTimeout(() => {
        mensagem.style.display = "none";
        mensagem.innerHTML = '';
    }, 3000);
}
