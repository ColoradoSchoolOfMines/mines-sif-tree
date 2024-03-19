import { data } from './data.js'

data.Helios

const checkboxContainers = document.getElementsByClassName("checkbox-container");
const instrumentsContainer = document.getElementById
let selectedOptions = [];

function addOption(option) {
    selectedOptions.push(option);
}

function removeOption(optionToRemove) {
    selectedOptions.splice(selectedOptions.indexOf(optionToRemove), 1);
}

function updateOptionsList() {
    const oldOptions = document.getElementById("selected-options");
    const newOptions = document.createElement("div");
    const optionsList = document.createElement("ul");
    let options = []

    for (i in selectedOptions) {
        let listItem = document.createElement("li");
        let optionText = document.createTextNode(selectedOptions[i]);
        listItem.appendChild(optionText);
        optionsList.append(listItem);
        options.append(optionText);
    }

    newOptions.appendChild(optionsList);
    newOptions.id = "selected-options"
    console.log(newOptions);
    console.log(oldOptions);

    document.body.replaceChild(newOptions, oldOptions);
    console.log("Updated");
}

function updateInstruments(options) {
    
}

for (let container of checkboxContainers) {
    let checkbox = container.querySelector("input");
    checkbox.addEventListener('click', () => {
        if (checkbox.checked) {
            addOption(checkbox.id);
        } else {
            removeOption(checkbox.id);
        }
        updateOptionsList();
    })
}
