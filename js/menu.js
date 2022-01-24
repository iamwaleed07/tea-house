const menu = document.querySelector("#hamburger")
const close = document.querySelector("#close")
const nav = document.querySelector("#navigation")

menu.addEventListener("click", () => {
    nav.classList.add("active")
})
close.addEventListener("click", () => {
    nav.classList.remove("active")
})
