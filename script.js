// Initialize variables
let myLibrary = [];

function Book(title, author, pages, read) {
	this.title = title
	this.author = author
	this.pages = pages
	this.read = read
}

Book.prototype.info = function() {
    return(`${this.title} by ${this.author}, ${this.pages} pages, ${this.read ? "read" : "not read"}`)
}

function addBookToLibrary() {
    // Check if all input fields are filled
    if (inputTitle.value && inputAuthor.value && inputPages.value && inputRead.value) {
        myLibrary.push(new Book(inputTitle.value, inputAuthor.value, inputPages.value, inputRead.value));
    } else {
        window.alert("Please ensure all fields are filled out!");
        return;
    }
}


// Select page elements
const inputTitle = document.querySelector("#title");
const inputAuthor = document.querySelector("#author");
const inputPages = document.querySelector("#pages");
const inputRead = document.querySelector("#read");
const inputSubmit = document.querySelector("#submit");

inputSubmit.addEventListener("click", () => {
    addBookToLibrary();
});

