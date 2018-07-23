$(document).ready(function() {
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


    // Functions
    //=========================================================

    // Start Game
   function startGame () {
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

             $(".start").hide();
             clickStart();
        }

    function clickStart () {
 
        $(".crystal-image").on("click", function() {
            clickValue = Math.floor(Math.random() * (13 - 1) + 1);
                console.log("this is the clickvalue " + clickValue);
                console.log("this is the counter " +counter);
                console.log(counter += parseInt(clickValue));
              $("#current-score").text("Current score: " + counter);

                if (counter === targetNumber) {
                $(".crystal-image").off("click");
                console.log("youwin");
                wins += 1;
                $("<span>You win</span>").appendTo(".gameText");
                $("<img src=assets/images/crystalwin.jpg>").appendTo(".gameImg");    
                $("#winCount").html("wins: " + wins);
                gameReset();
                }
                
            if (counter > targetNumber) {
                $(".crystal-image").off("click");
                console.log("you lose")
                losses += 1;
                $("<span>You lose</span>").appendTo(".gameText");
                $("<img src=assets/images/crystallose.jpg>").appendTo(".gameImg");
                $("#lossCount").html("losses: " + losses);
                gameReset();
                }
            });
            }

         
    // Start and reset game
    //=========================================================

    $(".start").on("click", function () {
        startGame();
    });

    function gameReset () {
        counter = 0;
        clickValue = 0;
        $("#current-score").text("Click on Spencer's crystal to play again");
     
        $(".gameImg").click(function() {
            $(this).empty();
            $(".gameText").empty();
            startGame();           
            
        });
        
    }
            
});
