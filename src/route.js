// importando o express
const express = require('express')

// importando o controller de question e room
const questionController = require('./controllers/QuestionController')
const roomController = require('./controllers/RoomController')

// armazenando as funcionalidades de rotas
// do express
const route = express.Router()

// definindo as rotas
route.get('/', (req, res) => {res.render('index', {page: 'enter-room'})})
route.get('/create-pass', (req, res) => {res.render('index', {page: 'create-pass'})})

route.post('/create-room', roomController.create)
route.get('/room/:room', roomController.open)
route.post('/enter-room', roomController.enter)

route.post('/question/:room/:question/:action', questionController.index);
route.post('/question/create/:room', questionController.create);

module.exports = route