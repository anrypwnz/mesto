export class FormValidator {
  constructor(form) {
    this.form = form;
    this.setEventListeners();
  }
  checkInputValidity(formElement) {
    if (formElement.value.length == 0) {
      formElement.nextElementSibling.classList.add("popup__error-name_active");
      formElement.nextElementSibling.textContent = "Это обязательное поле";
      return false;
    } else if (
      formElement.value.length <= 2 &&
      formElement.value.length !== 0
    ) {
      formElement.nextElementSibling.classList.add("popup__error-name_active");
      formElement.nextElementSibling.textContent =
        "Должно быть от 2 до 30 символов";
      return false;
    } else {
      formElement.nextElementSibling.classList.remove(
        "popup__error-name_active"
      );
      return true;
    }
  }
  setSubmitButtonState(valid) {
    if (valid) {
      this.form.submit.classList.add("popup__button_active");
      this.form.submit.removeAttribute("disabled", "disabled");
    } else {
      this.form.submit.classList.remove("popup__button_active");
      this.form.submit.setAttribute("disabled", "disabled");
    }
  }
  setEventListeners() {
    for (let i in this.form) {
      if (typeof this.form[i] == "object") {
        this.form[i].addEventListener("input", () => {
          this.setSubmitButtonState(this.checkInputValidity(this.form[i]));
        });
      }
    }
  }
}
