const { books } = require('../data/library');

const fantasyOrScienceFiction = () => books
  .filter((book) => book.genre === 'Fantasia' || book.genre === 'Ficção Científica');

const oldBooksOrdered = (year) => {
  const oldBooks = books
    .filter((book) => year - book.releaseYear >= 60);
  oldBooks.sort((book1, book2) => book1.releaseYear - book2.releaseYear);
  return oldBooks;
};

const booksByAuthorBirthYear = (birthYear) => {
  const filterBooks = books
    .filter((book) => book.author.birthYear === birthYear)
    .map((book) => book.name);
  return filterBooks;
};

const fantasyOrScienceFictionAuthors = () => {
  const filterBooks = fantasyOrScienceFiction().map((book) => book.author.name);
  filterBooks.sort();
  return filterBooks;
};

const oldBooks = (year) => {
  const filterBooks = books
    .filter((book) => year - book.releaseYear >= 60)
    .map((book) => book.name);
  return filterBooks;
};

const authorWith3DotsOnName = () => {
  const filterBook = books
    .find((book) => {
      const author = book.author.name.split(' ');
      if (author.length < 3) {
        return false;
      }
      let validate = true;
      for (let i = 0; i <= 2; i += 1) {
        if (author[i].slice(-1) !== '.') {
          validate = false;
        }
      }
      return validate;
    })
    .name;
  return filterBook;
};

authorWith3DotsOnName();

module.exports = {
  fantasyOrScienceFiction,
  oldBooksOrdered,
  booksByAuthorBirthYear,
  fantasyOrScienceFictionAuthors,
  oldBooks,
  authorWith3DotsOnName,
};
