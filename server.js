/*********************
SETUP
**********************/

/* ENVIRONMENT CONFIG */
require('dotenv').config();


/* EXPRESS SETUP */
const express = require('express');
const app = express();
const methodOverride = require('method-override');
const PORT = process.env.PORT || 3000;


/* DATA SETUP */
const db = require('./models/db');
db.once('connected', () => {
  console.log('connected to the goose');
})


/* VIEW ENGINE SETUP */
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());


/* MIDDLEWARE & CONTROLLER SETUP */
// needed for res.locals (store data in temp locale)
app.use((req, res, next) => {
  res.locals.data = {}
  next();
});

// needed for req.body (grab data from forms)
app.use(express.urlencoded({extended: true}));

// needed for delete & put functions
app.use(methodOverride('_method'));

// needed for serving css, js, html files
app.use(express.static('public'));

// refer to routeController for all route requests
app.use('/products', require('./controllers/routeController'));


/*********************
PORT LISTENER
**********************/

app.listen(PORT, () => {
  console.log('I\'m hearing you port', PORT);
});
