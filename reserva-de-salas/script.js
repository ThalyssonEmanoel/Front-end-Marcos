const atividade = document.querySelector("#atividade");
const sala =  document.querySelector("#sala");
const dataInicial =  document.querySelector("#data_inicial");
const dataFinal =  document.querySelector("#data_final");
const btnReservar= document.querySelector("#btnReservar");

const reservas = []

function addReserva(atividade, sala, dataInicial, dataFinal){
    
    const reserva = {
        atividade:atividade,
        sala:sala,
        dataInicial:new Date(dataInicial),
        dataFinal:new Date(dataFinal),
    }
    reservas.push(reserva)
}
    btnReservar.addEventListener('click', (e) => {
    e.preventDefault()
    addReserva(
        atividade.value,
        sala.value,
        dataInicial.value,
        dataFinal.value
    )
    console.log("Impri");
    
})