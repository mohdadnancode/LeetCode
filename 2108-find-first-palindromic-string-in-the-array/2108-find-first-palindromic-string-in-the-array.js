/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function (words) {
    for (let word of words) {
        let rev = [...word].reduce((rev, char) => char + rev, "")
        if(rev === word) return word
    }
    return "";
};