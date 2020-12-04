const capitalize = require('./capitalize');

test('returns the first letter capitalized', () => {
  expect(capitalize('james')).toBe('James');
});

test('string is not equal to UPPERCASE letters', () => {
    expect(capitalize('james')).not.toBe('JAMES');
  });