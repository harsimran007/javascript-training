// Variables and Constants
let name = 'Sam';
const age = 30;
var isNinja = true;

console.log(name, age, isNinja);

// Data Types and Type Conversion
let score = 100;
let scoreString = String(score);
let booleanFromNumber = Boolean(0);
console.log(typeof scoreString, typeof booleanFromNumber);

// Functions and Arrow Functions
function greet(userName) {
    return `Hello, ${userName}!`;
}
console.log(greet('Shaun'));

const greetArrow = (userName) => `Hello, ${userName}!`;
console.log(greetArrow('Shaun'));

// Objects and Methods
let person = {
    name: 'Shaun',
    age: 30,
    greet() {
        return `Hello, my name is ${this.name}.`;
    }
};
console.log(person.greet());

// DOM Manipulation
const heading = document.querySelector('h1');
heading.textContent = 'Modern JavaScript Tutorial';
heading.style.color = 'blue';

// Event Listeners
const button = document.getElementById('alertButton');
button.addEventListener('click', () => {
    alert('Button was clicked!');
});

// Fetch API and Promises (Asynchronous JavaScript Example)
fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(data => console.log('Fetched Data:', data))
    .catch(error => console.error('Error:', error));

// Async/Await Syntax Example
async function fetchData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        const data = await response.json();
        console.log('Async Fetched Data:', data);
    } catch (error) {
        console.error('Async Error:', error);
    }
}

fetchData();
