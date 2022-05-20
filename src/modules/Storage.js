import Library from './Library';
import Book from './Book';

export default class Storage {
  static storeData(library) {
    window.localStorage.setItem('library', JSON.stringify(library));
  }

  static checkData() {
    if (localStorage.getItem('library')) {
      return this.restoreData();
    }
    return new Library();
  }

  static restoreData() {
    const library = JSON.parse(window.localStorage.getItem('library'));
    const tempLibrary = new Library();
    tempLibrary.setAllBooks([]);
    library.allBooks.forEach((book) => {
      const tempBook = new Book(
        book.title,
        book.author,
        book.pages,
        book.status,
      );
      tempBook.setID(book.id);
      tempLibrary.addBook(tempBook);
    });
    return tempLibrary;
  }
}
