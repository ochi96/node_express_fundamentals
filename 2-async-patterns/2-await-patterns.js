const {readFile, writeFile} = require('fs').promises
// const util = require('util')

// const readFilePromise = util.promisify(readFile)
// const writeFilePromise = util.promisify(writeFile)

const start = async () =>{
    try {
        const first = await readFile('./content/first.txt', 'utf8')
        const second = await readFile('./content/second.txt', 'utf8')
        await writeFile('./content/result-mind-grenade.txt',`THIS IS AWESOME: ${first}, ${second}`,{flag: 'a'})
        console.log(first, second)
    } catch (error) {
        console.log(error)
    }
}

start()

//using a promise
// wrap the task in a promise that gives a resolve or reject
// use then and catch to get the data and error respectively
// 
// const getText = (path) => {
//     return new Promise((resolve, reject)=>{
//     readFile(path, 'utf8',(err, data)=>{
//         if (err){
//             reject(err)
//         }else{
//             resolve(data)
//         }
//     })
// })
// }

// getText('./content/first.txt')
//     .then((result) => console.log(result))
//     .catch((err)=>console.log(err))

//using async await captures the result of the promises




//     const first = result;
//     readFile('./content/second.txt', 'utf8',(err, result)=>{///second callback, reading second file.
//         if (err){
//             console.log(err)
//             return
//         }
//         const second = result
//         writeFile('./content/result-async.txt', 
//         `Here is the result: ${first}, ${second}`, (err, result)=>{///third callback, combining the results and writing to file.
//             if(err){
//                 console.log(err)
//                 return
//             }
//             console.log('done with this task')
//         })
//     })
// })

// console.log('starting next task')



