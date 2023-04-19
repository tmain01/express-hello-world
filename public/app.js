const express = require('express');
const path = require("path");
const fs = require('fs');
const app = express();
var bodyParser = require('body-parser');

// Create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.post('/post', urlencodedParser, function (req, res) {
   // Prepare output in JSON format
   response = {
      device_name:req.body.device_name,
      os:req.body.os,
      release:req.body.release,
      os_version:req.body.os_version,
      machine_type:req.body.os_version,
      processor:req.body.processor
   };
   //try {
   //   fs.writeFileSync('public/sysdat.json', JSON.stringify(response));
      // file written successfullu
   //} catch (err) {
   //   console.error(err);
   //}
   
  
   
   console.log(response);
   res.end(JSON.stringify(response));
})

// #############################################################################
// Logs all request paths and method
app.use(function (req, res, next) {
  res.set('x-timestamp', Date.now())
  res.set('x-powered-by', 'cyclic.sh')
  console.log(`[${new Date().toISOString()}] ${req.ip} ${req.method} ${req.path}`);
  next();
});

// #############################################################################
// This configures static hosting for files in /public that have the extensions
// listed in the array.
var options = {
  dotfiles: 'ignore',
  etag: false,
  extensions: ['htm', 'html','css','js','ico','jpg','jpeg','png','svg'],
  index: ['index.html'],
  maxAge: '1m',
  redirect: false
}
app.use(express.static('public', options))

// #############################################################################
// Catch all handler for all other request.
app.use('*', (req,res) => {
  res.json({
      at: new Date().toISOString(),
      method: req.method,
      hostname: req.hostname,
      ip: req.ip,
      query: req.query,
      headers: req.headers,
      cookies: req.cookies,
      params: req.params
    })
    .end()
})

module.exports = app
