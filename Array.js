//  creating an array of tea types
// <========= Operation1()===========>
function Operation1() {
    const teas = [
        "Green Tea :",
        "Black Tea :",
        "Oolong Tea:",
        "White Tea:",
        "Herbal Tea:"
    ]
    // printing all teas
    console.log("")
    console.log(`All teas are :=> ${teas.join(", ")}`);
    console.log(`Total number of teas: ${teas.length}`)
    console.log("")

    // inserting a new tea type at the end of the array

    // teas.push("chai Tea :");
    console.log(teas)

    // insertin a specific position of the array

    teas.splice(2, 0, "Masala Tea :")
    // console.log(teas)

    // Adding multiple elements to the array without rmoving any array
    teas.splice(2, 0, "Lemon Tea : ", "Ginger Tea :", "Mint Tea :", "Chamaomile Tea :")
    console.log(teas)
    let i = teas.indexOf("Lemon Tea :")
    let j = teas.indexOf("Ginger Tea :")
    let k = teas.indexOf("Mint Tea :")
    let l = teas.indexOf("Chamaomile Tea :")
    let m = teas.indexOf("Green Tea :")
    let n = teas.indexOf("Black Tea :")
    let o = teas.indexOf("Oolong Tea :")
    let p = teas.indexOf("White Tea :")
    let q = teas.indexOf("Herbal Tea :")
    console.log("")
    console.log("All teas after innerting\nAre such type :=> " + teas.join(""))
    console.log("")
    console.log("Total innerted teas in array are :" + teas.length + "\n")
    console.log("All teas in array after inserting are :=> ")
    console.log(teas)
    console.log("\n")

    function printTeaIndexes() {
        console.log(`the index of Lemon Tea is :${i}`)
        console.log(`the index of Ginger Tea is :${j}`)
        console.log(`the index of Mint Tea is :${k}`)
        console.log(`the index of Chamaomile Tea is :${l}`)
        console.log(`the index of Green Tea is :${m}`)
        console.log(`the index of Black Tea is :${n}`)
        console.log(`the index of Oolong Tea is :${o}`)
        console.log(`the index of White Tea is :${p}`)
        console.log(`the index of Herbal Tea is :${q}`)
    }
    printTeaIndexes()
    console.log("")


    // printing all the tea using for loop also mentioned
    // the index of each tea type
    for (let i = 0; i < teas.length; i++) {
        console.log(`The index of ${teas[i]} is at position ${i}`)
    }
    console.log(" ")
    console.log(`The index of Lemon Tea is: ${teas.indexOf("Lemon Tea")}`);
    console.log(`The index of White Tea is: ${teas.indexOf("White Tea")}`);
}

// <========= Operation2()===========>

//  concatenating two are more arrays using cancat() method
function Operation2() {
    const teas1 = ["Green Tea", "Black Tea", "Oolong Tea"];
    const teas2 = ["White Tea", "Herbal Tea"];
    const teas3 = ["Masala Tea", "Lemon Tea"]
    const teas4 = ["Ginger Tea", "Mint Tea", "Chammomile Tea"]
    const teas5 = ["Chai Tea", "Tulsi Tea", "Kashmiri Kahwa"]
    const allTeas = teas1.concat(teas2, teas3, teas4, teas5);
    console.log(`\nThe total number of teas in all arrays is : ${allTeas.length}\n`);
    console.log("Concatenated array:\n", allTeas);
    console.log(`All teas are :=> ${allTeas.join(", ")}`)
}

//<========= Operation3()===========>

function Operation3() {
    let arr = ["Abhi", 20, true, 5.5, null];
    let arr2 = ["Hello", "World", "JavaScript", "Array"];
    let arr3 = [2.33, 2.6, 11, 90.5]

    let allArrays = arr.concat(arr2, arr3);
    console.log(`\nThe total number of elements in all arrays is :${allArrays.length}\n`)
    console.log(allArrays);
    console.log("\n Also adding a new element to the array \n")
    let numbers = allArrays.concat(10, 20, 30);
    console.log(numbers);
}
Operation3()




//<========= Operation4()===========>  
// Mostly applied array methods are implemented in this function

function Operation4() {
    // 1. push()  pushes a new element to the end of the array
    function pushMethod(arr, value) {
        arr.push(value);
        return arr;
    }

    // 2. pop()  removes the last element from the array and returns it
    function popMethod(arr) {
        return arr.pop();
    }

    // 3. shift()  removes the first element from the array and returns new array
    function shiftMethod(arr) {
        return arr.shift();
    }

    // 4. unshift()  adds a new element to the beginning of the array and returns new array
    function unshiftMethod(arr, value) {
        arr.unshift(value);
        return arr;
    }

    // 5. splice()  adds or removes elements from the array at a specific index and returns new array
    function spliceMethod(arr, index, deleteCount, value) {
        arr.splice(index, deleteCount, value);
        return arr;
    }

    // 6. sort()  sorts the elements of the array in ascending order
    function sortMethod(arr) {
        return arr.sort((a, b) => a - b);
    }

    // 7. reverse()   reverses the order of the elements in the array
    function reverseMethod(arr) {
        return arr.reverse();
    }

    // 8. fill()   fills all the elements of the array with a static value from a start index to an end index
    function fillMethod(arr, value) {
        return arr.fill(value);
    }

    // 9. copyWithin()  copies a sequence of elements within the array to another position in the same array
    function copyWithinMethod(arr, target, start, end) {
        return arr.copyWithin(target, start, end);
    }

    // 10. concat() concatenates two or more arrays and returns a new array
    function concatMethod(arr1, arr2) {
        return arr1.concat(arr2);
    }

    // 11. slice()   returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included)
    // The original array will not be modified
    function sliceMethod(arr, start, end) {
        return arr.slice(start, end);
    }

    // 12. map()   creates a new array populated with the results of calling a provided function on every element in the calling array
    //  just example of map() method is 
    // arr=[1,2,,3,4]
    // return arr.map(num => num*2) op  = [2,4,6,8]

    function mapMethod(arr) {
        return arr.map(num => num * 2);
    }

    // 13. filter()  creates a new array with all elements that pass the test implemented by the provided function
    // just example of filter() method is  arr=[1,2,3,4,5]
    // return arr.filter(num=> num%2===0) o\p=[2,4]
    function filterMethod(arr) {
        return arr.filter(num => num % 2 === 0);
    }

    // 14. flat()   flattoens a nested array into a single array
    // just example of flat() method is arr=[1,2,[3,4,[5,6]]]
    // return arr.flat(Infinity) op=[1,2,3,4,5,6]
    function flatMethod(arr) {
        return arr.flat(Infinity);
    }

    // 15. flatMap()  create a new array with the results of calling a provided function on every element in the calling array and flattening
    // just example of flatMap() method is arr=[1,2,3]
    // return arr.flatMap(num => [num, num * 2]) op=[1,2,2,4,3,6]
    // return arr.flatMap(num => [num, num * 3]) op=[1,3,2,6,3,9]
    function flatMapMethod(arr) {
        return arr.flatMap(num => [num, num * 3]);
    }

    // 16. toSorted()  create a new array with the elements sorted in ascending order
    // without modifying the original array
    // just example of toSorted() method is arr=[40,10,30,20]
    // return arr.toSorted(a,b)=>a-b) output=[10,20,30,40]
    function toSortedMethod(arr) {
        return arr.toSorted((a, b) => a - b);
    }

    // 17. toReversed()  creates a new array with the elements in reverse order without modifying the original array
    // just example of toReversed() method is arr=[10,20,30,40]
    // return  arr.toReversed() output=[40,30,20,10]
    function toReversedMethod(arr) {
        return arr.toReversed();
    }

    // 18. toSpliced()   creates a new array with the elements splice at a specific index without modifying the original array
    // just example of toSpliced() method is arr=[10,20,30,40]
    // return arr.toSpliced(1,1,99) output=[10,99,30,40]
    // return arr.toSpliced(1,0,99) output=[10,99,20,30,40]
    // return arr.toSpliced(1,0,99,50) output=[10,99,50,20,30,40]
    function toSplicedMethod(arr, index, deleteCount, value) {
        return arr.toSpliced(index, deleteCount, value);
    }

    // 19. with() creates a new array with the element at a specific index replaced with a new value without modifying the original array
    // just example of with() method is arr=[10,20,30,40]
    // return arr.with(1,99) output=[10,99,30,40]
    function withMethod(arr, index, value) {
        return arr.with(index, value);
    }

    // 20. reduce()  creates a new array with the elements reduced to a single value by applying a function to each element in the array
    // just example of reduce() method is arr=[1,2,3,4]
    // return arr.reduce((sum,num)=>sum+num,0) output=10
    // return arr.reduce((product,num)=>product*num,1)) output=24
    function reduceMethod(arr) {
        return arr.reduce((sum, num) => sum + num, 0);
    }

    // 21. includes() creates a new array with the elements that includes a specific value
    // just example of includes() method is arr=[1,2,3,4]
    // return arr.includes(2) output=true
    // return arr.includes(5) output=false
    function includesMethod(arr, value) {
        return arr.includes(value);
    }

    // 22. indexOf()  creates a new array with the index of a specific value in the array
    // just example of indexOf() method is arr=[1,2,3,4]
    // return arr.indexOf(2) output=1
    // return arr.indexOf(19999) output=-1
    function indexOfMethod(arr, value) {
        return arr.indexOf(value);
    }

    // 23. find()  thi 
    function findMethod(arr) {
        return arr.find(num => num > 10);
    }

    // 24. findIndex()
    function findIndexMethod(arr) {
        return arr.findIndex(num => num > 10);
    }

    // 25. some()
    function someMethod(arr) {
        return arr.some(num => num > 10);
    }

    // 26. every()
    function everyMethod(arr) {
        return arr.every(num => num > 0);
    }

    // 27. forEach()
    function forEachMethod(arr) {
        arr.forEach(num => console.log(num));
    }

    // 28. at()
    function atMethod(arr, index) {
        return arr.at(index);
    }

    // TEST THE FUNCTIONS

    let numbers = [10, 20, 30, 40];

    console.log("Push:", pushMethod([...numbers], 50) + "\n");
    console.log("Pop:", popMethod([...numbers]) + "\n");
    console.log("Shift:", shiftMethod([...numbers]) + "\n");
    console.log("Unshift:", unshiftMethod([...numbers], 5) + "\n");
    console.log("Splice:", spliceMethod([...numbers], 1, 1, 99) + "\n");
    console.log("Sort:", sortMethod([40, 10, 30, 20]) + "\n");
    console.log("Reverse:", reverseMethod([...numbers]) + "\n");
    console.log("Fill:", fillMethod([...numbers], 0) + "\n");
    console.log("CopyWithin:", copyWithinMethod([...numbers], 0, 2) + "\n");
    console.log("Concat:", concatMethod([1, 2], [3, 4]) + "\n");
    console.log("Slice:", sliceMethod(numbers, 1, 3) + "\n");
    console.log("Map:", mapMethod(numbers) + "\n");
    console.log("Filter:", filterMethod(numbers) + "\n");
    console.log("Flat:", flatMethod([1, [2, [3, 4]]]) + "\n");
    console.log("FlatMap:", flatMapMethod([1, 2, 3]) + "\n");
    console.log("ToSorted:", toSortedMethod([40, 10, 30, 20]) + "\n");
    console.log("ToReversed:", toReversedMethod(numbers) + "\n");
    console.log("ToSpliced:", toSplicedMethod(numbers, 1, 1, 99) + "\n");
    console.log("With:", withMethod(numbers, 1, 99) + "\n");
    console.log("Reduce:", reduceMethod(numbers) + "\n");
    console.log("Includes:", includesMethod(numbers, 20) + "\n");
    console.log("IndexOf:", indexOfMethod(numbers, 30) + "\n");
    console.log("Find:", findMethod(numbers) + "\n");
    console.log("FindIndex:", findIndexMethod(numbers) + "\n");
    console.log("Some:", someMethod(numbers) + "\n");
    console.log("Every:", everyMethod(numbers) + "\n");
    console.log("ForEach:");
    forEachMethod(numbers);
    console.log("At:", atMethod(numbers, -1) + "\n");

}
