const { check } = require('express-validator');

class Book {
  static validations() {
    return [
      check('title').isLength({ min: 5 }).withMessage('It must be at least 5 characters'),
      check('price').isCurrency().withMessage('It must be a currency value'),
    ];
  }
}

module.exports = Book;