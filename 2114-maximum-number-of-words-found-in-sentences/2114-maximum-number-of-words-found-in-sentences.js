/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function(sentences) {
    let max = 0;
    for(let sen of sentences){
        let count = 1;
        for(let i = 0; i < sen.length; i++){
            if(sen[i] === " "){
                count++;
            }
            if(count > max) {
                max = count
            }
        }
    }
    return max;
};