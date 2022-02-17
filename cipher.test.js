const cipher = require('./cipher');


test('tests cipher', () => {
    expect(cipher('Abc',1)).toBe('bcd');
});

test('tests cipher', () => {
    expect(cipher('abC',2)).toBe('cde');
});

test('tests cipher', () => {
    expect(cipher('aBc',3)).toBe('def');
});