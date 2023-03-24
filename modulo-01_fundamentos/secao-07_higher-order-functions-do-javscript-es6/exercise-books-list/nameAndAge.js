const books = require('./data/books');

const nameAndAge = () => {
  const output = [];
  books.forEach((book) => {
    output.push(
      {
        author: book.author.name,
        age: book.releaseYear - book.author.birthYear,
      },
    );
  });
  output.sort((obj1, obj2) => obj1.age - obj2.age);
  return output;
};

module.exports = { nameAndAge };
