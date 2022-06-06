var p,ep;
var Ep = [];
var gameState = 0;
var score;
var pimg;
function preload(){
 pimg = loadAnimation("frame_00_delay-0.03s.gif","frame_01_delay-0.03s.gif","frame_02_delay-0.03s.gif","frame_03_delay-0.03s.gif","frame_04_delay-0.03s.gif","frame_05_delay-0.03s.gif","frame_06_delay-0.03s.gif","frame_07_delay-0.03s.gif","frame_08_delay-0.03s.gif","frame_09_delay-0.03s.gif","frame_10_delay-0.03s.gif","frame_11_delay-0.03s.gif","frame_12_delay-0.03s.gif","frame_13_delay-0.03s.gif","frame_14_delay-0.03s.gif","frame_15_delay-0.03s.gif","frame_16_delay-0.03s.gif","frame_17_delay-0.03s.gif","frame_18_delay-0.03s.gif","frame_19_delay-0.03s.gif","frame_20_delay-0.03s.gif","frame_21_delay-0.03s.gif","frame_22_delay-0.03s.gif","frame_23_delay-0.03s.gif","frame_24_delay-0.03s.gif","frame_25_delay-0.03s.gif","frame_26_delay-0.03s.gif","frame_27_delay-0.03s.gif","frame_28_delay-0.03s.gif","frame_29_delay-0.03s.gif","frame_30_delay-0.03s.gif","frame_31_delay-0.03s.gif","frame_32_delay-0.03s.gif","frame_33_delay-0.03s.gif","frame_34_delay-0.03s.gif","frame_35_delay-0.03s.gif","frame_36_delay-0.03s.gif","frame_37_delay-0.03s.gif","frame_38_delay-0.03s.gif","frame_39_delay-0.03s.gif","frame_40_delay-0.03s.gif","frame_41_delay-0.03s.gif","frame_42_delay-0.03s.gif","frame_43_delay-0.03s.gif","frame_44_delay-0.03s.gif","frame_45_delay-0.03s.gif","frame_46_delay-0.03s.gif","frame_47_delay-0.03s.gif","frame_48_delay-0.03s.gif","frame_49_delay-0.03s.gif","frame_50_delay-0.03s.gif","frame_51_delay-0.03s.gif","frame_52_delay-0.03s.gif","frame_53_delay-0.03s.gif","frame_54_delay-0.03s.gif","frame_55_delay-0.03s.gif","frame_56_delay-0.03s.gif","frame_57_delay-0.03s.gif","frame_58_delay-0.03s.gif","frame_59_delay-0.03s.gif")
}
function setup(){
 createCanvas(displayWidth+ 66,displayHeight-10);
 p = createSprite(10,703.25,20,20);
 p.addAnimation("particle",pimg);
 p.scale = 0.15;
}
function draw(){
 background(rgb(0,0,0));
 if(gameState === 1){
  score = Math.round(frameCount/10);
 fill(rgb(255,255,255));
 textSize(32);
 text("Score: "+ score, 500,50);
 //p.x+=4;
 camera.position.x = p.position.x+500;
 if(keyIsDown(UP_ARROW) && p.position.y>10){
  p.position.y-=7;
 }
 if(keyIsDown(DOWN_ARROW) && p.position.y<703.25){
  p.position.y+=7;
 }
 spawnParticles();
 /*if(ep.position.x + p.position.x = ){
    gameState = 0;
 }*/}
 if (gameState === 0){
  score = 0;
  //Ep.destroyEach(); 
  gameState = 1;
  
 } 
 drawSprites();
}
function spawnParticles(){
 if(frameCount % 3 === 0){
  ep = createSprite(1500,500,random(10,50),random(10,50));
  ep.y = Math.round(random(00,700));
  ep.velocityX = -6;
  ep.shapeColor = rgb(random(50,255),random(50,255),random(50,255))
  Ep.push(ep);
 }
}