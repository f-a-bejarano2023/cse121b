/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */

/* Function Definition - Add Numbers */
function Add(number1, number2) {
    //body of function
    return number1 + number2;
}

/* Function Expression - Subtract Numbers */
function Subtract(number1, number2) {
    // Body of function: subtract number2 from number1
    return number1 - number2;
}

/* Arrow Function - Multiply Numbers */
const Multiply = (number1, number2) => {
    // Body of function: multiply number1 by number2
    return number1 * number2;
};

/* Open Function Use - Divide Numbers */
const Divide = (number1, number2) => {
    // Check if the divisor is not zero to avoid division by zero
    if (number2 !== 0) {
        // Body of function: divide number1 by number2
        return number1 / number2;
    } else {
        // Handle division by zero case
        return "Cannot divide by zero";
    }
};

/* Function to handle the addition button click event */
const addNumbers = () => {
    let addNumber1 = Number(document.querySelector('#add1').value);
    let addNumber2 = Number(document.querySelector('#add2').value);
    let sumResult = Add(addNumber1, addNumber2);
    document.querySelector('#sum').innerText = sumResult;
};

/* Function to handle the subtraction button click event */
const subtractNumbers = () => {
    let subtractNumber1 = Number(document.querySelector('#subtract1').value);
    let subtractNumber2 = Number(document.querySelector('#subtract2').value);
    let difference = Subtract(subtractNumber1, subtractNumber2);
    document.querySelector('#subtractResult').innerText = difference;
};

/* Function to handle the multiplication button click event */
const multiplyNumbers = () => {
    let multiplyNumber1 = Number(document.querySelector('#multiply1').value);
    let multiplyNumber2 = Number(document.querySelector('#multiply2').value);
    let product = Multiply(multiplyNumber1, multiplyNumber2);
    document.querySelector('#multiplyResult').innerText = product;
};

/* Function to handle the division button click event */
const divideNumbers = () => {
    let divideNumber1 = Number(document.querySelector('#divide1').value);
    let divideNumber2 = Number(document.querySelector('#divide2').value);
    let quotient = Divide(divideNumber1, divideNumber2);
    document.querySelector('#divideResult').innerText = quotient;
};

/* Event Listener Attachment */
document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('#addNumbers').addEventListener('click', addNumbers);
    document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers);
    document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers);
    document.querySelector('#divideNumbers').addEventListener('click', divideNumbers);
    document.getElementById('getTotalDue').addEventListener('click', function() {
        // Get the numeric value entered by the user in the subtotal field
        const subtotalInput = document.getElementById('subtotal');
        const subtotalValue = parseFloat(subtotalInput.value) || 0; // Convert to a float, default to 0 if not a valid number
    
        // Check if the membership checkbox is checked
        const applyDiscount = document.getElementById('membership').checked;
    
        // Apply a 20% discount if the membership checkbox is checked
        const discount = applyDiscount ? 0.2 : 0;
        const discountedTotal = subtotalValue - (subtotalValue * discount);
    
        // Output the total to the total span in the specified format
        const totalSpan = document.getElementById('total');
        totalSpan.textContent = `$${discountedTotal.toFixed(2)}`;
    });
});

/* ARRAY METHODS - Functional Programming */
let numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

/* Output Odds Only Array */
const oddNumbers = numbersArray.filter(function (number) {
    return number % 2 === 1;
});
const oddsElement = document.getElementById('odds');

/* Output Evens Only Array */
const evenNumbers = numbersArray.filter(function (number) {
    return number % 2 === 0;
});
const evensElement = document.getElementById('evens');
document.querySelector('#evens').innerHTML = evenNumbers.join(', ');

/* Output Sum of Org. Array */
const sum = numbersArray.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue;
}, 0);
const sumOfArrayElement = document.getElementById('sumOfArray');
sumOfArrayElement.innerHTML = sum;

/* Output Multiplied by 2 Array */
const multipliedNumbersArray = numbersArray.map(function (number) {
    return number * 2;
});
const multipliedElement = document.getElementById('multiplied');
multipliedElement.innerHTML = multipliedNumbersArray.join(', ');

/* Output Sum of Multiplied by 2 Array */
const sumOfMultiplied = multipliedNumbersArray.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue;
}, 0);
const sumOfMultipliedElement = document.getElementById('sumOfMultiplied');
sumOfMultipliedElement.innerHTML = sumOfMultiplied;

