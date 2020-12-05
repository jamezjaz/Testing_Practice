const subtract = require('./subtract');

test('return the difference between two numbers', () => {
  expect(subtract(500, 499)).toBe(1);
});

test('returns a -ve value when the first number is smaller', () => {
 expect(subtract(5, 100)).toBe(-95);
});

test('should fail when the value of the difference is wrong', () => {
    expect(subtract(5, 2)).not.toBe(1);
   });