export default class Views {
  #parentElement;

  constructor(parentSelector) {
    this.#parentElement = document.querySelector(parentSelector);
    if (!this.#parentElement) throw new Error(`No parent element found`);
  }

  generateMarkup(data = "") {
    return data;
  }

  clear() {
    this.#parentElement.innerHTML = "";
  }

  render(markup) {
    this.clear();
    this.#parentElement.insertAdjacentHTML("afterbegin", markup);
  }
}
