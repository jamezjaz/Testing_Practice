const add = require('./add');

test('returns the sum of two numbers', () => {
  expect(add(3, 4)).toBe(7);
});

test('should fail when 8 + 5 = 85', () => {
  expect(add(3, 4)).not.toBe(34);
});