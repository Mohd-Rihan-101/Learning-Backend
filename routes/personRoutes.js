const express = require("express");
const router = express.Router();
const person = require("../models/person");

router.post("/", async (req, res) => {
  try {
    const data = req.body; // assuming the request body contains the person data

    // create a new person document usign the mongoose model
    const newPerson = new person(data);

    // save the new person to the database
    const response = await newPerson.save();
    console.log("data saved");
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "internal server Error" });
  }
});

router.get("/", async (req, res) => {
  try {
    const data = await person.find();
    console.log("data fetch successful");
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "internal server Error" });
  }
});

router.get("/:workType", async (req, res) => {
  try {
    const workType = req.params.workType; // Extract the work type from the URL parameter
    if (workType == "manager" || workType == "chef" || workType == "waiter") {
      const response = await person.find({ work: workType });
      console.log("data fetching done!");
      res.status(200).json(response);
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ err: "invaid work type" });
  }
});

// create PUT to Update data
router.put("/:id", async (req, res) => {
  try {
    const personId = req.params.id;
    const personUpdateData = req.body;

    const response = await person.findByIdAndUpdate(
      personId,
      personUpdateData,
      {
        new: true, // Return the update document
        runValidators: true, // Run mongoose validation
      }
    );

    if (!response) {
      return res.status(400).json({ error: "person NOT Found" });
    }

    console.log("data Update Successful");
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// create DELETE method to delete data

router.delete("/:id", async (req, res) => {
  try {
    const personId = req.params.id;
    const response = await person.findByIdAndDelete(personId);

    if (!response) {
      return res.status(400).json({ error: "person not found" });
    }

    console.log("data Deleted");
    res.status(200).json({ mssage: "data delete succesfully!" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "internal server error" });
  }
});

module.exports = router;
