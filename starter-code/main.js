console.log("JS file is connected to HTML! Woo!")

//var cardOne = "queen";
//var cardTwo = "queen";
//var cardThree = "king";
//var cardFour = "king";

var cards = ['queen', 'queen', 'king', 'king'];

var cardsInPlay = [];


	var createBoard = function() {
		var gameBoard = document.getElementById('game-board');
		for(i=0; i<cards.length, i++) {

			var newCard = document.createElement('div');

			newCard.className = 'card';

			newCard.setAttribute('data-card', cards[i]);

			newCard.addEventListener('click', isTwoCards);

			gameBoard.appendChild(newCard);
	}
}


createBoard();

var isMatch = function() {

}

isMatch();




function isTwoCards() {
	cardsInPlay.push(this.getAttribute('data-card'));

console.log(this.getAttribute('data-card'))
	if (this.getAttribute('data-card') === 'king') {
		this.innerHTML = "<img src='cards-157651_1280.png'>";
} else {
	this.innerHTML = "<img src='cards-157646_1280.png'>";
}
	if (cardsInPlay.length === 2){
		isMatch(cardsInPlay);

		cardsInPlay = [];
	}
}

function isMatch(cards) {
	if (cards[0] === cards[1]) {
		alert("You found a match!");
	} else {
		alert("Sorry, try again.");
	}
}