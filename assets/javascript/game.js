$(document).ready(function() {
    // Global variables
    //=========================================================

    //Random number to be generated and displayed
    var targetNumber = 0;

    // Game counters - current score, total wins, and total losses
    var counter = 0;
    var wins = 0;
    var losses = 0;

    // Check to make sure game is not yet in play
    var isGameStarted = false;
   

    // Default content containers to empty
    $("#number-played", "#current-score", ".gameResult", "#winCount", "#lossCount").empty();


    // Functions
    //=========================================================

    // Start Game
   function startGame () {
        if (isGameStarted) {
            // Alert user that game is in play
            alert("Click on a crystal to continue!");
            } 
        else  {
            // Set boolean to true
            isGameStarted = true;
            // Reset counter
            counter = 0;
            // Generate random number
            targetNumber = Math.floor(Math.random() * 120) + 19;

            // Populate game content
            $("#number-played").text("Your number is: " + targetNumber);
            $("#winCount").text("wins: " + wins);
            $("#lossCount").text("losses: " + losses);
            $("#current-score").text("Current score: " + counter);
        }}

    function clickStart () {
        $(".crystal-image").on("click", function() {
            var clickValue = numberOptions[Math.floor(Math.random() * numberOptions.length)];
                counter += parseInt(clickValue);
              $("#current-score").text("Current score: " + counter);

                if (counter === targetNumber) {
                console.log("you win");
                wins += 1;
                $("<span>You win</span>").appendTo(".gameText");
                $("<img src=assets/images/crystalwin.jpg>").appendTo(".gameImg");    
                $("#winCount").html("wins: " + wins);
                gameReset();
                }
                
            if (counter > targetNumber) {
                console.log("you lose");
                losses += 1;
                $("<span>You lose</span>").appendTo(".gameText");
                $("<img src=assets/images/crystallose.jpg>").appendTo(".gameImg");
                $("#lossCount").html("losses: " + losses);
                gameReset();
                }
            });
        }              
            
         
    // Main Game Process
    //=========================================================


    $(".start").on("click", function () {
        startGame();
        clickStart();

    });

    function gameReset () {
        isGameStarted = false;
        counter = 0;
        clickStart();
        console.log("this is the counter: " + counter);
        $(".gameImg").click(function() {
            $(this).remove();
            $(".gameText").remove();
            $("#current-score").text("Click start to play again");
            
            
        });
        
    }
            
    

    // Current score array
    var numberOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];


});
