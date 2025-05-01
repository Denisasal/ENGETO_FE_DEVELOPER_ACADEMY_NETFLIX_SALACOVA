// REGISTRATION FORM

// PREPARE DATA FOR INPUT

const form = document.querySelector(".registration-form");
const nameInput = document.querySelector(".firstName");
const lastNameInput = document.querySelector(".lastName");
const emailInput = document.querySelector(".email");
const passwordInput = document.querySelector(".password");
const passwordConfirmInput = document.querySelector(".password_confirm");

// PREPARE DATA FOR ERROR NOTIFICATIONS

const notName = document.querySelector(".notificationName");
const notNameError = document.querySelector(".notificationNameError");
const notLastName = document.querySelector(".notificationLastName");
const notLastNameError = document.querySelector(".notificationLastNameError");
const notEmail = document.querySelector(".notificationEmail");
const notPassword = document.querySelector(".notificationPassword");
const notPasswordConfirm = document.querySelector(
  ".notificationPasswordConfirm"
);

// Create function for input check
// First and last name

function validateName(input, notification, emptyNotification) {
  const value = input.value.trim();

  if (value === "") {
    emptyNotification.classList.add("showNotif");
    notification.classList.remove("showNotif");
    input.classList.add("input-error");
    input.classList.remove("input-success");
    return false;
  } else if (value.charAt(0) !== value.charAt(0).toUpperCase()) {
    emptyNotification.classList.remove("showNotif");
    notification.classList.add("showNotif");
    input.classList.add("input-error");
    input.classList.remove("input-success");
    return false;
  } else {
    emptyNotification.classList.remove("showNotif");
    notification.classList.remove("showNotif");
    input.classList.remove("input-error");
    input.classList.add("input-success");
    return true;
  }
}

// Email
function validateEmail() {
  if (!emailInput.value.includes("@")) {
    notEmail.classList.add("showNotif");
    emailInput.classList.add("input-error");
    emailInput.classList.remove("input-success");
    return false;
  } else {
    notEmail.classList.remove("showNotif");
    emailInput.classList.remove("input-error");
    emailInput.classList.add("input-success");
    return true;
  }
}

// Password
function validatePassword() {
  const hasSpecialChar = /[.*_-]/.test(passwordInput.value);
  const hasDigit = /\d/.test(passwordInput.value);
  const isPasswordValid = hasSpecialChar && hasDigit;

  if (!isPasswordValid) {
    notPassword.classList.add("showNotif");
    passwordInput.classList.add("input-error");
    passwordInput.classList.remove("input-success");
    return false;
  } else {
    notPassword.classList.remove("showNotif");
    passwordInput.classList.remove("input-error");
    passwordInput.classList.add("input-success");
    return true;
  }
}

// Password confirmation
function validatePasswordConfirmation() {
  if (
    passwordInput.value !== passwordConfirmInput.value ||
    passwordConfirmInput.value === ""
  ) {
    notPasswordConfirm.classList.add("showNotif");
    passwordConfirmInput.classList.add("input-error");
    passwordConfirmInput.classList.remove("input-success");
    return false;
  } else {
    notPasswordConfirm.classList.remove("showNotif");
    passwordConfirmInput.classList.remove("input-error");
    passwordConfirmInput.classList.add("input-success");
    return true;
  }
}

// Attach event listeners for real-time validation
nameInput.addEventListener("input", () =>
  validateName(nameInput, notName, notNameError)
);
lastNameInput.addEventListener("input", () =>
  validateName(lastNameInput, notLastName, notLastNameError)
);
emailInput.addEventListener("input", validateEmail);
passwordInput.addEventListener("input", validatePassword);
passwordConfirmInput.addEventListener("input", validatePasswordConfirmation);

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const isNameValid = validateName(nameInput, notName, notNameError);
  const isLastNameValid = validateName(
    lastNameInput,
    notLastName,
    notLastNameError
  );
  const isEmailValid = validateEmail();
  const isPasswordValid = validatePassword();
  const isPasswordConfirmValid = validatePasswordConfirmation();

  if (
    isNameValid &&
    isLastNameValid &&
    isEmailValid &&
    isPasswordValid &&
    isPasswordConfirmValid
  ) {
    alert("Formulář byl úspěšně odeslán!");
    form.reset();
    document.querySelectorAll("input").forEach((input) => {
      input.classList.remove("input-error");
      input.classList.remove("input-success");
    });
  }
});
