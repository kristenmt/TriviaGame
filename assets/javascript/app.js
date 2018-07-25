
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

        $("#timer").html("<h2>Time Remaining:  " + gameTime + "</h2>");
        if (gameTime < 1) {
            console.log("time's up!");
            clearInterval(timerGo);
            $("#timer").html("<h2>Time Remaining: " + gameTime + "</h2>");
            $("#quiz").hide();
           
    
        };
        
        
    }

    //function for user pressing done button prior to end of timer
    $("#done").on("click", function () {
        clearInterval(timerGo);
        $("#quiz").hide();
        console.log("user done");
    });
    //function for user running out of time
   
    //define correct answers for each question
//array of objects for questions answeres

// for (let index = 0; index < questions.length; index ++){
//     var question = questions[index];
//     var answer = questions[index].correctAnswer
// }
$("#quiz").on("click",function(){
    event.preventDefault();
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
    console.log(answer);
    if("correct" === answer1){
        correct++;
        console.log();
    }
});
    

  

    //display # correct

    //display # incorrect

    //display # unanswered

})