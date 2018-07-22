$(document).ready(function() {
// Global variables
//=========================================================
    
//Random number to be generated and displayed
var targetNumber = 0;

// Array for possible crystal image values
var numberOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
// Generate random click value
var clickValue = numberOptions[Math.floor(Math.random()*numberOptions.length)];

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
$(".start").on("click", function() {
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
    console.log("Your number is: " + targetNumber);
    console.log("Current score: " + counter);
    console.log("Total wins: " + wins);
    console.log("Total losses: " + losses);
    }
});

// Game logic
$(".crystal-image").on("click", function() {

    // Generate click value attribute called imgValue to crystal images using a For Loop
    for (var i = 0; i < 5; i++) {
    var crystalImg  = $(".crystal-image");
    crystalImg.attr("imgValue", clickValue[i]);
  };

    // Apply attribute to images
    var crystalValue = ($(this).attr("imgValue"));
    // Parse integers so values can be added to score counter
    crystalValue = parseInt(crystalValue);
    // Add value to counter
    counter += crystalValue;

    // Win-loss logic - display appropriate image and message and increment win or loss by 1
    if (counter === targetNumber) {
        $("#gameResult").html("<img src=../images/crystalwin.jpg> <br> The power of crystals were with you! YOU WIN!");
        wins++;
    }
    else if (counter >= targetNumber) {
        $("#gameResult").html("<img src=../images/crystallose.jpg> <br> Your crystal must be low on energy. Better luck next time!");
        losses++;
    }
});
});

