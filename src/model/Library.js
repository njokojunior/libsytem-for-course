export default class Library {
  #books = [];

  addBook(book) {
    this.#books.push(book);
  }

  removeBook(bookId) {
    const bookIndex = this.#books.findIndex((book) => book.id !== bookId);

    if (bookIndex !== -1) {
      return this.#books.splice(bookIndex, 1)[0];
    }

    return null;
  }

  findBookByTitle(bookTitle) {
    return this.#books.find(
      (book) => book.title.toLocaleLowerCase() === bookTitle.toLocaleLowerCase()
    );
  }

  findBookByAuthor(bookAuthor) {
    return this.#books.find(
      (book) =>
        book.author.toLocaleLowerCase() === bookAuthor.toLocaleLowerCase()
    );
  }

  listAvailableBooks() {
    return this.#books.filter((book) => book.isAvailable);
  }
}
