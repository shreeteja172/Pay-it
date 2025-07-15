const express = require("express");
const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const z = require("zod");
const bcrypt = require("bcrypt");
const { authMiddleware } = require("../middlewares/auth");
const { JWT_SECRET } = require("../config");
const { User, Account } = require("../models/db");
const router = express.Router();

const signupSchema = z.object({
  email: z.string().min(3).max(30),
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

    const { email, password, firstName, lastName } = parsed.data;

    // Check if user already exists or not
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: "User already exists" });
    }

    const newUser = new User({ email, firstName, lastName });
    const hashedPassword = await newUser.createHash(password);
    newUser.password_hash = hashedPassword;

    await newUser.save();

    //account with balance
    await Account.create({
      userid: newUser._id,
      balance: 1 + Math.random() * 10000,
    });

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
    const { email, password } = req.body;

    const user = await User.findOne({ email });
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

router.put(
  "/settings",
  authMiddleware,
  asyncHandler(async (req, res) => {
    const parsed = updateBody.safeParse(req.body);
    // console.log(parsed)[]
    if (!parsed.success) {
      return res.status(411).json({
        message: "Error while updating information",
      });
    }

    const updateData = { ...parsed.data };
    // console.log(updateData);

    // console.log(updateData.password);

    if (updateData.password) {
      const saltRounds = 10;
      updateData.password_hash = await bcrypt.hash(
        updateData.password,
        saltRounds
      );
      delete updateData.password;
    }
    // console.log(updateData.password_hash);

    const updatedUser = await User.findByIdAndUpdate(
      req.userid,
      { $set: updateData },
      { new: true, runValidators: true, select: "-password_hash" }
    );
    // console.log(updatedUser)

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json({
      message: "Updated successfully",
      user: updatedUser,
    });
  })
);

router.get("/bulk", async (req, res) => {
  const filter = req.query.filter || "";
  const users = await User.find({
    $or: [
      {
        firstName: {
          $regex: filter,
        },
      },
      {
        lastName: {
          $regex: filter,
        },
      },
    ],
  });

  res.json({
    user: users.map((user) => ({
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
      _id: user._id,
    })),
  });
});

// router.get('/')

module.exports = router;
