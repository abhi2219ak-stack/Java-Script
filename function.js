

// 1. ============================== FUNCTION DECLARATION ==============================

console.log("\n===== 1. FUNCTION DECLARATION =====");

function greet() {
    console.log("Hello Bro!");
}

greet();

function welcome(name) {
    console.log("Welcome " + name);
}

welcome("Abhi");
welcome("Rahul");



// 2. ==============================PARAMETERS AND ARGUMENTS ==============================

console.log("\n===== 2. PARAMETERS AND ARGUMENTS =====");

function add(a, b) {
    console.log(a + b);
}

add(10, 20);
add(5, 15);

// a and b are parameters.
// 10 and 20 are arguments.


// 3. ============================== RETURN STATEMENT ==============================


console.log("\n===== 3. RETURN STATEMENT =====");

function sum(a, b) {
    return a + b;
}

let result = sum(10, 20);

console.log(result);

function multiply(a, b) {
    return a * b;
}

console.log(multiply(5, 4));

// return sends a value back to the caller.
// Code after return in the same function is not executed.



// 4.============================== FUNCTION EXPRESSION==============================

console.log("\n===== 4. FUNCTION EXPRESSION =====");

const subtract = function(a, b) {
    return a - b;
};

console.log(subtract(20, 5));

// A function is assigned to a variable.
// This function expression is not available before
// its initialization.



//    5. ==============================ARROW FUNCTIONS==============================
   

console.log("\n===== 5. ARROW FUNCTIONS =====");

const square = (n) => {
    return n * n;
};

console.log(square(5));

// Shorter syntax
const cube = n => n * n * n;

console.log(cube(3));

// Multiple parameters
const addition = (a, b) => a + b;

console.log(addition(10, 20));

// Returning an object
const createUser = (name, age) => ({
    name: name,
    age: age
});

console.log(createUser("Abhi", 20));



// 6. ==============================DEFAULT PARAMETERS ==============================


console.log("\n===== 6. DEFAULT PARAMETERS =====");

function greetUser(name = "Guest") {
    console.log("Hello " + name);
}

greetUser("Abhi");
greetUser();

// Default values apply when the argument is missing
// or explicitly undefined.

function calculatePrice(price, tax = 10) {
    return price + (price * tax / 100);
}

console.log(calculatePrice(100));
console.log(calculatePrice(100, 20));


// 7. ============================== REST PARAMETERS==============================

console.log("\n===== 7. REST PARAMETERS =====");

function total(...numbers) {
    let sum = 0;

    for (let number of numbers) {
        sum += number;
    }

    return sum;
}

console.log(total(10, 20));
console.log(total(10, 20, 30, 40));

function showDetails(name, ...skills) {
    console.log("Name:", name);
    console.log("Skills:", skills);
}

showDetails("Abhi", "Java", "JavaScript", "HTML", "CSS");

// Rest parameters collect remaining arguments into an array.



// 8. ============================== SPREAD OPERATOR WITH FUNCTION CALLS ==============================

console.log("\n===== 8. SPREAD OPERATOR =====");

function addThree(a, b, c) {
    return a + b + c;
}

let numbers = [10, 20, 30];

console.log(addThree(...numbers));

// Spread expands an iterable into individual arguments.



// 9.============================== FIRST-CLASS FUNCTIONS ==============================

console.log("\n===== 9. FIRST-CLASS FUNCTIONS =====");

function sayHello() {
    return "Hello!";
}

let message = sayHello;

console.log(message());

// Functions can be assigned to variables,
// passed as arguments and returned from other functions.



// 10.============================== CALLBACK FUNCTIONS ==============================

console.log("\n===== 10. CALLBACK FUNCTIONS =====");

function processUser(name, callback) {
    console.log("Processing " + name);

    callback();
}

function finished() {
    console.log("Process completed");
}

processUser("Abhi", finished);

// A callback is a function passed to another function
// so that it can be called there.



// 11. ============================== CALLBACK WITH PARAMETERS ==============================

console.log("\n===== 11. CALLBACK WITH PARAMETERS =====");

function calculate(a, b, callback) {
    return callback(a, b);
}

function addNumbers(a, b) {
    return a + b;
}

function multiplyNumbers(a, b) {
    return a * b;
}

console.log(calculate(10, 5, addNumbers));
console.log(calculate(10, 5, multiplyNumbers));

// Using arrow functions
console.log(calculate(10, 5, (a, b) => a - b));


// 12. ============================== HIGHER-ORDER FUNCTIONS ==============================

console.log("\n===== 12. HIGHER-ORDER FUNCTIONS =====");

function operation(a, b, callback) {
    return callback(a, b);
}

let additionResult = operation(10, 20, (a, b) => a + b);

console.log(additionResult);

// A higher-order function accepts a function
// or returns a function.

function multiplier(factor) {
    return function(number) {
        return number * factor;
    };
}

let double = multiplier(2);
let triple = multiplier(3);

console.log(double(5));
console.log(triple(5));



// 13. ==============================ANONYMOUS FUNCTIONS ==============================

console.log("\n===== 13. ANONYMOUS FUNCTIONS =====");

setTimeout(function() {
    console.log("Anonymous function executed");
}, 100);

// An anonymous function has no name in its expression.
// This example runs after approximately 100 milliseconds.



// 14.============================== NAMED FUNCTION EXPRESSIONS ==============================

console.log("\n===== 14. NAMED FUNCTION EXPRESSIONS =====");

const factorial = function fact(n) {
    if (n <= 1) {
        return 1;
    }

    return n * fact(n - 1);
};

console.log(factorial(5));

// The internal name fact can be used inside this function.
// Outside, the function is called through factorial.


// 15.  ==============================RECURSION==============================

console.log("\n===== 15. RECURSION =====");

function countdown(n) {
    if (n <= 0) {
        console.log("Done!");
        return;
    }

    console.log(n);

    countdown(n - 1);
}

countdown(5);

// Factorial
function factorialNumber(n) {
    if (n < 0) {
        throw new Error("Negative numbers are not supported");
    }

    if (n <= 1) {
        return 1;
    }

    return n * factorialNumber(n - 1);
}

console.log(factorialNumber(5));

// Fibonacci
function fibonacci(n) {
    if (n < 0) {
        throw new Error("n must be non-negative");
    }

    if (n <= 1) {
        return n;
    }

    return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(6));

// Recursion occurs when a function calls itself.
// Recursive solutions need a base case.



// 16. ============================== IIFE — IMMEDIATELY INVOKED FUNCTION EXPRESSION ==============================

console.log("\n===== 16. IIFE =====");

(function() {
    console.log("IIFE executed immediately");
})();

(function(name) {
    console.log("Hello " + name);
})("Abhi");

// An IIFE runs as soon as its expression is evaluated.



// 17.  ============================== FUNCTION SCOPE ==============================

console.log("\n===== 17. FUNCTION SCOPE =====");

function scopeExample() {
    let localMessage = "Inside function";

    console.log(localMessage);
}

scopeExample();

// console.log(localMessage);
// ReferenceError: localMessage is not defined.

// Variables declared inside a function are
// generally local to that function.



// 18.  ============================== LEXICAL SCOPE ==============================

console.log("\n===== 18. LEXICAL SCOPE =====");

function outer() {
    let outerVariable = "I am outside";

    function inner() {
        console.log(outerVariable);
    }

    inner();
}

outer();

// An inner function can access variables
// from its enclosing lexical scope.



// 19. ============================== CLOSURES ==============================

console.log("\n===== 19. CLOSURES =====");

function counterCreator() {
    let count = 0;

    return function() {
        count++;
        return count;
    };
}

let counter = counterCreator();

console.log(counter());
console.log(counter());
console.log(counter());

// The returned function retains access to count
// even after counterCreator() has finished.

// Private counter example
function createCounter() {
    let count = 0;

    return {
        increment() {
            count++;
        },

        getCount() {
            return count;
        }
    };
}

let myCounter = createCounter();

myCounter.increment();
myCounter.increment();

console.log(myCounter.getCount());



// 20. ==============================THIS IN REGULAR FUNCTIONS ==============================

console.log("\n===== 20. THIS KEYWORD =====");

let student = {
    name: "Abhi",

    showName() {
        console.log(this.name);
    }
};

student.showName();

// In this method call, this refers to student.



// 21.============================== ARROW FUNCTION AND THIS==============================


console.log("\n===== 21. ARROW FUNCTION THIS =====");

let user = {
    name: "Abhi",

    regularMethod() {
        const arrow = () => {
            console.log(this.name);
        };

        arrow();
    }
};

user.regularMethod();

// The arrow function inherits this from regularMethod.
// Arrow functions do not create their own this binding.


// 22. ============================== CALL(), APPLY() AND BIND() ==============================

console.log("\n===== 22. CALL APPLY BIND =====");

function introduce(city, country) {
    console.log(
        this.name + " lives in " + city + ", " + country
    );
}

let person = {
    name: "Abhi"
};

// call(): arguments are passed individually.
introduce.call(person, "Prayagraj", "India");

// apply(): arguments are passed as an array.
introduce.apply(person, ["Delhi", "India"]);

// bind(): returns a new function with bound this.
let boundIntroduce = introduce.bind(
    person,
    "Prayagraj",
    "India"
);

boundIntroduce();



// 23. ============================== FUNCTION HOISTING ==============================

console.log("\n===== 23. FUNCTION HOISTING =====");

sayHi();

function sayHi() {
    console.log("Hi Abhi!");
}

// Function declarations can be called before
// their declaration in the same scope.

// Function expressions assigned to let/const
// cannot be called before initialization.



// 24.  ==============================PURE FUNCTIONS ==============================

console.log("\n===== 24. PURE FUNCTIONS =====");

function pureAdd(a, b) {
    return a + b;
}

console.log(pureAdd(10, 20));
console.log(pureAdd(10, 20));

// A pure function returns the same output for
// the same inputs and has no observable side effects.



// 25.============================== IMPURE FUNCTIONS ==============================

console.log("\n===== 25. IMPURE FUNCTIONS =====");

let totalCount = 0;

function increaseCount() {
    totalCount++;
    return totalCount;
}

console.log(increaseCount());
console.log(increaseCount());

// This function changes external state,
// so it is impure.


// 26.  ============================== ARRAY METHODS WITH CALLBACKS ==============================

console.log("\n===== 26. ARRAY CALLBACK METHODS =====");

let nums = [1, 2, 3, 4, 5];

// map()
let squares = nums.map(num => num * num);

console.log(squares);

// filter()
let evenNumbers = nums.filter(num => num % 2 === 0);

console.log(evenNumbers);

// reduce()
let sumOfNumbers = nums.reduce(
    (total, num) => total + num,
    0
);

console.log(sumOfNumbers);

// find()
console.log(nums.find(num => num > 3));

// some()
console.log(nums.some(num => num > 4));

// every()
console.log(nums.every(num => num > 0));

// forEach()
nums.forEach(num => console.log(num));



// 27.  ==============================FUNCTION RETURNING AN OBJECT ==============================

console.log("\n===== 27. FUNCTION RETURNING OBJECT =====");

function createStudent(name, age) {
    return {
        name,
        age,

        introduce() {
            console.log(
                `My name is ${this.name} and I am ${this.age}`
            );
        }
    };
}

let student1 = createStudent("Abhi", 20);

console.log(student1.name);
student1.introduce();



// 28.============================== GENERATOR FUNCTIONS ==============================


console.log("\n===== 28. GENERATOR FUNCTIONS =====");

function* generateNumbers() {
    yield 10;
    yield 20;
    yield 30;
}

let generator = generateNumbers();

console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());

// A generator can pause at yield and resume later.



// 29 . ============================== ASYNC FUNCTIONS AND PROMISES ==============================

console.log("\n===== 29. ASYNC FUNCTIONS =====");

function waitOneSecond() {
    return new Promise(resolve => {
        setTimeout(() => resolve("Completed"), 1000);
    });
}

async function runAsyncExample() {
    console.log("Waiting...");

    let result = await waitOneSecond();

    console.log(result);
}

runAsyncExample();

// An async function always returns a Promise.
// await pauses that async function until the
// awaited Promise settles.



// 30.  ============================== ERROR HANDLING IN FUNCTIONS ==============================

console.log("\n===== 30. ERROR HANDLING =====");

function divide(a, b) {
    if (b === 0) {
        throw new Error("Cannot divide by zero");
    }

    return a / b;
}

try {
    console.log(divide(10, 2));
    console.log(divide(10, 0));
} catch (error) {
    console.log("Error:", error.message);
}



// 31. ============================== FUNCTION VALIDATION ==============================


console.log("\n===== 31. INPUT VALIDATION =====");

function calculateAge(age) {
    if (typeof age !== "number" || !Number.isFinite(age)) {
        throw new TypeError("Age must be a finite number");
    }

    if (age < 0) {
        throw new RangeError("Age cannot be negative");
    }

    return age;
}

console.log(calculateAge(20));



// 32.============================== DEFAULT PARAMETERS WITH DESTRUCTURING ==============================


console.log("\n===== 32. DESTRUCTURED PARAMETERS =====");

function displayUser({ name = "Guest", age = 18 } = {}) {
    console.log("Name:", name);
    console.log("Age:", age);
}

displayUser({ name: "Abhi", age: 20 });
displayUser({ name: "Rahul" });
displayUser();



// 33.============================== FUNCTION COMPOSITION ==============================


console.log("\n===== 33. FUNCTION COMPOSITION =====");

const doubleNumber = n => n * 2;
const addFive = n => n + 5;

function compose(f, g) {
    return function(value) {
        return f(g(value));
    };
}

let doubleAfterAddingFive = compose(
    doubleNumber,
    addFive
);

console.log(doubleAfterAddingFive(10));

// First: 10 + 5 = 15
// Then: 15 * 2 = 30



// 34.============================== RECURSION WITH ARRAYS ==============================


console.log("\n===== 34. RECURSION WITH ARRAYS =====");

function sumArray(arr, index = 0) {
    if (index >= arr.length) {
        return 0;
    }

    return arr[index] + sumArray(arr, index + 1);
}

console.log(sumArray([10, 20, 30, 40]));


// 35. ============================== REST PARAMETERS WITH REDUCE==============================

console.log("\n===== 35. ADVANCED SUM FUNCTION =====");

function sumAll(...numbers) {
    return numbers.reduce(
        (total, number) => total + number,
        0
    );
}

console.log(sumAll(1, 2, 3, 4, 5));
console.log(sumAll(100, 200));



// 36. ==============================PRACTICAL EXAMPLE — SHOPPING CART==============================

console.log("\n===== 36. SHOPPING CART =====");

function createCart() {
    let items = [];

    return {
        addItem(name, price) {
            items.push({ name, price });
        },

        getTotal() {
            return items.reduce(
                (total, item) => total + item.price,
                0
            );
        },

        getItems() {
            return items.map(item => ({ ...item }));
        }
    };
}

let cart = createCart();

cart.addItem("Laptop", 50000);
cart.addItem("Mouse", 500);
cart.addItem("Keyboard", 1500);

console.log(cart.getItems());
console.log("Total:", cart.getTotal());



// 37. ==============================PRACTICAL EXAMPLE — STUDENT RESULT==============================


console.log("\n===== 37. STUDENT RESULT =====");

function createResult(name, marks) {
    function getTotal() {
        return marks.reduce((total, mark) => total + mark, 0);
    }

    function getAverage() {
        return marks.length === 0 ? 0 : getTotal() / marks.length;
    }

    function getStatus() {
        return marks.every(mark => mark >= 33)
            ? "Pass"
            : "Fail";
    }

    return {
        name,
        marks: [...marks],
        getTotal,
        getAverage,
        getStatus
    };
}

let result1 = createResult("Abhi", [85, 90, 80]);

console.log("Name:", result1.name);
console.log("Total:", result1.getTotal());
console.log("Average:", result1.getAverage());
console.log("Status:", result1.getStatus());


// 38.============================== COMMON MISTAKES==============================


console.log("\n===== 38. COMMON MISTAKES =====");

// Mistake 1: Forgetting return
function wrongAdd(a, b) {
    a + b;
}

console.log(wrongAdd(10, 20)); // undefined

// Correct
function correctAdd(a, b) {
    return a + b;
}

console.log(correctAdd(10, 20)); // 30


// Mistake 2: Calling instead of passing a callback
function sayWelcome() {
    console.log("Welcome!");
}

function execute(callback) {
    callback();
}

execute(sayWelcome); // Correct

// execute(sayWelcome()); // Incorrect for this example.
// sayWelcome() executes immediately and returns undefined.


// Mistake 3: Arrow function returning an object
const makePerson = name => ({ name });

console.log(makePerson("Abhi"));


