const caesarCipher = require('./caesarCipher');

test('First word', () => {
    expect(caesarCipher("hello world", 2)).toBe("jgnnq yqtnf");
});

test('Second word', () => {
    expect(caesarCipher("i'm a coder", 5)).toBe("n'r f htijw");
});

test('Third word', () => {
    expect(caesarCipher("the odin project", 8)).toBe("bpm wlqv xzwrmkb");
});