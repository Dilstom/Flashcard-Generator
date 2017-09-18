
// The constructor should accept two arguments: front and back.
// The constructed object should have a front property that contains the text on the front of the card.
// The constructed object should have a back property that contains the text on the back of the card.
// var clozeCardJson = require("./clozeCardJson.js");
// var ClozeCard = require("./ClozeCard.js");
var basicJson = require("./basicJson.js");
var BasicCard = require("./BasicCard.js");
var inquirer = require("inquirer");
// var fs = require("fs");
var readlineSync = require('readline-sync');
var correct = 0;
var wrong = 0;

// Blueprint / plan for creating a BasicCard
var BasicCard = function (front, back) {
    this.front = front;
    this.back = back;
}
module.exports = BasicCard;

var basicChoiceCards = function() {
    var createCards = function() {
        var arrayCard =[];
        for (var i=0; i<basicJson.length; i++) {
            arrayCard.push(new BasicCard(basicJson[i].front, basicJson[i].back));
        }
        return arrayCard
    }
    
    var cards = createCards()
    
    for (var i=0; i<cards.length; i++) {
        var userAnswer = readlineSync.question( cards[i].front )
            if (userAnswer.toLowerCase() ===cards[i].back.toLowerCase()) {
            console.log("Your answer is correct");
            correct++;
        }else{
            console.log("Sorry, your answer is wrong");
            wrong++;
        }
    }
    
    var quizOver = function() {
        console.log("Correct answers: " + correct + ". " + "Wrong answers: " + wrong + ".");
        }
        quizOver();
    }
    
    //call function
    basicChoiceCards();