let myName: string = 'Dominique';
let age: number = 20;
let isStudent: boolean = true;
let pi: number = 3.14;

console.log(myName, age, isStudent);

const favoriteColor: string[] = ['red', 'blue', 'green'];
console.log(favoriteColor);

let daylyexpenses: number[] = [10, 20, 30, 40, 50];
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

let x: [number, string] = [1, 'hello'];
let y: [number, string] = [2, 'world'];

console.log(x, y);

enum Food {
  Apple,
  Banana,
  Orange,
  Mango,
  Pineapple,
}
let bestFood: Food = Food.Banana;

console.log(bestFood);
console.log(Food);

let city: string = 'kualalumpur';
let population: number = 3000000;
let isCapital: boolean = true;
let landmark: string[] = [
  'Petronas Towers',
  'KLCC',
  'Batu Caves',
  'Menara Kuala Lumpur',
];
console.log(city, population, isCapital, landmark);
let mystery: any = 'hello';
mystery = 10;
mystery = true;
console.log(mystery);

let product: [string, number, boolean] = ['apple', 10, true];
console.log(product);

interface books {
  title: string;
  author: string;
  pages: number;
}

let myFavoriteBook: books = {
  title: 'The Great Gatsby',
  author: 'F. Scott Fitzgerald',
  pages: 180,
};

console.log(myFavoriteBook);

let id: [number, string] = [1, 'hello'];
function printId(id: [number, string]) {
  console.log(id);
}

printId(id);

let direction: 'north' | 'south' | 'east' | 'west' = 'south';

function printDirection(direction: 'north' | 'south' | 'east' | 'west') {
  console.log(direction);
}

printDirection(direction);

function greet(name: string) {
  return `Hello, ${name}!`;
}

console.log(greet('Dominique'));

let username: string | null = null;

function displayUsername(username: string | null) {
  if (username !== null) {
    console.log(`Welcome back, ${username}!`);
  } else {
    console.log('your are not a member');
  }
}

displayUsername('dominique');

type coordinate = { x: number; y: number };
const myHome = {
  x: 1.2133,
  y: 1.2133,
};

console.log(myHome);

enum HttpStatusCode {
  OK = 200,
  NOT_FOUND = 404,
  INTERNAL_SERVER_ERROR = 500,
}
function handleHttpStatusCode(status: HttpStatusCode) {
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

//is even
function isEven(num: number): boolean {
  return num % 2 === 0;
}

console.log(isEven(4));
console.log(isEven(5));
console.log(isEven(6));

//is positive
function isPositive(num: number): boolean {
  if (num > 0) {
    return true;
  } else {
    return false;
  }
}

console.log(isPositive(1));
console.log(isPositive(0));
console.log(isPositive(-1));

//max of three
function maxOfThree(num1: number, num2: number, num3: number): number {
  if (num1 > num2 && num1 > num3) {
    return num1;
  } else if (num2 > num1 && num2 > num3) {
    return num2;
  } else {
    return num3;
  }
}

console.log(maxOfThree(1, 2, 3));
console.log(maxOfThree(4, 5, 6));
console.log(maxOfThree(7, 8, 9));

//is vowel
function isVowel(char: string): boolean {
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
function reverseString(str: string): string {
  return str.split('').reverse().join('');
}

console.log(reverseString('hello'));
console.log(reverseString('world'));
console.log(reverseString('javascript'));
console.log(reverseString('typescript'));
console.log(reverseString('nodejs'));
//calculate factorial
function calculateFactorial(num: number): number {
  if (num === 0 || num === 1) {
    return 1;
  } else if (num < 0) {
    return 0;
  } else {
    return num * calculateFactorial(num - 1);
  }
}

console.log(calculateFactorial(5)); //120
console.log(calculateFactorial(0)); //0
console.log(calculateFactorial(-1)); //0

//CalculateSum
function CalculateSum(numbers: number[]) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}

console.log(CalculateSum([1, 2, 3, 4, 5])); //15
console.log(CalculateSum([10, 20, 30, 40, 50])); //150
console.log(CalculateSum([-1, -2, -3, -4, -5])); //-15

//calculate average
function calculateAverage(numbers: number[]): number {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum / numbers.length;
}

console.log(calculateAverage([1, 2, 3, 4, 5])); //3
console.log(calculateAverage([10, 20, 30, 40, 50])); //30
console.log(calculateAverage([-1, -2, -3, -4, -5])); //-3

//find max
function findMax(numbers: number[]): number {
  return Math.max(...numbers);
}

console.log(findMax([1, 2, 3, 4, 5])); //5
console.log(findMax([10, 20, 30, 40, 50])); //50
console.log(findMax([-1, -2, -3, -4, -5])); //-1
