const filter_work = document.querySelector("#work-select");
const filter_UXUI = document.querySelector("#select-UXUI");
const filter_AE = document.querySelector("#select-AE");
const filter_PS = document.querySelector("#select-PS");
const filter_AI = document.querySelector("#select-AI");
const filter_all = document.querySelector("#select-all");

const show_UXUI = document.querySelectorAll(".card_UXUI");
const show_AE = document.querySelectorAll(".card_AE");
const show_PS = document.querySelectorAll(".card_PS");
const show_AI = document.querySelectorAll(".card_AI");

//Update results when change the select
filter_all.addEventListener("click", function () {
  for (var i = 0; i < show_UXUI.length; i++) {
    show_UXUI[i].classList.remove("hidden");
  }

  for (var i = 0; i < show_AE.length; i++) {
    show_AE[i].classList.remove("hidden");
  }

  for (var i = 0; i < show_PS.length; i++) {
    show_PS[i].classList.remove("hidden");
  }

  for (var i = 0; i < show_AI.length; i++) {
    show_AI[i].classList.remove("hidden");
  }
});

filter_UXUI.addEventListener("click", function () {
  for (var i = 0; i < show_UXUI.length; i++) {
    show_UXUI[i].classList.remove("hidden");
  }

  for (var i = 0; i < show_AE.length; i++) {
    show_AE[i].classList.add("hidden");
  }

  for (var i = 0; i < show_PS.length; i++) {
    show_PS[i].classList.add("hidden");
  }

  for (var i = 0; i < show_AI.length; i++) {
    show_AI[i].classList.add("hidden");
  }
});

filter_AE.addEventListener("click", function () {
  for (var i = 0; i < show_UXUI.length; i++) {
    show_UXUI[i].classList.add("hidden");
  }

  for (var i = 0; i < show_AE.length; i++) {
    show_AE[i].classList.remove("hidden");
  }

  for (var i = 0; i < show_PS.length; i++) {
    show_PS[i].classList.add("hidden");
  }

  for (var i = 0; i < show_AI.length; i++) {
    show_AI[i].classList.add("hidden");
  }
});

filter_PS.addEventListener("click", function () {
  for (var i = 0; i < show_UXUI.length; i++) {
    show_UXUI[i].classList.add("hidden");
  }

  for (var i = 0; i < show_AE.length; i++) {
    show_AE[i].classList.add("hidden");
  }

  for (var i = 0; i < show_PS.length; i++) {
    show_PS[i].classList.remove("hidden");
  }

  for (var i = 0; i < show_AI.length; i++) {
    show_AI[i].classList.add("hidden");
  }
});

filter_AI.addEventListener("click", function () {
  for (var i = 0; i < show_UXUI.length; i++) {
    show_UXUI[i].classList.add("hidden");
  }

  for (var i = 0; i < show_AE.length; i++) {
    show_AE[i].classList.add("hidden");
  }

  for (var i = 0; i < show_PS.length; i++) {
    show_PS[i].classList.add("hidden");
  }

  for (var i = 0; i < show_AI.length; i++) {
    show_AI[i].classList.remove("hidden");
  }
});
