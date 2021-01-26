const init = function () {
 const button = document.querySelector(".btn");
 const errorIcon = document.querySelector(".mail__error-icon");
 const labelValid = document.querySelector(".mail__label--valid");
 const form = document.querySelector("form");
 const input = document.querySelector("input");
 const inputField = document.querySelector(".mail__input-field");

 const checkEmail = function (input) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (!re.test(input.value)) {
   errorIcon.classList.remove("hidden");
   labelValid.classList.remove("hidden");
   inputField.style.border = "2px solid hsl(0, 93%, 68%)";
   labelValid.innerHTML = `Please enter a valid email address`;
  } else {
   errorIcon.classList.add("hidden");
   labelValid.classList.add("hidden");
   inputField.style.border = "1px solid hsla(120, 62%, 31%, 0.685)";
  }
 };

 form.addEventListener("submit", function (e) {
  e.preventDefault();
  checkEmail(input);
 });

 button.addEventListener("click", function (e) {
  e.preventDefault();
  checkEmail(input);
 });
};
init();
