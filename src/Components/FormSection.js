import SelectBox from "./SelectBox";

export default class FormSection {
  constructor({ $target }) {
    this.form = document.createElement('form');
    this.form.name = "auth";
    this.form.className = "form";
    this.form.addEventListener("submit", (evt) => {
      evt.preventDefault();
      console.log(this);
    });

    $target.appendChild(this.form);
    this.render();
  }

  render() {
    const selectBox = new SelectBox({ $form: this.form });
  }
}