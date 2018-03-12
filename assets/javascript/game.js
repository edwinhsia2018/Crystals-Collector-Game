$(document).ready(function() {

    //Variables
    var wins=0;
    var losses=0;
    var yourScore=0;
    gameStart();
    //Random number generator
    function gameStart (){
        var randomRuby = [Math.ceil(Math.random() * 12)];
        var randomDiamond = [Math.ceil(Math.random() * 12)];
        var randomSapphire = [Math.ceil(Math.random() * 12)];
        var randomEmerald = [Math.ceil(Math.random() * 12)];
        var targetScore = [Math.floor(Math.random()*102)+19];
        var ruby = parseInt(randomRuby);
        var diamond = parseInt(randomDiamond);
        var sapphire = parseInt(randomSapphire);
        var emerald = parseInt(randomEmerald);
        var target = parseInt(targetScore);
    

    $("#target-number").text(targetScore);
    $("#your-score").text("Your score: " + yourScore);

    $("#ruby-button").on("click",function() {
        yourScore=ruby+yourScore;
        $("#your-score").text("Your score: " + yourScore);
        checkScore ();
    })
    $("#diamond-button").on("click",function() {
        yourScore=diamond+yourScore;
        $("#your-score").text("Your score: " + yourScore);
        checkScore ();
    })
    $("#sapphire-button").on("click",function() {
        yourScore=sapphire+yourScore;
        $("#your-score").text("Your score: " + yourScore);
        checkScore ();
    })
    $("#emerald-button").on("click",function() {
        yourScore=emerald+yourScore;
        $("#your-score").text("Your score: " + yourScore);
        checkScore();
    })

    //Conditions for winning/losing
    function checkScore(){
        if (yourScore == target) {
            wins++;
            alert("Congrats!  You Win!");
            $("#wins").text("Wins: " + wins);
            gameStart();
            yourScore = 0;
            $("#your-score").text("Your score: " + yourScore);
        }
        else if (yourScore > target) {
            losses++;
            alert("You lose!  Try again!");
            $("#losses").text("Losses: " + losses);
            gameStart();
            yourScore = 0;
            $("#your-score").text("Your score: " + yourScore);
          
        }
    }
    $("#target-number").text(targetScore);
    $("#wins").text("Wins: " + wins);
    $("#losses").text("Losses: " + losses);
    }
  });