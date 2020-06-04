/*

1 = papel        
2 = pedra
3 = tesoura

papel WIN pedra
papel LOST tesoura

pedra WiN tesoura
pedra LOST papel

tesoura WIN papel
tesoura LOST pedra

1*1/3=0,3333--
1*2/3=0,6667
1*3/3=1

2*2/3=1,333--
2*3/3=2

3*3/3=3---
*/

function jogar() {
    var movimento = document.getElementById("winner");
    var player1 = document.getElementById("player1");
    var player2 = document.getElementById("player2");

    player1.src = "blank.jpg";
    player2.src = "blank.jpg";
    movimento.src = "blank.jpg";

    var game1 = Math.floor(Math.random() * 3) + 1;
    var game2 = Math.floor(Math.random() * 3) + 1;
    var winner = parseFloat((game1 * game2 / 3).toFixed(4));
/*  The first step will generate 2 random numbers;
    The var "winner" will receive the calculus as an float fixed with 5 numbers;*/

    switch (winner) {
        //Fazer aparecer os dois jogadores.
        //Adicionar counter
        //Vai pegar qual sinal foi feito, se empatou, ganhou ou perdeu e checar o game1/2 conforme o valor final
        case 0.3333:
            console.log("Empate: \n0.333");
            player1.src = "paper_draw.png";
            player2.src = "paper_draw.png";
            break;

        case 3:
            console.log("Empate: \n3");
            player1.src = "scissor_draw.png";
            player2.src = "scissor_draw.png";
            break;

        case 1.3333:
            console.log("Empate: \n1.333");
            player1.src = "rock_draw.png";
            player2.src = "rock_draw.png";
            break;

        case 0.6667:
            console.log("Papel: \n0.6667");
            movimento.src = 'paper.png';
            break;

        case 1:
            console.log("Tesoura: \n1");
            movimento.src = 'scissor.png';
            break;

        case 2:
            console.log("Pedra \n2");
            movimento.src = 'rock.png';
            break;

        default:
            console.log("Wait. What?");
    }



}


