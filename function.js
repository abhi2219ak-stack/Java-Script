function printMessage(number){
    console.log("Hello Brooooo..... !");
}
printMessage(5)

function addNumbers(a,b){
    return (`The sum of ${a} and ${b} is : ${a+b}`)
}
console.log(addNumbers(5,10));

// Challange 1
function totalCupcakes(trayone,traytwo){
    return (`The total number of cupcakes in both trays is : ${trayone + traytwo}`);
}
console.log(totalCupcakes(2,10)); 


function totalChocolatesBars(barsPerBox, numberOfBoxes) {
return barsPerBox * numberOfBoxes;
}

let barsPerBox = Number(prompt("Enter the number of chocolate bars per box:"));
let numberOfBoxes = Number(prompt("Enter the number of boxes:"));

console.log("The total number of chocolate bars is: " +
totalChocolatesBars(barsPerBox, numberOfBoxes));
