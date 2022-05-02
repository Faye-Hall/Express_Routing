const {
    getMode,
    getMedian,
    getMean
} = require('./functions');


describe('mode tests', () => {
    test('should return  one mode', () => {

        let mode = getMode([1, 2, 3, 4, 4, ]);
        expect(mode).toEqual('4');
    });

    test('should return more than one mode', () => {
        let mode = getMode([1, 1, 2, 2, 3, 4]);
        expect(mode).toEqual('1 and 2');
        let mode2 = getMode([1, 1, 2, 2, 3, 3, 4, 5]);
        expect(mode2).toEqual('1 and 2 and 3');
    });
});

describe('median tests', () => {
    test('should return odd median', () => {

        let median = getMedian([1, 2, 3, 4, 4, ]);
        expect(median).toEqual('3');
    });

    test('should return even median', () => {
        let median = getMedian([18, 76, 200, 879, 2899, 7214]);
        expect(median).toEqual('339.5');

    });
});

describe('mean tests', () => {
    test('should return mean', () => {

        let mean = getMean([1, 2, 3, 4, 4]);
        expect(mean).toEqual('7');
    });


});