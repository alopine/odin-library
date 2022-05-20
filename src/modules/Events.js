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
    });
  }

  static addBook() {
    const submit = document.getElementById('addBookSubmitButton');
    submit.addEventListener('click', () => {
      const title = document.getElementById('addBookTitle').value;
      const author = document.getElementById('addBookAuthor').value;
      const pages = document.getElementById('addBookPages').value;
      const status = document.getElementById('addBookStatus').value;
      library.addBook(new Book(title, author, pages, status));
      Display.renderBook(library.getAllBooks()[library.getAllBooks().length - 1]);
      Storage.storeData(library);
    });

    // Select add book button and add listener
    // Select form elements values
    // Run myLibrary.addBook
    // Run Display.renderBook
    // Get row id and pass in to following
    // run this.toggleStatus
    // run this.deleteBook
    // run this.editBook
    // run Storage.storeData(library)
  }

  static toggleStatus(bookID) {
    // Select toggle button and add listener
    // run myLibrary.getBook and run setStatus
    // run Display.toggleStatus
    // run Storage.storeData(library)
  }

  static deleteBook(bookID) {
    // Select delete button and add listener
    // run myLibrary.deleteBook and pass in id
    // run Display.deleteBook and pass in id
    // run Storage.storeData(library)
  }

  static editBook(bookID) {
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
