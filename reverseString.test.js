const reverseString = require('./reverseString');

test('reverses a string', () => {
    expect(reverseString('hello test')).toBe('tset olleh');
});