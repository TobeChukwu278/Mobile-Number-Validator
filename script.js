"use strict";

const userInput = document.getElementById("userInput");
const resultOutput = document.getElementById("resultsDiv");
const checkBtn = document.getElementByClass("checkBtn");
const clearBtn = document.getElementByClass("clearBtn");


// karate implies start of a string and brackets for grouping, slashes for reg expressions
const validateNumber = (input) => {
    const countryCode = '^(\\+234|234|0)';
    const areaCode = '([7-9]{1}[0-1]{1}[0-9]{1})';
    const spaceDashes = '[\\s\\-]?';
    const phoneNumber = '[0-9]{3}[\\s\\-]?[0-9][4]'
    const phoneRegEx = new RegExp(`${countryCode}${areaCode}${spaceDashes}${phoneNumber}`);

    if (userInput == "") {
        alert("Please enter a phone number");
        return;
    }

    const pTag = document.createElement("p");
    pTag.className = "resultText";

    phoneRegEx.test(input) ? (pTag.style.color = "#000000") : (pTag.style.color = "#ffffff");

    pTag.appendChild(document.createTextNode(`${phoneRegEx.test(input) ? 'valid' : 'invalid'} Nigerian Phone Number: ${input}`));

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

// regEx uses \\s\\ for spaces \\i\\ for case sensitive, \\n\\ new line, \\g\\ global