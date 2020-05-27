export class Popup {
  open(window) {
    window.classList.toggle("popup_is-opened");
  }
  close(window) {
    window.classList.remove("popup_is-opened");
  }
}
