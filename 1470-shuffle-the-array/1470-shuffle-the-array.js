/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function (nums, n) {
    let result = [];
    let left = 0;
    let right = n;

    while (left < n) {
        result.push(nums[left], nums[right]);
        left++;
        right++;
    }
    return result;
};