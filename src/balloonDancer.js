var BalloonDancer = function(top, left, timeBetweenSteps){
  this.$node = $('<span class="dancer"></span>');
  this._timeBetweenSteps = timeBetweenSteps;
  this.setPosition(top, left);
  this.step();
};

//another way of doing it:
/*
var inherit = function(proto) {
  var F = function(){};
  F.prototype = proto;
  return new F;
}
*/
//BalloonDancer.prototype = inherit(Dancer.prototype);

BalloonDancer.prototype = Object.create(Dancer.prototype);

// we plan to overwrite the step function below, but we still want the superclass step behavior to work,
// so we must keep a copy of the old version of this function

BalloonDancer.prototype._oldstep = BalloonDancer.prototype.step;

BalloonDancer.prototype.step = function(){
  // call the old version of step at the beginning of any call to this new version of step
  this._oldstep();
  console.log(this.$node);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  var radius = this.$node.css('border-radius');
  radius = parseInt(radius.slice(0, radius.length - 2));
  if(typeof radius === 'number'){
    console.log(radius);
    if(radius < 200){
      radius += 20;
    }else{
      radius -= 20;    
    }
    this.$node.css('border-width', (radius + 'px'));
    this.$node.css('border-radius', radius + 'px');
  }
};
