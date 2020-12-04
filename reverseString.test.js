const reverseString = require('./reverseString');

test('first letter becomes last and the last becomes first', () => {
  expect(reverseString('James')).toBe('semaJ');
});

test('reverses a string', () => {
  expect(reverseString('hello')).not.toBe('oLlEh');
});

test('should fail when a string isn\t reversed', () => {
  expect(reverseString('hello')).not.toBe('hello');
});