var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var cars, car1, car2, car3, car4;

function preload(){
  track= loadImage("./images/track.jpg");
  car1_img= loadImage("./images/yes.png")
  car2_img= loadImage("./images/yes.png")
  car3_img= loadImage("./images/yes.png")
  car4_img= loadImage("./images/yes.png")
  ground_img= loadImage("./images/ground.png")
}
car1.scale=0.10
car2.scale=0.10
car3.scale=0.10
car4.scale=0.10
function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState===2){
    game.end()
  }
}




