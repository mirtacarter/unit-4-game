$(document).ready(function() {
// Global variables
//=========================================================
    
//Random number to be generated and displayed
var targetNumber = 0;

// Array for possible crystal image values
var numberOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

// Game result objects - a specific image and message will appear based on a win or loss
var youWon = {
        picture: "../images/crystalwin.jpg",
        message: "The power of crystals were with you! YOU WIN!"
};
var youLost = {
        picture: "../images/crystallose.jpg",
        message: "Your crystal must be low on energy. Better luck next time!"
    };

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
$("#start").on("click", function() {
if (isGameStarted) {
    // Alert user that game is in play
    alert("Game is already in play! Click on a crystal to continue!");
}
else {
    // Set boolean to true
    isGameStarted = true;
    // Generate random number
    targetNumber = Math.floor(Math.random() * 120) + 19;

    // Populate game content
    $("#number-played").text("Your number is: " + targetNumber);
    $("#current-score").text("Current score: " + counter);
    $("#wins").text("Total wins: " + wins);
    $("#losses").text("Total losses: " + losses);
    }
});

// Game logic
$(".crystal-image").on("click", function() {
    // Generate random click value
    var clickValue = numberOptions[Math.floor(Math.random()*numberOptions.length)];

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
});




});

