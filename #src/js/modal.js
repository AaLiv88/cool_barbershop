const modalLoginEl = document.querySelector(".modal-login");
const userListLoginBtnEl = document.querySelector(".user-list__login");
const modalLoginCloseEL = modalLoginEl.querySelector(".modal__close");

userListLoginBtnEl.addEventListener("click", function(evt) {
  evt.preventDefault();
  modalLoginEl.classList.add("modal--active");
})

modalLoginCloseEL.addEventListener("click", function() {
  modalLoginEl.classList.remove("modal--active");
})