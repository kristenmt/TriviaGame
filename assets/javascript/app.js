
//var for quiz timer
var gameTime = 120;
//var for # of correct questions
var correctAnswers = 0;
//var for # of incorrect questions
var incorrectAnswers = 0;
//var for # of unanswered questions
var unAnswered = 0;
//to hold gametime for running timer
var timerGo;

$(document).ready(function(){
//hide quiz questions
$("#quiz").hide();

//click start button to begin the game and timer

$("#start-game").on("click", function() {
    
    $("#quiz").show();
    timerGo = setInterval(decrement, 1000);
    console.log("Game started");
  });
function decrement(){
    gameTime--;
    console.log("timer going");

$("#timer").html("<h2>Time Remaining:  " + gameTime + "</h2>");
}

//function for user pressing done button prior to end of timer
$("#done").on("click", function(){
    clearInterval(timerGo);
    $("#quiz").hide();
    console.log("user done");
});
//function for user running out of time
if (gameTime ==== -1){
    $("#quiz").hide();
    console.log("time's up!");
};
//define correct answers for each question

//if-else statements for checking each question and answer
// if (input.value == "correct"){
//     correctAnswers++;
//     console.log("answered correctly");
// }
// else if (input.value == "incorrect"){
//     incorrectAnswers++;
//     console.log("answered incorrectly");
// }
// else {
//     unAnswered++;
//     console.log("unanswered");
// }

//display # correct

//display # incorrect

//display # unanswered

})