let pwd = document.getElementById("pwd");
let confirmPwd = document.getElementById("confirmpwd");
let btn = document.getElementById("createBtn");
let noMatch = document.querySelector(".wrongPwd")

function validator(original, confirmation) {
    if(original === confirmation) {
        pwd.classList.remove("red");
        confirmPwd.classList.remove("red");
        noMatch.textContent = ""
    }
    else {
        pwd.classList.add("red");
        confirmPwd.classList.add("red");
        noMatch.textContent = "*Passwords do not match!";
    };
};

btn.addEventListener("click", function() {validator(pwd.value, confirmPwd.value)});