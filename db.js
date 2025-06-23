const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/mydb')
.then(()=>{
    console.log("Database connected succesfully!");
})
.catch((err)=>{
    console.log(err)
});