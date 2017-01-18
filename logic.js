

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
 		guessBlanks.push("_");
 }
console.log(guessBlanks);
//reprints guesses to 9
document.getElementById("guessesLeft").innerHTML = guessesLeft;
document.getElementById("letterBlanks").innerHTML = guessBlanks.join(" ");
document.getElementById("guessesLeft").innerHTML = wrongGuesses.join(" ");

}
// checkLettesr() function
// It's where we will do all of the comparisons for matches. Again, it's not being called here. It's just being made for future use.
function checkLetters(letter){
	//check to make sure guess is a letter and that its lowercase and its in thhe word, used in the future
var letterInWord = false; // true when in word

// Check if a leter exists inside the array at all.
	for (var i=0; i<blanks; i++) {
		if(chosenWord[i] == letter) {
			letterInWord = true; // if the letter exists then toggle this boolean to true. This will be used in the next step. 
 		}
	}
// If the letter exists somewhere in the word, then figure out exactly where (which indices)
	if(letterInWord){
	
		// loop through the word 
		for (var i=0; i<blanks; i++){

			// Populate the guessBlanks with every instance of the letter.
			if(randomGameWord[i] == letter) {
				guessBlanks[i] = letter; // here we set the specific space in blanks and letter equal to the letter when there is a match.
			}
		}
		console.log(guessBlanks); // logging for testing
	}else{
	wrongGuesses.push(letter); // then we add the letter to the list of wrong letters
		numGuesses--; // and we subtract one of the guesses
	}
}
// roundComplete() function
// Here we will have all of the code that needs to be run after each guess is made