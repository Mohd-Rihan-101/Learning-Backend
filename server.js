// // we are write a differenc type of function

// // 1
// // function addNum(a, b) {
// //     return a + b;
// // }

// // const result = addNum(2, 8);
// // console.log(result);

// // 2

// // var add = (a, b)=>{
// //     return a+b;
// // }

// // 3
// // var add =(a,b)=> a+b;

// // const result = add(2,9);
// // console.log(result);

// // calback function

// // function callback() {
// //     console.log("callback fnx is running in laptop");
// // }

// // const add = function(a, b, callback) {
// //     var result = a+b;
// //     console.log("result", result);
// //     callback();

// // }
// // add(202, 98, callback);

// // fs module
// // os module

// // const { use } = require('express/lib/application');
// // var fs = require('fs');
// // var os = require('os');

// // var user = os.userInfo();
// // console.log(user);
// // console.log(user.username);

// // start create a server with espress

// const express = require("express");
// const app = express();
// const db = require("./db");

// // bodyparser is a middlewear bassically use for convert json data in javascript object data form me
// const bodyParser = require("body-parser");
// app.use(bodyParser.json()); // store data in req.body

// const person = require("./models/person");

// app.get("/", function (req, res) {
//   res.send("HII Welcomme to my hotel and what i can help you ?");
// });

// // app.get('/chicken', (req, res)=>{
// //     res.send("sure sir i would love to serve chicken");
// // })

// // app.get('/idli', (req, res)=>{
// //     var custom_idli  =  {
// //         name : "IDLI",
// //         size : 10,
// //         chatni : false,
// //          is_sambhar : true
// //     }
// //     res.send(custom_idli);
// // })

// // agar koi client is /person pr data bhejta hai to hum use save kr lenge kis basis pr jo humne schema bnaya hai

// app.post("/person", async (req, res) => {
//   try {
//     const data = req.body;

//     // ab ek new person ka data ko save krenge
//     const newPerson = new Person(data);

//     // save the new person in database
//     const response = await newPerson.save;
//     console.log("data saved success");
//     res.status(200).json({ response });
//   } catch (error) {
//     console.log("data saved Succecfully", error);
//     res.status(500).json({error:"internal server error"});
//   }
// });

// app.listen(3000, () => {
//   console.log("sever is lestening on port 3000");
// });

// const express = require("express");
// const mongoose = require("mongoose");
// const db = require("./db");
// const person = require("./models/person")
// const app = express();

// app.get('/', (req, res)=>{
//   res.send("welcome to my hotel what i can help you");
// })

// app.post('/person',async (req,res)=>{
//   try{
//     const data = req.body;

//     const newPerson = new person(data);
//     const response = await newPerson.save();
//     console.log("data saved succesfully")
//     res.status(200).json(response);
//   }catch (err){
//     console.log(err);
//     res.status(500).json({massage : "Internal server error"})
//   }
// })


// const PORT = 3000;
// app.listen(PORT, () => {
//   console.log("Server is running on port", PORT);
// });



// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// function add(a, b){
//   return a + b;
// }

// var result = add(10,40);
// console.log(result)


// calback function

// function callback(){
//   console.log("this is the callback function")
// }

// const add = function(a , b, callback) {
//   var result = a + b;
//   console.log(result);
//   callback();

// }

// add(2, 8, callback);

// fs and os module

// var fs = require('fs');
// var os = require('os');

// var user = os.userInfo();
// console.log(user.username);

// //fs
// fs.appendFile('greeting.txt', "Hello" + user.username, ()=>{
//   console.log("Hiii Rihan are you ready for start the backend jurney")
// })

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// create a server using express
    
// app.get('/chicken', (req, res)=>{
//  res.send("sure sir, i would like to serve chicken ");
// })

// app.get('/idli', (req, res)=>{
//   res.send("Sure sir, i am very happy i would love to serve south indian dish ")
// })

// app.post('/person', (req,res)=>{
//   res.send("data is saved");
// })

// app.post('/item', (req,res)=>{
//   res.send("data is saved");
// })


require ('./db');
require ('./models/person');

const espress = require('express');
const app = espress();

app.get('/', function(req, res){
  res.send("Welcome to my hotel what i can help you");
})

app.listen(5000, ()=>{
  console.log("Server listening on port 5000");
});



