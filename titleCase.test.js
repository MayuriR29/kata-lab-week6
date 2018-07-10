myFunction = require("./titleCase");
test("should return initcap of given string with lowercase 'of'", () => {
  expect(myFunction("a clash of KINGS", "a an the of")).toBe(
    "A Clash of Kings"
  );
});

test("should return initcap with uppercase input ,lowercase 'the,in'", () => {
  expect(myFunction("THE WIND IN THE WILLOWS", "The In")).toBe(
    "The Wind in the Willows"
  );
});

test("should return initcap string when minor words is not passed", () => {
  expect(myFunction("the quick brown fox")).toBe("The Quick Brown Fox");
});
module.exports = myFunction;
