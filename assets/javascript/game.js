$(document).ready(function() {

    //Variables
    var wins=0;
    var losses=0;
    var yourScore=0;
    
    //Random target number generator
    var targetScore = [Math.ceil(Math.random() * 100)+20];

    $("#ruby-button").on("click",function() {
        var randomRuby = [Math.floor(Math.random() * 12)];
        yourScore=yourScore+randomRuby;
    })
    $("#diamond-button").on("click",function() {
        var randomDiamond = [Math.ceil(Math.random() * 12)];
        yourScore=yourScore+randomDiamond;
    })
    $("#sapphire-button").on("click",function() {
        var randomSapphire = [Math.ceil(Math.random() * 12)];
        yourScore=yourScore+randomSapphire;
    })
    $("#emerald-button").on("click",function() {
        var randomEmerald = [Math.ceil(Math.random() * 12)];
        yourScore=yourScore+randomEmerald;
    })
  });