const filter_work = document.querySelector("#work-select");
const filter_UXUI = document.querySelector("#select-UXUI");
const filter_AE = document.querySelector("#select-AE");
const filter_3D = document.querySelector("#select-threeD");
const filter_all = document.querySelector("#select-all");

const portfolio_body = document.querySelector("#portfolio");

const show_UXUI = document.querySelectorAll(".card_UXUI");
const show_AE = document.querySelectorAll(".card_AE");
const show_3D = document.querySelectorAll(".card_threeD");

let url = window.location.href;

function click_UXUI() {
  portfolio_body.classList.remove("all");
  portfolio_body.classList.add("uxui");
  portfolio_body.classList.remove("ae");
  portfolio_body.classList.remove("threed");

  for (var i = 0; i < show_UXUI.length; i++) {
    show_UXUI[i].classList.remove("hidden");
  }

  for (var i = 0; i < show_AE.length; i++) {
    show_AE[i].classList.add("hidden");
  }

  for (var i = 0; i < show_3D.length; i++) {
    show_3D[i].classList.add("hidden");
  }
}

function click_AE() {
  portfolio_body.classList.remove("all");
  portfolio_body.classList.remove("uxui");
  portfolio_body.classList.add("ae");
  portfolio_body.classList.remove("threed");

  for (var i = 0; i < show_UXUI.length; i++) {
    show_UXUI[i].classList.add("hidden");
  }

  for (var i = 0; i < show_AE.length; i++) {
    show_AE[i].classList.remove("hidden");
  }

  for (var i = 0; i < show_3D.length; i++) {
    show_3D[i].classList.add("hidden");
  }
}

function click_3D() {
  portfolio_body.classList.remove("all");
  portfolio_body.classList.remove("uxui");
  portfolio_body.classList.remove("ae");
  portfolio_body.classList.add("threed");

  for (var i = 0; i < show_UXUI.length; i++) {
    show_UXUI[i].classList.add("hidden");
  }

  for (var i = 0; i < show_AE.length; i++) {
    show_AE[i].classList.add("hidden");
  }

  for (var i = 0; i < show_3D.length; i++) {
    show_3D[i].classList.remove("hidden");
  }
}

//UXUI
if (url.includes("uxui")) {
  click_UXUI();
}

filter_UXUI.addEventListener("click", function () {
  click_UXUI();
});

//Motion Design
if (url.includes("motion-design")) {
  click_AE();
}

filter_AE.addEventListener("click", function () {
  click_AE();
});

//3D Max
if (url.includes("3D-max")) {
  click_3D();
}

filter_3D.addEventListener("click", function () {
  click_3D();
});
