const express = require("express");
const router = express.Router();

const MenuItem = require("./../models/MenuItem");
// const { route } = require("./personRoutes");

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
    console.log("data fetching successe!");
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ massage: "internal server error in get method" });
  }
});

// taste type
router.get("/:tasteType", async (req, res) => {
  try {
    const tasteType = req.params.tasteType;
    if (tasteType == "sweet" || tasteType == "spicy" || tasteType == "sout") {
      const response = await MenuItem.find({ taste: tasteType });
      console.log("data fetching successful?");
      res.status(200).json(response);
    }
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const menuId = req.params.id;
    const menuUpdateData = req.body;

    const response = await MenuItem.findByIdAndUpdate(menuId, menuUpdateData, {
      new: true,
      runValidators: true,
    });

    if (!response) {
      return res.status(400).json({ err: "item not found" });
    }
    console.log("Data Updated");
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
