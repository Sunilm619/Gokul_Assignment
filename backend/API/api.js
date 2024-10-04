const express = require('express');
const User = require('../Modal/User');
const router = express.Router();

router.post('/', async (req, res) => {
    const { address, lname, number, fname, email } = req.body;
    try {
        const newUser = new User({ address, lname, number, fname, email });
        await newUser.save();
        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).json({ message: 'Error adding User' });
    }
});

router.get('/', async (req, res) => {
    try {
        const Users = await User.find();
        res.status(200).json(Users);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching Users' });
    }
});

module.exports = router;
