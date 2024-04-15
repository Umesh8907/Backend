// userController.js

import User from "../models/user.model.js";

// Controller for creating a new user
const createUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const user = new User({ username, email, password });
    await user.save();
    res.status(201).json({ message: 'User created successfully', user });
    console.log('Registration Succesfull', user );
  } catch (error) {
    res.status(500).json({ message: 'Could not create user', error: error.message });
    console.log('Registration Failed', user );
  }
};

// Controller for getting all users
const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: 'Could not retrieve users', error: error.message });
  }
};

// Controller for getting a single user by ID
const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: 'Could not retrieve user', error: error.message });
  }
};

// Controller for updating a user by ID
const updateUserById = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const user = await User.findByIdAndUpdate(req.params.id, { username, email, password }, { new: true });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json({ message: 'User updated successfully', user });
  } catch (error) {
    res.status(500).json({ message: 'Could not update user', error: error.message });
  }
};

// Controller for deleting a user by ID
const deleteUserById = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json({ message: 'User deleted successfully', user });
  } catch (error) {
    res.status(500).json({ message: 'Could not delete user', error: error.message });
  }
};

export {createUser,getAllUsers,updateUserById,deleteUserById,getUserById}
 