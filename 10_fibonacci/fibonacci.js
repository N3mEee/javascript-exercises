const fibonacci = function(num) {
    if(num<0) return "OOPS"
    let fibonacci = [0,1]
    for (let i = 1; i<=num; i++){
        fibonacci.push(fibonacci[i]+fibonacci[i-1])
        console.log(fibonacci)
    }
    return fibonacci[num]
};

// Do not edit below this line
module.exports = fibonacci;