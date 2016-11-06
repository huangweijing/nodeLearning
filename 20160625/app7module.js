function Bus(weight, speed) {
  this.weight = weight;
  this.speed = speed;
  this.setWeight = function(weight) {
    this.weight = weight;
  };

  this.setSpeed = function(speed) {
    this.speed = speed;
  };

  this.getWeight = function() {
    return this.weight;
  };

  this.getSpeed = function() {
    return this.speed;
  };

}

module.exports = Bus;

