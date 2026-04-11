/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let numObj = {};

    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];
        if (complement in numObj) {
            return [numObj[complement], i];
        }
        numObj[nums[i]] = i
    }
};