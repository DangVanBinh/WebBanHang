const path = require('path')
const express = require('express');
const morgan = require('morgan');
const exphbs = require('express-handlebars'); // Removed the extra semicolon
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, '/public')));

// HTTP logger
app.use(morgan('combined'));

//bootstrap/css
app.use("/css",express.static("./node_modules/bootstrap/dist/css"));
//bootstrap/js
app.use("/js",express.static("./node_modules/bootstrap/dist/js"));
//or
app.use("/",express.static("./node_modules/bootstrap/dist/"));



// Template engine
app.engine('hbs', exphbs.engine({
  extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, '/client/views'));

app.get('/', (req, res) => {
  res.render('home')
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})