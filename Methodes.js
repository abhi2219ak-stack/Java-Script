
// 1.  ============STRING METHODS ============

console.log("\n1. STRING METHODS");

let text = "JavaScript Programming";

console.log(text.length);
console.log(text.toUpperCase());
console.log(text.toLowerCase());
console.log(text.charAt(0));
console.log(text.indexOf("Script"));
console.log(text.includes("Java"));
console.log(text.startsWith("Java"));
console.log(text.endsWith("Programming"));
console.log(text.slice(0, 10));
console.log(text.substring(0, 10));
console.log(text.replace("JavaScript", "Python"));
console.log(text.repeat(2));


// 2.  ============TRIM METHODS ============

console.log("\n2. TRIM METHODS");

let username = "   Rahul Patel   ";

console.log(username.trim());
console.log(username.trimStart());
console.log(username.trimEnd());


// 3.  ============SPLIT METHOD ============
// Converts a string into an array

console.log("\n3. SPLIT METHOD");


let words = sentence.split(" ");

console.log(words);
console.log(sentence.split(""));
console.log("apple,banana,mango".split(","));


// 4.  ============STRING TO NUMBER ============

console.log("\n4. STRING TO NUMBER");

console.log(Number("123"));
console.log(parseInt("123.99"));
console.log(parseFloat("12.75"));
console.log(+"500");
console.log(Number.isNaN(Number("hello")));


// 5.  ============NUMBER METHODS ============

console.log("\n5. NUMBER METHODS");

let number = 123.45678;

console.log(number.toFixed(2));
console.log(number.toPrecision(5));
console.log(Number.isInteger(10));
console.log(Number.isFinite(100));
console.log(Number.isNaN(NaN));
console.log(Number.parseInt("25px"));
console.log(Number.parseFloat("12.5kg"));

 
// 6. ============ MATH METHODS ============

console.log("\n6. MATH METHODS");

console.log(Math.round(4.6));
console.log(Math.floor(4.9));
console.log(Math.ceil(4.1));
console.log(Math.trunc(4.9));
console.log(Math.abs(-20));
console.log(Math.max(10, 50, 30));
console.log(Math.min(10, 50, 30));
console.log(Math.sqrt(64));
console.log(Math.pow(2, 3));
console.log(Math.sign(-10));
console.log(Math.random());


// 7.  ============RANDOM NUMBER BETWEEN 1 AND 10 ============

console.log("\n7. RANDOM NUMBER");

let randomNumber = Math.floor(Math.random() * 10) + 1;

console.log(randomNumber);


// 8.  ============ARRAY BASIC METHODS ============

console.log("\n8. ARRAY BASIC METHODS");

let fruits = ["Apple", "Banana", "Mango"];

console.log(fruits.length);
console.log(fruits.includes("Apple"));
console.log(fruits.indexOf("Banana"));
console.log(fruits.lastIndexOf("Apple"));
console.log(fruits.at(-1));


// 9.  ============PUSH AND POP ============

console.log("\n9. PUSH AND POP");

let arr1 = [10, 20, 30];

arr1.push(40);
console.log(arr1);

arr1.pop();
console.log(arr1);


// 10 ============. UNSHIFT AND SHIFT ============

console.log("\n10. UNSHIFT AND SHIFT");

let arr2 = [20, 30];

arr2.unshift(10);
console.log(arr2);

arr2.shift();
console.log(arr2);


//  ============11. SLICE METHOD ============
// Does not modify the original array

console.log("\n11. SLICE");

let arr3 = [10, 20, 30, 40, 50];

console.log(arr3.slice(1, 4));
console.log(arr3.slice(2));
console.log(arr3.slice(-2));
console.log(arr3);


// 12.  ============SPLICE METHOD ============
// Modifies the original array

console.log("\n12. SPLICE");

let arr4 = [10, 20, 30, 40, 50];

arr4.splice(1, 2);

console.log(arr4);

let arr5 = [10, 20, 30, 40];

arr5.splice(1, 0, 15);

console.log(arr5);

arr5.splice(2, 1, 25);

console.log(arr5);


// 13.  ============CONCAT METHOD ============

console.log("\n13. CONCAT");

let first = [1, 2, 3];
let second = [4, 5, 6];

let combined = first.concat(second);

console.log(combined);
console.log(first);


// 14. ============ JOIN METHOD ============

console.log("\n14. JOIN");

let names = ["Rahul", "Aman", "Priya"];

console.log(names.join());
console.log(names.join(" "));
console.log(names.join("-"));


// 15. ============ REVERSE METHOD ============
// Modifies the original array

console.log("\n15. REVERSE");

let arr6 = [1, 2, 3, 4, 5];

arr6.reverse();

console.log(arr6);


// 16. ============ SORT METHOD ============

console.log("\n16. SORT");

let numbers1 = [40, 5, 100, 25, 10];

numbers1.sort((a, b) => a - b);

console.log("Ascending:", numbers1);

numbers1.sort((a, b) => b - a);

console.log("Descending:", numbers1);

let names1 = ["Zara", "Aman", "Rahul"];

names1.sort();

console.log(names1);


// 17.  ============FOR EACH METHOD ============

console.log("\n17. FOREACH");

let numbers2 = [10, 20, 30];

numbers2.forEach((value, index) => {
    console.log(index, value);
});


// 18.  ============MAP METHOD ============
// Returns a new array

console.log("\n18. MAP");

let numbers3 = [1, 2, 3, 4, 5];

let doubled = numbers3.map(value => value * 2);

console.log(doubled);
console.log(numbers3);


// 19. ============ FILTER METHOD ============

console.log("\n19. FILTER");

let numbers4 = [1, 2, 3, 4, 5, 6];

let evenNumbers = numbers4.filter(value => value % 2 === 0);

console.log(evenNumbers);


// 20. ============ REDUCE METHOD ============

console.log("\n20. REDUCE");

let numbers5 = [10, 20, 30, 40];

let total = numbers5.reduce((sum, value) => {
    return sum + value;
}, 0);

console.log(total);


// 21.  ============FIND METHOD ============
// Returns the first matching element

console.log("\n21. FIND");

let numbers6 = [5, 12, 18, 25];

console.log(numbers6.find(value => value > 15));


// 22. ============ FINDINDEX METHOD ============

console.log("\n22. FINDINDEX");

console.log(numbers6.findIndex(value => value > 15));


// 23 ============. SOME METHOD ============
// At least one element must match

console.log("\n23. SOME");

console.log([1, 3, 5, 8].some(value => value % 2 === 0));


// 24. ============ EVERY METHOD ============
// Every element must match

console.log("\n24. EVERY");

console.log([2, 4, 6, 8].every(value => value % 2 === 0));


// 25. ============ FLAT METHOD ============

console.log("\n25. FLAT");

let nestedArray = [1, 2, [3, 4, [5, 6]]];

console.log(nestedArray.flat());
console.log(nestedArray.flat(2));
console.log(nestedArray.flat(Infinity));


// 26. ============ FLATMAP METHOD ============

console.log("\n26. FLATMAP");

let numbers7 = [1, 2, 3];

let result1 = numbers7.flatMap(value => [value, value * 2]);

console.log(result1);


// 27.  ============FILL METHOD ============
// Modifies the original array

console.log("\n27. FILL");

let arr7 = [1, 2, 3, 4, 5];

arr7.fill(0, 1, 4);

console.log(arr7);

// 28.  ============COPYWITHIN METHOD ============
// Copies elements within the same array

console.log("\n28. COPYWITHIN");

let arr8 = [1, 2, 3, 4, 5];

arr8.copyWithin(0, 3);

console.log(arr8);


// 29. ============ ARRAY FROM ============

console.log("\n29. ARRAY FROM");

console.log(Array.from("HELLO"));

console.log(Array.from({ length: 5 }, (_, index) => index + 1));


// 30. ============ ARRAY OF ============

console.log("\n30. ARRAY OF");

console.log(Array.of(10, 20, 30));


// 31.  ============ARRAY ISARRAY ============

console.log("\n31. ARRAY ISARRAY");

console.log(Array.isArray([1, 2, 3]));
console.log(Array.isArray("hello"));


// 32. ============ OBJECT METHODS ============

console.log("\n32. OBJECT METHODS");

let student = {
    name: "Rahul",
    age: 20,
    marks: 90
};

console.log(Object.keys(student));
console.log(Object.values(student));
console.log(Object.entries(student));


// 33.  ============OBJECT ASSIGN ============

console.log("\n33. OBJECT ASSIGN");

let obj1 = { a: 1 };
let obj2 = { b: 2 };

let mergedObject = Object.assign({}, obj1, obj2);

console.log(mergedObject);


// 34. ============ OBJECT HASOWN ============

console.log("\n34. OBJECT HASOWN");

console.log(Object.hasOwn(student, "name"));
console.log(Object.hasOwn(student, "salary"));


// 35. ============ OBJECT FREEZE ============

console.log("\n35. OBJECT FREEZE");

let frozenObject = Object.freeze({
    name: "Rahul"
});

frozenObject.name = "Aman";

console.log(frozenObject);


// 36. ============ OBJECT SEAL ============

console.log("\n36. OBJECT SEAL");

let sealedObject = {
    name: "Rahul"
};

Object.seal(sealedObject);

sealedObject.name = "Aman";
sealedObject.age = 20;

console.log(sealedObject);


// 37. ============ OBJECT FROMENTRIES ============

console.log("\n37. OBJECT FROMENTRIES");

let entries = [
    ["name", "Rahul"],
    ["age", 20]
];

console.log(Object.fromEntries(entries));


// 38.  ============OBJECT DESTRUCTURING ============

console.log("\n38. OBJECT DESTRUCTURING");

let person = {
    name: "Aman",
    age: 21
};

let { name, age } = person;

console.log(name, age);


// 39. ============ MAP METHODS ============

console.log("\n39. MAP METHODS");

let myMap = new Map();

myMap.set("name", "Rahul");
myMap.set("age", 20);

console.log(myMap.get("name"));
console.log(myMap.has("age"));
console.log(myMap.size);

myMap.delete("age");

console.log(myMap.size);


// 40. ============ SET METHODS ============

console.log("\n40. SET METHODS");

let mySet = new Set([1, 2, 2, 3, 3, 4]);

console.log(mySet);
console.log(mySet.has(2));
console.log(mySet.size);

mySet.add(5);
mySet.delete(1);

console.log(mySet);


// 41.  ============SET TO ARRAY ============

console.log("\n41. SET TO ARRAY");

let duplicateValues = [1, 2, 2, 3, 3, 4];

let uniqueValues = [...new Set(duplicateValues)];

console.log(uniqueValues);


// 42. ============ STRING METHOD CHAINING ============

console.log("\n42. STRING METHOD CHAINING");

let message = "   hello javascript   ";

let formattedMessage = message.trim().toUpperCase();

console.log(formattedMessage);


// 43. ============ ARRAY METHOD CHAINING ============

console.log("\n43. ARRAY METHOD CHAINING");

let nums = [1, 2, 3, 4, 5, 6];

let chainResult = nums
    .filter(value => value % 2 === 0)
    .map(value => value * value)
    .reduce((sum, value) => sum + value, 0);

console.log(chainResult);


// 44. ============ METHOD CHAINING WITH OBJECTS ============

console.log("\n44. METHOD CHAINING WITH OBJECTS");

let products = [
    { name: "Laptop", price: 50000 },
    { name: "Mouse", price: 500 },
    { name: "Keyboard", price: 1500 },
    { name: "Monitor", price: 12000 }
];

let expensiveTotal = products
    .filter(product => product.price > 1000)
    .map(product => product.price)
    .reduce((sum, price) => sum + price, 0);

console.log("Total:", expensiveTotal);


// 45. ============ STRING REPLACEMENT WITH REGEX ============

console.log("\n45. REGEX REPLACE");

let sentence1 = "JavaScript is great. JavaScript is powerful.";

console.log(sentence1.replace(/JavaScript/g, "JS"));

 
// 46. ============ MATCH METHOD ============

console.log("\n46. MATCH");

let emailText = "Contact: user@example.com";

console.log(emailText.match(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/));


// 47.  ============SEARCH METHOD ============

console.log("\n47. SEARCH");

let text1 = "Learn JavaScript today";

console.log(text1.search(/JavaScript/));


// 48.  ============DATE METHODS ============

console.log("\n48. DATE METHODS");

let currentDate = new Date();

console.log(currentDate);
console.log(currentDate.getFullYear());
console.log(currentDate.getMonth() + 1);
console.log(currentDate.getDate());
console.log(currentDate.getDay());
console.log(currentDate.getHours());
console.log(currentDate.toISOString());


// 49.  ============DATE FORMATTING ============

console.log("\n49. DATE FORMATTING");

let date = new Date();

let formattedDate = `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;

console.log(formattedDate);


// 50.  ============JSON METHODS ============

console.log("\n50. JSON METHODS");

let user = {
    name: "Rahul",
    age: 20
};

let jsonString = JSON.stringify(user);

console.log(jsonString);

let parsedObject = JSON.parse(jsonString);

console.log(parsedObject);


// 51.  ============JSON STRINGIFY WITH FORMATTING ============

console.log("\n51. FORMATTED JSON");

console.log(JSON.stringify(user, null, 2));


// 52.  ============PROMISE METHODS ============

console.log("\n52. PROMISE METHODS");

Promise.all([
    Promise.resolve(10),
    Promise.resolve(20),
    Promise.resolve(30)
]).then(values => {
    console.log("Promise.all:", values);
});


// 53.  ============PROMISE ALLSETTLED ============

console.log("\n53. PROMISE ALLSETTLED");

Promise.allSettled([
    Promise.resolve("Success"),
    Promise.reject("Failed")
]).then(results => {
    console.log(results);
});


// 54.  ============PROMISE RACE ============

console.log("\n54. PROMISE RACE");

Promise.race([
    new Promise(resolve => setTimeout(() => resolve("First"), 100)),
    new Promise(resolve => setTimeout(() => resolve("Second"), 200))
]).then(result => {
    console.log(result);
});


// 55.  ============PROMISE ANY ============

console.log("\n55. PROMISE ANY");

Promise.any([
    Promise.reject("Error"),
    Promise.resolve("Available")
]).then(result => {
    console.log(result);
});


// 56.  ============FUNCTION CALL, APPLY, BIND ============

console.log("\n56. CALL APPLY BIND");

function introduce(city, country) {
    console.log(`${this.name} lives in ${city}, ${country}`);
}

let person1 = {
    name: "Rahul"
};

introduce.call(person1, "Delhi", "India");

introduce.apply(person1, ["Mumbai", "India"]);

let boundFunction = introduce.bind(person1, "Pune", "India");

boundFunction();


// 57.  ============CUSTOM ARRAY METHOD ============

console.log("\n57. CUSTOM METHOD");

function getSum(arr) {
    let sum = 0;

    for (let value of arr) {
        sum += value;
    }

    return sum;
}

console.log(getSum([10, 20, 30]));


// 58.  ============CUSTOM OBJECT METHOD ============

console.log("\n58. CUSTOM OBJECT METHOD");

let calculator = {
    add(a, b) {
        return a + b;
    },

    subtract(a, b) {
        return a - b;
    },

    multiply(a, b) {
        return a * b;
    },

    divide(a, b) {
        if (b === 0) {
            return "Cannot divide by zero";
        }

        return a / b;
    }
};

console.log(calculator.add(10, 5));
console.log(calculator.subtract(10, 5));
console.log(calculator.multiply(10, 5));
console.log(calculator.divide(10, 5));


// 59. ============ OPTIONAL CHAINING ============

console.log("\n59. OPTIONAL CHAINING");

let account = {
    profile: {
        name: "Rahul"
    }
};

console.log(account.profile?.name);
console.log(account.address?.city);


// 60.  ============NULLISH COALESCING ============

console.log("\n60. NULLISH COALESCING");

let score = 0;

console.log(score ?? 100);
console.log(null ?? 100);
console.log(undefined ?? 100);

