/**
 * @param {number[]} nums
 * @return {number}
 */
var differenceOfSum = function (nums) {
    let sumOfEle = 0;
    let sumOfDigits = 0;
    for (let i = 0; i < nums.length; i++) {
        sumOfEle += nums[i];
        let num = nums[i]
        while (num > 0) {
            sumOfDigits += num % 10;
            num = Math.floor(num / 10)
        }
    }
    return Math.abs(sumOfEle - sumOfDigits);
};