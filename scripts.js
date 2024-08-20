const body = document.querySelector("body");
const formAddItems = document.querySelector("#addItems");
const input = document.querySelector("#newItem");
const paragraph = document.querySelector("p");
const message = document.querySelector("#msg-delete");


formAddItems.onsubmit = (event) => {
    event.preventDefault();

    if(input.value == 0) {
        alert("Please, enter a valid item");

    } else {
        addNewItem();
        input.value = "";
    }

}

function addNewItem() {
 
    paragraph.classList.add("disable");

    createNewViewElements(input.value);
    
};

function createNewViewElements(item) {
    const newForm = document.createElement("form");
    const newCheckbox = document.createElement("Input");
    const newLabel = document.createElement("Label");
    const newParagraph = document.createElement("p");
    const newButton = document.createElement("button");

    newCheckbox.type = "checkbox";
    newButton.textContent = "DELETE";

    newButton.onclick = () => {
        newForm.remove();
        
    };
 
    newLabel.append(newCheckbox, newParagraph,newButton);
    newForm.append(newLabel);
    body.append(newForm);

    newParagraph.innerText = item;

    newCheckbox.addEventListener('change', (event) => {
        if(event.target.checked) {

            newParagraph.style.textDecoration = 'line-through'; 
            newParagraph.style.color = 'grey';

        } else {

            newParagraph.style.textDecoration = 'none';
            newParagraph.style.color = 'black';

        }
    })

};
