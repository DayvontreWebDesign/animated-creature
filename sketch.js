let blink = 20;
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(186, 232, 227);
  
  
  
  //sun
  fill(247, 225, 99)
  ellipse(395,25,150);
  stroke(0,0,0);
  
  //clouds
  noStroke(255, 255, 255)
  fill(255, 255, 255);
  ellipse(50,160,25);
  ellipse(57,160,30);
  ellipse(67,160,22);
  ellipse(200,40,23);
  ellipse(212,40,25);
  ellipse(220,40,22)
  //new fill color
  fill(138,43,36);
  
   //ground plane
  fill(10,82,13);
  rect(0,300, 500, 200);
  fill(138,43,36);
  
  
  
  
  //body
  stroke(0,0,0);
  rect(120,140,170,170,30);
  rect(120,265,76,67,30);
  rect(220,265,76,67,30);
  
  //mouth
  stroke(0,0,0);
  fill(219, 45, 33);
  rect(160,180,90,80);
  //teeth
  fill(252, 251, 247);
  triangle(162,180,180,180,170,190);
  triangle(190,190,200,180,180,180);
  triangle(210,190,220,180,200,180);
  triangle(230,190,240,180,220,180);
  //bottom teeth
  fill(252, 251, 247);
  triangle(162,260,170,250,180,260);
  triangle(182,260,200,260,190,250);
  triangle(200,260,220,260,210,250);
  triangle(220,260,240,260,230,250);
  
  //eyes
  noStroke(0,0,0);
  fill(0,0,0);
  ellipse(160,160,blink);
  ellipse(250,160,20);
  
blink = blink -6;
if (blink < 0){
  blink = 20;
}
  
  
}









  
