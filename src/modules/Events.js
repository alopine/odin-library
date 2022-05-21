import Book from './Book';
import Display from './Display';
import Storage from './Storage';

const library = Storage.checkData();

export default class Events {
  static loadApp() {
    this.loadTable();
    this.formListeners();
  }

  static loadTable() {
    library.getAllBooks().forEach((book) => {
      Display.renderBook(book);
      this.loadBookListeners(book);
    });
  }

  static formListeners() {
    this.showAddForm();
    this.formInputListener();
    this.submitForm();
    this.cancelForm();
  }

  static showAddForm() {
    const addBookButton = document.getElementById('addBook');
    addBookButton.addEventListener('click', () => {
      Display.renderForm();
    });
  }

  static formInputListener() {
    const inputFields = document.querySelectorAll('input[type="text"], input[type="number"]');
    inputFields.forEach((field) => {
      field.addEventListener('input', () => {
        const valid = [];
        inputFields.forEach((checkField) => {
          valid.push(checkField.checkValidity());
        });
        document.getElementById('bookSubmit').disabled = !valid.every((element) => element);
      });
    });
  }

  static submitForm() {
    const submitButton = document.getElementById('bookSubmit');
    submitButton.addEventListener('click', () => {
      // Get book values from form
      const title = document.getElementById('bookTitle').value;
      const author = document.getElementById('bookAuthor').value;
      const pages = document.getElementById('bookPages').value;
      const status = document.querySelector('input[name="bookStatus"]:checked').value;
      const dataID = document.getElementById('bookDataID').value;
      if (document.getElementById('formHeader').innerText === 'Add Book') {
        // Add new book to library
        library.addBook(new Book(title, author, pages, status));
        // Render new book and add button listeners
        const newBook = library.getAllBooks()[library.getAllBooks().length - 1];
        Display.renderBook(newBook);
        this.loadBookListeners(newBook);
      } else {
        const book = library.findBook(dataID);
        book.setTitle(title);
        book.setAuthor(author);
        book.setPages(pages);
        book.setStatus(status);
        Display.updateBook(book);
      }
      // Reset form and save library to storage
      Display.clearForm();
      Storage.storeData(library);
    });
  }

  static cancelForm() {
    const cancelButton = document.getElementById('bookCancel');
    cancelButton.addEventListener('click', () => {
      Display.clearForm();
    });
  }

  static loadBookListeners(book) {
    const bookID = book.getID();
    const bookRow = document.getElementById(bookID);
    this.toggleStatus(book, bookID, bookRow);
    this.deleteBook(bookID, bookRow);
    this.editBook(book, bookRow);
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

  static editBook(book, bookRow) {
    const editButton = bookRow.querySelector('.editBookButton');
    editButton.addEventListener('click', () => {
      Display.renderForm(book);
    });
  }
}
