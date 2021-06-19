const {API_KEY}= require('./keys')
const express= require('express')
const app= express()
var axios = require('axios');
var PORT= process.env.PORT||80


app.use(express.json())
app.use(express.static('public'))

// var rawdata;
app.post('/weather',(req,res)=>{
  const url= `http://api.weatherstack.com/current?access_key=${API_KEY}&query=${req.body.place}`
  axios({
    url:url,
    responseType:'json',
  }).then(data=>{
    // rawdata=data.data;
    res.json(data.data)
  })
  
})

// app.get('/data',(req,res)=>{

//   res.json(rawdata);
// })



app.listen(PORT,()=>{
  console.log(`server running on ${PORT}`);
})