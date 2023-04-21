const app = require('./app.js')

const port = process.env.PORT || 3000

app.set('view engine', 'ejs');

app.get('/', function(req, res) {
  res.render('public/index');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
