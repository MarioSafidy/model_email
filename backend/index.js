const express = require('express')
const app = express()
var cors = require('cors')
const port = 3000
var bodyParser = require('body-parser')
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 

const arrayDatas = [];

app.use(cors())

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.post('/submission', (req, res) => {
    var name = req.body.name;
    var email = req.body.email;

    console.log({ name, email })
    
    arrayDatas.push({ name, email });
    res.json({ status: "success", message: "submission ok" })
    // res.send("Submission OK")
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})