let primary_options = document.getElementsByClassName("option primary");

for(let option of primary_options) {
	option.addEventListener('click', () => {
		target_dropdown = null;
		switch (option.dataset.id) {
			case "1":
				target_dropdown = document.getElementById("dropdown1")
				break;
			case "2":
				target_dropdown = document.getElementById("dropdown2");
				break;
			case "3":
				target_dropdown = document.getElementById("dropdown3");
				break;
			default:
				break;
		}

		if (target_dropdown.style.display == 'none' || 
			target_dropdown.style.display == '') {
			target_dropdown.style.display = 'block';
		}
		else {
			target_dropdown.style.display = 'none';
		}
	})
}
