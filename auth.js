const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const person = require("./models/person");


// ab hum ek verification function create krenge 
passport.use(new LocalStrategy (async (USERNAME , password, done) =>{
  // Authentication Logic here
  try {
    // console.log("Recieved credentials :", USERNAME, password);
    const user =await person.findOne({username : USERNAME});

    if(!user)
      return done(null, false, {massage : " incorrect username. "});
      
    // username mil gya to phir dekhte hai password ko
    const ispasswordMatch  = user.password === password ? true : false;
    
    // if password match ho gya to ab krenge
    if(ispasswordMatch){
      return done(null, user);
    }else{
      return done(null , false, {massage : " incorrecr password. "});
    }

  } catch (error) {
    return done(error);
  }
}));

module.exports = passport;