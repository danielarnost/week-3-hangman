//global variables
var gameWords = ["clapton", "lennon", "johnson", "hendrix", "reinhardt", "vaughan", "berry", "iomi", "richards", "mitchell", "holmes", "raitt"];
// console.log(gameWords);	

var gameWordLetters = [];// breaks the chosen word into individual letters
var blanks = 0; // number of blanks for chosen Gameword
var wrongGuesses = [];//holds wrong guesses
var guessBlanks = [];//holds blanks and solved letters guesses during the game
var randomGameWord = ""; //solution (chosen game word makes up game) held here
//counters
var wins = 0;
var losses = 0;
var guessesLeft = 9; // guesses that decrement with a wrong guess 

function startGame() {
	//reset guesses back to 9
	guessesLeft = 9;
	//selects random word
	selectedWord = gameWords[Math.floor(Math.random() * gameWords.length)];
	// use .split to beak random Word into individual letters
	gameWordLetters = randomGameWord.split("");
	//produce number of blanks for letters in randomGameWord
    blanks = gameWordLetters.length;
    console.log(randomGameWord);
	guessBlanks = [];//reset after game
	wrongGuesses = [];
// Fill up the blanksAndSuccesses list with appropriate number of blanks. This is based on number of letters in solution
 for (i = 0; i < gameWords.length; i ++){

// }




};

