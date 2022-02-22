let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

let resultado = document.getElementById("resultado");

function calcular(){
    
    let adultos = inputAdultos.value;
    let criancas = inputAdultos.value;
    let duracao = inputDuracao.value;

    let qtdTotalCarne = carnePP(duracao) * adultos + (carnePP(duracao) / 2 * criancas);
    let qtdTotalBebidas = bebidasPP(duracao) * adultos + (bebidasPP(duracao) / 2 * criancas);
    let qtdTotalCerveja = cervejaPP(duracao) * adultos;

    resultado.innerHTML = `<p>${qtdTotalCarne / 1000} kg de Carne</p>`
    resultado.innerHTML += `<p>${Math.ceil(qtdTotalCerveja / 355)} latas de Cerveja</p>`
    resultado.innerHTML += `<p>${Math.ceil(qtdTotalBebidas / 2000)} pet's de Bebida</p>`

}

function carnePP(duracao){
    let carne = 400;
    if(duracao >= 6){
        return 650;
    }else{
        return 400;
    }
}
function cervejaPP(duracao){
    let carne = 400;
    if(duracao >= 6){
        return 2000;
    }else{
        return 1200;
    }
}
function bebidasPP(duracao){
    let carne = 400;
    if(duracao >= 6){
        return 1500;
    }else{
        return 1000;
    }
}