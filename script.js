const checkboxContainers = document.getElementsByClassName("checkbox-container");
const instrumentsContainer = document.getElementById("instruments-panel");
const defaultMessage = "Narrow down instruments by selecting from the criteria below. If criteria are inapplicable, please leave them unselected.";
const msg = document.getElementById("msg");

const clearBtn = document.getElementById("clear-btn");
clearBtn.addEventListener('click', () => {
    clearCriteria();
});

let selectedCriteria = [];

function addOption(option) {
    selectedCriteria.push(option);
}

function removeOption(optionToRemove) {
    selectedCriteria.splice(selectedCriteria.indexOf(optionToRemove), 1);
}

function clearCriteria(){
    while (selectedCriteria.length > 0) {
        selectedCriteria.pop();
    }
    for (let container of checkboxContainers) {
        container.querySelector("input").checked = false;
    }
    updateInstruments();
}

function updateInstruments() {
    let anySuccess = false;
    for (let name in data) {
        let match = true;
        for (let i = 0; i < selectedCriteria.length; i++) {
            if (!data[name][selectedCriteria[i]]) {
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

    msg.textContent = anySuccess ? defaultMessage 
                                 : 'No instruments match the selected criteria.';
    msg.style.color = anySuccess ? "#21314d" : 'red';
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
        updateInstruments();
    })
}


