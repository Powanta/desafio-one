//Desafio 1 DIO - Classificação de Heróis
//Desenvolva um código que classifique um herói de acordo com a quantidade de XP que ele possui.


//Declarando variáveis
let nomeDeHeroi = ""
let xpDeHeroi = 2500
let classificacao = ""

//Condicionais para classificar o herói
if (xpDeHeroi > 0) {
    if (xpDeHeroi <= 1000) {
        classificacao = "Ferro"
    }
    else if (xpDeHeroi >= 1001 && xpDeHeroi <= 2000) {
        classificacao = "Bronze"
    }
    else if (xpDeHeroi >= 2001 && xpDeHeroi <= 6000) {
        classificacao = "Prata"
    }
    else if (xpDeHeroi >= 6001 && xpDeHeroi <= 7000) {
        classificacao = "Ouro"
    }
    else if (xpDeHeroi >= 7001 && xpDeHeroi <= 8000) {
        classificacao = "Platina"
    }
    else if (xpDeHeroi >= 8001 && xpDeHeroi <= 9000) {
        classificacao = "Diamante"
    }
    else if (xpDeHeroi >= 9001 && xpDeHeroi <= 10000) {
        classificacao = "Ascendente"
    }
    else classificacao = "Radiante"

    console.log("O herói " + nomeDeHeroi + "está classificado como " + classificacao)

}
else {console.log("Entre com um valor de XP válido.")}