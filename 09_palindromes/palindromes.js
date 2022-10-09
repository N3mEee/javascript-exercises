const palindromes = function (string) {
    string = string.toLowerCase();
    let array = string.split('')
    array = array.filter((item) => {
        return (item === ` ` || item === '.' || item === '!' || item === ',') ?false :true;
    })
    array = array.every((element, index) => {
        return element === array.reverse()[index];
    })
    return (array) ?true :false;
    }

// Do not edit below this line
module.exports = palindromes;
