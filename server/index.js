const express = require('express');
const bodyParser = require('body-parser');
const ctrl = require('./controllers/books_controller');

const app = express();

app.use(bodyParser.json());

app.get('/api/books', ctrl.read)
app.post('/api/books', ctrl.create)
app.delete('/api/books/:id', ctrl.delete)
app.put('/api/books/:id', ctrl.update)

const port = 3000;

app.listen(port, () => {
    console.log('I AM LISTENING ON PORT ' + port);
})

