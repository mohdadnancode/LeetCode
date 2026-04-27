/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function(sentence) {
    const sen = new Set(sentence);
    if(sen.size === 26){
        return true;
    }
    return false;
};