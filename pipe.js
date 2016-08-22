function Pipe() {

  this.top = random(height/2);
  this.bottom = random(height/2);
  this.x = width;
  this.w = 25;
  this.speed = 2.2;

  //make a scoring function based upon when pipes are hit.
  this.hits = function(bird){
    //make logic to tell when bird.x and bird.y === pipes?
  }
  this.show = function() {
    fill(255);
    rect(this.x, 0, this.w, this.top);
    rect(this.x, height-this.bottom, this.w, this.bottom);
  }

  this.update = function() {
    this.x -= this.speed;
  }

  this.offscreen = function() {
    if (this.x < -this.w) {
      return true;
    } else {
      return false;
    }
  }
}
