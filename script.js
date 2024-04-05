
const checkboxContainers = document.getElementsByClassName("checkbox-container");
const instrumentsContainer = document.getElementById("instruments-panel");
const errorMsg = document.getElementById("error-msg");
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
        options.push(selectedOptions[i]);
    }

    newOptions.appendChild(optionsList);
    newOptions.id = "selected-options"
    console.log(newOptions);
    console.log(oldOptions);

    document.body.replaceChild(newOptions, oldOptions);
    console.log("Updated");

    updateInstruments(options)
}

function updateInstruments(options) {
    let anySuccess = false;
    for (let name in data) {
        let match = true;
        for (let i = 0; i < options.length; i++) {
            if (!data[name][options[i]]) {
                match = false;
                break;
            }
        }
        let instrumentDiv = document.getElementById(name);
        if (match) {
            instrumentDiv.classList.remove("greyed-out");
            anySuccess = true;
        } else {
            instrumentDiv.classList.add("greyed-out");
        }
    }
    console.log(anySuccess)
    errorMsg.style.visibility = anySuccess ? 'hidden' : 'visible';
}

// create all instruments in instrument panel
for (let name in data) {
    // create new div
    let div = document.createElement('div');
    div.id = name;
    div.className = "instrument";
    // create div contents
    let a = document.createElement('a');
    a.appendChild(document.createTextNode(name));
    a.setAttribute('href', data[name].link);

    if (data[name].link !== "") {
        a.setAttribute('target', "_blank");
    }

    div.appendChild(a);
    // add to instruments panel
    instrumentsContainer.appendChild(div);
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


