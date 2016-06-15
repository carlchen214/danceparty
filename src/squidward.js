var Squidward = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);

  this.$node = $('<div class="squidward dancer animated"></div>');
  this.setPosition(top, left); 
  this.$node.draggable({containment: 'body'});
  this.step(); 
};

Squidward.prototype = Object.create(Dancer.prototype);

Squidward.prototype.constructor = Squidward;

var rotateDegree = 0;

Squidward.prototype.step = function() {
  Dancer.prototype.step.call(this);
  this.$node.css({
    transform: 'rotateY(' + (rotateDegree += 5) + 'deg)'
  });
  if (rotateDegree > 360) {
    rotateDegree = 0;
  }
};

