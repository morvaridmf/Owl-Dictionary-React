const express = require ('express');
const app = express();
const cors = require('cors')
const Owlbot = require('owlbot-js');

app.use(cors())
const client = Owlbot('1180c12dced8bafce456dfbf17c8d062ba328b74');


app.get("/search/:search", (req,res)=>{
const word =  req.params.search;
client.define(word)

.then(function(result){
    
   return res.status(200).json(result).end();
 });
 
     });


  app.listen(5000, () => {
    console.log('server is listening on port 5000')
})