var Shape = function(name, sides, color) {

  if (!name || !sides || !color) {
    return
  }

  this.name = name;
  this.sides = sides;
  this.color = color;
}

Shape.prototype.getInfo = function() {
  return "I am a " + this.color + " " + this.name +  " with " +  this.sides + " sides!"
}

Shape.prototype.updateColor = function(color) {
  this.color = color;
  return { name: this.name, sides: this.sides, color: this.color  }
}

module.exports = Shape;
