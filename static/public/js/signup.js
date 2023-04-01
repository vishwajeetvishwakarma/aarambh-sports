// const form = document.getElementById('form');
// const namee = document.getElementById('name');
// const email = document.getElementById('email');
// const phone = document.getElementById('phone');
// const password = document.getElementById('password');
// const cpassword = document.getElementById('cpassword');
let form = document.querySelector("form");
let userName = document.querySelector("#name");
let email = document.querySelector("#email");
let phone = document.querySelector("#phone");
let password = document.querySelector("#password");
let confirmPassword = document.querySelector("#cpassword");

form.addEventListener('sign up', (e) => {
    e.preventDefault();
    checkInputs();
});
function checkInputs() {
    const nameValue = namee.value.trim();
    const emailValue = email.value.trim();
   const phoneValue =  phone.value.trim();
   const passwordValue =  password.value.trim();
   const cpasswordValue =  cpassword.value.trim();

   if(nameValue === ''){
// erroe will be showed
setErrorFor(namee,'Username Not Valid');
   } else{
//success message
setSuccessFor(namee);
   }
}
function setErrorFor(input, imessage) {
    let formControl = input.parentElement;
    formControl.className = "form-control error";
    let small = formControl.querySelector("small");
    small.innerText = imessage;
  }
  
  // If there is no error, than what we want to do with input ?
  function setSuccessFor(input) {
    let formControl = input.parentElement;
    formControl.className = "form-control success";
  }

const signUpButton = document.getElementById("signUp");
const signInButton = document.getElementById("signIn");
const container = document.getElementById("container");

signUpButton.addEventListener("click", () => {
  container.classList.add("right-panel-active");
});

signInButton.addEventListener("click", () => {
  container.classList.remove("right-panel-active");
});