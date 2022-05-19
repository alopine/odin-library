import 'normalize.css';
import './styles.css';

// Initialize variables
const myLibrary = [];

// Select page elements
const inputTitle = document.getElementById('title');
const inputAuthor = document.getElementById('author');
const inputPages = document.getElementById('pages');
const inputRead = document.getElementById('read');
const inputSubmit = document.getElementById('submit');
const libraryTable = document.getElementById('libraryTable');

class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }

  info() {
    return (`${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`);
  }
}

function addBookToLibrary() {
  // Check if all input fields are filled
  if (inputTitle.value && inputAuthor.value && inputPages.value && inputRead.value) {
    myLibrary.push(new Book(inputTitle.value, inputAuthor.value, inputPages.value, inputRead.value));
  } else {
    window.alert('Please ensure all fields are filled out!');
    return;
  }

  const index = myLibrary.length - 1;
  displayBook(index, myLibrary[index]);
}

function displayBook(index, book) {
  // Add row to table
  const tr = libraryTable.insertRow(index);

  // Add cell for each key in book
  Object.keys(book).forEach((key) => {
    const td = tr.insertCell(-1);
    td.textContent = book[key];
  });

  // Add buttons
  const td = tr.insertCell(-1);
  const buttons = [['Delete', deleteBook], ['Toggle Status', toggleRead]];
  for (let i = 0; i < buttons.length; ++i) {
    const btn = document.createElement('button');
    btn.textContent = buttons[i][0];
    btn.addEventListener('click', buttons[i][1]);
    td.appendChild(btn);
  }
}

function deleteBook(evt) {
  // Remove row in table
  const buttonCell = evt.currentTarget.parentNode;
  const bookNum = buttonCell.parentNode.rowIndex - 1;
  libraryTable.deleteRow(bookNum);

  // Remove from array
  myLibrary.splice(bookNum, 1);
}

function toggleRead(evt) {
  // Update status in array
  const buttonCell = evt.currentTarget.parentNode;
  const bookNum = buttonCell.parentNode.rowIndex - 1;
  switch (true) {
    case myLibrary[bookNum].read === 'Read':
      myLibrary[bookNum].read = 'Not Read';
      break;
    case myLibrary[bookNum].read === 'Not Read':
      myLibrary[bookNum].read = 'Read';
      break;
  }

  // Update read status in table
  const readCell = libraryTable.rows[bookNum].cells[3];
  readCell.textContent = myLibrary[bookNum].read;
}

// Event listeners

window.onload = () => {
  myLibrary[0] = new Book('The Hobbit', 'J.R.R Tolkien', 295, 'Not Read');

  // Populate initial library from array
  for (const [index, book] of myLibrary.entries()) {
    displayBook(index, book);
  }
};

inputSubmit.addEventListener('click', addBookToLibrary);
