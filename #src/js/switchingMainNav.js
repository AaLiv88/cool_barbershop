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