var clozeCardJson = require("./clozeCardJson.js");
var ClozeCard = require("./ClozeCard.js");
var basicJson = require("./basicJson.js");
var BasicCard = require("./BasicCard.js");
var inquirer = require("inquirer");
// var fs = require("fs");
var readlineSync = require('readline-sync');
var correct = 0;
var wrong = 0;

console.log(basicJson);
console.log(clozeCardJson);
function userPrompt () {
    inquirer.prompt([{
      name: 'user',
      message: 'What Cards do you choose?',
      type: 'list',
      choices: [ { name: 'Basic Cards' }, { name: 'Cloze Cards' }, { name: 'Quit'}]
    }]).then(function(answer) {
      if ( answer.name === 'Basic Cards' ) {
        basicChoiceCards();
      } if ( answer.name === 'Cloze Cards' ) {
        clozeChoiceCards();
      } else if ( answer.name === 'Quit' ) {
          return;
      }
    });
  };

  userPrompt();
/*
    have out cards
    loop through cards,
     ask user question on front
     compare user answer with answer on back
*/
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
basicChoiceCards();

var clozeChoiceCards = function() {
    var createCards1 = function() {
        var arrayCard1 =[];
        for (var i=0; i<clozeCardJson.length; i++) {
            arrayCard1.push(new ClozeCard(clozeCardJson[i].text, clozeCardJson[i].cloze));
        }
        return arrayCard1
    }
    
    var cardsCloze = createCards1()
    console.log(cardsCloze);   
    for (var i=0; i<cardsCloze.length; i++) {
        var userAnswer1 = readlineSync.question( cardsCloze[i].text )
            if (userAnswer1.toLowerCase() ===cardsCloze[i].cloze.toLowerCase()) {
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