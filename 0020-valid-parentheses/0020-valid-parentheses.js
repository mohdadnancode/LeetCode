/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = [];
    const map = {
        ")": "(",
        "}": "{",
        "]": "["
    };

    for(let char of s){
        if(char in map){
            if(stack.length && stack[stack.length -1] === map[char]){
                stack.pop();
            } else {
                return false;
            }
        } else {
            stack.push(char);
        }
    }
    return stack.length === 0;
};