let points = [];
let h;

function setup() {
  h = windowHeight * 0.9;
  createCanvas(windowWidth * 0.68, h);
}

function draw() {
  background(220);

  fill(0);
  noStroke();
  for (let i of points) {
    ellipse(i.x, i.y, 7, 7);
  }

  fill(255, 0, 0);
  noStroke();
  ellipse(mouseX, mouseY, 7, 7);
}

function mouseClicked(event) {
  //   console.log(event.srcElement["id"]);
  if (event.srcElement["id"] == "defaultCanvas0") {
    let p = createVector(mouseX, mouseY);
    points.push(p);
  }
}
