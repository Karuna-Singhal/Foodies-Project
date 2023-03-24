const btnOpenEl = document.querySelector(".header-icons");
console.log(btnOpenEl);
const headerEl = document.querySelector(".header");

btnOpenEl.addEventListener("click", function () {
  headerEl.classList.toggle("header-nav");
});
