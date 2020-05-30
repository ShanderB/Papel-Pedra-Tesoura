



/*

1 = papel        
2 = pedra
3 = tesoura

1*1/3=0,3333
1*2/3=0,6667
1*3/3=1

2*2/3=1,333
2*3/3=2

3*3/3=3
*/

function jogar() {
    let move = document.getElementById("abc");
    var game1 = Math.floor(Math.random() * 3) + 1;
    var game2 = Math.floor(Math.random() * 3) + 1;
    var winner = parseFloat((game1 * game2 / 3).toFixed(4));
/*  The first step will generate 2 random numbers;
    The var "winner" will receive the calculus as an float fixed with 5 numbers;*/

    switch (winner) {
        
        case 0.3333:
            console.log("Empate: \n0.333");
            break;

        case 3:
            console.log("Empate: \n3");
            break;

        case 1.3333:
            console.log("Empate: \n1.333");
            break;

        case 0.6667:
            console.log("Papel: \n0.6667");
            move.src = "papel.jpg"
            break;

        case 1:
            console.log("Tesoura: \n1");
            break;

        case 2:
            console.log("Pedra \n2");
            break;

        default:
            console.log("Wait. What?" + a);
    }



}


//<img src="papel.jpg" height="200px" width="200px"></img>