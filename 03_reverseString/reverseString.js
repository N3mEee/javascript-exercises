const reverseString = function(input) {
    let reverse = ''
    for (i = input.length; i >= 0; i--){
        reverse += input.charAt(i);
    }
    return reverse;
};

// Do not edit below this line
module.exports = reverseString;
