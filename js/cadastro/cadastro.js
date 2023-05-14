window.onload = (event) => {

  function signUpFormSubmit() {
    const userName = document.getElementById("user");
    const userEmail = document.getElementById("email");
    const userPassword = document.getElementById("password");
    const userPasswordConfirmation = document.getElementById("password-confirmation");

    formValidate(userName, userEmail, userPassword, userPasswordConfirmation);

    const form = {
      name: userName.value,
      email: userEmail.value,
      password: userPassword.value,
    }
  }

  const signUpButton = document.querySelector(".sign-up-button");

  signUpButton.addEventListener("click", signUpFormSubmit);

  function formValidate(userName, userEmail, userPassword, userPasswordConfirmation) {
    const toolTip = document.querySelector(".message-error");

    if (userPassword.value !== userPasswordConfirmation.value) {
      [userPassword, userPasswordConfirmation].forEach(element => {
        element.classList.add("-invalid");
      });

      toolTip.innerHTML = "As senhas não coincidem";
      toolTip.style.display = "flex";
      return;
    }

    [userPassword, userPasswordConfirmation].forEach(element => {
      element.classList.remove("-invalid");
    });

    toolTip.style.display = "none";
  }
}