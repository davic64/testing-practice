const capitalize = require('./capitalize');

test('First Word', () => {
    expect(capitalize("dave")).toBe("Dave");
});

test('Second Word', () => {
    expect(capitalize("javascript")).toBe("Javascript");
});

test('Third Word', () => {
    expect(capitalize("coding")).toBe("Coding");
});