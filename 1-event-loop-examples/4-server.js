const http = require('http')

const server = http.createServer((req, res)=>{
    console.log('request event')
    res.end('hello world')
})

//this process will always stay alive because its async, like the set interval function
server.listen(5000, ()=>{
    console.log('Server is listening on port: 5000....');
    
})