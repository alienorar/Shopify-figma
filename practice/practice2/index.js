

let ticket = {}
function createTicket(event) {
    event.preventDefault()
    const { name, value } = event.target
    ticket[name] = value
    console.log(ticket);

}


const buy = document.getElementById("buy")
const ticketList = []
buy.addEventListener("click", () => {
    ticketList.push({ ...ticket })
    console.log(ticketList);
    let tr = ''
    ticketList.map((item, index) => {
        console.log(item);

        return tr += '<tr>' +
            '<td>' + (index + 1) + '</td>'
            + '<td>' + (item.full_name) + '</td>'
            + '<td>' + (item.tel_nomer) + '</td>'
            + '<td>' + (item.match) + '</td>'
            + '<td>' + (item.price) + '</td>'
            + '</tr>'


    })
    const ticketPrint = document.getElementById("ticketPrint")
    ticketPrint.innerHTML = tr
    ticket = {}

}



)

const checkbtn = document.getElementById("check")
checkbtn.addEventListener("click", function checkWord(event) {
    const text = document.getElementById("text_area").value
    const word = document.getElementById("word").value
    console.log(text);
    console.log(word);
    const resultWords = []
    const result = document.getElementById("result")
    let textArea = text.split(" ").filter((item) => item !== "")
    console.log(text);

    word.split(" ").forEach((el, index) => {
        if (el !== " ") {
            if (textArea.includes(el)) {
                resultWords.push(el)
                result.innerText = `${resultWords} textareada bor`
                result.style.color = "green"
            }
            else {
                result.innerText = `textareada kiritilgan so'zlardan birontasi yuq `
                result.style.color = "red"
            }
        }

    });



})

const getUnique = document.getElementById("getUnique")
console.log(getUnique);

getUnique.addEventListener("click", function getUniqueEl(event) {
    const textareaInput = document.getElementById("text_area-nd").value
    let textArr = textareaInput.split(" ")
    let count = 0
    textArr.forEach((item, index) => {
        if (textArr.indexOf(item) === textArr.lastIndexOf(item)) {
        count += index
        console.log(count);
        

        }
    });
})


