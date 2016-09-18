var cardOne = document.getElementById("cardOne").onclick = function() {
	document.getElementById("cardOne").innerHTML = '<img src="Users/Elliot/desktop/Memory_Game/Images/QOD.png" alt="Queen of Diamonds"/>';
}

var cardTwo = document.getElementById("cardTwo").onclick = function() {
	document.getElementById("cardTwo").innerHTML = '<img src="Users/Elliot/desktop/Memory_Game/Images/QOD.png" alt="Queen of Diamonds"/>';
}

var cardThree = document.getElementById("cardThree").onclick = function() {
	document.getElementById("cardThree").innerHTML = '<img src="Users/Elliot/desktop/Memory_Game/Images/KOD.png" alt="King of Diamonds"/>';
}

var cardFour = document.getElementById("cardFour").onclick = function() {
	document.getElementById("cardFour").innerHTML = '<img src="Users/Elliot/desktop/Memory_Game/Images/KOD.png" alt="King of Diamonds"/>';
}



var gameBoard = document.getElementById("game-board");

var cards = ["queen", "queen", "king", "king"];

var cardsInPlay = [];


var isTwoCards = function() {
	cardsInPlay.push(this.getAttribute("data-card"));
  if (cardsInPlay.length === 2) {
  	isMatch(cardsInPlay);
  }
  {cardsInPlay = [];
}
if (this.getAttribute('data-card') === "queen" || this.getAttribute('data-card') === "queen") {

				this.innerHTML = ('<img src="Users/Elliot/desktop/Memory_Game/Images/QOD.png" alt="Queen of Diamonds"/>');

			} else if (this.getAttribute("data-card") === "king" || this.getAttribute("data-card") === "king") {

				this.innerHTML = ('<img src="Users/Elliot/desktop/Memory_Game/Images/KOD.png" alt="King of Diamonds"/>');
			}

		}
};




var createBoard = function() {

for (var populate = 0; populate < cards.length; populate ++) {
	var cardElement = document.createElement("div");
	cardElement.className = ("card");
	gameBoard.appendChild(cardElement);
	{cardElement.setAttribute("data-card", cards[populate])};
	cardElement.addEventListener("click", isTwoCards);
}
};




var isMatch = function() {
	if (cards[0] === cards[1]) {
	alert("Well done, you found a match!");
}
else if (cards[2] === cards[3]) { 
	alert("Well done, you found a match!");
} else  {
	alert("Sorry, try again.");
}
	this.innerHTML = "none"; }

createBoard();