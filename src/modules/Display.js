export default class Display {
  static renderBook(book) {
    // Add row to table
    const libraryTable = document.getElementById('libraryTable');
    const row = libraryTable.insertRow(-1);
    row.id = book.getID();
    // Add cells to row
    row.innerHTML = `
      <td class="bookTitleCell">${book.getTitle()}</td>
      <td class="bookAuthorCell">${book.getAuthor()}</td>
      <td class="bookPagesCell">${book.getPages()}</td>
      <td class="bookStatusCell">
        ${book.getStatus() ? 'Read' : 'Not Read'}
      </td>
      <td class="bookOptionsCell">
        <button class="toggleStatusButton">Toggle Status</button>
        <button class="editBookButton">Edit</button>
        <button class="deleteBookButton">Delete</button>
      </td>`;
  }

  static deleteBook(bookRow) {
    bookRow.remove();
  }

  static updateBook(book) {
    const bookRow = document.getElementById(book.getID());
    bookRow.querySelector('.bookTitleCell').innerHTML = `${book.getTitle()}`;
    bookRow.querySelector('.bookAuthorCell').innerHTML = `${book.getAuthor()}`;
    bookRow.querySelector('.bookPagesCell').innerHTML = `${book.getPages()}`;
    bookRow.querySelector('.bookStatusCell').innerHTML = `${book.getStatus() ? 'Read' : 'Not Read'}`;
  }

  static toggleStatus(book, bookID) {
    const bookStatusCell = document.getElementById(bookID).querySelector('.bookStatusCell');
    bookStatusCell.innerHTML = `${book.getStatus() ? 'Read' : 'Not Read'}`;
  }

  static renderForm(book) {
    document.getElementById('formHeader').innerText = `${book ? 'Edit Book' : 'Add Book'}`;
    document.querySelector('main').classList.add('hidden');
    document.getElementById('bookFormSection').classList.remove('hidden');
    // If editing, populate fields with book data
    if (book) {
      document.getElementById('bookTitle').value = book.getTitle();
      document.getElementById('bookAuthor').value = book.getAuthor();
      document.getElementById('bookPages').value = book.getPages();
      document.getElementById(`${book.getStatus() ? 'bookStatusTrue' : 'bookStatusFalse'}`).checked = true;
      document.getElementById('bookDataID').value = book.getID();
      document.getElementById('bookSubmit').disabled = false;
    }
  }

  static clearForm() {
    document.querySelector('main').classList.remove('hidden');
    document.getElementById('bookFormSection').classList.add('hidden');
    document.getElementById('bookForm').reset();
    document.getElementById('bookSubmit').disabled = true;
  }
}
