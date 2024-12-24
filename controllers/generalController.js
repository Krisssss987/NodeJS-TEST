// controllers/generalController.js
const { books } = require('../models/books');

// Task 1: Get all books
const getBooks = (req, res) => {
  res.json(books);
};

// Task 2: Get a book by ISBN
const getBookByISBN = (req, res) => {
  const { isbn } = req.params;
  const book = books.find(b => b.isbn === isbn);
  if (book) {
    res.json(book);
  } else {
    res.status(404).json({ message: 'Book not found' });
  }
};

// Task 3: Get all books by Author
const getBooksByAuthor = (req, res) => {
  const { author } = req.params;
  const authorBooks = books.filter(b => b.author.toLowerCase() === author.toLowerCase());
  if (authorBooks.length > 0) {
    res.json(authorBooks);
  } else {
    res.status(404).json({ message: 'No books found by this author' });
  }
};

// Task 4: Get all books based on Title
const getBooksByTitle = (req, res) => {
  const { title } = req.params;
  const titleBooks = books.filter(b => b.title.toLowerCase().includes(title.toLowerCase()));
  if (titleBooks.length > 0) {
    res.json(titleBooks);
  } else {
    res.status(404).json({ message: 'No books found with this title' });
  }
};

// Task 5: Get book review
const getBookReview = (req, res) => {
  const { isbn } = req.params;
  const book = books.find(b => b.isbn === isbn);
  if (book) {
    res.json({ review: book.review });
  } else {
    res.status(404).json({ message: 'Book not found' });
  }
};

module.exports = {
  getBooks,
  getBookByISBN,
  getBooksByAuthor,
  getBooksByTitle,
  getBookReview
};
