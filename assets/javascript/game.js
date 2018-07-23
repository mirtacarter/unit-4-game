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
    function startGame() {
        if (isGameStarted) {
            // Alert user that game is in play
            alert("Game is already in play! Click on a crystal to continue!");
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
            
  
        $(".crystal-image").on("click", function() {
            var clickValue = numberOptions[Math.floor(Math.random() * numberOptions.length)];
                counter += parseInt(clickValue);
              $("#current-score").text("Current score: " + counter);
            
              
            if (counter === targetNumber) {
                console.log("you win");
                $("<span>The power of crystals were with you! YOU WIN!</span>").appendTo(".gameText");
                $("<img src=assets/images/crystalwin.jpg>").appendTo(".gameImg");
                wins += 1;
                roundOver();
                }
                
            else if (counter > targetNumber) {
                console.log("you lose");
                $("<span>Your crystal must be low on energy. Better luck next time!</span>").appendTo(".gameText");
                $("<img src=assets/images/crystallose.jpg>").appendTo(".gameImg");
                losses += 1;
                roundOver();
                }
            });
    }
    }

    // Main Game Process
    //=========================================================


    $(".start").on("click", function () {
        startGame();
    
    });

   
    function roundOver() {
        $(".gameImg").click(function() {
            $(this).hide();
            $(".gameText").hide();
            isGameStarted = false;
            startGame();
        });
    }


    // Current score array
    var numberOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];


});
