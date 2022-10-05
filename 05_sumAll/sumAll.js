const sumAll = function (arg1, arg2) {
    let sum = 0;
    if (typeof (arg1) !== 'number' || typeof (arg2) !== 'number') {
        return 'ERROR'
    } else if (arg1 < arg2 && arg1 > 0 && arg2 > 0) {
        for (i = arg1 - 1; i <= arg2; i++) {
            sum += arg2 - i
        }
    } else if (arg1 > arg2 && arg1 > 0 && arg2 > 0) {
        for (i = arg2 - 1; i <= arg1; i++) {
            sum += arg1 - i
        }
    } else {
        return 'ERROR'
    }

    return sum
};

// Do not edit below this line
module.exports = sumAll;