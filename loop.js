
    // 1.========= BASIC FOR LOOP=========

    console.log("\n1. BASIC FOR LOOP");

    for (let i = 1; i <= 5; i++) {
        console.log(i);
    }


    // 2. =========PRINT EVEN NUMBERS=========

    console.log("\n2. EVEN NUMBERS");

    for (let i = 2; i <= 10; i += 2) {
        console.log(i);
    }


    // 3.========= PRINT ODD NUMBERS=========

    console.log("\n3. ODD NUMBERS");

    for (let i = 1; i <= 10; i += 2) {
        console.log(i);
    }


    // 4.========= REVERSE FOR LOOP=========

    console.log("\n4. REVERSE LOOP");

    for (let i = 10; i >= 1; i--) {
        console.log(i);
    }


    // 5. =========SUM OF FIRST N NUMBERS=========

    console.log("\n5. SUM OF FIRST N NUMBERS");

    let n = 10;
    let sum = 0;

    for (let i = 1; i <= n; i++) {
        sum += i;
    }

    console.log("Sum:", sum);


    // 6. =========MULTIPLICATION TABLE=========

    console.log("\n6. MULTIPLICATION TABLE");

    let num = 5;

    for (let i = 1; i <= 10; i++) {
        console.log(`${num} x ${i} = ${num * i}`);
    }

    // 7.========= WHILE LOOP=========

    console.log("\n7. WHILE LOOP");

    let i = 1;

    while (i <= 5) {
        console.log(i);
        i++;
    }


    // 8.========= REVERSE WHILE LOOP=========

    console.log("\n8. REVERSE WHILE LOOP");

    let j = 5;

    while (j >= 1) {
        console.log(j);
        j--;
    }


    // 9.========= DO-WHILE LOOP=========


    console.log("\n9. DO-WHILE LOOP");

    let k = 1;

    do {
        console.log(k);
        k++;
    } while (k <= 5);


    // 10.========= DO-WHILE EXECUTES AT LEAST ONCE=========

    console.log("\n10. DO-WHILE SPECIAL CASE");

    let value = 10;

    do {
        console.log("Executed once!");
    } while (value < 5);


    // 11. =========FOR...OF LOOP=========

    console.log("\n11. FOR...OF LOOP");

    let numbers = [10, 20, 30, 40, 50];

    for (let number of numbers) {
        console.log(number);
    }

    // 12.========= FOR...IN LOOP=========

    console.log("\n12. FOR...IN LOOP");

    let student = {
        name: "Rahul",
        age: 20,
        course: "BTech"
    };

    for (let key in student) {
        console.log(key, ":", student[key]);
    }


    // 13. =========ARRAY USING NORMAL FOR LOOP=========

    console.log("\n13. ARRAY USING FOR LOOP");

    let arr = [10, 20, 30, 40, 50];

    for (let i = 0; i < arr.length; i++) {
        console.log("Index:", i, "Value:", arr[i]);
    }


    // 14. =========SUM OF ARRAY ELEMENTS=========

    console.log("\n14. ARRAY SUM");

    let nums = [1, 2, 3, 4, 5];
    let total = 0;

    for (let i = 0; i < nums.length; i++) {
        total += nums[i];
    }

    console.log("Total:", total);


    // 15========= FIND MAXIMUM ELEMENT=========

    console.log("\n15. MAXIMUM ELEMENT");

    let arr2 = [10, 50, 20, 90, 30];
    let max = arr2[0];

    for (let i = 1; i < arr2.length; i++) {
        if (arr2[i] > max) {
            max = arr2[i];
        }
    }

    console.log("Maximum:", max);


    // 16.========= FIND MINIMUM ELEMENT=========

    console.log("\n16. MINIMUM ELEMENT");

    let arr3 = [10, 50, 20, 5, 30];
    let min = arr3[0];

    for (let i = 1; i < arr3.length; i++) {
        if (arr3[i] < min) {
            min = arr3[i];
        }
    }

    console.log("Minimum:", min);


    // 17. =========BREAK STATEMENT=========

    console.log("\n17. BREAK");

    for (let i = 1; i <= 10; i++) {
        if (i === 5) {
            break;
        }

        console.log(i);
    }


    // 18. =========CONTINUE STATEMENT=========
    console.log("\n18. CONTINUE");

    for (let i = 1; i <= 10; i++) {
        if (i === 5) {
            continue;
        }

        console.log(i);
    }


    // 19. =========NESTED LOOPS=========

    console.log("\n19. NESTED LOOPS");

    for (let i = 1; i <= 3; i++) {
        for (let j = 1; j <= 3; j++) {
            console.log(`i = ${i}, j = ${j}`);
        }
    }


    // 20.========= STAR PATTERN=========

    console.log("\n20. STAR PATTERN");

    for (let i = 1; i <= 5; i++) {
        let pattern = "";

        for (let j = 1; j <= i; j++) {
            pattern += "* ";
        }

        console.log(pattern);
    }


    // 21. =========INVERTED STAR PATTERN=========

    console.log("\n21. INVERTED STAR PATTERN");

    for (let i = 5; i >= 1; i--) {
        let pattern = "";

        for (let j = 1; j <= i; j++) {
            pattern += "* ";
        }

        console.log(pattern);
    }


    // 22. =========MULTIPLICATION TABLES USING NESTED LOOPS=========

    console.log("\n22. MULTIPLE TABLES");

    for (let i = 1; i <= 3; i++) {
        console.log(`\nTable of ${i}`);

        for (let j = 1; j <= 10; j++) {
            console.log(`${i} x ${j} = ${i * j}`);
        }
    }


    // 23.========= LOOP THROUGH A STRING=========

    console.log("\n23. STRING LOOP");

    let text = "JAVASCRIPT";

    for (let i = 0; i < text.length; i++) {
        console.log(text[i]);
    }


    // 24. =========FOR...OF WITH STRINGS=========

    console.log("\n24. FOR...OF STRING");

    for (let char of "HELLO") {
        console.log(char);
    }


    // 25.========= COUNT VOWELS=========

    console.log("\n25. COUNT VOWELS");

    let word = "javascript";
    let vowelCount = 0;

    for (let char of word.toLowerCase()) {
        if ("aeiou".includes(char)) {
            vowelCount++;
        }
    }

    console.log("Vowels:", vowelCount);


    // 26. =========REVERSE A STRING USING A LOOP=========


    console.log("\n26. REVERSE STRING");

    let original = "hello";
    let reversed = "";

    for (let i = original.length - 1; i >= 0; i--) {
        reversed += original[i];
    }

    console.log(reversed);


    // 27.========= LOOP THROUGH A 2D ARRAY=========


    console.log("\n27. TWO-DIMENSIONAL ARRAY");

    let matrix = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ];

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            console.log(matrix[i][j]);
        }
    }


    // 28. ==============FOR...OF WITH A 2D ARRAY==============




    console.log("\n28. FOR...OF WITH MATRIX");

    for (let row of matrix) {
        for (let element of row) {
            console.log(element);
        }
    }


    // 29. ===============LABELLED BREAK===============


    console.log("\n29. LABELLED BREAK");

    outerLoop:
    for (let i = 1; i <= 3; i++) {
        for (let j = 1; j <= 3; j++) {
            if (i === 2 && j === 2) {
                break outerLoop;
            }

            console.log(i, j);
        }
    }


    // 30. ===============LABELLED CONTINUE =================

    console.log("\n30. LABELLED CONTINUE");

    outerContinue:
    for (let i = 1; i <= 3; i++) {
        for (let j = 1; j <= 3; j++) {
            if (j === 2) {
                continue outerContinue;
            }

            console.log(i, j);
        }
    }


    // 31. ==========ARRAY FOREACH()==========

    console.log("\n31. FOREACH");

    let values = [10, 20, 30];

    values.forEach((value, index) => {
        console.log(index, value);
    });


    // 32. ===================ARRAY MAP()===================

    console.log("\n32. MAP");

    let doubled = values.map(value => value * 2);

    console.log(doubled);


    // 33.============ ARRAY FILTER()============

    console.log("\n33. FILTER");

    let evenNumbers = [1, 2, 3, 4, 5, 6].filter(
        value => value % 2 === 0
    );

    console.log(evenNumbers);


    // 34. ==========ARRAY REDUCE()==============

    console.log("\n34. REDUCE");

    let reduceSum = [1, 2, 3, 4, 5].reduce(
        (accumulator, current) => accumulator + current,
        0
    );

    console.log("Sum:", reduceSum);



    // 35. =============ARRAY SOME()=============

    console.log("\n35. SOME");

    let hasEven = [1, 3, 5, 8].some(
        value => value % 2 === 0
    );

    console.log(hasEven);



    // 36.============= ARRAY EVERY()=============

    console.log("\n36. EVERY");

    let allPositive = [1, 2, 3, 4].every(
        value => value > 0
    );

    console.log(allPositive);



    // 37.============= LOOP THROUGH MAP=============

    console.log("\n37. MAP COLLECTION");

    let userMap = new Map([
        ["name", "Rahul"],
        ["age", 20],
        ["course", "BTech"]
    ]);

    for (let [key, value] of userMap) {
        console.log(key, value);
    }



    // 38. =============LOOP THROUGH SET=============

    console.log("\n38. SET COLLECTION");

    let uniqueNumbers = new Set([1, 2, 2, 3, 3, 4]);

    for (let value of uniqueNumbers) {
        console.log(value);
    }



    // 39.============= FIZZBUZZ=============


    console.log("\n39. FIZZBUZZ");

    for (let i = 1; i <= 20; i++) {
        if (i % 15 === 0) {
            console.log("FizzBuzz");
        } else if (i % 3 === 0) {
            console.log("Fizz");
        } else if (i % 5 === 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }



    // 40. =============FACTORIAL USING A LOOP=============

    console.log("\n40. FACTORIAL");

    let factorialNumber = 5;
    let factorial = 1;

    for (let i = 1; i <= factorialNumber; i++) {
        factorial *= i;
    }

    console.log("Factorial:", factorial);


    // ============================================
    // 41. PRIME NUMBER CHECK


    console.log("\n41. PRIME NUMBER");

    let primeNumber = 17;
    let isPrime = primeNumber >= 2;

    for (let i = 2; i * i <= primeNumber; i++) {
        if (primeNumber % i === 0) {
            isPrime = false;
            break;
        }
    }

    console.log(isPrime ? "Prime" : "Not prime");



    // 42.============= REMOVE DUPLICATES USING A SET=============


    console.log("\n42. REMOVE DUPLICATES");

    let duplicateArray = [1, 2, 2, 3, 4, 4, 5];
    let uniqueArray = [];

    let seen = new Set();

    for (let value of duplicateArray) {
        if (!seen.has(value)) {
            seen.add(value);
            uniqueArray.push(value);
        }
    }

    console.log(uniqueArray);



    // 43. =============FREQUENCY COUNT USING A MAP=============

    console.log("\n43. FREQUENCY COUNT");

    let frequencyArray = [1, 2, 2, 3, 3, 3, 4];
    let frequency = new Map();

    for (let value of frequencyArray) {
        frequency.set(
            value,
            (frequency.get(value) || 0) + 1
        );
    }

    console.log(frequency);



    // 44.============= LOOP WITH DESTRUCTURING=============

    console.log("\n44. DESTRUCTURING");

    let students = [
        { name: "Aman", marks: 85 },
        { name: "Riya", marks: 92 },
        { name: "Karan", marks: 78 }
    ];

    for (let { name, marks } of students) {
        console.log(`${name}: ${marks}`);
    }



    // 45. =============ITERATE THROUGH OBJECT ENTRIES=============

    console.log("\n45. OBJECT ENTRIES");

    let employee = {
        name: "Aman",
        salary: 30000,
        department: "IT"
    };

    for (let [key, value] of Object.entries(employee)) {
        console.log(`${key}: ${value}`);
    }



    // 46. GENERATOR WITH A FOR...OF LOOP

    console.log("\n46. GENERATOR");

    function* generateNumbers() {
        yield 10;
        yield 20;
        yield 30;
    }

    for (let number of generateNumbers()) {
        console.log(number);
    }



    // 47. =============ITERATE OVER A CUSTOM ITERABLE=============

    console.log("\n47. CUSTOM ITERABLE");

    let customIterable = {
        start: 1,
        end: 3,

        *[Symbol.iterator]() {
            for (let i = this.start; i <= this.end; i++) {
                yield i;
            }
        }
    };

    for (let number of customIterable) {
        console.log(number);
    }



    // 48. =============NESTED LOOP: MULTIPLY TWO MATRICES=============

    console.log("\n48. MATRIX MULTIPLICATION");

    let A = [
        [1, 2],
        [3, 4]
    ];

    let B = [
        [5, 6],
        [7, 8]
    ];

    let result = [
        [0, 0],
        [0, 0]
    ];

    for (let i = 0; i < A.length; i++) {
        for (let j = 0; j < B[0].length; j++) {
            for (let k = 0; k < B.length; k++) {
                result[i][j] += A[i][k] * B[k][j];
            }
        }
    }

    console.log(result);


    // 49.============= LOOP PERFORMANCE: EARLY EXIT=============


    console.log("\n49. SEARCH WITH EARLY EXIT");

    let searchArray = [10, 20, 30, 40, 50];
    let target = 30;
    let foundIndex = -1;

    for (let i = 0; i < searchArray.length; i++) {
        if (searchArray[i] === target) {
            foundIndex = i;
            break;
        }
    }

    console.log("Found at index:", foundIndex);



    // 50.============= INFINITE LOOP EXAMPLE — DO NOT RUN=============

    while (true) {
        console.log("This runs forever!");
    }

