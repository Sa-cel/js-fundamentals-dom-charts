// Declare variables of different data types
let myString = "Hello, World!";
let myNumber = 42;
let myBoolean = true;

// Define and call functions for simple operations
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        console.error("Cannot divide by zero");
        return null;
    }
    return a / b;
}

// Log the results of functions to the console for debugging
console.log("Add:", add(5, 3));
console.log("Subtract:", subtract(10, 4));
console.log("Multiply:", multiply(7, 2));
console.log("Divide:", divide(8, 2));

// DOM Manipulation: Handle user interactions
document.getElementById('add').addEventListener('click', () => {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const result = add(num1, num2);
    document.getElementById('result').textContent = `Result: ${result}`;
});

document.getElementById('subtract').addEventListener('click', () => {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const result = subtract(num1, num2);
    document.getElementById('result').textContent = `Result: ${result}`;
});

document.getElementById('multiply').addEventListener('click', () => {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const result = multiply(num1, num2);
    document.getElementById('result').textContent = `Result: ${result}`;
});

document.getElementById('divide').addEventListener('click', () => {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const result = divide(num1, num2);
    document.getElementById('result').textContent = `Result: ${result}`;
});

// Chart.js Integration
const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'bar', // Change to 'line', 'pie', etc. as needed
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: 'Sample Data',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
