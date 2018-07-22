$(document).ready(function() {

// Create object with game result - a specific image and message will appear based on a win or loss
var gameResult = {
    youWon: {
        picture: "../images/crystalwin.jpg",
        message: "The power of crystals were with you! YOU WIN!"
    },
    youLost: {
        picture: "../images/crystallose.jpg",
        message: "Your crystal must be low on energy. Better luck next time!"
    }
};

// Set variables and default values for start of game
// Random number to be generated and displayed
var targetNumber = 0;
targetNumber = Math.floor(Math.random() * 120) + 19;
$("#number-played").text("Your number is: " + targetNumber);

// Current score counter and display
var counter = 0;
$("#current-score").text("Current score: " + counter);

// Array for click values
var numberOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
// Generate random values for each click
var clickValue = numberOptions[Math.floor(Math.random()*numberOptions.length)];

// For loop to generate click value attribute called imgValue to crystal images
for (var i = 0; i < 5; i++) {
    var crystalImg  = $(".crystal-image");
    crystalImg.attr("imgValue", clickValue[i]);
  };

// Click event for crystal images to extract value attribute
$(".crystal-image").on("click", function() {
var crystalValue = ($(this).attr("imgValue"));
// Parse integers so values can be added to score counter
crystalValue = parseInt(crystalValue);
// Add value to counter
counter += crystalValue;

var wins = 0;
$("#wins").text("Total wins: " + wins);
var losses = 0;
$("#losses").text("Total losses: " + losses);

});
});
