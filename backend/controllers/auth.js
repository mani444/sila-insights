import User from '../models/user.js';
import asyncHandler from 'express-async-handler';

export const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email: email });

  if (!user) {
    res.statusCode = 400;
    throw new Error('Invalid email or password.');
  }

  if (!(await user.ComparePassword(password))) {
    res.statusCode = 400;
    throw new Error('Invalid email or password.');
  }

  res.json({
    _id: user._id,
    name: user.name,
    email: user.email,
    token: user.CreateToken(),
  });
});

export const register = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  const user = new User({
    email,
    name,
    password,
  });
  const createdUser = await user.save();

  res.statusCode = 201;
  res.json({
    _id: createdUser._id,
    name: createdUser.name,
    email: createdUser.email,
    token: createdUser.CreateToken(),
  });
});
