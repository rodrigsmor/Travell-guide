window.addEventListener("scroll", () => {
    var header = document.querySelector("header");

    header.classList.toggle("fixed", window.scrollY > 100);
});