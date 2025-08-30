import Library from "./src/model/Library.js";
import Book from "./src/model/Book.js";
import User from "./src/model/User.js";
import AuthView from "./src/view/AuthView.js";
import Message from "./src/view/MessageView.js";
import LibraryView from "./src/view/LibraryView.js";

const myLibrary = new Library();
const libraryView = new LibraryView();
const authView = new AuthView();
const appMessage = new Message();

const books = [
  {
    id: 1,
    title: "The Youngest King of Hunters",
    category: "Adventure",
    author: "Choupimpim",
    description: "The strong of a young hunter in an uncommon village",
    isAvailable: true,
    releaseDate: new Date().toLocaleDateString("en-us", {
      month: "long",
      day: "numeric",
    }),
    readers:234
  },
  {
    id: 2,
    title: "True Love Waits",
    category: "Romance",
    author: "Choupimpim",
    description: "The Love story between a man and a woman from different villages",
    isAvailable: true,
    releaseDate: new Date().toLocaleDateString("en-us", {
      day: "numeric",
      month: "long",
    }),
    readers:120
  },
  {
    id: 3,
    title: "Ewa and other places",
    category: "romance",
    author: "Choupimpim",
    description: "A young lady called Ewa will do everythhing possible to grow in a family in which she is not welcome",
    isAvailable: true,
    releaseDate: new Date().toLocaleDateString("en-us", {
      month: "long",
      day: "numeric",
    }),
    readers:200
  },
  {
    id: 4,
    title: "Sprachst du Dutsch",
    category: "Discovery",
    author: "Choupimpim",
    description: "The journey of an american in Dutschland",
    isAvailable: true,
    releaseDate: new Date().toLocaleDateString("en-us", {
      month: "long",
      day: "numeric",
    }),
    readers:500
  },
];

const onLogin = (uname, pass) => {
  if (!uname || !pass) {
    appMessage.showErrorMessage("Fill required fields");
    return;
  }
  if (uname === "njoko" && pass === "12345") {
    appMessage.showSuccessMessage("Login Successful");
    libraryView.renderDashboard(books);
    libraryView.addHandlerNavigation(books);
    return;
  } else {
    appMessage.showErrorMessage("Wrong Credentials");
    return;
  }
};

const onSignUp = (uname, pass, confirmPassword) => {
  console.log("signup validation");
};

const onReset = (email) => {
  console.log("reset validation");
};

const initApp = () => {
  authView.renderLogin();
  authView.addHandlerSwitchAuthOption();
  authView.addHandlerSubmitForm({ onLogin, onSignUp, onReset });
};

initApp();
