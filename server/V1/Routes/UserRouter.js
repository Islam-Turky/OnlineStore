const express = require('express');
const router = express.Router();

// UPDATE:
    // - change user info
router.put('/', (req, res) => {
    res.end('change user info');
})

// DELETE:
    // - delete account
router.delete('/', (req, res) => {
    res.end("delete user account")
})

module.exports = router