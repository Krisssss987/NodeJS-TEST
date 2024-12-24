// controllers/registeredUserController.js
const { users } = require('../models/users');
const { books } = require('../models/books');

// Task 6: Register New user
const registerUser = (req, res) => {
  const { username, password } = req.body;
  if (users.find(u => u.username === username)) {
    return res.status(400).json({ message: 'User already exists' });
  }
  users.push({ username, password });
  res.status(201).json({ message: 'User registered successfully' });
};

// Task 7: Login as a Registered user
const loginUser = (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username && u.password === password);
  if (user) {
    res.json({ message: 'Login successful' });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
};

// Task 8: Add/Modify a book review
const addModifyReview = (req, res) => {
  const { isbn } = req.params;
  const { review } = req.body;
  const book = books.find(b => b.isbn === isbn);
  if (book) {
    book.review = review;
    res.json({ message: 'Review added/modified successfully', book });
  } else {
    res.status(404).json({ message: 'Book not found' });
  }
};

// Task 9: Delete book review
const deleteReview = (req, res) => {
  const { isbn } = req.params;
  const book = books.find(b => b.isbn === isbn);
  if (book) {
    book.review = '';  // Reset review
    res.json({ message: 'Review deleted successfully', book });
  } else {
    res.status(404).json({ message: 'Book not found' });
  }
};

module.exports = {
  registerUser,
  loginUser,
  addModifyReview,
  deleteReview
};
