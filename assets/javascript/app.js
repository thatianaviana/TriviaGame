$(document).ready(function () {
    //when page first load, this code will hide the questions, the "done" button and the tally
    $("#gameOn").hide();
    $("#endGame").hide();
    $("#tally").hide();

    //variables for the game
    var timerCountDown = 60;
    var correct = 0;
    var incorrect = 0;
    var unanswered = 0;
    var intervalId;


    //CLICK EVENTS
    //clicking to start the game  and show questions and "done" button hidden 
    $("#startGame").on('click', function () {
        $("#gameOn").show();
        $("#endGame").show();
        $("#startGame").hide();
        startCountdown();
        countdown();
    });
    // when the "done" button is clicked before time is up
    $("#endGame").on("click", function () {
        $("#gameOn").hide();
        $("#tally").show();
        $("#startGame").hide();
        tallyAnswers(); //this function is not working to track tally
        console.log("is this working?");

    });

    //click button to restart the game without having to refresh page
    //this was done in addition as it was not required
    $("#restartGame").on('click', function () {
        $("#tally").hide();
        $("#gameOn").hide();
        $("#startGame").show();
        correct = 0;
        incorrect = 0;
        unanswered = 0;
        timerCountDown = 60;
        $('input').prop('checked', false);
    })

    //this code is to track the correct/wrong answers - not working
    $('#questions input').on('change', function () {
        console.log($(this).val());
        // var selection = $(this).val();
        if ($(this).val() === "correct") {
            correct++;
        }
        else {
            incorrect++;
        }
        unanswered = (8 - (correct + incorrect));

    });

    // function to display summary of game - it is not working
    function tallyAnswers() {
        $('#tally').show();
        unanswered = (8 - (correct + incorrect));
        $('#correctAsnwers').html(correct);
        $('#wrongAnswers').html(incorrect);
        $('#unanswered').html(unanswered);

    }

    //FUNCTIONS
    // Count down and displays the time to the user
    function countdown() {
        // Decrement the counter, down from 90 seconds
        timerCountDown--;
        // Display the count to the user in the HTML
        $('#timerCount').html(timerCountDown + " Seconds");

        //if timer hits 0, game is over - countdown stops, questions disappear and tally page shows up.
        if (timerCountDown === 0) {
            gameOver();
            $("#gameOn").hide();
            $("#tally").show();
            $("#startGame").hide();
            tallyAnswers();

        }
    }

    function startCountdown() {
        clearInterval(intervalId); //to clear bc otherwise intervals will double up running
        intervalId = setInterval(countdown, 1000);

    }

    function gameOver() {
        clearInterval(intervalId);
    }

});



  