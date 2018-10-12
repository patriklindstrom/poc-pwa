

// https://www.sitepoint.com/how-to-use-ssltls-with-node-js/
const https = require("https"),
fs = require("fs");

const options = {
key: fs.readFileSync("C:/certs/pwa-cert.pem"),
cert: fs.readFileSync("C:/certs/pwa-cert.pem")
};

const generator = require('./conversation-topic-generator');

// https://www.sitepoint.com/how-to-use-ssltls-with-node-js/



const express = require('express');
var path = require('path');
const app = express();
// Server routes...
app.get('/hello',(req,res)=> res.send({cm:'What superpower would you like? To fly or be invisible?'}));
app.get('/api',(req,res)=> res.send({link:'./apidocumentation'}));
app.get('/api/cm',(req,res)=> res.send(
    {cm:{
        titel:generator.gettopic(req.query)},
        cat:"casual"
     }
));


    console.log('We are in production mode')
    app.use(express.static('public'));
    app.get('*',(req,res)=>{
        res.sendFile(path.join(__dirname,'public/index.html'))
    })

app.listen(process.env.PORT || 8000,()=>console.log('Listening'));

https.createServer(options, app).listen(8080);