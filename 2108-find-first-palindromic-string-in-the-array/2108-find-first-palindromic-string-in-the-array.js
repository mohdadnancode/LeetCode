/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function (words) {
    for (let word of words) {
        let rev = "";
        for (let i = word.length - 1; i >= 0; i--) {
            rev += word[i]
        }
        if (word === rev) return word;
    }
    return "";
};