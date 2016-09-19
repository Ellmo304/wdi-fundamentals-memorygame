var cardOne = document.getElementById('cardOneDiv').onclick=function() {
	document.getElementById('cardOneDiv').innerHTML = '<img src="Images/QOD.png"/>'
}

var cardTwo = document.getElementById("cardTwoDiv").onclick=function() {
	document.getElementById("cardTwoDiv").innerHTML = '<img src="Images/QOD.png"/>'
}

var cardThree = document.getElementById("cardThreeDiv").onclick=function() {
	document.getElementById("cardThreeDiv").innerHTML = '<img src="Images/KOD.png"/>'
}

var cardFour = document.getElementById("cardFourDiv").onclick=function() {
	document.getElementById("cardFourDiv").innerHTML = '<img src="Images/KOD.png"/>'
}

var gameBoard = document.getElementById("game-board");

var cardsInPlay = [];

var cards = ["queen", "queen", "king", "king"];



var createBoard = function() {
for (var i=0; i<cards.length; i++) {
	var cardElement = document.createElement("div");
	cardElement.className = ("card");
	gameBoard.appendChild(cardElement);

	{cardElement.setAttribute('data-card', cards[i])};
	cardElement.addEventListener('click', isTwoCards)
	if ('data-card' === "queen") {

				this.innerHTML = ('<img src="Images/QOD.png" alt="Queen of Diamonds"/>');

			} else if ('data-card' === "king") {

				this.innerHTML = ('<img src="Images/KOD.png" alt="King of Diamonds"/>');
			};
}
};


	createBoard();

var isMatch = function(cardsInPlay) {
	if (cards[i] === cards[i]) {
	alert("Well done, you found a match!");
}
else if (cards[i] === cards[i]) { 
	alert("Well done, you found a match!");
} else  {
	alert("Sorry, try again.");
}
	this.innerHTML = 'null'; 
};


var isTwoCards=function() {
	cardsInPlay.push(this.getAttribute('data-card'));
  if (cardsInPlay.length === 2) {
  	isMatch(cardsInPlay);
  }
  cardsInPlay = [];
}
