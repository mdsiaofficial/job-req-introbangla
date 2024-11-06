const express = require('express')
const bcrypt = require('bcrypt')
const db = require('../models/db')
const userRouter = express.Router()

const User = db.User


// create
userRouter.post('/users', async (req, res) => {
  try {
    const hashedPass = await bcrypt.hash(req.body.password, 10)
    req.body.password = hashedPass
    const user = await User.create(req.body)
    res.status(201).json(user)
  } catch (error) {
    res.status(400).json({ message: "User cannot be created", error })
  }
})

// get all
userRouter.get('/users', async (req, res) => {
  try {
    const users = await User.findAll();
    res.status(201).json(users)
  } catch (error) {
    res.status(404).json({ message: "Users not found", error });
  }
});
// get one
userRouter.get('/users/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const user = await User.findOne({ where: { id } });
    res.status(200).json(user);
  } catch (error) {
    res.status(404).json({ message: "User not found", error });
  }
});

// update
userRouter.put('/users/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const user = await User.update(req.body, { where: { id } });
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ message: "User cannot be updated", error });
  }
});

// delete
userRouter.delete('/users/:id', async (req, res) => {
  try {
    const id = req.params.id;
    await User.destroy({ where: { id } });
    res.status(200).json({ message: 'User deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: "User cannot be deleted", error });
  }
});

module.exports = userRouter