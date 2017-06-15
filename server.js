const express = require('express')
const r = require('rethinkdbdash')()
const bodyParser = require('body-parser')
const webpack = require('webpack')
const config = require('./build/webpack.dev.conf')
const _ = require('lodash')

const app = express()
const router = express.Router()
const compiler = webpack(config)
const jsonParser = bodyParser.json()

// app.set('views','./src/components');
app.set('view engine','vue');

//Database Connection to Rethinkdb
var connection = null;
r.connect( {host: 'localhost', port: 28015}, function(err, conn) {
    if (err) throw err;
    connection = conn;
})

app.get('/', (req, res) => {
  console.log("---------------msg from get method---------------------");
  // r.db('test').tableCreate('authors').run(connection, function(err, result) {
  //   if (err) throw err;
  //   console.log(JSON.stringify(result, null, 2));
  // })
  res.render('/Home')
})

// handle fallback for HTML5 history API
app.use(require('connect-history-api-fallback')())

// serve webpack bundle output
app.use(require('webpack-dev-middleware')(compiler, {
  publicPath: config.output.publicPath,
  stats: {
    colors: true,
    chunks: false
  }
}))

app.use(require('webpack-hot-middleware')(compiler))

console.log("-------------msg from server js--------------------");


app.use('/api', router)

app.listen(8000, 'localhost', function (err) {
  if (err) {
    console.log(err)
    return
  }
  console.log('Listening at http://localhost:8000')
})
