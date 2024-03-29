var BlinkyDancer = function(top, left, timeBetweenSteps){
  /*
  this.$node = $('<span class="dancer"></span>');
  this._timeBetweenSteps = timeBetweenSteps;
  this.step();
  this.setPosition(top, left);
  */

  Dancer.call(this, top, left, timeBetweenSteps);
};

//another way of doing it:
/*
var inherit = function(proto) {
  var F = function(){};
  F.prototype = proto;
  return new F;
}
*/
//BlinkyDancer.prototype = inherit(Dancer.prototype);

BlinkyDancer.prototype = Object.create(Dancer.prototype);

// we plan to overwrite the step function below, but we still want the superclass step behavior to work,
// so we must keep a copy of the old version of this function

BlinkyDancer.prototype._oldstep = BlinkyDancer.prototype.step;

BlinkyDancer.prototype.step = function(){
  // call the old version of step at the beginning of any call to this new version of step
  this._oldstep();
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  this.$node.toggle();
};
