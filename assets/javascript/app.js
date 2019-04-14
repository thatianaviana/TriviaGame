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
        // $("#questions input").empty();
        // $("#tally").hide();
        // $("#gameOn").hide();
        // $("#startGame").show();
        // correct = 0;
        // incorrect = 0;
        // unanswered = 0;
        // timerCountDown = 60;
        $('input').prop('checked', false);
         //clearing data will prob go here
    })

    //this code is to track the correct/wrong answers  // google how to clear data attribute
    $('#questions input').on('change', function () {
        if (!$(this).parent().data("answered")) {
            if ($(this).val() === "correct") {
                correct++;
            }
            else {
                incorrect++;
            } 
            $(this).parent().data("answered", true);
        
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



    //   //Clicking Radio button
    //   $('input[type=radio]').on ('change', function(){
    //     correct = $('input[value=correct]:checked').length; //tried with .val()
    //     incorrect = $('input[value=wrong]:checked').length;
    //     unanswered = (8-(correct+incorrect));
    //     });
    

    //     var question1 = $('input:radio[name="q1"]:checked').val();
	// 	var question2 = $('input:radio[name="q2"]:checked').val();
	// 	var question3 = $('input:radio[name="q3"]:checked').val();
	// 	var question4 = $('input:radio[name="q4"]:checked').val();
	// 	var question5 = $('input:radio[name="q5"]:checked').val();
	// 	var question6 = $('input:radio[name="q6"]:checked').val();
	// 	var question7 = $('input:radio[name="q7"]:checked').val();
	// 	var question8 = $('input:radio[name="q8"]:checked').val();
        
        
    //     if(question1 == undefined){
	// 		unanswered++;
	// 	}
	// 	else if(question1 == "Jerry Gingrich"){
	// 		correct++;
	// 	}
	// 	else{
	// 		incorrect++;
	// 	}


    //     if(question2 == undefined){
	// 		unanswered++;
	// 	}
	// 	else if(question2 == "Waffles"){
	// 		correct++;
	// 	}
	// 	else{
	// 		incorrect++;
	// 	}


    //     if(question3 == undefined){
	// 		unanswered++;
	// 	}
	// 	else if(question3 == "Skinny Dogs"){
	// 		correct++;
	// 	}
	// 	else{
	// 		incorrect++;
	// 	}


    //     if(question4 == undefined){
	// 		unanswered++;
	// 	}
	// 	else if(question4 == "Joe Biden"){
	// 		correct++;
	// 	}
	// 	else{
	// 		incorrect++;
	// 	}

    //     if(question5 == undefined){
	// 		unanswered++;
	// 	}
	// 	else if(question5 == "Duke Silver"){
	// 		correct++;
	// 	}
	// 	else{
	// 		incorrect++;
	// 	}

    //     if(question6 == undefined){
	// 		unanswered++;
	// 	}
	// 	else if(question6 == "Ann"){
	// 		correct++;
	// 	}
	// 	else{
	// 		incorrect++;
	// 	}


    //     if(question7 == undefined){
	// 		unanswered++;
	// 	}
	// 	else if(question7 == "Eagleton"){
	// 		correct++;
	// 	}
	// 	else{
	// 		incorrect++;
	// 	}


    //     if(question8 == undefined){
	// 		unanswered++;
	// 	}
	// 	else if(question8 == "Librarian"){
	// 		correct++;
	// 	}
	// 	else{
	// 		incorrect++;
	// 	}



	// 	// After answers are validated, display the score results
	// 	$('#correctAnswers').html(correct);
	// 	$('#wrongAnswers').html(incorrect);
	// 	$('#unanswered').html(unanswered);