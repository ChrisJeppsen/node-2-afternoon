const express = require('express')
const app = express()
const messagesCtrl = require('./controllers/messages_controller')

app.use(express.json())
app.use(express.static(__dirname + '/../public/build'));

app.post('/api/messages', messagesCtrl.create)
app.get('/api/messages', messagesCtrl.read)
app.put('/api/messages/:id', messagesCtrl.update)
app.delete('/api/messages/:id', messagesCtrl.delete)

const port = 4000
app.listen(port, () => {
    console.log('server is listening')
})