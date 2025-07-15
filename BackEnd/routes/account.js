const express = require("express");
const mongoose = require("mongoose");
const { Account } = require("../models/db");
const router = express.Router();

const transferFunds = async (fromAccountId, toAccountId, amount) => {
  const session = await mongoose.startSession();

  try {
    await session.withTransaction(async () => {
      await Account.findByIdAndUpdate(
        fromAccountId,
        { $inc: { balance: -amount } },
        { session }
      );

      await Account.findByIdAndUpdate(
        toAccountId,
        { $inc: { balance: amount } },
        { session }
      );
    });
  } catch (error) {
    console.error("Transaction failed", error);
  } finally {
    session.endSession();
  }
};

router.post("/transfer", async (req, res) => {
  try {
    const { fromAccountId, toAccountId, amount } = req.body;
    await transferFunds(fromAccountId, toAccountId, amount);
    res.status(200).json({ message: "Transfer successful" });
  } catch (error) {
    res.status(500).json({ message: "Transfer failed", error: error.message });
  }
});

module.exports = router;
