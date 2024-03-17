const checkboxContainers = document.getElementsByClassName("checkbox-container");
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

    for (i in selectedOptions) {
        let listItem = document.createElement("li");
        let optionText = document.createTextNode(selectedOptions[i]);
        listItem.appendChild(optionText);
        optionsList.append(listItem);
    }

    newOptions.appendChild(optionsList);
    newOptions.id = "selected-options"
    console.log(newOptions);
    console.log(oldOptions);

    document.body.replaceChild(newOptions, oldOptions);
    console.log("Updated");
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
