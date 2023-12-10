"use strict";

function hiddenIcon(inputId, iconId) {
  const inputElement = document.getElementById(inputId);
  const iconElement = document.getElementById(iconId);
  inputElement.addEventListener("input", (e) => {
    if (e.target.value) {
      iconElement.classList.add("iconHidden");
    } else {
      iconElement.classList.remove("iconHidden");
    }
  });
}

hiddenIcon("name", "iconName");
hiddenIcon("homePassword", "iconHomePassword");

const nameInput = document.getElementById("name");
const passwordInput = document.getElementById("homePassword");
const buttonEnter = document.getElementById("buttonEnter");

function login() {
  window.location.href = `./src/pages/usuario.html`;
}

function register() {
  window.location.href = `./src/pages/cadastro.html`;
}

nameInput.addEventListener("input", updateButtonEnter);
passwordInput.addEventListener("input", updateButtonEnter);

function updateButtonEnter() {
  const isNameInput = nameInput.value;
  const isPasswordInput = passwordInput.value;

  if (isNameInput && isPasswordInput) {
    buttonEnter.disabled = false;
    localStorage.setItem("userName", nameInput.value);
    return;
  }
  buttonEnter.disabled = true;
}
