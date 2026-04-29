/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function (sentences) {
    let max = 0;
    for (let sen of sentences) {
        let count = sen.split(" ").length;
        if(count > max) max = count;
    }
    return max;
};