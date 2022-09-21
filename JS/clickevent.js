const changeButton = document.getElementById("changeButton");
const innerBox = document.getElementById("innerBox");

const colorChange = () => {
    changeButton.style.backgroundColor = "red";
    innerBox.style.backgroundColor = "red";
}

changeButton.addEventListener("click", colorChange);