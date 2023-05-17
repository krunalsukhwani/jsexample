//Traditional function for multiplication
function multiplication(num1,num2){
    return num1 * num2;
}

//arrow function
const multiplicationArrow = (num1,num2) => num1 * num2;

console.log(multiplication(3,2));
console.log(multiplicationArrow(10,20));

//declare array with elements
let numbers = [11,22,33,44];

const squares = numbers.map(num => num * num);

console.log(squares);

squares.forEach(numSquare => {
    if(numSquare%2 === 0){
        console.log(numSquare);
    }
});

















