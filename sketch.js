function setup() {
  createCanvas(1000, 800);
background("rgb(162,59,194)");
}
function draw() {
  
  
  fill("black");
  stroke("white");
  if (mouseIsPressed)
  rect(mouseX,mouseY,200,200);
}
