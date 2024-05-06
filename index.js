const express = require('express')
const app = express()
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req,res)=>{
    res.send('Signer Gateway test app is running')
})

app.post('/esign/success', (req,res)=>{
    console.log(req.body)
    console.log('*'.repeat(10))
    console.log(req.headers)
    res.send('Signer Gateway response received')
})

app.post('/esign/error', (req,res)=>{
    console.log(req)
    res.send('Signer Gateway response received')
})

app.post('/esign/cancelled', (req,res)=>{
    console.log(req)
    res.send('Signer Gateway response received')
})

app.listen(6000, ()=>console.log('App is running on port 6000'))
