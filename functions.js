function getMode(array) {

    const objCounter = {};

    array.forEach((num) => {
        if (!objCounter[num]) {
            objCounter[num] = 1;
        } else objCounter[num] += 1;
    });

    for (let [key, value] of Object.entries(objCounter)) {

    }

    let maxValue = (Math.max(...Object.values(objCounter)));
    let maxValueJoins = (Object.keys(objCounter).filter(key => objCounter[key] === maxValue));
    let mode = maxValueJoins.join(' and ');
    return mode;

};

function getMedian(array) {

    let sorted = array.sort((a, b) => a - b);

    if (sorted.length % 2) {
        let middle = sorted[Math.round((array.length - 1) / 2)];
        return (middle).toString();

    } else {
        let middle = sorted[Math.round((array.length - 1) / 2)];
        let newMiddle = (middle - sorted[Math.round((array.length - 2) / 2)]) / (2);
        return (newMiddle).toString();
    }
}

function getMean(array) {

    let mean = (array.reduce((a, b) => a + b)) / 2;
    return (mean).toString();

}


function convertNumsToArray(nums) {
    let arr = nums.split(",");

    let intArray = [];
    for (let i = 0; i < arr.length; i++) {
        intArray.push(parseInt(arr[i]));

    }
    return (intArray)

}
convertNumsToArray('1, 2, 3, 4, 5');


module.exports = {
    getMode,
    getMedian,
    getMean,
    convertNumsToArray
}