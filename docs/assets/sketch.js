let prevX;
let prevY;
let noiseScale = 0.01;

function setup() {
  canvas = createCanvas(400, 400);
  canvas.parent("sketch");
  prevX = mouseX;
  prevY = mouseY;
}

function draw() {
  background(32);
  fill(200);
  noStroke();
  let d = dist(prevX, prevY, mouseX, mouseY);
  let w = noise(mouseX*noiseScale, mouseY*noiseScale);
  w = map(w, 0, 1, 5, 200);
  circle(mouseX, mouseY, d*3);
  rectMode(CENTER);
  rect(mouseX, mouseY, w, 5);
  prevX = mouseX;
  prevY = mouseY;
}