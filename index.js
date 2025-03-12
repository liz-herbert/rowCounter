let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

//increment the count by one
function increment() {
    count += 1
    countEl.textContent = count
}

//save the count and set counter back to zero
function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
}
