/**
 * @param {number[]} nums
 * @return {number[]}
 */
var separateDigits = function (nums) {
    let ans = [];
    let rev = [];
    for (let i = nums.length - 1; i >= 0; i--) {
        rev.push(nums[i]);
    }

    for (let num of rev) {
        while (num > 0) {
            ans.unshift(num % 10);
            num = Math.floor(num / 10);
        }
    }

    return ans;
};