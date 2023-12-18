let options = document.getElementsByClassName("option");

for(let option of options) {
    console.log(option);

    option.addEventListener('click', () => {
        console.log('clicked!');
    })
}
