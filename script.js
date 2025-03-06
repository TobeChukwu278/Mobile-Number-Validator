"use strict";

const userInput = document.getElementById("userInput");
const resultOutput = document.getElementById("resultsDiv");
const checkBtn = document.getElementById("checkBtn");
const clearBtn = document.getElementById("clearBtn");

const validateNumber = (input) => {
    const countryCode = '^(\\+234|234|0)';
    const areaCode = '([7-9]{1}[0-1]{1}[0-9]{1})';
    const spaceDashes = '[\\s\\-]?';
    const phoneNumber = '[0-9]{3}[\\s\\-]?[0-9]{4}';
    const phoneRegEx = new RegExp(`${countryCode}${areaCode}${spaceDashes}${phoneNumber}$`);

    if (input === "") {
        alert("Please enter a phone number");
        return;
    }

    const pTag = document.createElement("p");
    pTag.className = "resultText";

    phoneRegEx.test(input) ? (pTag.style.color = "#000000") : (pTag.style.color = "#ff0000");

    pTag.appendChild(document.createTextNode(`${phoneRegEx.test(input) ? 'Valid' : 'Invalid'} Nigerian Phone Number: ${input}`));

    resultOutput.appendChild(pTag);
};

checkBtn.addEventListener('click', () => {
    validateNumber(userInput.value);
    userInput.value = "";
});

userInput.addEventListener('keydown', event => {
    if (event.key === 'Enter') {
        validateNumber(userInput.value);
        userInput.value = "";
    }
});

clearBtn.addEventListener('click', () => {
    resultOutput.textContent = '';
});