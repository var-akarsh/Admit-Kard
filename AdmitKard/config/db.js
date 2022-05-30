// // require('dotenv').config();

// const mongoose = require('mongoose');
// function connectDB() {
//     // Database connection 🥳
//     mongoose.connect('mongodb+srv://akarsh:Akarsh30@cluster0.dxnxe.mongodb.net/admit?retryWrites=true&w=majority', { useNewUrlParser: true, useCreateIndex:true, useUnifiedTopology: true, useFindAndModify : true });
//     const connection = mongoose.connection;
//     connection.once('open', () => {
//         console.log('Database connected ');
//     }).catch(err => {
//         console.log('Connection failed ');
//     });
// }
// module.exports=connectDB




// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   console.log("Database created!");
//   db.close();
// });


