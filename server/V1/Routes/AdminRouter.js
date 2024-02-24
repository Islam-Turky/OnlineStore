const express = require('express');
const router = express.Router();
// CREATE: 
    // - add user to admin list
router.post('/user', (req, res) => {
    res.end("add user to admin list");
});

// READ: 
    // - get users
router.get('/users', (req, res) => {
    res.end("get all users");
});

// UPDATE: 
    // - modify admin info
router.put('/', (req, res) => {
    res.end('modify a admin info');
})

// DELETE:     
    // - delete a user
router.delete('/user', (req, res) => {
    res.end('delete user');
})

module.exports = router;