/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = "Fabio Bejarano"
let currentYear = new Date().getFullYear();
let profilePicture = 'cse121b/w02-task/images/placeholder.png';

/* Step 3 - Element Variables */
const nameElement = document.getElementById('name');
const yearElement = document.querySelector('#year');
const profileImageElement = document.createElement('img');
const foodElement = document.getElementById('food');

/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear.toString();
profileImageElement.setAttribute ('src', profilePicture);
profileImageElement.setAttribute('alt', `Profile image of ${fullName}`);

/* Step 5 - Array */
let myFavoriteFood = ["Pasta", "Pizza", "Stew", "Ice cream"];
foodElement.textContent = myFavoriteFood.join(', ');

let favFood = "Sandwich";
myFavoriteFood.push(favFood);
foodElement.innerHTML += `<br>${myFavoriteFood}`;
myFavoriteFood.shift();
foodElement.innerHTML += `<br>${myFavoriteFood}`;
myFavoriteFood.pop();
foodElement.innerHTML += `<br>${myFavoriteFood}`;



