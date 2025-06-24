const mongoose = require("mongoose");
const bcrpt = require("bcrypt");

const personSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  work: {
    type: String,
    enum: ["chef", "manager", "waiter"],
    required: true,
  },
  mobile: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  address: {
    type: String,
  },
  salary: {
    type: Number,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

// for hash the password
personSchema.pre("save", async function (next) {
  const person = this;

  // hash the password  only if it has been modified (or is new)
  if (!person.isModified("password")) return next();

  try {
    // hash password generate
    const salt = await bcrpt.genSalt(10);

    // hash password
    const hashpassword = await bcrpt.hash(person.password, salt);
    person.password = hashpassword;
    next();
  } catch (error) {
    return next(error);
  }
});

// create function for match the password

personSchema.methods.comparePassword = async function (candidatePassword) {
  try {
    // Use bcrypt to compare the provided password with the hash password
    const isMatch = await bcrpt.compare(candidatePassword, this.password);
    return isMatch;

  } catch (error) {
    throw error;
  }
};

// create a model using Schema

const person = mongoose.model("person", personSchema);
module.exports = person;
