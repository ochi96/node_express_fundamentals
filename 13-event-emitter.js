const EventEmitter = require('events')

const customEmitter = new EventEmitter()

//act on the event using a callback function.
customEmitter.on('response', (name, id)=>{
    console.log(`data recieved ${name} with id ${id}`)
})
//another function that acts on the same event.
customEmitter.on('response', ()=>{
    console.log(`some other logic here`)
})

//emit an event
customEmitter.emit('response', 'john', 34)





