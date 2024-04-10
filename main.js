const dias_falta = document.querySelectorAll(".dias_restantes");

function caulcula (){
    const tempoObejetivo1 = new Date("2024-04-30T00:00:00");
    // const tempoObjetivo1 = new Date("2024-04-30T23:59:59");

    let tempoAtual = new Date();
    let tempoFinal = tempoObjetivo - tempoAtual;
    let segundos = Math.floor(tempoFinal / 1000);
    let minutos = Math.floor(segundos / 60);
    let horas = Math.floor(minutos / 60);
    let dias = Math.floor(horas / 24);
}