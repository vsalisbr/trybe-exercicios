const books = require('./data/books');

const formatedAuthorNamesBirth = () => {
  const output = [];
  books.forEach((book) => {
    output.push(`${book.author.name} - ${book.author.birthYear}`);
  });
  return output;
};

module.exports = { formatedAuthorNamesBirth };
