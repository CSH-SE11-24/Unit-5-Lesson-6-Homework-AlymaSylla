console.log("Script running...")
// Task 1: Define a function called `calculateArea` that takes length and width as parameters and returns the area (length * width)

let calculateArea = (length,width) => {
let area = length * width;
return area;
  }

// Call the `calculateArea` function with any two values. Console log the result to check it.
let lengthvalue = 87;
let widthvalue = 2;
let result = calculateArea(lengthvalue,widthvalue)
console.log(" The area is " + result)

// Task 2: Define a function called `checkPassing` that takes in `student` (object) as a parameter and returns whether the `grade` attribute is greater than or equal to 63.
let checkPassing = student => {
  return student.grade >= 63;
}


// Define a `student` object that has name (string), class (string), and grade (number) attributes.
 let student = {name:"alyma", class:"software", grade : 63}



// Call the `checkPassing` function with the `student` object. Console log the result to check it.

let isPassing = checkPassing(student)
console.log(student.name + "has a grade of " + student.grade + "and "+ isPassing)

// the console.log should say is passing wether the grade is above or below a 63 but i dont kno whow to do that yet

// Task 3: Define a function called `printIndex` that takes in `array` and `index` as parameters andconsole logs the element at that index of the array.
// Pink & Blue: Define `printIndex` as an ARROW function

let printIndex = (array,index) => {
  if (index >= 0 && index < Array.length){
    console.log("Element at" + index + array[index]);
  } else {
    console.log("index at " + index + "is at its peak" );
  }
  
}
// Define an array called `favoriteFoods` and put at least 3 elements in
let favoriteFoods = [ "pasta", "lobster", "pizza",]
// Call the `printIndex` function with `favoriteFoods` and any index
let planIndex = 0
printIndex(favoriteFoods,planIndex);


// Extra Credit: Define an arrow function called `calculateTotal` that takes in `array` (array of numbers) as a parameter and returns the total of all the numberes



// Define an array called `numbers` and put at least 3 numbers in


// Call the `calculateTotal` function with `numbers` and any index



