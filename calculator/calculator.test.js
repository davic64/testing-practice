const calculator = require('./calculator');

test('Add', () => {
    expect(calculator.add(2, 2)).toBe(4);
});

test('Subtract', () => {
    expect(calculator.sub(8, 2)).toBe(6);
});

test('Multiply', () => {
    expect(calculator.mul(10, 4)).toBe(40);
});

test('Divide', () => {
    expect(calculator.div(15, 5)).toBe(3);
});