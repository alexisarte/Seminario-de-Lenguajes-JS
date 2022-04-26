const select = document.querySelector("select");
const action = function () {
    document.querySelector("body").style.backgroundColor = document.querySelector("select").value;
}
select.addEventListener("click", action);
window.onload = action;