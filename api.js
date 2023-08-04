const express = require('express')
const bodyParse = require('body-parser')
const cors = require('cors')
const xlsx = require('xlsx')
const app = express()

app.use(bodyParse.json())
app.use(bodyParse.urlencoded({ extended: false }))
app.use(cors())


app.get('/', function (req, res) {
    res.send('Hello Wosasdadsrlds')
})
app.post('/Amine', function (req, res) {
    console.log(req.body.name)
    res.send('This Wosasdadsrasdld')
})

app.get('/getAllStudents', function (req, res) {
//     res.send(
//         [
//             {id:14, name: 'amine',age:30},
//             { id: 15, name: 'mazen', age: 31 },
//             {id:16, name: 'walid',age:34},
//             {id:17, name: 'maya',age:23},
//             { id: 18, name: 'mahdi', age: 53 }


//         ])
// })
let wb = xlsx.readFile("data.xlsx");
let ws = wb.Sheets["students"];
let data = xlsx.utils.sheet_to_json(ws);
res.send(data);
})


app.post('/login', function (req, res) {
    
    let _username=req.body.username; 
    let _password=req.body.password;

    if(_username=="amine" && _password=="amin1324"){
        res.status(200).send("sucess")
    }else{
        res.status(403).send("fail")
    }

})
app.listen(3000)