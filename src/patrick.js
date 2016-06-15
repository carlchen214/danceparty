var Patrick = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);

  this.$node = $('<div class="patrick dancer animated"></div>');
  this.setPosition(top, left);
  this.$node.draggable({containment: 'body'});
};

Patrick.prototype = Object.create(Dancer.prototype);

Patrick.prototype.constructor = Patrick;

Patrick.prototype.step = function() {
  Dancer.prototype.step.call(this);
  // this.$node.toggle();
};

