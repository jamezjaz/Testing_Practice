const multiply = require('./multiply');

test('returns the product of two numbers', () => {
  expect(multiply(5, 5)).toBe(25);
});


test('fails when the product of two numbers is incorrect', () => {
  expect(multiply(5, 5)).not.toBe(20);
});