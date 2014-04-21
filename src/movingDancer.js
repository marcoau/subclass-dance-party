var MovingDancer = function(top, left, timeBetweenSteps){
  this.$node = $('<span class="dancer"></span>');
  this._top = top;
  this._left = left;
  //want it to move quick
  this._timeBetweenSteps = 50;
  this.step();
  this.setPosition(top, left);
};

//another way of doing it:
/*
var inherit = function(proto) {
  var F = function(){};
  F.prototype = proto;
  return new F;
}
*/
//MovingDancer.prototype = inherit(Dancer.prototype);

MovingDancer.prototype = Object.create(Dancer.prototype);

// we plan to overwrite the step function below, but we still want the superclass step behavior to work,
// so we must keep a copy of the old version of this function

MovingDancer.prototype._oldstep = MovingDancer.prototype.step;

MovingDancer.prototype.step = function(){
  // call the old version of step at the beginning of any call to this new version of step
  this._oldstep();
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  this.setPosition(this._top + (Math.random() * 50 - 5), this._left + (Math.random() * 50 - 5));
};
