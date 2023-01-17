const menu = document.querySelector(".nav-right button");
const close = document.querySelector(".ig");
const mobile= document.querySelector(".mobile");

menu.addEventListener("click", function () {
    mobile.style.transform = "translateX(0)"
});

close.addEventListener("click", function () {
    mobile.style.transform = "translateX(100%)"
});