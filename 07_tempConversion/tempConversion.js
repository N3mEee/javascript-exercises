const ftoc = function(num) {
  let c = (num-32)*5/9
  c = c.toFixed(1)
  c = Number(c)
  return c
};

const ctof = function(num) {
  let f = (num*9/5)+32
  f = f.toFixed(1)
  f = Number(f)
  return f
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
