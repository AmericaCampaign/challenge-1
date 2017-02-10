var Shape = require('./shapes');

describe("Putting our shape constructor through the ringer", function(){

  it('the shape can tell us its name', function(){
    var s1 = new Shape('square');
    expect(square.name).toBeDefined('square');
  });

  xit('A triangle can tell us its sides!', function(){
    var tri = new Shape('triangle', 3);
    expect(tri.sides).toEqual(3);
  })

  xit('A triangle can tell us about its self!', function(){
    var tri = new Shape('triangle', 3, 'red');
    expect(tri.getInfo()).toEqual("I am a red triangle with 3 sides!");
  })

  xit('A square can tell us about its self!', function(){
    var square = new Shape('square', 4, 'blue');
    expect(square.getInfo()).toEqual("I am a blue square with 4 sides!");
  })

  xit('A square can change color', function(){
    var square = new Shape('square', 4, 'blue');
    expect(square.updateColor('orange')).toEqual({ name : 'square', sides : 4, color : 'orange' });
  })

})
