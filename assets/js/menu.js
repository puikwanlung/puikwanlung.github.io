//About us link click
const link_work = document.querySelector("#work-select");
const link_about = document.querySelector("#aboutus-select");
const link_contact = document.querySelector("#contact-select");

const box_aboutus = document.querySelector("#aboutus");
const box_portfolio = document.querySelector("#cards");

link_work.addEventListener("click", function () {
  box_portfolio.classList.remove("hidden");
  box_portfolio.classList.add("show");

  box_aboutus.classList.remove("show");
  box_aboutus.classList.add("hidden");
});

link_about.addEventListener("click", function () {
  box_portfolio.classList.add("hidden");
  box_portfolio.classList.remove("show");
  box_aboutus.classList.add("show");
  box_aboutus.classList.remove("hidden");
  box_aboutus.classList.remove("anim-trans");
  box_aboutus.classList.add("anim-trans");
});
