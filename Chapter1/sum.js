// Modules are encapsulated and only share what they want to share with the outside world. In this case, the sum function is shared with the outside world, but the a and b variables are not.

console.log("sum file");
const v = "test sum";
function sumFn(a, b) {
  return a + b;
}

// module.exports = sumFn;

// want to export multiple things from a module, you can use the exports object to add properties to it
module.exports = { v, sumFn };

// module.exports.v = v;
// module.exports.sumFn = sumFn;

console.log(module.exports); // {}
