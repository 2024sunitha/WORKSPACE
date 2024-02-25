function 'circlevalue'(){
    console.log = 10
}
areaofcircle = Math.PI*radius*radius
areaofperimeter = 2Math.PI*radius











//Write a function to reverse a number Function `reverseNum()` returns the reversed number
 //for the given argument number value.
 const num1 = 12345;
const num2 = -54321;

const reversedNum1 = reverseNum(num1);
const reversedNum2 = reverseNum(num2);

console.log(`The reversed number of {num1} is {reversedNum1}`); 
// Output: The reversed number of 12345 is 54321
console.log(`The reversed number of {num2} is {reversedNum2}`); 
// Output: The reversed number of -54321 is -12345


//Flatten array of arrays using JavaScript reduce Function `flattenArr()` flattens a 2D 
//array by combining each sub array into 1D array by using JavaScript reduce.

function flattenArr(arr) {
  // Check if input is an array
  if (!Array.isArray(arr)) {
    throw new Error("Input must be an array.");
  }

  // Use reduce to combine sub-arrays into a single array
  return arr.reduce((flattened, subArr) => {
    // Check if sub-array is also an array
    if (!Array.isArray(subArr)) {
      throw new Error("Sub-arrays must be arrays.");
    }
    // Concatenate each sub-array element to the flattened array
    return flattened.concat(subArr);
  }, []);
}

// Example usage
const nestedArr = [[1, 2, 3], ["a", "b"], [4, 5, 6]];
const flattenedArr = flattenArr(nestedArr);

console.log(flattenedArr); // Output: [1, 2, 3, "a", "b", 4, 5, 6]


function add (num1),(num2){
    console.log(num1+num2) 
}
    add(4,5)
console.log(4+5)
