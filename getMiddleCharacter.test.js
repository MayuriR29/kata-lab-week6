myFunction = require("./getMiddleCharacter");
test("should return the middle character for odd string length", () => {
  expect(myFunction("testing")).toBe("t");
  expect(myFunction("A")).toBe("A");
});

test("should return the middle character for even string length", () => {
  expect(myFunction("test")).toBe("es");
  expect(myFunction("middle")).toBe("dd");
});
test("should return the middle character for even string length", () => {
  expect(myFunction("123456789")).toBe("5");
});
module.exports = myFunction;
