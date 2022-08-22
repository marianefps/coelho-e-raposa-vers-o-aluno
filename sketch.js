var PLAY = 1;
var END = 0;
var gameState = PLAY;

var coelho, raposa;
var cenoura, tronco, cenouras, troncos;
var score;
var gameOver, gameOverIMG, restart, restartIMG;



function preload(){
 

}

function setup() {
  createCanvas(1325, 695);
  
  

  cenouras = new Group();
  troncos = new Group();
  
  score = 0;
  
  
}

function draw() {
  
  background("LIGHTGREEN");
  
  raposa.y  = coelho.y;

  
  
    textSize(20);
    text("score: "+ score, 25, 25);

  
  
  

    textSize(50) 
    text("Parabéns por Vencer", 420 , 130)

    
  
  
  drawSprites();
}

function coelhoMoves(){

 
}

function cenouraCriar(){

 

}

function troncoCriar(){
  
}

function bateu(){

coelho.overlap(cenouras,function(collector, collected){
  collected.remove();
  coelho.scale += 0.1;
  score += 1;
})

coelho.overlap(troncos,function(collector, collected){
  collected.remove();
  coelho.scale -=0.1;
  coelho.x -= 5;
  score -= 1;
})
}

