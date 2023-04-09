class BookDao {
  constructor(db) {
    this._db = db;
  }

  list() {
    return new Promise((resolve, reject) => {
      this._db.all(
        `
					SELECT * FROM books
				`,
        (err, result) => {
          if (err) return reject('We could not find any book');
          return resolve(result);
        }
      );
    });
  }

  add(book) {
    return new Promise((resolve, reject) => {
      this._db.run(
        `
					INSERT INTO books (
            title,
            price,
            description
            ) values (?, ?, ?)
				`,
        [book.title, book.price, book.description],
        (err) => {
          if (err) {
            console.log(err);
            return reject('It was not possible to ADD the book');
          }
          return resolve();
        }
      );
    });
  }

  findById(id) {
    return new Promise((resolve, reject) => {
      this._db.get(
        `
					SELECT * FROM books WHERE id = ?
				`,
        [id],
        (err, result) => {
          if (err) return reject('We could not find any book');
          return resolve(result);
        }
      );
    });
  }

  remove(id) {
    return new Promise((resolve, reject) => {
      this._db.run(
        `
					DELETE FROM books WHERE id = ?
				`,
        [id],
        (err) => {
          if (err) {
            console.log(err);
            return reject('It was not possible to REMOVE the book');
          }
          return resolve();
        }
      );
    });
  }

  update(book) {
    return new Promise((resolve, reject) => {
      this._db.run(
        `
        UPDATE books
        SET title = ?,
        price = ?,
        description = ?
        WHERE id = ?
        `,
        [book.title, book.price, book.description, book.id],
        (err) => {
          if (err) {
            console.log(err);
            return reject('It was not possible to ADD the book');
          }
          return resolve();
        }
      );
    });
  }
}



module.exports = BookDao;
