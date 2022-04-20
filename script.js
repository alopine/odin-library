// Initialize variables
let myLibrary = [];

// Select page elements
const inputTitle = document.querySelector("#title");
const inputAuthor = document.querySelector("#author");
const inputPages = document.querySelector("#pages");
const inputRead = document.querySelector("#read");
const inputSubmit = document.querySelector("#submit");
const libraryTable = document.querySelector("#libraryTable");

function Book(title, author, pages, read) {
	this.title = title
	this.author = author
	this.pages = pages
	this.read = read
}

Book.prototype.info = function() {
    return(`${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`)
}

function addBookToLibrary() {
    // Check if all input fields are filled
    if (inputTitle.value && inputAuthor.value && inputPages.value && inputRead.value) {
        myLibrary.push(new Book(inputTitle.value, inputAuthor.value, inputPages.value, inputRead.value));
    } else {
        window.alert("Please ensure all fields are filled out!");
        return;
    }

    let index = myLibrary.length - 1;
    displayBook(index, myLibrary[index]);
}

function displayBook(index, book) {
    // Add row to table
    const tr = libraryTable.insertRow(index);

    // Add cell for each key in book
    Object.keys(book).forEach (key => {
        const td = tr.insertCell(-1);
        td.textContent = book[key];
    });

    // Add delete button
    const btn = document.createElement("button");
    const td = tr.insertCell(-1);
    btn.textContent = "Delete";
    btn.setAttribute("data-bookID", index);
    btn.addEventListener("click", deleteBook);
    td.appendChild(btn);
}

function deleteBook(evt) {
    // Remove row in table
    const bookNum = evt.currentTarget.getAttribute("data-bookID");
    libraryTable.deleteRow(bookNum);

    // Remove from array
    myLibrary.splice(bookNum, 1);
}

// Event listeners

window.onload = () => {
    myLibrary[0] = new Book("The Hobbit", "J.R.R Tolkien", 295, "Not Read");

    // Populate initial library from array
    for (const [index, book] of myLibrary.entries()) {
        displayBook(index, book);
    }
};

inputSubmit.addEventListener("click", addBookToLibrary);