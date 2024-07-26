let responsiveMenu = document.querySelector("#responsiveMenu")
let humburgerMenu = document.querySelector("#humburgerMenu")
let closeMenu = document.querySelector("#closeMenu")
let body = document.querySelector("body")
let plusBtn = document.querySelectorAll("#plusbtn")
let box = document.querySelectorAll("#box")

humburgerMenu.addEventListener('click', function () {
    responsiveMenu.classList.remove("-right-full")
    responsiveMenu.classList.add("right-0")
    body.classList.add("overflow-hidden")
})
closeMenu.addEventListener('click', function () {
    responsiveMenu.classList.add("-right-full")
    responsiveMenu.classList.remove("right-0")
    body.classList.remove("overflow-hidden")
})

plusBtn.forEach(function (item, index) {
    item.addEventListener('click', function () {
        box[index].classList.toggle("hidden")
        box[index].classList.add("mt-5")
    })
})