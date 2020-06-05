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
1*3/3=1---

2*2/3=1,333--
2*3/3=2

3*3/3=3---
*/
let pointA = 0;
let pointB = 0;
function jogar() {
    var movimento = document.getElementById("winner");
    var player1 = document.getElementById("player1");
    var player2 = document.getElementById("player2");
    var point = document.getElementById("point");
    var pointE = document.getElementById("pointE");

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
        // separar o que vai imprimir o vencedor e o que definirá o vencedor
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
            if (game1 == 1) {
                pointA = pointA + 1;
                player1.src = "paper.png";
                player2.src = "rock.png";
                point.innerHTML = pointA;
            } else {
                player2.src = "paper.png";
                player1.src = "rock.png"
                pointB = pointB + 1;
                pointE.innerHTML = pointB;
            }

            break;

        case 1:
            console.log("Tesoura: \n1");
            if (game1 == 1) {
                pointA = pointA + 1;
                player1.src = "scissor.png";
                player2.src = "paper.png";
                point.innerHTML = pointA;
            } else {
                player2.src = "scissor.png";
                player1.src = "paper.png"
                pointB = pointB + 1;
                pointE.innerHTML = pointB;
            }
            break;

        case 2:
            console.log("Pedra \n2");
            if (game1 == 2) {
                pointA = pointA + 1;
                player1.src = "rock.png";
                player2.src = "scissor.png";
                point.innerHTML = pointA;
            } else {
                player2.src = "rock.png";
                player1.src = "scissor.png"
                pointB = pointB + 1;
                pointE.innerHTML = pointB;
            }
            break;

        default:
            console.log("Wait. What?");
    }



}


