const http = require('http')

// const server = http.createServer((req, res)=>{
//     if (req.url==='/'){
//         res.end('welcome to our home page')
//     }
//     if (req.url==='/about'){
//         res.end('Here is our short history')
//     }
//     res.end(`<h1>OOps!</h1>
//     <a href="/">Back home</a>`)
// })

//using event emitter API
const server = http.createServer()

server.on('request', (req, res) =>{
    res.end('Welcome')
})

server.listen(5000)
