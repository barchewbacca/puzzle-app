require(`dotenv`).config();
const {PORT} = process.env;

const express = require('express');
const path = require('path');
const app = express();

const routes = require('./routes');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(express.static(path.join(__dirname, '../client/public')));
app.use('/', routes);

app.listen(PORT, () => console.log(`Express running → PORT ${PORT}!`));
