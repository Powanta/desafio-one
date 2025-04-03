let nomeDeHeroi = ""
let xpDeHeroi = 2
let classificacao = ""

    if (xpDeHeroi <= 1000) {
        classificacao = "Ferro"
    }
    else if (xpDeHeroi >= 1001 && xpDeHeroi <= 2000) {
        classificacao = "Bronze"
    }
    else if (xpDeHeroi >= 2001 && xpDeHeroi <= 5000){
        classificacao = "Prata-Ouro"
    }
    else if (xpDeHeroi >= 5001 && xpDeHeroi <= 9000) {
        classificacao = "Platina-Diamante"
    }
    else if (xpDeHeroi >= 9001 && xpDeHeroi <= 10000) {
        classificacao = "Ascendente"
    }
    else classificacao = "Radiante"

    console.log("O herói " + nomeDeHeroi + "está classificado como " + classificacao)