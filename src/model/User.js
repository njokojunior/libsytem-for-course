export default class User {
  constructor(name, borrowedBooks) {
    this.name = name;
    this.borrowedBooks = borrowedBooks;
  }

  borrowBook(book) {
    return this.borrowedBooks.push(book);
  }

  returnBook(bookId) {
    const bookIndex = this.borrowedBooks.findIndex(
      (book) => book.id === bookId
    );

    if (bookIndex !== -1) {
      this.borrowedBooks.splice(bookIndex, 1);
      return true;
    }
    return false;
  }
}
