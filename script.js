const checkboxContainers = document.getElementsByClassName("checkbox-container");
const instrumentsContainer = document.getElementById("instruments-panel");
const msg = document.getElementById("msg");

const clearBtn = document.getElementById("clear-btn");
clearBtn.addEventListener('click', () => {
    console.log("cleared!")
    clearOptions();
});

let selectedOptions = [];

function addOption(option) {
    selectedOptions.push(option);
}

function removeOption(optionToRemove) {
    selectedOptions.splice(selectedOptions.indexOf(optionToRemove), 1);
}

function clearOptions(){
    while (selectedOptions.length > 0) {
        selectedOptions.pop();
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
        for (let i = 0; i < selectedOptions.length; i++) {
            if (!data[name][selectedOptions[i]]) {
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
    msg.textContent = anySuccess ? 'Narrow down instruments by selecting from the options below.' 
                                 : 'No instruments match the selected options.';
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


