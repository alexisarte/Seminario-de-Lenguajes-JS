const button = document.querySelector("button");
const action = function () {
    document.querySelector("body").style.backgroundColor = document.querySelector("select").value;
}
button.addEventListener("click", action);