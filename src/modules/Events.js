import Book from './Book';
import Display from './Display';
import Storage from './Storage';

const library = Storage.checkData();

export default class Events {
  static loadApp() {
    this.loadMain();
    this.addBook();
  }

  static loadMain() {
    library.getAllBooks().forEach((book) => {
      Display.renderBook(book);
      this.loadBookListeners(book);
    });
  }

  static addBook() {
    const form = document.getElementById('addBookForm');
    const submitButton = document.getElementById('addBookSubmitButton');
    submitButton.addEventListener('click', () => {
      // Get book vales from form
      const title = document.getElementById('addBookTitle').value;
      const author = document.getElementById('addBookAuthor').value;
      const pages = document.getElementById('addBookPages').value;
      const status = document.getElementById('addBookStatus').value;
      // Add new book to library
      library.addBook(new Book(title, author, pages, status));
      // Render new book and add button listeners
      const newBook = library.getAllBooks()[library.getAllBooks().length - 1];
      Display.renderBook(newBook);
      this.loadBookListeners(newBook);
      // Reset form and save library to storage
      form.reset();
      Storage.storeData(library);
    });
  }

  static loadBookListeners(book) {
    const bookID = book.getID();
    const bookRow = document.getElementById(bookID);
    this.toggleStatus(book, bookID, bookRow);
    this.deleteBook(bookID, bookRow);
    this.editBook(book, bookID, bookRow);
  }

  static toggleStatus(book, bookID, bookRow) {
    const toggleStatusButton = bookRow.querySelector('.toggleStatusButton');
    toggleStatusButton.addEventListener('click', () => {
      library.findBook(bookID).setStatus(!library.findBook(bookID).getStatus());
      Display.toggleStatus(book, bookID);
      Storage.storeData(library);
    });
  }

  static deleteBook(bookID, bookRow) {
    const deleteButton = bookRow.querySelector('.deleteBookButton');
    deleteButton.addEventListener('click', () => {
      library.deleteBook(bookID);
      Display.deleteBook(bookRow);
      Storage.storeData(library);
    });
  }

  static editBook(book, bookID, bookRow) {
    // Select edit button and add listener
    // run display.renderEditForm
    // run this.editInputListener()
    // run this.cancelEdit
    // run this.submitEdit()
  }

  static editInputListener() {
    // Select all fields in edit form
    // Add listener to each input field
    // On input, check if any field is empty and toggle disabled on submit button
  }

  static cancelEdit() {
    // Select cancel button and add listener
  }

  static submitEdit() {
    // run Storage.storeData(library)
  }
}
