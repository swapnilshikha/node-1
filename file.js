const fs = require("fs");

//Synch .... create file --> write data
fs.writeFileSync("./test.txt", "Hey There")
fs.writeFileSync("./test.txt", "GOOD LUCK") //it will over-write the above text

//Asynchronous func
fs.writeFile("./test.txt", "Hey megha", (err) => {}); //it will also over-write the above text


//-----readFile------ 

const result = fs.readFileSync("./contacts.txt", "utf-8"); //returns both result and error
console.log(result);

fs.readFile("./contacts.txt", "utf-8", (err, result) => { //we have to write a separate error handling function call
    if (err) {
        console.log("ERROR", err)
    } else {
        console.log(result);
    }
})

fs.appendFileSync("./test.txt", `${Date.now()} Hey There\n`) //it will add more contents to your file but not over-write

// //copy a file
// fs.cpSync("./test.txt", "./copy.txt");
// //delete a file 
// fs.unlinkSync("./copy.txt");

console.log(fs.statSync("./test.txt").isFile());
fs.mkdirSync("my-docs"); //mkdir ---- make a directory 
//fs.mkdirSync("my-doccs/a/b", { recursive:true});

//Javascript does'nt provide the 'fs' module (file system modules) but Node.js does