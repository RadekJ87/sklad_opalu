const burger = document.querySelector("div.smallburger");
const nav = document.querySelector(".navbar");
const wrapper = document.querySelector(".wrapper");

burger.addEventListener("click", function (e) {
    e.preventDefault();
    nav.classList.toggle("active");
    wrapper.classList.toggle("active");
})