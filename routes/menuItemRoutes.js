const express = require("express");
const router = express.Router();

const MenuItem = require('./../models/MenuItem');

// MenuItem api
router.post("/", async (req, res) => {
  try {
    const data = req.body;
    const newItem = new MenuItem(data);
    const resp = await newItem.save();

    console.log("data saved succesful");
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ massage: "internal server error" });
  }
});


// create get api to get tha data

router.get("/", async (req, res) => {
  try {
    const data = await MenuItem.find();
    console.log("dat fetching successe!");
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ massage: "internal server error in get method" });
  }
});

module.exports = router;