var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://akarsh:Akarsh30@cluster0.dxnxe.mongodb.net/admit?retryWrites=true&w=majority";
const express = require('express');
var bodyParser = require('body-parser')
const app = express();
  
// const connectDB = require('./config/db')
// connectDB();
app.use(express.static('public'))
var urlencodedParser = bodyParser.urlencoded({ extended: false })
    
 app.get('/', (req, res) => {
   res.sendFile(__dirname + '/index.html');
 });


 app.post('/', urlencodedParser, (req, res) => {
     console.log('Got body:', req.body);
     res.send('Your data has been stored in the database').status(200);

     var name = req.body.name;
     var email = req.body.email;
     var contact = req.body.contact
     var course = req.body.course
     var country = req.body.country;
     var DOB = req.body.DOB;

     MongoClient.connect(url, function(err, db) {
        
        if (err) throw err;
        var dbo = db.db("admit");
         var myobj = { name, email,contact,course,country,DOB };

        
         dbo.collection("data").insertOne(myobj, function(err, res) {
           if (err) throw err;
           console.log("1 document inserted");
           db.close();
         });
       });

     console.log(name);
 });
    
app.get('/find', (req, res) => {
    res.sendFile(__dirname + '/email.html');
    // res.redirect()
  });


  app.post('/find', urlencodedParser, (req, res) => {
    console.log('Got body:', req.body);
    // res.sendStatus(200);

    var email = req.body.email;
  

    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("admit");
        dbo.collection("data").findOne({email}, function(err, result) {
          if (err) throw err;
          console.log(result);
          res.send(result);
          db.close();
        });
      });
    })

app.listen(3000);
