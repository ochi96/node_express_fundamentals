const http = require('http')

const server = http.createServer((req, res)=>{
    // console.log('request event')
    // res.end('hello world')
    if (req.url==='/'){
        res.end('Home Page')
    }
    if (req.url==='/about'){
        //BLOCKING CODE!!
        for (let i=0; i<1000; i++){
            for (let j=0; j<1000; j++){
                console.log(`${i} ${j}`)
            }
        }
        res.end('About Page')
    }
    // res.end('Error Page')

})

//this process will always stay alive because its async, like the set interval function
server.listen(5000, ()=>{
    console.log('Server is listening on port: 5000....');
    
})