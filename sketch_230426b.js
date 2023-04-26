//Aitana Nunez Bejarano
//Pascal Huynh
//Web and FX : From theory to practice, sect. 0002
//Creating abstract art
//https://openprocessing.org/sketch/1861239

/*For this interaction you need to use the right mouse click, the space bar
and drag the mouse to the info button on the top right corner to know how to 
use the commands. The right mouse click is to change the background color and 
the space bar is to change the direction of which the lines will go.*/

/*This interactive program is for people to be creative and choosing how they
can change their artwork to create a piece of art. Changing the colors, 
the direction, their experiences... They can experience the changes of the game 
by clicking simple buttons */

let counting = [1,2,3,4,5];
let colors = ['#c06c84','#a2d9ce','#f8b195','#E2CF5F','#223157'];
let a;
let b;
let c;
let d;
let rectWidth;
let rectHeight;

function setup() {
  createCanvas(800, 800);
  a=0;
  b=0;
  c=0;
  d=0;
  rectWidth=0;
  rectHeight=0;
}

function draw() {
noStroke();
  
//changing the background color
background(colors[c])
  
//when the mouse touches the info button, it gives the info
  if(mouseX<790 && mouseX>740 && mouseY<60 && mouseY>10){
    b=true
  }else{
    b=false
  }
  
//info button for commands
  fill(255);
  text("?",750,50);
  textSize(20);
  textFont("Courier New");
  
  if(b===true)
  text("SPACE for changing the lines direction",200,400) &&
  text("MOUSE RIGHT CLICK for changing background color", 140,430);
  textSize(50);
  textFont("Courier New");
  
//the lines and the circles
  
  if(counting[a]===1){
  }
  if(counting[a]===2){
    rectWidth=rectWidth+1
    fill(colors[0]);
    rect(20,80,rectWidth,1);
    rect(210,150,rectWidth,1);
    rect(240,600,rectWidth,1);
    rect(480,120,rectWidth,1);
    rect(520,500,rectWidth,1);
    rect(700,500,rectWidth,1);
    rect(200,50,rectWidth,1);
    rect(120,200,rectWidth,1);
    rect(240,300,rectWidth,1);
    rect(360,120,rectWidth,1);
    rect(480,320,rectWidth,1);
    rect(580,650,rectWidth,1);
    rect(620,200,rectWidth,1);
    rect(400,420,rectWidth,1);
    rect(100,550,rectWidth,1);
    rect(80,700,rectWidth,1);
    rect(50,360,rectWidth,1);
    rect(670,300,rectWidth,1);
    rect(657,40,rectWidth,1);
    rect(400,658,rectWidth,1); 
    
  }
  if(counting[a]===3){
    fill(colors[1]);
    rectHeight=rectHeight+1
    rect(20,80,1,rectHeight);
    rect(210,150,1,rectHeight);
    rect(240,600,1,rectHeight);
    rect(480,120,1,rectHeight);
    rect(520,500,1,rectHeight);
    rect(700,500,1,rectHeight);
    rect(200,50,1,rectHeight);
    rect(120,200,1,rectHeight);
    rect(240,300,1,rectHeight);
    rect(360,120,1,rectHeight);
    rect(480,320,1,rectHeight);
    rect(580,650,1,rectHeight);
    rect(620,200,1,rectHeight);
    rect(400,420,1,rectHeight);
    rect(100,550,1,rectHeight);
    rect(80,700,1,rectHeight);
    rect(50,360,1,rectHeight);
    rect(670,300,1,rectHeight);
    rect(657,40,1,rectHeight);
    rect(400,658,1,rectHeight); 
  }
  if(counting[a]===4){
    fill(colors[2]);
    rectWidth=rectWidth-1
    rect(20,80,rectWidth,1);
    rect(210,150,rectWidth,1);
    rect(240,600,rectWidth,1);
    rect(480,120,rectWidth,1);
    rect(520,500,rectWidth,1);
    rect(700,500,rectWidth,1);
    rect(200,50,rectWidth,1);
    rect(120,200,rectWidth,1);
    rect(240,300,rectWidth,1);
    rect(360,120,rectWidth,1);
    rect(480,320,rectWidth,1);
    rect(580,650,rectWidth,1);
    rect(620,200,rectWidth,1);
    rect(400,420,rectWidth,1);
    rect(100,550,rectWidth,1);
    rect(80,700,rectWidth,1);
    rect(50,360,rectWidth,1);
    rect(670,300,rectWidth,1);
    rect(657,40,rectWidth,1);
    rect(400,658,rectWidth,1); 
  }
  if(counting[a]===5){
    fill(colors[3]);
    rectHeight=rectHeight-1
    rect(20,80,1,rectHeight);
    rect(210,150,1,rectHeight);
    rect(240,600,1,rectHeight);
    rect(480,120,1,rectHeight);
    rect(520,500,1,rectHeight);
    rect(700,500,1,rectHeight);
    rect(200,50,1,rectHeight);
    rect(120,200,1,rectHeight);
    rect(240,300,1,rectHeight);
    rect(360,120,1,rectHeight);
    rect(480,320,1,rectHeight);
    rect(580,650,1,rectHeight);
    rect(620,200,1,rectHeight);
    rect(400,420,1,rectHeight);
    rect(100,550,1,rectHeight);
    rect(80,700,1,rectHeight);
    rect(50,360,1,rectHeight);
    rect(670,300,1,rectHeight);
    rect(657,40,1,rectHeight);
    rect(400,658,1,rectHeight); 
  }
 
}
  function keyPressed(){
    if (keyCode===32)
  a=a+1
  if(a===5){
     a=0
  }
}
function mousePressed(){
c=c+1
  if(c===5){
     c=0
 }
}
