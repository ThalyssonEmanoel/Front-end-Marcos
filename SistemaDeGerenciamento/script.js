let inputtarefa = document.querySelector("#tarefa");
let inputAno = document.querySelector("#ano");
let inputSubmit = document.querySelector("#addTarefa");
let conteudoTabela = document.querySelector("#conteudoTabela");
let mensagem=document.querySelector("#mensagem")
let inputExcluir=document.querySelector("#btnExcluirtarefa")

getTarefas();
renderizarTabela();
function getTarefas() {
    tarefas=JSON.parse(localStorage.getItem
        ("tarefas")) ||[]
}

function settarefas() {
    localStorage.setItem("tarefas",JSON.stringify(tarefas))
}

function formatarData(data) {
    const [ano, mes, dia] = data.split('-');
    return `${dia}/${mes}/${ano}`;
}

function AddTarefa(tarefa, autor, ano) {
    let tarefa = {
        tarefa: tarefa,
        autor: autor,
        ano: formatarData(ano)
    };
    tarefas.push(tarefa);
    settarefas();
    mostrarMensagem("DSFSGDS")
}



inputSubmit.addEventListener('click', function(e) {
    e.preventDefault();
    AddTarefa(inputtarefa.value, inputAno.value);
    limparFormulario();
    renderizarTabela();
});

function limparFormulario() {
    inputtarefa.value = "";
    inputAno.value = "";
    inputtarefa.focus();
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
    
        .segundo{
        background-color:white;
        }

        .segundo:hover {
            background-color: #1C6E8C;
            color:white
        }
    </style>

    <table>
        <tr>
            <th>Tarefa</th>
            <th>Data de conclusão</th>    
        </tr>
        ${tarefas.map(tarefa =>
            `<tr class=segundo>
            <td>${tarefa.tarefa}</td>
            <td>${tarefa.ano}</td>
            </tr>`
        ).join('')}
    </table>
    `;
}

function mostrarMensagem(texto) {
    
    mensagem.style.display='block'
    mensagem.innerHTML=texto

    setTimeout(() => {
        mensagem.style.display="none"
        mensagem.innerHTML=''
    },3000 );
}