// if user pick Cloze cards

var clozeCardJson = require("./clozeCardJson.js");
// var basicJson = require("./basicJson.js");
// var BasicCard = require("./BasicCard.js");
var inquirer = require("inquirer");
// var fs = require("fs");
var readlineSync = require('readline-sync');
var correct = 0;
var wrong = 0;


// The constructor should accept two arguments: text and cloze.

var ClozeCard = function (text, cloze) {
    this.text = text;
    this.cloze = cloze;
}

var clozeChoiceCards = function() {
    var createCards1 = function() {
        var arrayCard1 =[];
        for (var i=0; i<clozeCardJson.length; i++) {
            arrayCard1.push(new ClozeCard(clozeCardJson[i].text, clozeCardJson[i].cloze));
        }
        return arrayCard1
    }
    
    var cardsCloze = createCards1();

    for (var i=0; i<cardsCloze.length; i++) {
        var userAnswer1 = readlineSync.question( cardsCloze[i].text );
        if (userAnswer1.toLowerCase() === cardsCloze[i].cloze.toLowerCase()) {
            console.log("Your answer is correct");
            correct++;
        }else{
            console.log("Sorry, your answer is wrong");
            wrong++;
        }
    } 
    
    var quizOver1 = function() {
        console.log("Correct answers: " + correct + ". " + "Wrong answers: " + wrong + ".");
    }
    quizOver1();
}

clozeChoiceCards();

module.exports = ClozeCard;