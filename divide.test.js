const divide = require('./divide');

test('returns the correct quotient when a divisor divides a dividend', () => {
  expect(divide(20, 5)).toBe(4);
});

test('fails when the quotient is incorrect', () => {
  expect(divide(18, 3)).not.toBe(5);
});

test('returns a float when the dividend is not divisible by the divisor', () => {
  expect(divide(18, 5)).toBe(3.6);
});