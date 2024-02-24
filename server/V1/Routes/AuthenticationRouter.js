const express = require('express');
const router = express.Router();
const User = require('../Config/Schemas/UserSchema');

router.post('/login', async (req, res) => {
    const { email, password, firstName, lastName, role, companyName } = req.body;
    try {
        const check = await User.findOne({email: email, password: password, role: role})
        if(check){
            res.status(200).send("User Found")
        }else{
            res.status(404).send("User Not Found")
        }
    } catch (error) {
        res.status(400).send(error);
    }
});

router.post('/signup', async (req, res) => {
    const { email, password, firstName, lastName, role, companyName } = req.body;
    const user = new User({email, password, firstName, lastName, role, companyName});
    try {
        await user.save();
        res.status(201).send(user);
    } catch (error) {
        var messages = {};
        for(let key in error.errors){
            messages[key] = error.errors[key]['message']
        }
        res.status(400).send(messages);
    }
});

module.exports = router;