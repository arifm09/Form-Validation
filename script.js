let emailBox = document.getElementById("email");
let passwordBox = document.getElementById("password");
let emailErrorBox = document.querySelector(".email-error");
let passwordErrorBox = document.querySelector(".password-error");
let form = document.querySelector("form");

let allGood = document.querySelector(".all-good")

emailBox.addEventListener("change", validateForm);
passwordBox.addEventListener("change", validateForm);


function validateForm() {
    let email = emailBox.value;
    let password = passwordBox.value;

    // Email validation
    if (email.length < 4 || !email.includes("@") || !email.includes(".")) {
        emailErrorBox.innerText = "Make sure email is more than 3 characters and has @ and a .";
        emailErrorBox.style.color = "red";
    } else {
        emailErrorBox.innerText = "";
    }

    // Password validation
    if (password.length < 9) {
        passwordErrorBox.innerText = "Make sure password is more than 8 characters";
        passwordErrorBox.style.color = "red";
    } else {
        passwordErrorBox.innerText = "";
    }

    // Overall form validation

    if (email.length > 3 && email.includes("@") && email.includes(".") && password.length > 8) {
        allGood.innerText = "All good to go!";
        allGood.style.color = "green";
    } else {
        allGood.innerText = "";
    }
}

emailBox.addEventListener("change", validateForm);
passwordBox.addEventListener("change", validateForm);


form.addEventListener("submit", (e)=>{
    e.preventDefault();

    // Show the confirmation dialog
    if (confirm("Are you sure you want to submit the form?")) {

        alert("Successful signup!");
    }
    else{
        emailBox.value= "";
        passwordBox.value = "";
        allGood.innerText = "";

    }
})