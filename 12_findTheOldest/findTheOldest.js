const findTheOldest = function (arrayPeople) {
    let currentYear = new Date().getFullYear()
    let x = arrayPeople.sort((a, b) => {
        let last = 0;
        let next = 0;
        if (a.yearOfDeath === undefined || b.yearOfDeath === undefined) {
            last = currentYear - a.yearOfBirth;
            next = currentYear - b.yearOfBirth;
        } else {
            last = a.yearOfDeath - a.yearOfBirth;
            next = b.yearOfDeath - b.yearOfBirth;
        }
        return last > next ? -1 : 1;
    })
    return x[0]
};

// Do not edit below this line
module.exports = findTheOldest;

//reduce