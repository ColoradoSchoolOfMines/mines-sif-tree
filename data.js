/**
 * Document Name: SIF Instruments Data File
 * 
 * Authors: 
 * Jayden Pahukula (jaydenpahukula@mines.edu) 
 * Umberto Gherardi (umbertogherardi@mines.edu)
 * 
 * Please reach out to either of the authors above via the provided emails for 
 * additional assistance with the Mines SIF Tree plugin.
 * 
 * 
 * -- DESCRIPTION --
 * The following data is used by script.js to populate the
 * instruments HTML panel. Each instrument contains criteria that
 * map to an input element's id. 
 * 
 * When an input element (checkbox) is checked, any 
 * instrument with that id attribute set to "true" 
 * should remain clickable in the instruments dropdown.
 * 
 * 
 * --- DESCRIPTION EXAMPLE ---
 * "Phase --> Solid" property. 
 * 
 * HTML (index.html file):
 * <div class="checkbox-container">
 *  <input id="phase-solid" type="checkbox"> // the criteria name
 *  <span>Solid</span> // the label for the checkbox
 * </div>
 * 
 * Functionality:
 * If the checkbox with the label "Solid" is checked, any instrument with 
 * the '"phase-solid": true' attribute will remain clickable. Any instrument
 * that does not have this attribute will become grey and unclickable when the
 * "Solid" checkbox is clicked.
 * 
 * 
 * -- CHECKBOX LABELS & CRITERIA ATTRIBUTES --
 * For a machine to be linked with criteria, it must contain the EXACT names
 * for those desired criteria as listed in the corresponding "criteria-group" div.
 * 
 * Each criteria name adheres to the following format:
 * criteria_group-criteria_group_option
 * 
 * The criteria group is seperated from the criteria group option
 * with a single dash (-). If a group or option are multiple words long, each word
 * is seperated by a single underscore (_). All letters in the name should be lowercase.
 * 
 * This naming criteria should be adhered to when adding new criteria for consistency.
 * 
 * 
 * -- CHECKBOX LABELS & CRITERIA ATTRIBUTES EXAMPLE --
 * If we want to link the "FEI Helios FIB/SEM" machine to the "Solid Form --> Crystalline" and 
 * "Composional Sensitivity --> A Few At %" checkboxes, we need the following: 
 * 
 * 1. HTML (index.html file):
 * // The checkbox for the "Solid Form --> Crystalline" criteria
 * <div class="checkbox-container">
 *  <input id="solid_form-crystalline" type="checkbox">
 *  <span>Crystalline</span>
 * </div>
 * ...
 * // The checkbox for the "Composional Sensitivity --> A Few At %" criteria
 * <div class="checkbox-container">
 *  <input id="comp_sensitivity-a_few_at_%" type="checkbox">
 *  <span>A Few At %</span>
 * </div>
 * 
 * Note that both these criteria should be within a valid "criteria-group" div. New
 * "criteria-group" divs can be made for new classes of criteria by simply creating a 
 * new "criteria-group" div within the "criteria-container" div.
 * 
 * 2. JSON (data.js file):
 * "FEI Helios FIB/SEM": {
 *      "solid_form-crystalline": true,
 *      "comp_sensitivity-a_few_at_%": true,
 *  },
 * 
 * Note that the attribute names within the JSON for the "FEI Helios FIB/SEM" machine
 * correspond EXACTLY with the id's on the HTML checkboxes.
 *  
 * 
 * -- ADDING A NEW MACHINE --
 * When adding a new machine, adhere to the following format:
 * 
 * MACHINE NAME: {
 *  link: <https link to the machine's webpage>
 *  machine criteria 1: true,
 *  machine critieria 2: true,
 *  ...
 *  machine criteria n: true,
 * },
 * 
 * Links to machine webpages can be found here: https://www.mines.edu/shared-facilities/
 * 
 * To find the criteria attributes needed for a new machine, simply 
 * cross-reference the desired criteria with the criteria id's contained 
 * in the "all_criteria.txt" file. Some criteria names are abbreviated, e.g., 
 * "Solid Properties --> Crystallographic Texture" has the attribute 
 * "solid_props-crystallographic_texture".
 * 
 * Note that new machines should go inside the "data" object in the data.js file
 * just like all the other machines.
 * 
 * 
 * -- ADDING NEW CRITERIA --
 * To add a new criteria option to an existing criteria group, simply add
 * another "checkbox-container" div inside the desired "criteria-group" div.
 * 
 * To add a new criteria group, simply add another "criteria-group" div within
 * the "criteria-panel" div. Add as many criteria options inside the new
 * "criteria-group" div as desired.
 * 
 */

const data = {
    "FEI Helios FIB/SEM": {
        "link": "https://www.mines.edu/shared-facilities/project/fei-helios-nanolab-600i-fib-sem/",
        "phase-solid": true,
        "solid_form-crystalline": true,
        "solid_form-amorphous": true,
        "solid_form-thin_film": true,
        "solid_form-powder": true,
        "solid_props-phase": true,
        "solid_props-crystallographic_texture": true,
        "spatial_res-mm": true,
        "spatial_res-um": true,
        "spatial_res-nm": true,
        "dimensionality-1d": true,
        "dimensionality-2d": true,
        "dimensionality-3d": true,
        "comp_sensitivity-a_few_at_%": true,
        "temp-room": true,
        "atmosphere-vacuum": true,
    },
    "Tescan S8252G Raman-SEM/FIB": {
        "link": "https://www.mines.edu/shared-facilities/project/tescan-s8252g-raman-sem-fib/",
        "phase-solid": true,
        "solid_form-crystalline": true,
        "solid_form-amorphous": true,
        "solid_form-thin_film": true,
        "solid_form-powder": true,
        "solid_props-phase": true,
        "solid_props-crystallographic_texture": true,
        "solid_props-strain": true,
        "solid_props-chemical_bonding": true,
        "spatial_res-mm": true,
        "spatial_res-um": true,
        "spatial_res-nm": true,
        "dimensionality-1d": true,
        "dimensionality-2d": true,
        "dimensionality-3d": true,
        "comp_sensitivity-a_few_at_%": true,
        "temp-room": true,
        "temp-heated": true,
        "mech_testing-tension": true,
        "mech_testing-compression": true,
        "mech_testing-static": true,
        "force_ranges-kn": true,
        "atmosphere-vacuum": true,
        "atmosphere-other": true,
    },
    "JEOL JSM-7000F": {
        "link": "https://www.mines.edu/shared-facilities/project/jeol-jsf-7000f-field-emission-sem/",
        "phase-solid": true,
        "solid_form-crystalline": true,
        "solid_form-amorphous": true,
        "solid_form-thin_film": true,
        "solid_form-powder": true,
        "solid_props-phase": true,
        "solid_props-crystallographic_texture": true,
        "spatial_res-mm": true,
        "spatial_res-um": true,
        "spatial_res-nm": true,
        "dimensionality-1d": true,
        "dimensionality-2d": true,
        "comp_sensitivity-a_few_at_%": true,
        "temp-room": true,
        "atmosphere-vacuum": true,
    },
    "FEI Quanta ESEM": {
        "link": "https://www.mines.edu/shared-facilities/project/fei-quanta-600i-environmental-sem/",
        "phase-solid": true,
        "solid_form-crystalline": true,
        "solid_form-amorphous": true,
        "solid_form-thin_film": true,
        "solid_form-powder": true,
        "spatial_res-mm": true,
        "spatial_res-um": true,
        "dimensionality-1d": true,
        "dimensionality-2d": true,
        "comp_sensitivity-a_few_at_%": true,
        "temp-room": true,
        "atmosphere-vacuum": true,
        "atmosphere-other": true,
    },
    "Phenom SEM": {
        "link": "https://www.mines.edu/shared-facilities/project/phenom/",
        "phase-solid": true,
        "solid_form-crystalline": true,
        "solid_form-amorphous": true,
        "solid_form-thin_film": true,
        "solid_form-powder": true,
        "spatial_res-mm": true,
        "spatial_res-um": true,
        "dimensionality-1d": true,
        "dimensionality-2d": true,
        "temp-room": true,
        "atmosphere-vacuum": true,
        "atmosphere-other": true,
    },
    "FEI Talos F200X": {
        "link": "https://www.mines.edu/shared-facilities/project/fei-talos-f200x-tem-stem/",
        "phase-solid": true,
        "solid_form-crystalline": true,
        "solid_form-amorphous": true,
        "solid_form-thin_film": true,
        "solid_form-powder": true,
        "solid_props-phase": true,
        "solid_props-crystallographic_texture": true,
        "solid_props-strain": true,
        "spatial_res-um": true,
        "spatial_res-nm": true,
        "dimensionality-1d": true,
        "dimensionality-2d": true,
        "dimensionality-3d": true,
        "comp_sensitivity-a_few_at_%": true,
        "temp-room": true,
        "atmosphere-vacuum": true,
    },
    "FEI Tecnai T12": {
        "link": "https://www.mines.edu/shared-facilities/project/fei-tecnai-t12/",
        "phase-solid": true,
        "solid_form-crystalline": true,
        "solid_form-amorphous": true,
        "solid_form-thin_film": true,
        "solid_form-powder": true,
        "solid_props-phase": true,
        "spatial_res-um": true,
        "spatial_res-nm": true,
        "dimensionality-1d": true,
        "dimensionality-2d": true,
        "comp_sensitivity-a_few_at_%": true,
        "temp-room": true,
        "atmosphere-vacuum": true,
    },
    "IONTOF TOF-SIMS V": {
        "link": "https://www.mines.edu/shared-facilities/project/iontof-tof-sims-v/",
        "phase-solid": true,
        "solid_form-crystalline": true,
        "solid_form-amorphous": true,
        "solid_form-thin_film": true,
        "solid_form-powder": true,
        "spatial_res-mm": true,
        "spatial_res-um": true,
        "spatial_res-nm": true,
        "dimensionality-1d": true,
        "dimensionality-2d": true,
        "dimensionality-3d": true,
        "comp_sensitivity-a_few_at_%": true,
        "comp_sensitivity-ppm": true,
        "temp-room": true,
        "atmosphere-vacuum": true,
        "atmosphere-other": true,
    },
    "Cameca LEAP 4000X Si": {
        "link": "https://www.mines.edu/shared-facilities/project/atomprobe/",
        "phase-solid": true,
        "solid_form-crystalline": true,
        "solid_form-amorphous": true,
        "solid_form-thin_film": true,
        "solid_form-powder": true,
        "spatial_res-um": true,
        "spatial_res-nm": true,
        "dimensionality-1d": true,
        "dimensionality-2d": true,
        "dimensionality-3d": true,
        "comp_sensitivity-a_few_at_%": true,
        "comp_sensitivity-ppm": true,
        "temp-room": true,
        "temp-cooled": true,
        "atmosphere-vacuum": true,
        "atmosphere-other": true,
    },
    "Sciex 5500 Triple Quad": {
        "link": "https://www.mines.edu/shared-facilities/project/sciex-5500-triple-quad/",
        "phase-liquid": true,
        "comp_sensitivity-a_few_at_%": true,
        "comp_sensitivity-ppm": true,
        "temp-room": true,
        "atmosphere-ambient": true,
    },
    "Sciex x500R QToF": {
        "link": "https://www.mines.edu/shared-facilities/project/sciex-x500r-qtof/",
        "phase-liquid": true,
        "comp_sensitivity-a_few_at_%": true,
        "comp_sensitivity-ppm": true,
        "temp-room": true,
        "atmosphere-ambient": true,
    },
    "Thermo Scientific Orbitrap Exploris 240": {
        "link": "https://www.mines.edu/shared-facilities/project/orbitrap/",
        "phase-liquid": true,
        "comp_sensitivity-a_few_at_%": true,
        "comp_sensitivity-ppm": true,
        "temp-room": true,
        "atmosphere-ambient": true,
    },
    "FTIR Spectrometer/Ellipsometer": {
        "link": "https://www.mines.edu/shared-facilities/project/ftir/",
        "phase-solid": true,
        "phase-liquid": true,
        "solid_form-crystalline": true,
        "solid_form-amorphous": true,
        "solid_form-thin_film": true,
        "solid_form-powder": true,
        "solid_props-chemical_bonding": true,
        "spatial_res-mm": true,
        "dimensionality-1d": true,
        "comp_sensitivity-a_few_at_%": true,
        "temp-room": true,
        "atmosphere-ambient": true,
    },
    "UV-Vis Spectrometer": {
        "link": "https://www.mines.edu/shared-facilities/project/uvis/",
        "phase-solid": true,
        "solid_form-crystalline": true,
        "solid_form-amorphous": true,
        "solid_form-thin_film": true,
        "solid_form-powder": true,
        "solid_props-chemical_bonding": true,
        "spatial_res-mm": true,
        "dimensionality-1d": true,
        "temp-room": true,
        "atmosphere-ambient": true,
    },
    "Woollam M-2000 Ellipsometer": {
        "link": "https://www.mines.edu/shared-facilities/project/m2000/",
        "phase-solid": true,
        "solid_form-crystalline": true,
        "solid_form-amorphous": true,
        "solid_form-thin_film": true,
        "solid_props-phase": true,
        "solid_props-strain": true,
        "spatial_res-mm": true,
        "dimensionality-1d": true,
        "temp-room": true,
        "atmosphere-ambient": true,
    },
    "ASYLUM MFP-3D SPM": {
        "link": "https://www.mines.edu/shared-facilities/project/asylum-mfp-3d-scanning-probe-microscope/",     
        "phase-solid": true,
        "phase-liquid": true,
        "solid_form-crystalline": true,
        "solid_form-amorphous": true,
        "solid_form-thin_film": true,
        "solid_form-powder": true,
        "solid_props-phase": true,
        "solid_props-strain": true,
        "spatial_res-um": true,
        "spatial_res-nm": true,
        "dimensionality-1d": true,
        "dimensionality-2d": true,
        "temp-room": true,
        "temp-heated": true,
        "temp-cooled": true,
        "mech_testing-tension": true,
        "mech_testing-compression": true,
        "atmosphere-ambient": true,
        "atmosphere-other": true,
    },
    "Digital Instruments AFM": {
        "link": "https://www.mines.edu/shared-facilities/project/digitalafm/",
        "phase-solid": true,
        "solid_form-crystalline": true,
        "solid_form-amorphous": true,
        "solid_form-thin_film": true,
        "solid_form-powder": true,
        "solid_props-phase": true,
        "solid_props-strain": true,
        "spatial_res-um": true,
        "spatial_res-nm": true,
        "dimensionality-1d": true,
        "dimensionality-2d": true,
        "temp-room": true,
        "atmosphere-ambient": true,
    },
    "Profilometer": {
        "link": "https://www.mines.edu/shared-facilities/project/profilometer/",
        "phase-solid": true,
        "solid_form-crystalline": true,
        "solid_form-amorphous": true,
        "solid_form-thin_film": true,
        "solid_form-powder": true,
        "spatial_res-mm": true,
        "spatial_res-um": true,
        "dimensionality-1d": true,
        "dimensionality-2d": true,
        "temp-room": true,
        "atmosphere-ambient": true,
    },
    "Keyence VHX-5000": {
        "link": "https://www.mines.edu/shared-facilities/project/keyence/",
        "phase-solid": true,
        "phase-liquid": true,
        "solid_form-crystalline": true,
        "solid_form-amorphous": true,
        "solid_form-thin_film": true,
        "solid_form-powder": true,
        "spatial_res-mm": true,
        "spatial_res-um": true,
        "dimensionality-1d": true,
        "dimensionality-2d": true,
        "dimensionality-3d": true,
        "temp-room": true,
        "atmosphere-ambient": true,
    },
    "WITec Laser Confocal Raman Microscope": {
        "link": "https://www.mines.edu/shared-facilities/project/witec-laser-confocal-raman-microscope/",
        "phase-solid": true,
        "phase-liquid": true,
        "solid_form-crystalline": true,
        "solid_form-amorphous": true,
        "solid_form-thin_film": true,
        "solid_form-powder": true,
        "solid_props-strain": true,
        "solid_props-chemical_bonding": true,
        "spatial_res-mm": true,
        "spatial_res-um": true,
        "dimensionality-1d": true,
        "dimensionality-2d": true,
        "dimensionality-3d": true,
        "temp-room": true,
        "atmosphere-ambient": true,
    },
    "DR-6000 Hach": {
        "link": "https://www.mines.edu/shared-facilities/project/wqa/",
        "phase-liquid": true,
        "comp_sensitivity-a_few_at_%": true,
        "comp_sensitivity-ppm": true,
        "temp-room": true,
        "atmosphere-ambient": true,
    },
    "Shimadzu TOC-L": {
        "link": "https://www.mines.edu/shared-facilities/project/toc/",
        "phase-liquid": true,
        "comp_sensitivity-a_few_at_%": true,
        "comp_sensitivity-ppm": true,
        "temp-room": true,
        "atmosphere-ambient": true,
    },
    "Thermo Dionex ICS-900": {
        "link": "https://www.mines.edu/shared-facilities/project/ic/",
        "phase-liquid": true,
        "comp_sensitivity-a_few_at_%": true,
        "comp_sensitivity-ppm": true,
        "temp-room": true,
        "atmosphere-ambient": true,
    },
    "Malvern Panalytical Empyrean X-ray Diffractometer": {
        "link": "https://www.mines.edu/shared-facilities/project/malvern-panalytical-empyrean-x-ray-diffractometer/",
        "phase-solid": true,
        "solid_form-crystalline": true,
        "solid_form-amorphous": true,
        "solid_form-thin_film": true,
        "solid_form-powder": true,
        "solid_props-phase": true,
        "solid_props-crystallographic_texture": true,
        "solid_props-strain": true,
        "spatial_res-mm": true,
        "spatial_res-um": true,
        "dimensionality-1d": true,
        "dimensionality-2d": true,
        "temp-room": true,
        "temp-heated": true,
        "temp-cooled": true,
        "atmosphere-ambient": true,
        "atmosphere-other": true,
    },
    "Panalytical X'Pert Pro X-ray Diffractometer": {
        "link": "https://www.mines.edu/shared-facilities/project/panalytical-pw3040-x-ray-diffractometer/",
        "phase-solid": true,
        "solid_form-crystalline": true,
        "solid_form-amorphous": true,
        "solid_form-thin_film": true,
        "solid_form-powder": true,
        "solid_props-phase": true,
        "solid_props-crystallographic_texture": true,
        "spatial_res-mm": true,
        "dimensionality-1d": true,
        "temp-room": true,
        "atmosphere-ambient": true,
    },
    "Zeiss Versa 520 XCT": {
        "link": "https://www.mines.edu/shared-facilities/project/zeiss-versa-x-ray-microscope/",
        "phase-solid": true,
        "solid_form-crystalline": true,
        "solid_form-amorphous": true,
        "solid_form-thin_film": true,
        "solid_form-powder": true,
        "solid_props-phase": true,
        "spatial_res-mm": true,
        "spatial_res-um": true,
        "dimensionality-1d": true,
        "dimensionality-2d": true,
        "dimensionality-3d": true,
        "comp_sensitivity-a_few_at_%": true,
        "temp-room": true,
        "mech_testing-tension": true,
        "mech_testing-compression": true,
        "atmosphere-ambient": true,
    },
    "Extensometer": {
        "link": "",     // TODO: get this link!!! <==========================================
        "phase-solid": true,
        "solid_form-crystalline": true,
        "solid_form-amorphous": true,
        "solid_props-strain": true,
        "spatial_res-mm": true,
        "spatial_res-um": true,
        "dimensionality-1d": true,
        "temp-room": true,
        "temp-heated": true,
        "temp-cooled": true,
        "mech_testing-tension": true,
        "mech_testing-compression": true,
        "force_ranges-n": true,
        "force_ranges-kn": true,
        "atmosphere-ambient": true,
        "atmosphere-vacuum": true,
        "atmosphere-other": true,
    },
    "Digital Image Correlation": {
        "link": "",     // TODO: get this link!!! <==========================================
        "phase-solid": true,
        "solid_form-crystalline": true,
        "solid_form-amorphous": true,
        "solid_form-thin_film": true,
        "solid_props-strain": true,
        "spatial_res-mm": true,
        "spatial_res-um": true,
        "dimensionality-1d": true,
        "dimensionality-2d": true,
        "dimensionality-3d": true,
        "temp-room": true,
        "temp-heated": true,
        "temp-cooled": true,
        "mech_testing-tension": true,
        "mech_testing-compression": true,
        "mech_testing-bending": true,
        "mech_testing-torsion": true,
        "mech_testing-static": true,
        "force_ranges-n": true,
        "force_ranges-kn": true,
        "atmosphere-ambient": true,
        "atmosphere-vacuum": true,
        "atmosphere-other": true,
    },
    "MTS Environmental Chamber": {
        "link": "",     // TODO: get this link!!! <==========================================
        "phase-solid": true,
        "solid_form-crystalline": true,
        "solid_form-amorphous": true,
        "temp-heated": true,
        "temp-cooled": true,
        "mech_testing-tension": true,
        "mech_testing-compression": true,
        "mech_testing-bending": true,
        "mech_testing-static": true,
        "mech_testing-fatigue": true,
        "force_ranges-kn": true,
        "atmosphere-ambient": true,
    },
    "Induction Furnace": {
        "link": "",     // TODO: get this link!!! <==========================================
        "phase-solid": true,
        "solid_form-crystalline": true,
        "solid_form-amorphous": true,
        "temp-heated": true,
        "mech_testing-tension": true,
        "mech_testing-compression": true,
        "mech_testing-bending": true,
        "mech_testing-static": true,
        "mech_testing-fatigue": true,
        "force_ranges-n": true,
        "force_ranges-kn": true,
        "atmosphere-ambient": true,
    }, 
    "Gleeble": {
        "link": "https://www.mines.edu/shared-facilities/project/gleeble/",
        "phase-solid": true,
        "solid_form-crystalline": true,
        "solid_form-amorphous": true,
        "solid_props-strain": true,
        "spatial_res-mm": true,
        "spatial_res-um": true,
        "dimensionality-1d": true,
        "temp-room": true,
        "temp-heated": true,
        "mech_testing-tension": true,
        "mech_testing-compression": true,
        "mech_testing-torsion": true,
        "mech_testing-static": true,
        "force_ranges-kn": true,
        "atmosphere-ambient": true,
        "atmosphere-vacuum": true,
        "atmosphere-other": true,
    },
    "MARK-10 ESM1500": {
        "link": "",     // TODO: get this link!!! <==========================================
        "phase-solid": true,
        "solid_form-crystalline": true,
        "solid_form-amorphous": true,
        "solid_form-thin_film": true,
        "solid_props-strain": true,
        "spatial_res-mm": true,
        "spatial_res-um": true,
        "dimensionality-1d": true,
        "temp-room": true,
        "mech_testing-tension": true,
        "mech_testing-compression": true,
        "mech_testing-bending": true,
        "mech_testing-static": true,
        "force_ranges-n": true,
        "force_ranges-kn": true,
        "atmosphere-ambient": true,
    },
    "MTS Alliance RT/100": {
        "link": "",     // TODO: get this link!!! <==========================================
        "phase-solid": true,
        "solid_form-crystalline": true,
        "solid_form-amorphous": true,
        "solid_props-strain": true,
        "spatial_res-mm": true,
        "spatial_res-um": true,
        "dimensionality-1d": true,
        "temp-room": true,
        "mech_testing-tension": true,
        "mech_testing-compression": true,
        "mech_testing-bending": true,
        "mech_testing-static": true,
        "force_ranges-n": true,
        "force_ranges-kn": true,
        "atmosphere-ambient": true,
    },
    "Instru-Met ReNew 1125": {
        "link": "",     // TODO: get this link!!! <==========================================
        "phase-solid": true,
        "solid_form-crystalline": true,
        "solid_form-amorphous": true,
        "solid_props-strain": true,
        "spatial_res-mm": true,
        "spatial_res-um": true,
        "dimensionality-1d": true,
        "temp-room": true,
        "temp-heated": true,
        "mech_testing-tension": true,
        "mech_testing-compression": true,
        "mech_testing-torsion": true,
        "mech_testing-static": true,
        "force_ranges-n": true,
        "force_ranges-kn": true,
        "atmosphere-ambient": true,
    }, 
    "SF-1-U": {
        "link": "",     // TODO: get this link!!! <==========================================
        "phase-solid": true,
        "solid_form-crystalline": true,
        "solid_form-amorphous": true,
        "dimensionality-1d": true,
        "mech_testing-bending": true,
        "mech_testing-torsion": true,
        "mech_testing-fatigue": true,
        "force_ranges-n": true,
        "force_ranges-kn": true,
        "atmosphere-ambient": true,
    },
    "Rotating Bending Fatigue": {
        "link": "",     // TODO: get this link!!! <==========================================
        "phase-solid": true,
        "solid_form-crystalline": true,
        "solid_form-amorphous": true,
        "dimensionality-1d": true,
        "mech_testing-bending": true,
        "mech_testing-fatigue": true,
        "force_ranges-n": true,
        "force_ranges-kn": true,
        "atmosphere-ambient": true,
    },
    "MTS Landmark 370.10": {
        "link": "",     // TODO: get this link!!! <==========================================
        "phase-solid": true,
        "solid_form-crystalline": true,
        "solid_form-amorphous": true,
        "solid_props-strain": true,
        "spatial_res-mm": true,
        "spatial_res-um": true,
        "dimensionality-1d": true,
        "temp-room": true,
        "temp-heated": true,
        "mech_testing-tension": true,
        "mech_testing-compression": true,
        "mech_testing-bending": true,
        "mech_testing-static": true,
        "mech_testing-fatigue": true,
        "force_ranges-n": true,
        "force_ranges-kn": true,
        "atmosphere-ambient": true,
    },
    "MTS Landmark 370.25": {
        "link": "",     // TODO: get this link!!! <==========================================
        "phase-solid": true,
        "solid_form-crystalline": true,
        "solid_form-amorphous": true,
        "solid_props-strain": true,
        "spatial_res-mm": true,
        "spatial_res-um": true,
        "dimensionality-1d": true,
        "temp-room": true,
        "temp-heated": true,
        "temp-cooled": true,
        "mech_testing-tension": true,
        "mech_testing-compression": true,
        "mech_testing-bending": true,
        "mech_testing-static": true,
        "mech_testing-fatigue": true,
        "force_ranges-kn": true,
        "atmosphere-ambient": true,
    },
    "MTS 312.21 Top Actuator": {
        "link": "",     // TODO: get this link!!! <==========================================
        "phase-solid": true,
        "solid_form-crystalline": true,
        "solid_form-amorphous": true,
        "solid_props-strain": true,
        "spatial_res-mm": true,
        "spatial_res-um": true,
        "dimensionality-1d": true,
        "temp-room": true,
        "mech_testing-tension": true,
        "mech_testing-compression": true,
        "mech_testing-bending": true,
        "mech_testing-static": true,
        "mech_testing-fatigue": true,
        "force_ranges-n": true,
        "force_ranges-kn": true,
        "atmosphere-ambient": true,
    },
    "MTS 312.21 Hydraulic Grips": {
        "link": "",     // TODO: get this link!!! <==========================================
        "phase-solid": true,
        "solid_form-crystalline": true,
        "solid_form-amorphous": true,
        "solid_props-strain": true,
        "spatial_res-mm": true,
        "spatial_res-um": true,
        "dimensionality-1d": true,
        "temp-room": true,
        "mech_testing-tension": true,
        "mech_testing-compression": true,
        "mech_testing-bending": true,
        "mech_testing-static": true,
        "mech_testing-fatigue": true,
        "force_ranges-n": true,
        "force_ranges-kn": true,
        "atmosphere-ambient": true,
    },
    "MTS 312.21 BUT": {
        "link": "",     // TODO: get this link!!! <==========================================
        "phase-solid": true,
        "solid_form-crystalline": true,
        "solid_form-amorphous": true,
        "solid_props-strain": true,
        "spatial_res-mm": true,
        "spatial_res-um": true,
        "dimensionality-1d": true,
        "temp-room": true,
        "mech_testing-tension": true,
        "mech_testing-compression": true,
        "mech_testing-bending": true,
        "mech_testing-static": true,
        "mech_testing-fatigue": true,
        "force_ranges-n": true,
        "force_ranges-kn": true,
        "atmosphere-ambient": true,
    },
    "MTS 312.41": {
        "link": "",     // TODO: get this link!!! <==========================================
        "phase-solid": true,
        "solid_form-crystalline": true,
        "solid_form-amorphous": true,
        "solid_props-strain": true,
        "spatial_res-mm": true,
        "spatial_res-um": true,
        "dimensionality-1d": true,
        "temp-room": true,
        "mech_testing-tension": true,
        "mech_testing-compression": true,
        "mech_testing-bending": true,
        "mech_testing-static": true,
        "mech_testing-fatigue": true,
        "force_ranges-kn": true,
        "force_ranges-gt250kn": true,
        "atmosphere-ambient": true,
    },
    "Environmental XPS": {
        "link": "https://www.mines.edu/shared-facilities/project/rocky-mountain-e-xps/",
        "phase-solid": true,
        "phase-liquid": true,
        "solid_form-crystalline": true,
        "solid_form-amorphous": true,
        "solid_form-thin_film": true,
        "solid_form-powder": true,
        "solid_props-chemical_bonding": true,
        "spatial_res-mm": true,
        "dimensionality-1d": true,
        "dimensionality-2d": true,
        "dimensionality-3d": true,
        "comp_sensitivity-a_few_at_%": true,
        "temp-room": true,
        "temp-heated": true,
        "atmosphere-vacuum": true,
        "atmosphere-other": true,
    },
}