var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";


var gameBoard = document.getElementById('game-board');





var createBoard = function() {

var boardDiv = getElementById("game-board");

for (var populate = 0; populate < 4; populate +=1){
	var cardDivs = document.createElement("div");
	cardDivs.className = ("card");
	boardDiv.appendChild(cardDivs)

}

createBoard()



//{if (cardOne === cardTwo) {
//	alert("Well done, you found a match!");
//}
//else if (cardThree === cardFour) { 
//	alert("Well done, you found a match!");
//} else  
//	alert("Sorry, try again.");
//}
