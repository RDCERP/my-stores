import bcrypt from 'bcrypt'; // encrypt password
import jwt from 'jsonwebtoken'; // create token
import User from '../models/User.js'; // import User model

// REGISTER USER
export const register = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      email,
      password,
      picturePath,
      friends,
      location,
      occupation,
    } = req.body;

    const salt = await bcrypt.genSalt(); // generate encryption
    const passwordHash = await bcrypt.hash(password, salt); // encrypt password

    const newUser = new User({
      firstName,
      lastName,
      email,
      password: passwordHash,
      picturePath,
      friends,
      location,
      occupation,
      viedProfile: Math.floor(Math.random() * 10000),
      impressions: Math.floor(Math.random() * 10000),
    });
    const savedUser = await newUser.save(); // save user to database
    res.status(201).json(savedUser); // send user to client
  } catch (err) {
    res.status(500).json({ error: err.message }); // mongoDB error send to client
  }
};
