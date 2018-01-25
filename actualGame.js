var inquirer = require("inquirer");
var wordBank = require("./game.js");
var letterGuessed = require("./letter.js");
var words = require("./words.js");

var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var correctLetters = [];
var incorrectlyGuessed = [];
var wins;
var losses;

var game = {
	wordBank: game,
	guessesLeft: 8,
	currentWord : "",

	startGame : function(){
		this.guessesLeft = 8;

		//Select random word from words
		var j = Math.floor(Math.random() * this.wordBank.length);
    	this.currentWrd = this.wordBank[j];

    	console.log("Try to guess the US President!");

    	inquirer.prompt([
    	{
    		type: text,
    		name: answer,
    		message: "Try to guess the US President"
    	}
    	])

    startGame();
	}
}