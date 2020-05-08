const database = require('./database')


module.exports = {
    todos:{
        listAll(){
            return database('todos')
        }
    }
}