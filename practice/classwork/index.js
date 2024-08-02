const listItem = document.querySelector(".list")
const wordInput = document.querySelector("#word")
const countInput = document.querySelector("#count")
const createBtn = document.querySelector("#create")
const elFont = document.querySelector("#font")
createBtn.addEventListener("click", function createWord(e) {
    e.preventDefault()
    for (let i = 0; i < +countInput.value; i++) {
        elFont.textContent += wordInput.value + (" ")
    }
})