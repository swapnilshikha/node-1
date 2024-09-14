const math = require("./math");

//const { add, sub} = require("./math");

console.log("HELLO , I'm Megha");

console.log("Math value is :", math);
console.log("Math value is :", math.add(2, 7));
console.log("Math value is :", math.sub(2, 7));

// if we write, const { add, sub} = require("./math"); 
// then we can directly use -----   console.log("Math value is :", sub(2, 7));
// no need to write math.sub()