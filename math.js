function add(a, b){
    return a+b;
}

function sub(a, b){
    return a-b;
}

//module.exports = add; 
module.exports = { add, sub };  //module.exports is used only once

//exports.add = {a, b} => a + b;       we can use it multiple times