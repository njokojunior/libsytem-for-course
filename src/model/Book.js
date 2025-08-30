export default class Book {
  constructor(
    id = 0,
    title = "",
    category = "",
    author = "anonymous",
    isAvailable = false
  ) {
    this.id = id;
    this.title = title;
    this.category = category;
    this.author = author;
    this.isAvailable = isAvailable;
  }

  borrow(){
    if(!this.isAvailable){
        throw new Error(`The Book ${this.title} is not available`)
    }
    this.isAvailable = false;
  }

  returnBook(){
    this.isAvailable = true
  }
}
