const ano = document.getElementById('ano')
const dia = document.getElementById('dia')
const hora = document.getElementById('hora')
const minuto = document.getElementById('minuto')
const segundo = document.getElementById('segundo')
const timer = document.getElementById('timer')
const pergunta = document.getElementById('pergunta')
const botao = document.getElementById('botao')

function countDown(){
    var lancamento = document.getElementById("respostaData").value;
    
    const dataLance = new Date(lancamento) 
    const hoje = new Date()

    const segTotal = (dataLance - hoje)/1000;

    const finalAnos = Math.floor(segTotal / 60 / 60 / 24 / 365);
    const finalDias = Math.floor(segTotal / 60 / 60 / 24) % 365;
    const finalHoras = Math.floor(segTotal / 60 / 60 ) % 24; 
    const finalMinutos = Math.floor(segTotal / 60 ) % 60;
    const finalSegundos = Math.floor(segTotal) % 60
    
    ano.innerHTML = formatoTempo (finalAnos)
    dia.innerHTML = formatoTempo (finalDias)
    hora.innerHTML = formatoTempo (finalHoras)
    minuto.innerHTML = formatoTempo (finalMinutos)
    segundo.innerHTML = formatoTempo (finalSegundos)
}

function formatoTempo (tempo){
    return tempo < 10? `0${tempo}` : tempo;  
}

function enviar(){
    pergunta.style = "display: none"
    timer.style = "display: grid "
    botao.style = "display: flex"
}

function voltar() {
    pergunta.style = "display: flex"
    timer.style = "display: none "
    botao.style = "display: none"
}

countDown();
setInterval(countDown, 1000);