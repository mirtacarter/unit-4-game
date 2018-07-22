$(document).ready(function () {
    // Global variables
    //=========================================================

    //Random number to be generated and displayed
    var targetNumber = 0;
    var numberOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    var clickValue = 0;

    // Game counters - current score, total wins, and total losses
    var counter = 0;
    var wins = 0;
    var losses = 0;

    // Check to make sure game is not yet in play
    var isGameStarted = false;

    // Default content containers to empty
    $("#number-played", "#current-score", "#gameResult", "#winCount", "#lossCount").empty();

    // Functions
    //=========================================================

    // Start Game
    function startGame() {
        if (isGameStarted) {
            // Alert user that game is in play
            alert("Game is already in play! Click on a crystal to continue!");
        }
        else {
            // Set boolean to true
            isGameStarted = true;
            // Reset counter
            counter = 0;
            // Generate random number
            targetNumber = Math.floor(Math.random() * 120) + 19;

            // Populate game content
            $("#number-played").text("Your number is: " + targetNumber);
            $("#current-score").text("Current score: " + counter);
            $("#winCount").text("Total wins: " + wins);
            $("#lossCount").text("Total losses: " + losses);
        }
    }


    // Game logic
    function inPlay() {
        if (isGameStarted) {
            $(".crystal-image").click(function() {

                // Generate random click value
                for (var i = 0; i < numberOptions.length; i++) {
                    clickValue = numberOptions[Math.floor(Math.random() * numberOptions.length)];
                }
                $("img").each(function() {
                    $(this).attr("data-imgValue", clickValue[i])
                
            
        
        
            // Parse integers so values can be added to score counter
            var crystalValue = ($(this).attr("data-imgValue"));
            crystalValue = parseInt(crystalValue);

            // Add value to counter
            counter += crystalValue;
            });
            });
        }
        
        else {
        // Alert user that start button must be pressed
        alert("Click on the Start button to begin!");
            }
        }
    


    // Win-loss logic - display appropriate image and message and increment win or loss by 1
    function roundComplete() {
        if (counter === targetNumber) {
            $("#gameResult").html("<img src=assets/images/crystalwin.jpg> <br> The power of crystals were with you! YOU WIN!");
            wins++;
            startGame();
        }
        else if (counter >= targetNumber) {
            $("#gameResult").html("<img src=assets/images/crystallose.jpg> <br> Your crystal must be low on energy. Better luck next time!");
            losses++;
            startGame();
        }
    }


    // Main Game Process
    //=========================================================

    $(".start").on("click", function () {
        startGame();
     });    
        inPlay();
        roundComplete();
       
});
