const app = require('./public/app.js')

const port = process.env.PORT || 3000

app.set('view engine', 'ejs');

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
