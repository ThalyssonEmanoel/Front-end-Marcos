const url = "http://localhost:3000"
const tabela = document.querySelector("#tabela")

let reservas = []

function ListarReservas() {
    fetch(`${url}/reservas`)
        .then(response  => { return response.json() })
        .then(response => reservas = response)
        .catch(error => console.log(error))
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
          </tr>
          ${reservas
            .map(
              (reserva) =>
                `
              <tr>
              <td>${reserva.id}</td>
              <td>${reserva.sala}</td>
              </tr>
              `
            )
            .join("")}
      </table>
      `;
  }
ListarReservas()
