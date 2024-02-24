const express = require('express');
const router = express.Router();
const Product = require('../Config/Schemas/ProductSchema');
const isAdmin = require('../Helpers/AdminValidator');

// CREATE: 
    // - add Product
router.post('/product', async (req, res) => {
    const {name, email, description, price, images, amount} = req.body;
    if(await isAdmin(email)){
        const product = new Product({name, email, description, price, images, amount});
        try {
            await product.save();
            res.status(201).send(product);
        } catch (error) {
            var messages = {};
            for(let key in error.errors){
                messages[key] = error.errors[key]['message']
            }
            res.status(400).send(messages);
        }
    }else{
        res.status(401).send('not admin');
    }
});

// READ: 
    // - get products
router.get('/products', (req, res) => {
    res.end("get all products");
});

// UPDATE: 
    // - modify a product
router.put('/product', (req, res) => {
    res.end('modify a product');
})

// DELETE: 
    // - delete a product
router.delete('/product', (req, res) => {
    res.end('delete product');
})

module.exports = router;