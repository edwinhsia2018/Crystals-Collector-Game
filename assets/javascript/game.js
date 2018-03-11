$(document).ready(function() {

    //Variables
    var wins=0;
    var losses=0;
    var yourScore=0;
    var targetScore = [Math.floor(Math.random()*102)+19];
    var randomRuby = [Math.ceil(Math.random() * 12)];
    var randomDiamond = [Math.ceil(Math.random() * 12)];
    var randomSapphire = [Math.ceil(Math.random() * 12)];
    var randomEmerald = [Math.ceil(Math.random() * 12)];
    var ruby = parseInt(randomRuby);
    var diamond = parseInt(randomDiamond);
    var sapphire = parseInt(randomSapphire);
    var emerald = parseInt(randomEmerald);

    //Random target number generator
    function resetNum (){
        var randomRuby = [Math.ceil(Math.random() * 12)];
        var randomDiamond = [Math.ceil(Math.random() * 12)];
        var randomSapphire = [Math.ceil(Math.random() * 12)];
        var randomEmerald = [Math.ceil(Math.random() * 12)];
        var ruby = parseInt(randomRuby);
        var diamond = parseInt(randomDiamond);
        var sapphire = parseInt(randomSapphire);
        var emerald = parseInt(randomEmerald);
    }
    $("#target-number").text(targetScore);
    $("#your-score").text("Your score: " + yourScore);

    $("#ruby-button").on("click",function() {
        yourScore=ruby+yourScore;
        $("#your-score").text("Your score: " + yourScore);
            //Conditions for winning/losing
        if (yourScore == targetScore) {
            wins++;
            $("#wins").text(wins);
            resetNum();
            yourScore = 0;
            var targetScore = [Math.floor(Math.random()*102)+19];
        }
        if (yourScore > targetScore) {
            losses++;
            $("#losses").text(losses);
            resetNum();
            yourScore = 0;
            var targetScore = [Math.floor(Math.random()*102)+19];
        }
    })
    $("#diamond-button").on("click",function() {
        yourScore=diamond+yourScore;
        $("#your-score").text("Your score: " + yourScore);
            //Conditions for winning/losing
        if (yourScore == targetScore) {
            wins++;
            $("#wins").text(wins);
            resetNum();
            yourScore = 0;
            var targetScore = [Math.floor(Math.random()*102)+19];
        }
        if (yourScore > targetScore) {
            losses++;
            $("#losses").text(losses);
            resetNum();
            yourScore = 0;
            var targetScore = [Math.floor(Math.random()*102)+19];
        }
    })
    $("#sapphire-button").on("click",function() {
        yourScore=sapphire+yourScore;
        $("#your-score").text("Your score: " + yourScore);
            //Conditions for winning/losing
        if (yourScore == targetScore) {
            wins++;
            $("#wins").text(wins);
            resetNum();
            yourScore = 0;
            var targetScore = [Math.floor(Math.random()*102)+19];
        }
        if (yourScore > targetScore) {
            losses++;
            $("#losses").text(losses);
            resetNum();
            yourScore = 0;
            var targetScore = [Math.floor(Math.random()*102)+19];
        }
    })
    $("#emerald-button").on("click",function() {
        yourScore=emerald+yourScore;
        $("#your-score").text("Your score: " + yourScore);
            //Conditions for winning/losing
        if (yourScore == targetScore) {
            wins++;
            $("#wins").text(wins);
            resetNum();
            yourScore = 0;
            var targetScore = [Math.floor(Math.random()*102)+19];
        }
        if (yourScore > targetScore) {
            losses++;
            $("#losses").text(losses);
            resetNum();
            yourScore = 0;
            var targetScore = [Math.floor(Math.random()*102)+19];
        }
    })

    resetNum ();

    $("#wins").text("Wins: " + wins);
    $("#losses").text("Losses: " + losses);
  });