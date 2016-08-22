var bird;
var pipes = [];
var score = 0;

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
    if (pipes[i].hits(bird)) {
      endGame();
    }
    else if (!pipes[i].hits(bird)) {
      score++;
      console.log(score);
    }
  }

  bird.update();
  bird.show();
  //Daniel Shiffman figured this part out
  if (frameCount % 100 == 0) {
  pipes.push(new Pipe())

  }
}

function endGame(){
  console.log("End the game here");
  console.log(score);
  bird.x = 0;
  bird.speed = 0;
  pipes[i].speed = 0;
  pipes[i].x = 0;
}

function keyPressed() {
  if (key == ' ') {
    bird.up();
  }
}
