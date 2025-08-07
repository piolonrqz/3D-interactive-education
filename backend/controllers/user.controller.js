import admin from '../firebase.js';
import db from '../models/database.js'; // Sequelize models
const User = db.user; // Correct property name

// Register User
export const registerUser = async (req, res) => {
  const { name, email, firebaseToken } = req.body;

  try {
    const decodedToken = await admin.auth().verifyIdToken(firebaseToken);
    const firebaseUID = decodedToken.uid;

    // Check if user exists in MySQL
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) return res.status(400).json({ message: "User already exists" });

    const newUser = await User.create({ name, email, firebaseUID });
    return res.status(201).json({ message: "User created", user: newUser });
  } catch (err) {
    return res.status(401).json({ message: "Unauthorized", error: err.message });
  }
};

// Login User
export const loginUser = async (req, res) => {
  const { firebaseToken } = req.body;

  try {
    // 1. Verify token
    const decodedToken = await admin.auth().verifyIdToken(firebaseToken);
    const email = decodedToken.email;

    // 2. Find user in MySQL
    let user = await User.findOne({ where: { email } });

    // 3. (Optional) If user doesn't exist in MySQL, create it
    if (!user) {
      user = await User.create({
        name: decodedToken.name || '', // or get from frontend if needed
        email,
        firebaseUID: decodedToken.uid,
      });
    }

    // 4. Return user info
    return res.status(200).json({
      message: 'Login successful',
      user: { id: user.id, name: user.name, email: user.email },
    });
  } catch (err) {
    console.error('Login error:', err);
    return res.status(401).json({ message: "Unauthorized", error: err.message });
  }
};
