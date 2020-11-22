window.addEventListener('load', (event) => {
    if (localStorage["night"] === true) {
        setNight()
    }
})

var body = document.body

function toggleNight() {
    if (body.classList.contains("night")) {
        setDay()
    } else {
        setNight()
    }
}

function setNight() {
    body.classList.remove("day")
    body.classList.add("night")
    localStorage["night"] = true
}

function setDay() {
    body.classList.remove("night")
    body.classList.add("day")
    localStorage["night"] = false
}
