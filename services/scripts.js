window.addEventListener("scroll", () => {
    var header = document.querySelector("header");

    header.classList.toggle("fixed", window.scrollY > 100);
});

var buttonDropdown = document.querySelector(".dropdown_button");
var blockDropdown = document.querySelector(".dropdown_members");

buttonDropdown.addEventListener("mouseover", () => {
    blockDropdown.classList.toggle('visible');
});

buttonDropdown.addEventListener("mouseout", () => {
    blockDropdown.classList.toggle('visible');
});

var logo = document.querySelector(".logo");

logo.addEventListener("click", () => {
    window.location.href = "../../index.html";
});