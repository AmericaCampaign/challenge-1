var shapes = ["circle", "ellipses", "stadium", "arch", "annulus", "equilateral", "parallelogram", "pentagon", "octagon"];
var colors = ["red", "blue", "yellow", "orange", "green", "purple", "green"];
var sides = [1, 3, 5, 7, 9, 11];


var sillyShapes = [];

function makeSillyShapes(){


  for (var i = 0; i < 10; i++) {
    var name = shapes[Math.floor(Math.random()*shapes.length)];
    var color = colors[Math.floor(Math.random()*colors.length)];
    var numSides = sides[Math.floor(Math.random()*sides.length)];

    var newShape = new Shape(name, numSides, color);

    sillyShapes.push(newShape);

  }

  return sillyShapes
}

makeSillyShapes()
console.log(sillyShapes);



function renderShapesToHTML() {
  for (var i = 0; i < sillyShapes.length; i++) {
    $("#silly-shapes-list").append('<li>' + sillyShapes[i].getInfo() + '</li>')
  }
}

renderShapesToHTML();
