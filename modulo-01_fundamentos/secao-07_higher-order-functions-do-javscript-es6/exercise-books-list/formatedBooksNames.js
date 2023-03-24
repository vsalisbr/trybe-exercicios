const books = require('./data/books');

const formatedBookNames = () => {
  const output = [];
  books.forEach((book) => {
    output.push(`${book.name} - ${book.genre} - ${book.author.name}`);
  });
  return output;
};

module.exports = { formatedBookNames };
