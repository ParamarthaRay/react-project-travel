const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User'); // Ensure this is the correct path to your User model
require('dotenv').config(); // Ensure your .env file is loaded

const router = express.Router();

// Login Route
router.post('/login', async (req, res) => {
  console.log("Received login request with body:", req.body);

  const { username, password } = req.body;

  if (!username || !password) {
      return res.status(400).json({ message: 'Username and password are required' });
  }

  try {
      const user = await User.findOne({ username });
      if (!user) {
          console.log("User not found for username:", username);
          return res.status(404).json({ message: 'User not found' });
      }

      console.log("User found in database:", user);
      console.log("Stored hashed password:", typeof user.password);
      console.log("Provided plain password:",typeof password);

     
    
     
    

      const isMatch = await bcrypt.compare(password, user.password);
      console.log("Password comparison result:", isMatch);

      if (!isMatch) {
          console.log("Invalid credentials for user:", username);
          return res.status(400).json({ message: 'Invalid credentials' });
      }

      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
          expiresIn: '1h',
      });

      console.log("Login successful for user:", username);

      res.status(200).json({
          message: 'Login successful',
          token,
          username: user.username,
      });
  } catch (error) {
      console.error("Error during login:", error);
      res.status(500).json({ message: 'An internal server error occurred' });
  }
});


// Register Route
router.post('/register', async (req, res) => {
    console.log("Received registration request with body:", req.body);

    const { username, password } = req.body;

    // Validate the incoming request
    if (!username || !password) {
        return res.status(400).json({ message: 'Username and password are required' });
    }

    try {
        // Check if the user already exists
        const existingUser = await User.findOne({ username });
        if (existingUser) {
            return res.status(409).json({ message: 'Username is already taken' });
        }

        // Hash the password
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        console.log("Hashed password for registration:", hashedPassword);

        // Create a new user
        const newUser = new User({
            username,
            password: hashedPassword,
        });

        await newUser.save();

        // Generate a JWT token
        const token = jwt.sign(
            { id: newUser._id },
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
        );

        console.log("User registered successfully:", username);

        // Respond with the token and username
        res.status(201).json({
            message: 'User registered successfully',
            token,
            username: newUser.username,
        });
    } catch (error) {
        console.error("Error during registration:", error);
        res.status(500).json({ message: 'An internal server error occurred' });
    }
});

module.exports = router;
