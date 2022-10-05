const removeFromArray = function (array, argument1, argument2 = test, argument3 = test, argument4 = test) {
    for (let i = array.length -1; i >= 0; i--) {
        if (argument1 === array[i] || argument2 === array[i] || argument3 === array[i] || argument4 === array[i]) {
            array.splice(i, 1)
        }
    }
    return array;

};


// Do not edit below this line
module.exports = removeFromArray;