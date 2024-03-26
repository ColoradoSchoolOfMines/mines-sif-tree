
const data = {
    "test": {
        "link": "https://www.google.com/",
        "phase-solid": false,
        "phase-liquid": false,
        "solid_form-crystalline": false,
        "solid_form-amorphous": false,
        "solid_form-thin_film": false,
        "solid_form-powder": false,
        "solid_props-phase": false,
        "solid_props-crystallorgraphic-texture": false,
        "solid_props-strain": false,
        "solid_props-bonding": false,
        "spatial_res-na": false,
        "spatial_res-mm": false,
        "spatial_res-um": false,
        "spatial_res-nm": false,
        "dimensionality-1d": false,
        "dimensionality-2d": false,
        "dimensionality-3d": false,
        "comp_sensitivity-na": false,
        "comp_sensitivity-a_few_at_%": false,
        "comp_sensitivity-ppm": false,
        "temp-room": false,
        "temp-heated": false,
        "temp-cooled": false,
        "mech_loading-na": false,
        "mech_loading-tension": false,
        "mech_loading-compression": false,
        "mech_loading-bending": false,
        "mech_loading-fatigue": false,
        "atmosphere-ambient": false,
        "atmosphere-vacuum": false,
        "atmosphere-other": false,
    },
    "Helios": {
        "link": "https://www.mines.edu/shared-facilities/project/fei-helios-nanolab-600i-fib-sem/",
        "phase-solid": true,
        "phase-liquid": false,
        "solid_form-crystalline": true,
        "solid_form-amorphous": true,
        "solid_form-thin_film": true,
        "solid_form-powder": true,
        "solid_props-phase": true,
        "solid_props-crystallorgraphic-texture": true,
        "solid_props-strain": false,
        "solid_props-bonding": false,
        "spatial_res-na": true,
        "spatial_res-mm": true,
        "spatial_res-um": true,
        "spatial_res-nm": true,
        "dimensionality-1d": true,
        "dimensionality-2d": true,
        "dimensionality-3d": true,
        "comp_sensitivity-na": true,
        "comp_sensitivity-a_few_at_%": true,
        "comp_sensitivity-ppm": false,
        "temp-room": true,
        "temp-heated": false,
        "temp-cooled": false,
        "mech_loading-na": true,
        "mech_loading-tension": false,
        "mech_loading-compression": false,
        "mech_loading-bending": false,
        "mech_loading-fatigue": false,
        "atmosphere-ambient": false,
        "atmosphere-vacuum": true,
        "atmosphere-other": false,
    },
    "Tescan": {
        "link": "",
    },
    "JEOL": {
        "link": "",
    },
    "Quanta": {
        "link": "",
    },
    "Phenom": {
        "link": "",
    },
    "TOF-SIMS": {
        "link": "",
    },
    "LEAP": {
        "link": "",
    },
    "SCIEX 5500": {
        "link": "",
    },
    "SCIEX X500R": {
        "link": "",
    },
    "OrbiTrap Exploris": {
        "link": "",
    },
    "FTIR": {
        "link": "",
    },
    "UV-Vis": {
        "link": "",
    },
    "Ellipsometer": {
        "link": "",
    },
    "SPM": {
        "link": "",
    },
    "AFM": {
        "link": "",
    },
    "Profilometer": {
        "link": "",
    },
    "Keyence": {
        "link": "",
    },
    "WITex Confocal": {
        "link": "",
    },
    "DR-6000 Hach": {
        "link": "",
    },
    "Shimadzu TOC-L": {
        "link": "",
    },
    "Thermo Dionex ICS-900": {
        "link": "",
    },
    "Panalytical Empyrean": {
        "link": "",
    },
    "Panalytical X'Pert Pro": {
        "link": "",
    },
    "Zeiss Versa XCT": {
        "link": "",
    },
}

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


