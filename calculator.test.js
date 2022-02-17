
const calculator = require('./calculator');

test("test add function", ()=> {
    expect(calculator.add(2,4)).toBe(6);
});

test("test sub function", ()=> {
    expect(calculator.sub(4,2)).toBe(2);
});

test("test mult function", ()=> {
    expect(calculator.mult(4,2)).toBe(8);
});

test("test div function", ()=> {
    expect(calculator.div(4,2)).toBe(2);
});