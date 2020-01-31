const express = require('express');
const app = express();
const port = process.env.port || 4000;
const exphbs = require('express-handlebars');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const hbs = exphbs.create({
    defaultLayout: 'main',
    extname: 'hbs'
});

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', 'views');
app.use(bodyParser({extended: true}));

const arr = ['hi', 'world'];

app.get('/', (req, res) => {
    res.render('index', {
			arr: arr
		});
});

app.get('/contacts', (req, res) => {
    res.render('contacts');
});

app.post('/', (req, res) => {
		console.log(req.body);
		res.redirect('/');
});





app.listen(port, () => {
    console.log(`---server start on port ${port}---`);
});