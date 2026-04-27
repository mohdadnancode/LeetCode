/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numberGame = function (nums) {
    const sorted = nums.sort((a, b) => a - b);
    let arr = [];
    for (let i = 0; i < sorted.length; i += 2) {
        arr.push(sorted[i + 1], sorted[i]);
    }
    return arr;
};