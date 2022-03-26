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

function switchingMainNav() {
  const toggelMainNavEl = document.querySelector(".main-nav__toggle");
  const mainNavEl = document.querySelector(".main-nav");

  toggelMainNavEl.addEventListener("click", function() {
    if (mainNavEl.classList.contains("main-nav--closed")) {
      mainNavEl.classList.remove("main-nav--closed");
      mainNavEl.classList.add("main-nav--opened");
    } else {
      mainNavEl.classList.remove("main-nav--opened");
      mainNavEl.classList.add("main-nav--closed");
    }
  })
}

switchingMainNav()