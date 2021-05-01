var gamestate=0;
var aship,bg1,fight;
var fighter1;

function preload(){
 aship=loadImage("images/alienship.png");
 fight=loadImage("images/fighter.png");
 
     bg1=loadImage("images/start.png");
bg2=loadImage("images/BG1.png");
 
}

function setup(){
    var canvas = createCanvas(displayWidth,displayHeight);
    fighter1 = createSprite(displayWidth/2,displayHeight/2,100,100);
   fighter1.addImage(fight);
   fighter1.scale=0.5;
   fighter1.visible=false;
   

}

function draw(){
    if(gamestate===0){
        background(bg1)
        textSize(35);
        fill("red");
        text("HURRY UP! THE ALIENS ARE COMING",displayWidth/4,displayHeight/4);
        text("PRESS SPACE TO START THE GAME",displayWidth/4+20,displayHeight/4+70);
    }
    else{
        background(bg2);
        fighter1.visible=true;
        if(keyDown(LEFT_ARROW)){
            fighter1.x=fighter1.x-2;
        }

        
    }
}
 
function keyPressed(){
    if(keyCode===32){
        gamestate=1
    }
}