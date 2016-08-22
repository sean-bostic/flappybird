var bird;
var pipes = [];

function setup() {
  createCanvas(400, 600);
  bird = new Bird();
  pipes.push(new Pipe());
}

function draw() {
  background(0);

  for (var i = pipes.length-1; i >= 0; i--) {
    pipes[i].show();
    pipes[i].update();

    //make logic when each pipe is hit by the bird?
    pipes[i].hits();
  }

  bird.update();
  bird.show();
  //Daniel Shiffman figured this part out
  if (frameCount % 100 == 0) {
  pipes.push(new Pipe())

  }
}

function keyPressed() {
  if (key == ' ') {
    bird.up();
  }
}
