const express = require('express')
const app = express()
const port = process.env.PORT || 9001
const queries = require('./db/queries.js')

app.listen(port, () =>{
    console.log(`listening on ${port}`)
})

app.get('/ping', (request, response) => {
    response.send({
        msg: "pong",
        ok: true
    })
})

app.get('/todos', (request, response)=>{
    queries.todos.listAll().then(todos => response.send(todos))
})