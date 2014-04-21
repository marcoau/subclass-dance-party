// Creates and returns a new dancer object that can step
var Dancer = function(top, left, timeBetweenSteps){
  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"></span>');
  this._timeBetweenSteps = timeBetweenSteps;
  this.step();

  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body
  this.setPosition(top, left);
};

Dancer.prototype.step = function(){
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  //console.log('hey');
  var dancer = this;
  //inside setTimeout, 'this' will refer to window
  setTimeout(function(){dancer.step();}, dancer._timeBetweenSteps);
};
Dancer.prototype.setPosition = function(top, left){
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step
  this.$node.css({top: top, left: left});
};
