const form = document.querySelector("form");
const firstName = document.querySelector(".first-name");
const lastName = document.querySelector(".last-name");
const email = document.querySelector(".email");
const password = document.querySelector(".password");

// if user directly click on submit button without entering any info
function error(element) {
  const parent = element.parentElement;
  const errorMessage = parent.querySelector(".error-message");
  const errorIcon = parent.querySelector(".error-icon");
  element.style.borderColor = "var(--Red)";
  errorMessage.style.opacity = "1";
  errorIcon.style.opacity = "1";
}
form.addEventListener("submit", (e) => {
  if (firstName.value == "") {
      e.preventDefault();
      firstName.placeholder = "";
    error(firstName);
  }
  if (lastName.value == "") {
      e.preventDefault();
      lastName.placeholder = "";
      
    error(lastName);
  }
  if (email.value == "" || email.validity.typeMismatch) {
    e.preventDefault();
    email.placeholder = "email@example.com";
    error(email);
  }
  if (password.value == "" || password.value.length < 5) {
      e.preventDefault();
      password.placeholder = "";
      
    error(password);
  }
});

// input validation for individual inputs
function input(element) {
  const parent = element.parentElement;
  const errorMessage = parent.querySelector(".error-message");
  const errorIcon = parent.querySelector(".error-icon");
  if (element.value.length >= 1) {
    element.style.borderColor = "var(--Green)";
    errorMessage.style.opacity = "0";
    errorIcon.style.opacity = "0";
  } else {
    element.style.borderColor = "var(--Red)";
    element.placeholder = "";
    errorMessage.style.opacity = "1";
    errorIcon.style.opacity = "1";
  }
}
function firstNameInput() {
  input(firstName);
}
function lastNameInput() {
  input(lastName);
}

// password validation
function passwordInput() {
  if (password.value.length >= 6) {
    input(password);
  } else {
    password.style.borderColor = "var(--Red)";
    const parent = password.parentElement;
    const errorMessage = parent.querySelector(".error-message");
    const errorIcon = parent.querySelector(".error-icon");
    errorMessage.style.opacity = "1";
    errorIcon.style.opacity = "1";
  }
}

// email validation
function emailInput() {
  if (email.validity.typeMismatch) {
    email.style.borderColor = "var(--Red)";
    email.placeholder = "email@example.com";
    const parent = email.parentElement;
    const errorMessage = parent.querySelector(".error-message");
    const errorIcon = parent.querySelector(".error-icon");
    errorMessage.style.opacity = "1";
    errorIcon.style.opacity = "1";
  } else if (email.value.length >= 1) {
    email.style.borderColor = "var(--Green)";
    const parent = email.parentElement;
    const errorMessage = parent.querySelector(".error-message");
    const errorIcon = parent.querySelector(".error-icon");
    errorMessage.style.opacity = "0";
    errorIcon.style.opacity = "0";
  }
}
