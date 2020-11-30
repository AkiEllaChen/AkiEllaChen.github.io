
let x = 100;
let y = 200;
let d = 100;
let Eyes;

function setup() {
  createCanvas(400, 400);
}
  
function draw() {
 EyesX=map(mouseX, 0, width, -7,-2,1);
EyesY=map(mouseY, 0, height, -7,-2,1);

  
  background(255, 204, 100);
  fill('#F9DAFF')

if(dist(mouseX, mouseY,x,y)<d/2) {
  //fill(0,200,255);
}

else{
  console.log("the cursor is not over the circle");
  //fill(255);
  }
  
//ear
ellipse(x+120,y-65,25,85);
ellipse(x+75,y-65,25,85);

//head
ellipse(x+100,y-3,d,d);

//eyes
fill(255);
ellipse(x+110,y-20,10,15);
ellipse(x+85,y-20,10,15);

//pupils
fill(0)
ellipse(x+115+ EyesX, y-15+ EyesY,5,5);
ellipse(x+90+ EyesX, y-15+ EyesY,5,5);
  
//nose
fill(0);
triangle(190, 195, 198, 205, 205, 195);
  
//mouth
noFill();
arc(213, 198, 35, 25, HALF_PI, PI);
noFill();
arc(183, 198, 35, 25, 0, HALF_PI);
}
