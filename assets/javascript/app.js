/*var quizQuestions = [
    {
        question: "In the movie 'Bridesmaids', in what city was Lillian's ill-fated bachelor party supposed to take place?",
        choices: ["Paris", "Las Vegas", "Chicago", "Miami"],
        answer: 1
    }, 
    {
        question: "In the movie 'Legally Blonde', what is Warner's nickname for Elle?",
        choices: ["Buttercup", "Snookums", "Pooh Bear", "Pookie"],
        answer: 2
    },
    {
        question: "In the movie 'Mean Girls', what was the date when Aaron asked Cady what day it was?",
        choices: ["October 3rd", "January 28th", "March 28th", "June 16th"],
        answer: 0
    },
    {
        question: "In 'Forgetting Sarah Marshall', Peter has the idea to write a musical about what?",
        choices: ["Big Foot", "Crippling Depression", "Rabbits", "Dracula"],
        answer: 3
    }
]*/

/*var question1 = "In the movie 'Bridesmaids', in what city was Lillian's ill-fated bachelor party supposed to take place?";
var question2 = "In the movie 'Legally Blonde', what is Warner's nickname for Elle?";
var question3 = "In the movie 'Mean Girls', what was the date when Aaron asked Cady what day it was?";
var question4 = "In 'Forgetting Sarah Marshall', Peter has the idea to write a musical about what?"

var quizQuestions = [question1, question2, question3, question4];

var choices1 = ["Paris", "Las Vegas", "Chicago", "Miami"];
var choices2 = ["Buttercup", "Snookums", "Pooh Bear", "Pookie"];
var choices3 = ["October 3rd", "January 28th", "March 28th", "June 16th"];
var choices4 = ["Big Foot", "Crippling Depression", "Rabbits", "Dracula"];

var quizChoices = [choices1, choices2, choices3, choices4];
var answers = [choices1[1], choices2[2], choices3[0], choices4[3]];*/


var running = false;
var time = 16;



$(document).ready(function() {
    $("#timer-div").hide();
    $("#quiz-div").hide();
    $("#done").hide();
    $("#message1").hide();
    $("#results").hide();
    $("#playAgain").hide();
});

$("#start").click(function() {
  $("#timer-div").show();
  $("#quiz-div").show();
  $("#done").show();
  $("#title").hide();
  $("#start").hide();
  runTimer();
});

function runTimer(){
	if (!running) {
	intervalId = setInterval(decrement, 1000); 
	running = true;
    }
}

function decrement() {
    time--;
    $("#timer-div").text("Time Left: " + time);
    if (time === -1) {
        console.log("timeup");
        var timeUp = $("<h2>");
        timeUp.text("Time's Up! Refresh your browser to try again!");
        $("#results").append(timeUp);
        $("#timer-div").hide();
        $("#quiz-div").hide();
        $("#done").hide();
        $("#message1").hide();
        $("#results").show();
        $("#playAgain").hide();
    };
}

var correct = 0;
var incorrect = 0;

$('#done').click(function() {
    if($('#las-vegas').is(':checked')) {
    correct++;
    console.log("correct: " + correct);
} else {
    incorrect++;
    console.log("incorrect: " + incorrect);
}
});

$('#done').click(function() {
    if($('#pooh-bear').is(':checked')) {
    correct++;
    console.log("correct: " + correct);
} else {
    incorrect++;
    console.log("incorrect: " + incorrect);
}
});

$('#done').click(function() {
    if($('#october-3').is(':checked')) {
    correct++;
    console.log("correct: " + correct);
} else {
    incorrect++;
    console.log("incorrect: " + incorrect);
}
});

$('#done').click(function() {
    if($('#dracula').is(':checked')) {
    correct++;
    console.log("correct: " + correct);
} else {
    incorrect++;
    console.log("incorrect: " + incorrect);
}
});

$('#done').click(function() {
    if($('#tiger').is(':checked')) {
    correct++;
    console.log("correct: " + correct);
} else {
    incorrect++;
    console.log("incorrect: " + incorrect);
}
});


$("#done").click(function() {
    $("#correct").text("Correct: " + correct);
    $("#incorrect").text("Incorrect/Unanswered: " + incorrect);
    $("#timer-div").hide();
    $("#quiz-div").hide();
    $("#done").hide();
    $("#message1").show();
    $("#results").show();
    $("#playAgain").show();
});



