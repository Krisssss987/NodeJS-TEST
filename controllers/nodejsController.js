// controllers/nodejsController.js
const { books } = require('../models/books');

// Task 10: Get all books – Using async callback function
const getBooksAsync = async (req, res) => {
  try {
    const result = await new Promise((resolve) => {
      setTimeout(() => {
        resolve(books);
      }, 1000); // Simulate delay
    });
    res.json(result);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching books' });
  }
};

// Task 11: Search by ISBN – Using Promises
const getBookByISBNAsync = (req, res) => {
  const { isbn } = req.params;
  new Promise((resolve, reject) => {
    const book = books.find(b => b.isbn === isbn);
    if (book) resolve(book);
    else reject('Book not found');
  })
    .then(book => res.json(book))
    .catch(err => res.status(404).json({ message: err }));
};

// Task 12: Search by Author
const getBooksByAuthorAsync = async (req, res) => {
  const { author } = req.params;
  const authorBooks = await new Promise((resolve, reject) => {
    const result = books.filter(b => b.author.toLowerCase() === author.toLowerCase());
    if (result.length > 0) resolve(result);
    else reject('No books found by this author');
  });
  res.json(authorBooks);
};

// Task 13: Search by Title
const getBooksByTitleAsync = async (req, res) => {
  const { title } = req.params;
  const titleBooks = await new Promise((resolve, reject) => {
    const result = books.filter(b => b.title.toLowerCase().includes(title.toLowerCase()));
    if (result.length > 0) resolve(result);
    else reject('No books found with this title');
  });
  res.json(titleBooks);
};

module.exports = {
  getBooksAsync,
  getBookByISBNAsync,
  getBooksByAuthorAsync,
  getBooksByTitleAsync
};
