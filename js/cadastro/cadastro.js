window.onload = (event) => {
  var signUpButton = document.querySelector("#signUpButton");
  signUpButton.addEventListener("click", formValidate);

  function formValidate() {
    var user = document.getElementById("user");
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    var passwordConfirmation = document.getElementById("password-confirmation");

    userNameValidate(user);
    emailValidate(email);
    checkPasswordConfirmation(password, passwordConfirmation);
    checkIfPasswordIsValid(password);
    checkPasswordLength(password);
  }

  function userNameValidate(user) {
    const userNameInvalidSpan = document.querySelector(".user-name-error");

    function validateChars() {
      return user.value.match(/^[A-Za-z][A-Za-z0-9_]{0,29}$/);
    }

    if (user.value.indexOf(" ") >= 0 || !validateChars()) {
      user.classList.add("-invalid");
      userNameInvalidSpan.classList.add("-show-span");
      return;
    }

    user.classList.remove("-invalid");
    userNameInvalidSpan.classList.remove("-show-span");
  }

  function emailValidate(email) {
    const emailInvalidSpan = document.querySelector(".email-error");

    if (!email.value.match(/^[a-z0-9.]{1,64}@[a-z0-9.]{1,64}$/i)) {
      email.classList.add("-invalid");
      emailInvalidSpan.classList.add("-show-span");
      return;
    }

    email.classList.remove("-invalid");
    emailInvalidSpan.classList.remove("-show-span");
  }

  function checkPasswordConfirmation(password, passwordConfirmation) {
    const snackBar = document.querySelector(".message-error");

    if (password.value !== passwordConfirmation.value) {
      snackBar.innerHTML = "As senhas não coincidem";
      snackBar.style.display = "flex";
      return;
    }

    snackBar.style.display = "none";
  }

  function checkIfPasswordIsValid(password) {
    const passwordInvalidSpan = document.querySelector(".password-error");
    passwordInvalidSpan.innerHTML = "A senha não pode conter caracteres acentuados ou espaços";

    if (password.value.match(/[a-zA-Z\u00C0-\u017F\s]+/)) {
      passwordInvalidSpan.classList.add("-show-span");
      password.classList.add("-invalid");
      return;
    }

    password.classList.remove("-invalid");
    passwordInvalidSpan.classList.remove("-show-span");
  }

  function checkPasswordLength(password) {
    const passwordInvalidSpan = document.querySelector(".password-error");
    passwordInvalidSpan.innerHTML = "A senha deve conter no mínimo 6 caracteres";

    if (password.value.length < 6) {
      passwordInvalidSpan.classList.add("-show-span");
      password.classList.add("-invalid");
      return;
    }

    password.classList.remove("-invalid");
    passwordInvalidSpan.classList.remove("-show-span");
  }
};