/******/ (() => { // webpackBootstrap
/******/ 	"use strict";

;// ./src/js/checking_acc.js
function controlCard(arr) {
  const controlNum = arr.pop();
  const dubledNumbers = [];
  for (let i = arr.length - 1; i >= 0; i -= 2) {
    dubledNumbers.push(arr[i] * 2);
    arr[i] = 0;
  }
  const result = [];
  for (let i = 0; i < dubledNumbers.length; i++) {
    if (dubledNumbers[i] >= 10) {
      const splited = dubledNumbers[i].toString().split("").map(Number);
      result.push(...splited);
    } else {
      result.push(dubledNumbers[i]);
    }
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      result.push(arr[i]);
    }
  }
  const sum = result.reduce((acc, cur) => acc + cur);
  const remainds = 10 - sum % 10;
  return remainds === controlNum;
}
;// ./src/js/connect.js

const cardInput = document.querySelector(".input-field");
const checkBtn = document.querySelector(".btn");
const successField = document.querySelector(".success");
const failureField = document.querySelector(".failure");
checkBtn.addEventListener("click", e => {
  e.preventDefault();
  const cardNumber = cardInput.value.split("").map(Number);
  if (controlCard(cardNumber)) {
    successField.classList.add("show_answer");
    cardInput.value = "";
    applyBlackWhite();
  } else {
    failureField.classList.add("show_answer");
    cardInput.value = "";
    applyBlackWhite();
  }
});
cardInput.addEventListener("input", e => {
  e.preventDefault();
  hideAnswer();
  const value = cardInput.value.split("").map(Number);
  if (value.length > 1) {
    chooseCard(value);
  } else {
    applyBlackWhite();
  }
});
function chooseCard(value) {
  if (value[0] === 4) {
    showColor(".visa");
  } else if (value[0] === 5) {
    showColor(".mcd");
  } else if (value[0] === 6) {
    showColor(".discover");
  } else if (value[0] === 2) {
    showColor(".pease");
  } else if (value[0] === 3) {
    if (value[1] === 5) {
      showColor(".jcb");
    } else if (value[1] === 6) {
      showColor(".dinners");
    } else {
      showColor(".am_ex");
    }
  } else {
    return;
  }
}
function showColor(selector) {
  const image = document.querySelector(selector);
  image.classList.add("active");
}
function applyBlackWhite() {
  const allImages = document.querySelectorAll(".bank");
  Array.from(allImages).forEach(element => {
    element.classList.remove("active");
  });
}
function hideAnswer() {
  successField.classList.remove("show_answer");
  failureField.classList.remove("show_answer");
}
;// ./src/index.js


/******/ })()
;
//# sourceMappingURL=main.js.map