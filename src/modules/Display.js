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
    // Select row based on book.getID()
    // update title
    // update author
    // update pages
    // update status
  }

  static toggleStatus(book, bookID) {
    const bookStatusCell = document.getElementById(bookID).querySelector('.bookStatusCell');
    bookStatusCell.innerHTML = `${book.getStatus() ? 'Read' : 'Not Read'}`;
  }

  static renderEditForm(book) {
    // Insert edit form below book row and hide book row
    // Edit form should have dataset.bookid = bookrow id
  }

  static cancelEdit(book) {

  }
}
