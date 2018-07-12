myFunction = require("./sortAnimals");
test.only("should return initcap of given string with lowercase 'of'", () => {
  var animal = [
    { name: "Cat", numberOfLegs: 4 },
    { name: "Snake", numberOfLegs: 0 },
    { name: "Dog", numberOfLegs: 4 },
    { name: "Pig", numberOfLegs: 4 },
    { name: "Human", numberOfLegs: 2 },
    { name: "Bird", numberOfLegs: 2 }
  ];
  expect(myFunction(animal)).toEqual([
    { name: "Snake", numberOfLegs: 0 },
    { name: "Bird", numberOfLegs: 2 },
    { name: "Human", numberOfLegs: 2 },
    { name: "Cat", numberOfLegs: 4 },
    { name: "Dog", numberOfLegs: 4 },
    { name: "Pig", numberOfLegs: 4 }
  ]);
});
module.exports = myFunction;
