const express = require('express')
const bcrypt = require('bcrypt')
const User = require('../models/User')
const userRouter = express.Router()

// create
userRouter.post('/users', async (req, res)=>{
  try {
    const hashedPass = await bcrypt.hash(req.body.password, 10)
    req.body.password = hashedPass
    const user = await User.create(req.body)
    res.status(201).json(user)
  } catch (error) {
    res.status(400).json({message: "User cannot be created", error})
  }
})

// get all
userRouter.get('/users', async (req, res) => {
  try {
      const users = await User.find();
      res.status(201).json(users)
  } catch (error) {
      res.status(404).json({message: "Users not found", error});
  }
});
// get one
userRouter.get('/users/:id', async (req, res) => {
  try {
      const user = await User.findById(req.params.id);
      res.status(201).json(user)
  } catch (error) {
      res.status(404).json({message: "User not found", error});
  }
});

// udapte
userRouter.put('/users/:id', async (req, res) => {
  try {
      const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
      res.status(201).json(user)
  } catch (error) {
      res.status(400).json({message: "User cannot be updated", error});
  }
});

// delete
userRouter.delete('/users/:id', async (req, res) => {
  try {
      await User.findByIdAndDelete(req.params.id);
      res.status(200).json({ message: 'User deleted successfully' });
  } catch (error) {
      res.status(500).json({message: "User cannot be deleted", error});
  }
});

module.exports = userRouter