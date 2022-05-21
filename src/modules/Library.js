import Book from './Book';

export default class Library {
  constructor() {
    this.allBooks = [new Book('The Hobbit', 'J.R.R. Tolkien', 295, false)];
  }

  getAllBooks() {
    return this.allBooks;
  }

  setAllBooks(arg) {
    if (arg) {
      this.allBooks = arg;
    }
  }

  addBook(argBook) {
    if (argBook) {
      this.allBooks.push(argBook);
    }
  }

  deleteBook(argID) {
    this.allBooks = this.allBooks.filter(
      (book) => book.id !== argID,
    );
  }

  findBook(argID) {
    return this.allBooks.find((book) => book.id === argID);
  }
}
