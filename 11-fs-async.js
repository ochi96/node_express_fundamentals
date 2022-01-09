const {readFile, writeFile} = require('fs')
console.log('start');


readFile('./content/first.txt', 'utf8',(err, result)=>{///first callback, reading first file.
    if (err){
        console.log(err)
        return
    }
    const first = result;
    readFile('./content/second.txt', 'utf8',(err, result)=>{///second callback, reading second file.
        if (err){
            console.log(err)
            return
        }
        const second = result
        writeFile('./content/result-async.txt', 
        `Here is the result: ${first}, ${second}`, (err, result)=>{///third callback, combining the results and writing to file.
            if(err){
                console.log(err)
                return
            }
            console.log('done with this task')
        })
    })
})

console.log('starting next task')



