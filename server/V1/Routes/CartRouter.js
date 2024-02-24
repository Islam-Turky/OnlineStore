const express = require('express');
const router = express.Router();

// Create:
    // - add order to cart
router.post('/cart', (req, res) => {
    res.end('add to cart');
});

// DELETE:
    // - delete all from cart
router.delete('/cart', (req, res) => {
    res.end("delete all from cart")
})

// - delete specific item from cart
router.delete('/cart/item', (req, res) => {
    res.end("delete item from cart")
})

module.exports = router;