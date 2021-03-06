const express = require('express');
const app = express();
const port = process.env.port || 4000;
const exphbs = require('express-handlebars');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const articles = require('./db/articlesdb');
const hbs = exphbs.create({
    defaultLayout: 'main',
    extname: 'hbs'
});

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', 'views');
app.use(bodyParser.urlencoded({extended: true}));


app.get('/', (req, res) => {
	res.render('index');
});

app.get('/articles', (req, res, next) => {
	res.send(articles);
});

app.post('/', (req, res, next) => {
  const article = {title: req.body.articlebody};
  res.send(article);
  console.log(article);
});

app.get('/articles/:id', (req, res, next) => {
	const id = req.params.id;
	console.log(id);
	res.send(articles[id]);
});

app.delete('/articles/:id', (req, res, next) => {
	const id = req.params.id;
	console.log(`delete ${id}`);
	delete articles[id];
	res.send(`delete ${articles[id]}`);
});






app.listen(port, () => {
    console.log(`---server start on port ${port}---`);
});