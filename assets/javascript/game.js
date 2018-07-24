$(document).ready(function () {
// Global variables
//=========================================================

    //Random number to be generated and displayed
    var targetNumber = 0;

    // Game counters - current score, total wins, and total losses
    var counter = 0;
    var clickValue = 0;
    var wins = 0;
    var losses = 0;

    // Check to make sure game is not yet in play
    isGameStarted = false;


    // Default content containers to empty
    $("#number-played", "#current-score", ".gameResult", "#winCount", "#lossCount").empty();


// Game Functions
//=========================================================

    // Start Game
    function startGame() {

        // Set boolean to true
        isGameStarted = true;

        // Reset counter
        counter = 0;

        // Reset clickvalue
        clickValue = 0

        // Generate random number
        targetNumber = Math.floor(Math.random() * (121 - 19)) + 19;

        // Populate game content
        $("#number-played").text("Your number is: " + targetNumber);
        $("#winCount").text("wins: " + wins);
        $("#lossCount").text("losses: " + losses);
        $("#current-score").text("Current score: " + counter);

        // Hide start button
        $(".start").hide();

        // Begin game process
        clickStart();
    }

// Main game logic
    function clickStart() {

        // Click event for crystal images begins game logic
        $(".crystal-image").on("click", function () {

            // Generate random number per click
            clickValue = Math.floor(Math.random() * (13 - 1) + 1);

            // Add value of click to current score counter
            counter += parseInt(clickValue)
            $("#current-score").text("Current score: " + counter);

            // Win-Loss logic
                // Wins
                if (counter === targetNumber) {

                    // Turn click event off to stop adding to counter
                    $(".crystal-image").off("click");

                    // Increment win counter
                    wins += 1;

                    // Generate game result image and text
                    $("<span>You win</span>").appendTo(".gameText");
                    $("<img src=assets/images/crystalwin.jpg>").appendTo(".gameImg");

                    // Update wins on page
                    $("#winCount").html("wins: " + wins);

                    // Reset game
                    gameReset();
                }

                if (counter > targetNumber) {

                    // Turn click event off to stop adding to counter
                    $(".crystal-image").off("click");
                    
                    // Increment loss counter
                    losses += 1;

                    // Generate game result image and text
                    $("<span>You lose</span>").appendTo(".gameText");
                    $("<img src=assets/images/crystallose.jpg>").appendTo(".gameImg");

                    // Update losses on page
                    $("#lossCount").html("losses: " + losses);

                    // Reset game
                    gameReset();
                }
            });
        }


// Start and reset game
//=========================================================

// Start game by clicking start button
    $(".start").on("click", function () {
        startGame();
    });

// Resets game variables and counters after each round
    function gameReset() {
        counter = 0;
        clickValue = 0;

        // Update text to instruct user to reset game
        $("#current-score").text("Click on Spencer's crystal to play again");

        // Click function to empty div for game result image and text
        $(".gameImg").click(function () {
            $(this).empty();
            $(".gameText").empty();

            // Begin game process again
            startGame();
        });
    }
});
