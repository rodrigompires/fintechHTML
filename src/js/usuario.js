"use strict";

window.addEventListener("load", () => {
  const userNameSpan = document.getElementById("userNameSpan");
  const userNameLocal = localStorage.getItem("userName");
  userNameSpan.innerHTML = userNameLocal.toUpperCase();
});

const cardWidget = document.getElementById('cardWidget');

cardWidget.addEventListener('click', () => {
  window.location.href = `solicitarcartao.html`;
})
