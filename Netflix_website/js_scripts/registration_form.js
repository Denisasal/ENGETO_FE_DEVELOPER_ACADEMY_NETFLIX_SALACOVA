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
  if (input.value.trim() === "") {
    emptyNotification.classList.remove("hidden");
    notification.classList.add("hidden");
    input.classList.add("input-error");
    input.classList.remove("input-success");
    return false;
  } else if (input.value.charAt(0) !== input.value.charAt(0).toUpperCase()) {
    emptyNotification.classList.add("hidden");
    notification.classList.remove("hidden");
    input.classList.add("input-error");
    input.classList.remove("input-success");
    return false;
  } else {
    emptyNotification.classList.add("hidden");
    notification.classList.add("hidden");
    input.classList.remove("input-error");
    input.classList.add("input-success");
    return true;
  }
}

// Email
function validateEmail() {
  if (!emailInput.value.includes("@")) {
    notEmail.classList.remove("hidden");
    emailInput.classList.add("input-error");
    emailInput.classList.remove("input-success");
    return false;
  } else {
    notEmail.classList.add("hidden");
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
    notPassword.classList.remove("hidden");
    passwordInput.classList.add("input-error");
    passwordInput.classList.remove("input-success");
    return false;
  } else {
    notPassword.classList.add("hidden");
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
    notPasswordConfirm.classList.remove("hidden");
    passwordConfirmInput.classList.add("input-error");
    passwordConfirmInput.classList.remove("input-success");
    return false;
  } else {
    notPasswordConfirm.classList.add("hidden");
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
      input.classList.remove("input-error", "input-success");
    });
    document.querySelectorAll("p").forEach((p) => p.classList.add("hidden"));
  }
});
