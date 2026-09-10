const express = require("express");

const {
    getTransactions,
    getTransaction,
    createTransaction,
    editTransaction,
    removeTransaction
} = require("../controllers/transactionController");

const router = express.Router();

// GET all transactions
router.get("/", getTransactions);

// GET one transaction
router.get("/:id", getTransaction);

// POST new transaction
router.post("/", createTransaction);

// PUT update transaction
router.put("/:id", editTransaction);

// DELETE transaction
router.delete("/:id", removeTransaction);

module.exports = router;