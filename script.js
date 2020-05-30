let num = window.document.querySelector("input#fnum");



/*
1 = papel        
2 = pedra
3 = tesoura

papel + papel = 2
pedra + pedra = 4
tesoura + tesoura = 6

papel + pedra = 3
papel + tesoura = 4


*/

function jogar(){
    var game1 = Math.floor(Math.random() * 3) + 1;
    var game2 = Math.floor(Math.random() * 3) + 1;
    console.log(game1, game2);

    

}


//<img src="papel.jpg" height="200px" width="200px"></img>