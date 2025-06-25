const express = require("express");
const router = express.Router();
const Profile = require("../models/Profile");

// GET /api/profiles - Get all profiles
router.get("/", async (req, res) => {
  try {
    const profiles = await Profile.find();
    res.json(profiles);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST /api/profiles - Create new profile
router.post("/", async (req, res) => {
  const { name, skills, experience, contact } = req.body;
  const newProfile = new Profile({ name, skills, experience, contact });

  try {
    const savedProfile = await newProfile.save();
    res.status(201).json(savedProfile);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// DELETE /api/profiles/:id - Delete a profile
router.delete("/:id", async (req, res) => {
  try {
    const profile = await Profile.findByIdAndDelete(req.params.id);
    if (!profile) return res.status(404).json({ message: "Profile not found" });
    res.json({ message: "Profile deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
