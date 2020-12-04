const reverseString = require('./reverseString');

test('first letter becomes last and the last becomes first', () => {
  expect(reverseString('James')).toBe('semaJ');
});