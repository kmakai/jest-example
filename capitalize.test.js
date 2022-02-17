const capitalize = require('./capitalize');

test('capitalizes first letter', () => {
    expect(capitalize('HELLO World!')).toBe('Hello world!');
});