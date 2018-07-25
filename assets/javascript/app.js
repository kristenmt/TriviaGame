
//var for quiz timer
//var gameTime = 120;
//changed to 10 for testing purposes--change back to 120 when complete
var gameTime = 10;
//var for # of correct questions
var correctAnswers = 0;
//var for # of incorrect questions
var incorrectAnswers = 0;
//var for # of unanswered questions
var unAnswered = 0;
//to hold gametime for running timer
var timerGo;

$(document).ready(function () {
    //hide quiz questions
    $("#quiz").hide();

    //click start button to begin the game and timer

    $("#start-game").on("click", function () {

        $("#quiz").show();
        timerGo = setInterval(decrement, 1000);
        console.log("Game started");
        
        
    });
    function decrement() {
        gameTime--;
        console.log("timer going");
    //function for user running out of time

        $("#timer").html("<h2>Time Remaining:  " + gameTime + "</h2>");
        if (gameTime < 1) {
            console.log("time's up!");
            clearInterval(timerGo);
            $("#timer").html("<h2>Time Remaining: " + gameTime + "</h2>");
            $("#quiz").hide();
            gameResults();
        };
    }

    //function for user pressing done button prior to end of timer
    $("#done").on("click", function () {
        clearInterval(timerGo);
        $("#quiz").hide();
        gameResults();
        console.log("user done");
    });
   
    // for (let index = 0; index < questions.length; index++){
    //     var questions = questions[index];
    //     var answer = questions[index].correctAnswers;
    
//array of objects for questions and answers to be checked

// $("#quiz").on("click",function(){
//     event.preventDefault();
function gameResults(){
    var answer1 = $("input[name=q-1]:checked").val();
    var answer2 = $("input[name=q-2]:checked").val();
    var answer3 = $("input[name=q-3]:checked").val();
    var answer4 = $("input[name=q-4]:checked").val();
    var answer5 = $("input[name=q-5]:checked").val();
    var answer6 = $("input[name=q-6]:checked").val();
    var answer7 = $("input[name=q-7]:checked").val();
    var answer8 = $("input[name=q-8]:checked").val();
    var answer9 = $("input[name=q-9]:checked").val();
    var answer10 = $("input[name=q-10]:checked").val();
    console.log("answer");
   // results for question 1
    if("correct" === answer1){
        correctAnswers++;
        console.log("#1 is correct");
    }
    else if("incorrect" === answer1){
        incorrectAnswers++;
        console.log("#1 is incorrect");
    }
    else if (undefined === answer1){
        unAnswered++;
        console.log("#1 is unanswered");
    }
    // results for question 2
    if("correct" === answer2){
        correctAnswers++;
        console.log("#2 is correct");
    }
    else if("incorrect" === answer2){
        incorrectAnswers++;
        console.log("#2 is incorrect");
    }
    else if(undefined === answer2){
        unAnswered++;
        console.log("#2 is unanswered");
    }
    // results for question 3
    if("correct" === answer3){
        correctAnswers++;
        console.log("#3 is correct");
    }
    else if("incorrect" === answer3){
        incorrectAnswers++;
        console.log("#3 is incorrect");
    }
    else if(undefined === answer3){
        unAnswered++;
        console.log("#3 is unanswered");
    }
     // results for question 4
     if("correct" === answer4){
        correctAnswers++;
        console.log("#4 is correct");
    }
    else if("incorrect" === answer4){
        incorrectAnswers++;
        console.log("#4 is incorrect");
    }
    else if(undefined === answer4){
        unAnswered++;
        console.log("#4 is unanswered");
    }
     // results for question 5
     if("correct" === answer5){
        correctAnswers++;
        console.log("#5 is correct");
    }
    else if("incorrect" === answer5){
        incorrectAnswers++;
        console.log("#5 is incorrect");
    }
    else if(undefined === answer5){
        unAnswered++;
        console.log("#5 is unanswered");
    }
     // results for question 6
     if("correct" === answer6){
        correctAnswers++;
        console.log("#6 is correct");
    }
    else if("incorrect" === answer6){
        incorrectAnswers++;
        console.log("#6 is incorrect");
    }
    else if(undefined === answer6){
        unAnswered++;
        console.log("#6 is unanswered");
    }
     // results for question 7
     if("correct" === answer7){
        correctAnswers++;
        console.log("#7 is correct");
    }
    else if("incorrect" === answer7){
        incorrectAnswers++;
        console.log("#7 is incorrect");
    }
    else if(undefined === answer7){
        unAnswered++;
        console.log("#7 is unanswered");
    }
     // results for question 8
     if("correct" === answer8){
        correctAnswers++;
        console.log("#8 is correct");
    }
    else if("incorrect" === answer8){
        incorrectAnswers++;
        console.log("#8 is incorrect");
    }
    else if(undefined === answer8){
        unAnswered++;
        console.log("#8 is unanswered");
    }
     // results for question 9
     if("correct" === answer9){
        correctAnswers++;
        console.log("#9 is correct");
    }
    else if("incorrect" === answer3){
        incorrectAnswers++;
        console.log("#9 is incorrect");
    }
    else if(undefined === answer3){
        unAnswered++;
        console.log("#9 is unanswered");
    }
     // results for question 10
     if("correct" === answer10){
        correctAnswers++;
        console.log("#10 is correct");
    }
    else if("incorrect" === answer10){
        incorrectAnswers++;
        console.log("#10 is incorrect");
    }
    else if(undefined === answer10){
        unAnswered++;
        console.log("#10 is unanswered");
    }
}
});

    

  

    //display # correct

    //display # incorrect

    //display # unanswered

