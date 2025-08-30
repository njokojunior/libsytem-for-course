import Views from "./Views.js";

export default class Auth extends Views {
  constructor() {
    super(".app");
  }

  #renderAuthMarkup(type) {
    let html = "";

    if (type === "login") {
      html = `<input type="text" id="username" placeholder="Enter name" />
                <input
                  type="password"
                  id="password"
                  placeholder="Enter password"
                />`;
    }

    if (type === "signup") {
      html = ` <input type="text" id="username" placeholder="Enter name" />
                <input
                  type="password"
                  id="password"
                  placeholder="Enter password"
                />

                 <input
                  type="password"
                  id="confirmPassword"
                  placeholder="Enter Confirmation password"
                />`;
    }

    if (type === "reset") {
      html = `<input type="email" id="emailReset" placeholder="Enter name"  />`;
    }

    const markup = ` <div class="home">
        <div class="home-container">
          <header class="header">
          <ion-icon name="book" class="book-icon"></ion-icon>
            <h2>Welcome to Class Library</h2>
          </header>

          <main class="main">
            <form class="form" id="${type}Form">
              <div class="form-options">
                <a href="#login" role="button" class=${
                  type === "login" ? "active-tab" : ""
                } >Sign In</a>
                <a href="#signup" role="button" class=${
                  type === "signup" ? "active-tab" : ""
                }>Sign Up</a>
                <a href="#reset" role="button"  class=${
                  type === "reset" ? "active-tab" : ""
                }>Reset</a>
              </div>
              <div class="form-input">
                ${html}
              </div>
              <button type="submit" class="auth-button" id="${type}Btn">${type}</button>
            </form>
          </main>
        </div>
      </div>`;

    this.render(markup);
  }

  renderLogin() {
    this.#renderAuthMarkup("login");
  }

  renderSignup() {
    this.#renderAuthMarkup("signup");
  }

  renderResetPassword() {
    this.#renderAuthMarkup("reset");
  }

  addHandlerSubmitForm({ onLogin, onSignUp, onReset }) {
    document.querySelector(".app").addEventListener("click", (e) => {
      if (e.target.matches("#loginBtn")) {
        e.preventDefault();
        const username = document.querySelector("#username")?.value;
        const password = document.querySelector("#password")?.value;
        onLogin(username, password);
      }

      if (e.target.matches("#signupBtn")) {
        const username = document.querySelector("#username")?.value;
        const password = document.querySelector("#password")?.value;
        const confirmPassword =
          document.querySelector("#confirmPassword")?.value;

        onSignUp(username, password, confirmPassword);
      }

      if (e.target.matches("#reset")) {
        const email = document.querySelector("#emailReset")?.value;
        onReset(resetPassword);
      }
    });
  }

  addHandlerSwitchAuthOption(handleSwitch) {
    document.querySelector(".app").addEventListener("click", (e) => {
      if (e.target.matches(".form-options a")) {
        e.preventDefault();
        if (e.target.textContent === "Sign In") {
          this.renderLogin();
        }
        if (e.target.textContent === "Sign Up") {
          this.renderSignup();
        }
        if (e.target.textContent === "Reset") {
          this.renderResetPassword();
        }
        // this.addHandlerSubmitForm();
      }
    });
  }
}
