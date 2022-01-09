//GLOBALS-NO WINDOW!

// global variables: available everywhere
// process - infow wbout env where the program is being 

// path to current directory
console.log(__dirname)

// file name
console.log(__filename)

// run code once after the set time
setTimeout(()=>{
    console.log('hello world')
}, 1000)

//run code in intervals of the set time
setInterval(() => {
    console.log('hell world')
}, 1000);


