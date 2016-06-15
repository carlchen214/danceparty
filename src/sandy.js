var Sandy = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);

  this.$node = $('<div class="sandy dancer animated wobble rollIn"></div>');
  this.setPosition(top, left);
  this.$node.draggable({containment: 'body'});
  // this.step();
};

Sandy.prototype = Object.create(Dancer.prototype);

Sandy.prototype.constructor = Sandy;

Sandy.prototype.step = function() {
  Dancer.prototype.step.call(this);
  // this.$node.toggle();
};

