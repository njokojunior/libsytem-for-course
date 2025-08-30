import Views from "./Views.js";

export default class LibraryView extends Views {
  constructor() {
    super(".app");
  }

  renderBooks(books) {
    const markup = `<div class="book-header">
            <h1>BOOKS</h1>
            <div class="filter-box">
              <label for="filter">Filter By: </label>
              <select id="filter">
                <option value="all">All Books</option>
                <option value="fiction">Fiction</option>
                <option value="adventure">Adventure</option>
                <option value="romance">Romance</option>
              </select>
            </div>
          </div>

          
          <ul class="books">
          ${books.map(
            (book) => `<li class="book">
              <img src="./back.jpg" alt="" />
              <div class="description">
                <h2>${book.title}</h2>
                <p>
                  ${book.description}
                </p>
                <div class="description-icon-box"title="category">
                  <ion-icon name="people"></ion-icon>
                  <p> ${book.category}</p>
                </div>

                <div class="description-icon-box"title="author">
                  <ion-icon name="create"></ion-icon>
                  <p> ${book.author}</p>
                </div>

                <div class="description-icon-box"title="release-date">
                  <ion-icon name="calendar"></ion-icon>
                  <p>${book.releaseDate} </p>
                </div>

                <div class="description-icon-box"title="readers">
                  <ion-icon name="book"></ion-icon>
                  <p>${book.readers}</p>
                </div>
              </div>
            </li>`
          ).join("")}
            
          </ul>`;
    return markup;
  }

  renderRecentlyView(books) {
    const markup = `<h2>Recently Viewed</h2>`;

    return markup;
  }

  renderNav(navigation) {
    const markup = `<ul class="nav-dashboard">
          <li class=${navigation === "books" ? "active-tab" : ""}>
            <a href="#books" id="books">
              <ion-icon name="book"></ion-icon>
              <p >Books</p>
            </a>
          </li>
          <li class=${navigation === "recent" ? "active-tab" : ""}>
            <a href="#recently-viewed" id="recently-viewed">
              <ion-icon name="create"></ion-icon>
              <p>Recently Viewed</p>
            </a>
          </li>
          <li class=${navigation === "profile" ? "active-tab" : ""}>
            <a href="#profile" id="profile">
              <ion-icon name="person-circle"></ion-icon>
              <p>Profile</p>
            </a>
          </li>
          <li>
            <a href="#logout" id="logout">
              <ion-icon name="log-out"></ion-icon>
              <p>Logout</p>
            </a>
          </li>
        </ul>`;
    return markup;
  }

  addHandlerNavigation(books) {
    document.querySelector(".app").addEventListener("click", (e) => {
      console.log("entered function");
      const closestEl = e.target.closest("a");
      if (closestEl) {
        switch (closestEl.id) {
          case "books":
            this.renderDashboard("", this.renderBooks(books),'books');
            break;
          case "recently-viewed":
            this.renderDashboard("", this.renderRecentlyView(books),'recent');
            break;
          case "profile":
            this.renderDashboard("", this.renderProfile(books), 'profile');
            break;
        }
      }
    });
  }

  renderProfile() {
    return `Profile Page`;
  }

  renderDashboard(books = "", layout = this.renderBooks(books), type="books") {
    const markup = `
      <div class="user-dashboard">
        ${this.renderNav(type)}
        <main class="main-book">
          ${layout}
        </main>
      </div>`;

    this.render(markup);
  }
}
