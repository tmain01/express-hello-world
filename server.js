const app = require('./public/app.js')
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const port = process.env.PORT || 3000

global.document = new JSDOM("https://asmoverlord.cyclic.app").window.document;

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
