import { v4 as uuid } from 'uuid';

export default class Book {
  constructor(title, author, pages, status) {
    this.id = uuid();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
  }

  getID() {
    return this.id;
  }

  setID(arg) {
    if (arg) {
      this.id = arg;
    }
  }

  getTitle() {
    return this.title;
  }

  setTitle(arg) {
    if (arg.toString().length > 0) {
      this.title = arg;
    }
  }

  getAuthor() {
    return this.author;
  }

  setAuthor(arg) {
    if (arg.toString().length > 0) {
      this.author = arg;
    }
  }

  getPages() {
    return this.pages;
  }

  setPages(arg) {
    if (arg) {
      this.pages = arg;
    }
  }

  getStatus() {
    return this.status;
  }

  setStatus(arg) {
    this.status = arg;
  }
}
