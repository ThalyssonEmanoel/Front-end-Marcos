const url = "http://localhost:3000";
const tabela = document.querySelector("#tabela");
const Atividade = document.querySelector("#atividade");
const Sala = document.querySelector("#sala");
const dataInicial = document.querySelector("#data_inicial");
const dataFinal = document.querySelector("#data_final");
const btnReservar = document.querySelector("#btnReservar");

let reservas = [];

async function ListarReservas() {
    try {
        const response = await fetch(`${url}/reservas`);
        reservas = await response.json();
    } catch (error) {
        console.log('Erro ao listar reservas:', error);
    }
}

async function addReservar() {
    const reserva = {
        Atividade: Atividade.value,
        Sala: Sala.value,
        dataInicial: new Date(dataInicial.value),
        dataFinal: new Date(dataFinal.value)
    };

    try {
        const response = await fetch(`${url}/reservas`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(reserva)
        });

        if (response.ok) {
            console.log('Reserva adicionada com sucesso');
            await ListarReservas();
            renderizarTabela();
        } else {
            console.log('Erro ao adicionar reserva:', response.statusText);
        }
    } catch (error) {
        console.log('Erro na requisição:', error);
    }
}

async function run() {
    await ListarReservas();
    renderizarTabela();
}

run();

function renderizarTabela() {
    tabela.innerHTML = `
  <style>
      :root{
      --azul:#2caeff;
      --branco:white;
      --cinza:grey;
      }
  
      table {
          width: 100%;
          border-collapse: collapse;
          margin: 20px 0;
      }
  
      th {
          background-color: var(--azul);
          color: white;
          padding: 10px;
          text-align: left;
          border: 1px solid var(--cinza);
      }
  
      td {
          padding: 10px;
          border: 1px solid var(--cinza);
          text-align: left;
      }
  
      tr:nth-child(even) {
          background-color: var(--branco);
      }
  
      tr:first-child {
          border-top: 2px solid var(--azul);
      }
  
      tr:hover {
          background-color: var(--cinza);
      }
  </style>
  
      <table>
          <tr>
              <th>Atividade</th>
              <th>Sala</th>
          </tr>
          ${reservas
            .map(
              reserva =>
                `
              <tr>
              <td>${reserva.Atividade}</td>
              <td>${reserva.Sala}</td>
              </tr>
              `
            )
            .join("")}
      </table>
      `;
}
ListarReservas()