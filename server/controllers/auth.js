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

// LOGIN USER
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email }); // find user in database
    if (!user) return res.status(400).json({ msg: 'User does not exist.' }); // if user not found send error to client

    const isMatch = await bcrypt.compare(password, user.password); // compare passwords
    if (!isMatch) return res.status(400).json({ msg: 'Invalid credentials.' }); // if passwords don't match send error to client

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET); // create token
    delete user.password; // delete password from user object
    res.status(200).json({ token, user }); // send token and user to client
  } catch (err) {
    res.status(500).json({ error: err.message }); // mongoDB error send to client
  }
};
