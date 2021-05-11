const reverseString = require('./reverseString');

test('First test', () => {
    expect(reverseString("cube")).toBe("ebuc");
});

test('Second test', () => {
    expect(reverseString("phone")).toBe("enohp");
});

test('Third test', () => {
    expect(reverseString("javascript")).toBe("tpircsavaj");
});