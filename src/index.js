import {isValidLengthFirstName, isValidFirstName} from "./validation.js";

import './register.css';

document.addEventListener("DOMContentLoaded", function (event) {
    const inputFirstName = document.getElementById("first-name");
    inputFirstName.addEventListener('input', function () {
        let firstNameValue = this.value;
        if (!isValidFirstName(firstNameValue)) {
        }
        isValidLengthFirstName(firstNameValue);
    })
});