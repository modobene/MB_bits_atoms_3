function setup() {
  createCanvas(400, 400);
  background(0);
  rectMode(CENTER);
}

function draw() {
  fill(255, 0, 0);
  ellipse(width / 2, height / 2, 200, 260);
  fill(255);
  rect(width / 2, height / 2 - 40, 80, 80, 5);
}
