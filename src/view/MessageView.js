import Views from "./Views.js";

export default class Message extends Views {
  constructor(errorMessage, successMessage) {
    super(".message-box");
    this.errorMessage = errorMessage;
    this.successMessage = successMessage;
    this.onClose;
  }

  generateMarkup(type, message) {
    return `<div class="info-box ${type}-box">
                <p>${message}</p>
                <p id="close-info" class="close-info" aria-label="close-message" role="button">x</p>
            </div>`;
  }

  showMessage(type, message, handler = this.onClose) {
    this.errorMessage = type === "error" ? message : "";

    this.successMessage = type === "success" ? "" : message;

    this.render(this.generateMarkup(type, message));

    // Close Message
    const closeBtn = document.getElementById("close-info");

    if (closeBtn) {
      closeBtn.addEventListener("click", (e) => {
        e.preventDefault();
        e.target.closest(".info-box")?.remove();
      });

      setTimeout(() => {
        const box = document.querySelector(".info-box");
        box?.remove();
      }, 2000);
    }
  }

  showErrorMessage(message) {
    this.showMessage("error", message);
    
  }

  showSuccessMessage(message) {
    this.showMessage("success", message);
  }

  // onClose() {
  //   const closeBtn = document.getElementById("close-info");

  //   if (closeBtn) {
  //     closeBtn.addEventListener("click", (e) => {
  //       e.preventDefault();
  //       e.target.closest(".info-box")?.remove();
  //     });
  //   }
  // }

  render(markup) {
    document
      .querySelector(".message-box")
      .insertAdjacentHTML("afterbegin", markup);
  }
}
