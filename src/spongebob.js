var Spongebob = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  // this.$node = $('<div class="spongebob"></div>');


  this.$node = $('<div class="spongebob dancer animated"></div>');
  this.setPosition(top, left); 
  this.$node.draggable({containment: 'body'});
};


Spongebob.prototype = Object.create(Dancer.prototype);

Spongebob.prototype.constructor = Spongebob;

Spongebob.prototype.step = function() {
  Dancer.prototype.step.call(this);
  // this.$node.fadeToggle();
};