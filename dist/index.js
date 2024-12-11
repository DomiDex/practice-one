"use strict";
let myName = 'Dominique';
let age = 20;
let isStudent = true;
let pi = 3.14;
console.log(myName, age, isStudent);
const favoriteColor = ['red', 'blue', 'green'];
console.log(favoriteColor);
let daylyexpenses = [10, 20, 30, 40, 50];
console.log(daylyexpenses);
// let book: {
//   title: string;
//   author: string;
//   pages: number;
// };
// book = {
//   title: 'The Great Gatsby',
//   author: 'F. Scott Fitzgerald',
//   pages: 180,
// };
// console.log(book);
let x = [1, 'hello'];
let y = [2, 'world'];
console.log(x, y);
var Food;
(function (Food) {
    Food[Food["Apple"] = 0] = "Apple";
    Food[Food["Banana"] = 1] = "Banana";
    Food[Food["Orange"] = 2] = "Orange";
    Food[Food["Mango"] = 3] = "Mango";
    Food[Food["Pineapple"] = 4] = "Pineapple";
})(Food || (Food = {}));
let bestFood = Food.Banana;
console.log(bestFood);
console.log(Food);
let city = 'kualalumpur';
let population = 3000000;
let isCapital = true;
let landmark = [
    'Petronas Towers',
    'KLCC',
    'Batu Caves',
    'Menara Kuala Lumpur',
];
console.log(city, population, isCapital, landmark);
let mystery = 'hello';
mystery = 10;
mystery = true;
console.log(mystery);
let product = ['apple', 10, true];
console.log(product);
let myFavoriteBook = {
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    pages: 180,
};
console.log(myFavoriteBook);
let id = [1, 'hello'];
function printId(id) {
    console.log(id);
}
printId(id);
let direction = 'south';
function printDirection(direction) {
    console.log(direction);
}
printDirection(direction);
function greet(name) {
    return `Hello, ${name}!`;
}
console.log(greet('Dominique'));
let username = null;
function displayUsername(username) {
    if (username !== null) {
        console.log(`Welcome back, ${username}!`);
    }
    else {
        console.log('your are not a member');
    }
}
displayUsername('dominique');
const myHome = {
    x: 1.2133,
    y: 1.2133,
};
console.log(myHome);
var HttpStatusCode;
(function (HttpStatusCode) {
    HttpStatusCode[HttpStatusCode["OK"] = 200] = "OK";
    HttpStatusCode[HttpStatusCode["NOT_FOUND"] = 404] = "NOT_FOUND";
    HttpStatusCode[HttpStatusCode["INTERNAL_SERVER_ERROR"] = 500] = "INTERNAL_SERVER_ERROR";
})(HttpStatusCode || (HttpStatusCode = {}));
function handleHttpStatusCode(status) {
    switch (status) {
        case HttpStatusCode.OK:
            console.log('Request successful');
            break;
        case HttpStatusCode.NOT_FOUND:
            console.log('Resource not found');
            break;
        default:
            console.log('Unknown status code');
    }
}
handleHttpStatusCode(HttpStatusCode.NOT_FOUND);
function isEven(num) {
    return num % 2 === 0;
}
console.log(isEven(4));
console.log(isEven(5));
console.log(isEven(6));
function isPositive(num) {
    if (num > 0) {
        return true;
    }
    else {
        return false;
    }
}
console.log(isPositive(1));
console.log(isPositive(0));
console.log(isPositive(-1));
function maxOfThree(num1, num2, num3) {
    if (num1 > num2 && num1 > num3) {
        return num1;
    }
    else if (num2 > num1 && num2 > num3) {
        return num2;
    }
    else {
        return num3;
    }
}
console.log(maxOfThree(1, 2, 3));
console.log(maxOfThree(4, 5, 6));
console.log(maxOfThree(7, 8, 9));
function isVowel(char) {
    return ['a', 'e', 'i', 'o', 'u'].includes(char.toLowerCase());
}
console.log(isVowel('a'));
console.log(isVowel('b'));
console.log(isVowel('e'));
console.log(isVowel('i'));
console.log(isVowel('o'));
console.log(isVowel('u'));
console.log(isVowel('y'));
console.log(isVowel('A'));
console.log(isVowel('E'));
console.log(isVowel('I'));
console.log(isVowel('O'));
console.log(isVowel('U'));
//reverse string
function reverseString(str) {
    return str.split('').reverse().join('');
}
console.log(reverseString('hello'));
console.log(reverseString('world'));
console.log(reverseString('javascript'));
console.log(reverseString('typescript'));
console.log(reverseString('nodejs'));
function calculateFactorial(num) {
    if (num === 0 || num === 1) {
        return 1;
    }
    else if (num < 0) {
        throw new Error('Number must be positive');
    }
    else {
        return num * calculateFactorial(num - 1);
    }
}
console.log(calculateFactorial(5)); //120
console.log(calculateFactorial(0)); //0
console.log(calculateFactorial(-1)); //0
