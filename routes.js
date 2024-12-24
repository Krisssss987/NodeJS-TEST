// routes.js
const express = require('express');
const router = express.Router();
const { 
  getBooks, 
  getBookByISBN, 
  getBooksByAuthor, 
  getBooksByTitle, 
  getBookReview 
} = require('./controllers/generalController');

const { 
  registerUser, 
  loginUser, 
  addModifyReview, 
  deleteReview 
} = require('./controllers/registeredUserController');

const { 
  getBooksAsync, 
  getBookByISBNAsync, 
  getBooksByAuthorAsync, 
  getBooksByTitleAsync 
} = require('./controllers/nodejsController');

// General User Routes
router.get('/books', getBooks);
router.get('/books/:isbn', getBookByISBN);
router.get('/books/author/:author', getBooksByAuthor);
router.get('/books/title/:title', getBooksByTitle);
router.get('/books/review/:isbn', getBookReview);

// Registered User Routes
router.post('/register', registerUser);
router.post('/login', loginUser);
router.put('/books/review/:isbn', addModifyReview);
router.delete('/books/review/:isbn', deleteReview);

// Node.js Async/Promise Routes
router.get('/books/async', getBooksAsync);
router.get('/books/async/isbn/:isbn', getBookByISBNAsync);
router.get('/books/async/author/:author', getBooksByAuthorAsync);
router.get('/books/async/title/:title', getBooksByTitleAsync);

module.exports = router;
