console.log("hello")

let fg = document.getElementById("fg");
let bg = document.getElementById("bg");

document.addEventListener("scroll", function(e) {
    requestAnimationFrame(function(e) {
        /*
        fg.style.transform = "translate3d("+window.scrollY+"px, -62px, -135px);"
        bg.style.transform = "translate3d(42px, -62px, -135px);"
        */
        let scrollAmount = window.scrollY * 0.1;
        //bg.style.transform="translate3d(0, "+scrollAmount+"px, 0)"

    })
})

function toggleNight() {
    body = document.body
    if (body.classList.contains("night")) {
        body.classList.remove("night")
        body.classList.add("day")
    } else {
        body.classList.remove("day")
        body.classList.add("night")
    }
        /*
    if (fg.classList.contains("night")) {
        fg.classList.remove("night")
        bg.classList.remove("night")
        fg.classList.add("day")
        bg.classList.add("day")
    } else {
        fg.classList.remove("day")
        bg.classList.remove("day")
        fg.classList.add("night")
        bg.classList.add("night")
    }
    */
}
