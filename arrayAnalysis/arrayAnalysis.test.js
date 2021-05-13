const arrayAnalysis = require('./arrayAnalysis');

test("Array analysis test", () => {
    expect(arrayAnalysis([3, 2, 7, 5, 9])).toStrictEqual({
        average: 5.2,
        min: 2,
        max: 9,
        length: 5,
    })
});