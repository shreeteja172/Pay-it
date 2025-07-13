const express = require("express");
const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const z = require("zod");
const bcrypt = require("bcrypt");
const { authMiddleware } = require("../middlewares/auth");
const { JWT_SECRET } = require("../config");
const User = require("../db/db").User;

const router = express.Router();

const signupSchema = z.object({
  username: z.string().min(3).max(30),
  password: z.string().min(6),
  firstName: z.string().min(1),
  lastName: z.string().min(1),
});

router.post(
  "/signup",
  asyncHandler(async (req, res) => {
    const parsed = signupSchema.safeParse(req.body);
    if (!parsed.success) {
      return res.status(400).json({
        error: "Invalid input",
      });
    }

    const { username, password, firstName, lastName } = parsed.data;

    // Check if user already exists or not
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ error: "User already exists" });
    }

    const newUser = new User({ username, firstName, lastName });
    const hashedPassword = await newUser.createHash(password);
    newUser.password_hash = hashedPassword;

    await newUser.save();

    const token = jwt.sign({ userId: newUser._id }, JWT_SECRET);

    res.status(201).json({
      message: "User created successfully",
      token: token,
    });
  })
);

router.post(
  "/signin",
  asyncHandler(async (req, res) => {
    const { username, password } = req.body;

    const user = await User.findOne({ username });
    if (!user) {
      return res.status(400).json({ message: "User not found." });
    }

    const validPassword = await user.validatePassword(password);
    if (!validPassword) {
      return res.status(400).json({ message: "Incorrect password" });
    }

    const token = jwt.sign({ userId: user._id }, JWT_SECRET);

    return res.status(200).json({
      message: "User successfully logged in",
      token: token,
    });
  })
);

const updateBody = z.object({
  password: z.string().optional(),
  firstName: z.string().optional(),
  lastName: z.string().optional(),
});

router.put("/settings", authMiddleware, async (req, res) => {
  try {
    const { success } = updateBody.safeParse(req.body);
    if (!success) {
      res.status(411).json({
        message: "Error while updating information",
      });
    }

    const updatedUser = await User.findByIdAndUpdate(
      req.userid,
      { $set: req.body },
      { new: true, runValidators: true }
    );

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    const plainUser = updatedUser.toObject();
    const {password_hash,...rest} = plainUser

    res.json({ message: "Updated successfully", rest });
  } catch (e) {
    console.log("error", e);
  }
});

module.exports = router;
