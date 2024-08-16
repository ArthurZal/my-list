const formAddItems = document.querySelector("#addItems")
const input = document.querySelector("#newItem");



formAddItems.onsubmit = (event) => {
    event.preventDefault()

    if(input.value == 0) {
        alert("Please, enter a valid item")

    } else {
        addNewItem(input.value)
    }


}

function addNewItem(item) {
    console.log(item)
}