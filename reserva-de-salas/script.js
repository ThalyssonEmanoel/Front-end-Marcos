const atividade = document.querySelector("#atividade");
const sala = document.querySelector("#sala");
const dataInicial = document.querySelector("#data_inicial");
const dataFinal = document.querySelector("#data_final");
const btnReservar = document.querySelector("#btnReservar");
const tabela = document.querySelector("#tabela");

const reservas = [];

function addReserva(atividade, sala, dataInicial, dataFinal) {
  const reserva = {
    atividade: atividade,
    sala: sala,
    dataInicial: new Date(dataInicial),
    dataFinal: new Date(dataFinal),
  };
  reservas.push(reserva);
  renderizarTabela();
}

function renderizarTabela() {
  tabela.innerHTML = `
<style>
    :root{
    --azul:#2caeff;;
    --branco:white;
    --cinza:grey;
    }

    table {
        width: 100%;
        border-collapse: collapse; /* Remove espaçamento entre as células */
        margin: 20px 0; /* Adiciona margem acima e abaixo da tabela */
    }

    th {
        background-color: var(--azul); /* Cor de fundo verde escuro */
        color: white; /* Cor do texto branco */
        padding: 10px; /* Adiciona espaçamento interno */
        text-align: left; /* Alinha o texto à esquerda */
        border: 1px solid var(--cinza); /* Adiciona borda leve */
    }

    td {
        padding: 10px; /* Adiciona espaçamento interno */
        border: 1px solid var(--cinza); /* Adiciona borda leve */
        text-align: left; /* Alinha o texto à esquerda */
    }

    tr:nth-child(even) {
        background-color: var(--branco); /* Cor de fundo cinza claro para linhas pares */
    }

    tr:first-child {
        border-top: 2px solid var(--azul); /* Adiciona uma borda superior verde escuro ao cabeçalho */
    }

    tr:hover {
        background-color: var(--cinza); /* Cor de fundo cinza claro */
    }
</style>

    <table>
        <tr>
            <th>Atividade</th>
            <th>Sala</th>
            <th>Data de início</th>
            <th>Data de fim</th>
        </tr>
        ${reservas
          .map(
            (reserva) =>
              `
            <tr>
            <td>${reserva.atividade}</td>
            <td>${reserva.sala}</td>
            <td>
            ${getDataFormatada(reserva.dataInicial)}
            </td>
            <td>
            ${getDataFormatada(reserva.dataFinal)}
            </td>
            </tr>
            `
          )
          .join("")}
    </table>
    `;
}

function getDataFormatada(data) {
  return `${data.getDate()}/${
    data.getMonth() + 1
  }/${data.getFullYear()} - ${data.getHours()}:${data.getMinutes()}`;
}

btnReservar.addEventListener("click", (e) => {
  e.preventDefault();
  addReserva(atividade.value, sala.value, dataInicial.value, dataFinal.value);
  console.log("Impri");
});
