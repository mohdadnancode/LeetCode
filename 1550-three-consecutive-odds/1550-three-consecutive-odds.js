/**
 * @param {number[]} arr
 * @return {boolean}
 */
var threeConsecutiveOdds = function (arr) {
    let num = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) num++
        else num = 0;

        if (num === 3) return true
    }
    return false
};