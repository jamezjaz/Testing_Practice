const capitalize = require('./capitalize');

test('returns the first letter capitalized', () => {
  expect(capitalize('james')).toBe('James');
});

test('string is not equal to UPPERCASE letters', () => {
  expect(capitalize('james')).not.toBe('JAMES');
});

test('it should not change a string that has a number as the first character', () => {
  const str = capitalize('1coding challenge');
  expect(str).toBe('1coding challenge');
});

test('it should not capitalize other letters apart from the first letter of a string', () => {
  const str = capitalize('interview PREP');
  expect(str).not.toBe('Interview Prep');
});

test('it should not change a string that has a punctuation as its first character', () => {
  const str = capitalize('.james world');
  expect(str).toBe('.james world');
});