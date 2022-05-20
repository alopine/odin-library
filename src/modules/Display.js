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
        ${book.getStatus()}
      </td>
      <td class="bookOptionsCell">
        <button class="toggleStatusButton>Toggle Status</button>
        <button class="editBookButton">Edit</button>
        <button class="deleteBookButton">Delete</button>
      </td>`;
  }

  static deleteBook(bookID) {
    document.getElementById(bookID).remove();
  }

  static updateBook(book) {
    // Select row based on book.getID()
    // update title
    // update author
    // update pages
    // update status
  }

  static toggleStatus(book) {
    // select row based on book.getID()
    // update status
  }

  static renderEditForm(book) {
    // Insert edit form below book row and hide book row
    // Edit form should have dataset.bookid = bookrow id
  }

  static cancelEdit(book) {

  }
}
