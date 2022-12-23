var ghost,ghostAnimation;
function preload() {
ghostAnimation = loadAnimation ('ghost1.png','ghost2.png','ghost3.png');

}

function setup(){
createCanvas (400,400);
ghost= createSprite (200,180,20,50);
ghost.addAnimation("running",ghostAnimation);
}

function draw(){
background ("black");
drawSprites();
  
}