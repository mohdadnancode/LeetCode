/**
 * @param {number[]} nums
 * @return {number}
 */
var differenceOfSum = function(nums) {
    let sumOfEle = 0;
    let sumOfDigits = 0;
    for(let i = 0; i < nums.length; i++){
        sumOfEle += nums[i];
        while(nums[i] > 0){
            sumOfDigits += nums[i] % 10;
            nums[i] = Math.floor(nums[i] / 10)
        }
    }
    return Math.abs(sumOfEle - sumOfDigits);
};