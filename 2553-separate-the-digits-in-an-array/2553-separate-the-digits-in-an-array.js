/**
 * @param {number[]} nums
 * @return {number[]}
 */
var separateDigits = function (nums) {
    let ans = [];

    for(let num of nums) {
        let temp = [];

        while(num > 0) {
            temp.push(num % 10);
            num = Math.floor(num / 10);
        }

        for(let i = temp.length - 1; i >= 0; i--) {
            ans.push(temp[i])
        }
    }
    
     return ans;
};