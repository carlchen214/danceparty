// Creates and returns a new dancer object that can step
var Dancer = function(top, left, timeBetweenSteps) {
  this.top = top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;

  this.$node = $('<div class="dancer"></div>');
  // this.step();
  this.setPosition(top, left);
};

Dancer.prototype.step = function() {
  setTimeout(this.step.bind(this), this.timeBetweenSteps); 
};

Dancer.prototype.lineUp = function() {
  this.$node.animate({
    top: this.top,
    left: '30px'
  }, 4000);
};

Dancer.prototype.setPosition = function(top, left) {
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};  

Dancer.prototype.meetUp = function() {
  var node = this.$node;
  this.$node.animate({
    top: '30%',
    left: '30%'
  }, 2000);
  setTimeout(function() {
    node.remove();
  }, 3000);
};

Dancer.prototype.middle = function(middleDistance) {
  this.$node.animate(middleDistance, 1000);
};