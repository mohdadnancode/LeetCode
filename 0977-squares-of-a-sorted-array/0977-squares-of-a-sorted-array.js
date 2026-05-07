/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let newArr = []
    for(let num of nums) {
        newArr.push(num ** 2)
    }

    return newArr.sort((a, b) => a - b);
};