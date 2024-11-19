//R-ALAB 308.4.1: Working with Data Collections

//ALAB 308.3.1: Practical Loops - Part 1: Fizz Buzz
//Loop through all numbers from 1 to 100.
for (let Num = 1; Num <= 100; Num++) {
  // Runs 5 times, with values of step 0 through 4.
  console.log(Num);
}
//If a number is divisible by 3, log “Fizz.”
for (let i = 3; i <= 30; i++) {
  if (i % 3 === 0) {
    console.log(`${i} is divisible by 3 : FIZZ`);
  }
}
// when run in console the output will be as follws:
//3 is divisible by 3 : FIZZ
//6 is divisible by 3 : FIZZ
//9 is divisible by 3 : FIZZ
//12 is divisible by 3 : FIZZ

//if a number is divisible by 3, log "Fizz." using a function
function Div(i) {
  if (i % 3 === 0) {
    console.log("FIZZ");
  }
}
Div(5); // output: undefind (no output)
Div(6); //output: FIZZ

//If a number is divisible by 5, log “Buzz.”
for (let num = 5; num <= 20; num++) {
  if (num % 5 === 0) {
    console.log(`${num} is divisble by 5 : BUZZ`);
  }
}
// when run in console the output will be as follws:
//5 is divisible by 5 : BUZZ
//10 is divisible by 5 : BUZZ
//15 is divisible by 5 : BUZZ
//20 is divisible by 5 : BUZZ

//if a number is divisible by 5, log "BUZZ." using a function
function divide(a) {
  if (a % 5 === 0) {
    console.log("BUZZ");
  }
}
divide(6); // output: undefind (no output)
divide(5); //output: BUZZ

//If a number is divisible by both 3 and 5, log “FIZZ BUZZ”

for (let num = 0; num <= 30; num++) {
  if (num % 3 === 0 && num % 5 === 0) {
    console.log(`${num} is divisble by both 3 and 5 : FIZZ BUZZ`);
  }
}

// when run in console the output will be as follws:
//0 is divisible by both 3 and 5 : FIZZ BUZZ
//15 is divisible by both 3 and 5 : FIZZ BUZZ
//30 is divisible by both 3 and 5 : FIZZ BUZZ
//45 is divisible by both 3 and 5 : FIZZ BUZZ

//if a number is divisible by both 3 and 5, log "FIZZ BUZZ." using a function
function num(a) {
  if (a % 3 === 0 && a % 5 === 0) {
    console.log("FIZZ BUZZ");
  }
}

num(5); // output: undefind (no output)
num(15); //output: FIZZ BUZZ

//If a number is not divisible by either 3 or 5, log the number
for (let num = 0; num <= 10; num++) {
  if (num % 3 !== 0 && num % 5 !== 0) {
    console.log(num);
  }
}
// when run in console the output will be as follws:
//1
//2
//4
//7
//8
//If a number is not divisible by either 3 or 5, log the number using function
function num(a) {
  if (a % 3 !== 0 && a % 5 !== 0) {
    console.log("FIZZ BUZZ");
  }
}

num(15); //output: undefind (no output)
num(7); //output: 7

//ALAB 308.3.1: Practical Loops- Part 2: Prime Time

function isPrime(num) {
  if (num <= 1) return false; // Numbers less than or equal to 1 are not prime
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false; // If num is divisible by any number other than 1 and itself
    }
  }
  return true; // If no divisors were found, num is a prime number
}
function findNextPrime(n) {
  let num = n + 1; // looking a prime number starting the next number

  while (true) {
    // Infinite loop to keep searching
    if (isPrime(num)) {
      console.log(`${num}`);
      break; // It exists the loop as soon as it finds the next prime number
    }
    num++; // Increment the number to check the next one
  }
}

findNextPrime(4); // Output: 5
findNextPrime(5); // Output: 7
findNextPrime(9); // Output: 11

//ALAB 308.3.1: Practical Loops - Part 3: Feeling Loopy

//Example 1
let comaString =
  "ID,Name,Occupation,Age\r\n42,Bruce,Knight,41\r\n57,Bob,Fry Cook,19\r\n63,Blaine,Quiz Master,58\r\n98,Bill,Doctor’s Assistant,26";
console.log("String:", comaString);

let array = comaString.split(",");

//output
/*ID,Name,Occupation,Age
42,Bruce,Knight,41
57,Bob,Fry Cook,19
63,Blaine,Quiz Master,58
98,Bill,Doctor’s Assistant,26*/

//Example 2
let comaString =
  "Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232";
console.log("String:", comaString);
let array = comaString.split(",");

//Output
/*
Index,Mass (kg),Spring 1 (m),Spring 2 (m)
1,0.00,0.050,0.050
2,0.49,0.066,0.066
3,0.98,0.087,0.080
4,1.47,0.116,0.108
5,1.96,0.142,0.138
6,2.45,0.166,0.158
7,2.94,0.193,0.174
8,3.43,0.204,0.192
9,3.92,0.226,0.205
10,4.41,0.238,0.232*/

//R-ALAB 308.4.1: Working with Data Collections - Part 2: Expanding Functionality

function demoArray(demoData, delimiter = ",") {
  // Split CSV into rows
  const rows = demoData.split("\n").map((row) => row.trim());
  if (rows.length === 0) {
    console.error("Empty CSV data.");
    return [];
  }

  // Process each row into a two-dimensional array
  const displayArray = rows.map((row) => row.split(delimiter));

  console.log("Two-dimensional array representation:");
  console.log(displayArray);

  // store the array
  return displayArray;
}

// CSV data provided
const demoData = `ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26`;

// Call the function and store the results in a variable
const csvArray = demoArray(demoData);

// Accessing the csv data
console.log("Headers:", csvArray[0]); // Access the header row
console.log("First row data:", csvArray[1]); // Access the first row of data

// output
/*
    ['ID', 'Name', 'Occupation', 'Age']
    ['42', 'Bruce', 'Knight', '41']
    ['57', 'Bob', 'Fry Cook', '19']
    ['63', 'Blaine', 'Quiz Master', '58']
    ['98', 'Bill', 'Doctor’s Assistant', '26']*/

//Part 3: Transforming Data

function demoArray(demoData, delimiter = ",") {
  // Split CSV into rows
  const rows = demoData.split("\n").map((row) => row.trim());
  if (rows.length === 0) {
    console.error("Empty CSV data.");
    return [];
  }

  // Extract and process headers to lowercase
  const headers = rows[0]
    .split(delimiter)
    .map((header) => header.toLowerCase());

  // Process each row into an object with keys from headers
  const displayArray = rows.slice(1).map((row) => {
    const values = row.split(delimiter).map((cell) => cell.toLowerCase());
    const rowObject = {};
    headers.forEach((header, index) => {
      rowObject[header] = values[index] || null; // Assign each value to its corresponding header
    });
    return rowObject;
  });

  console.log("Array of objects with lowercase headers and values:");
  console.log(displayArray);

  return displayArray;
}

// CSV data provided
const demoData = `ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26`;

// Call the function and store the results in a variable
const csvObjects = demoArray(demoData);

// Accessing the csv data
console.log("Processed CSV Data as Objects:", csvObjects); // Display all processed data
console.log("First Row Data:", csvObjects[0]); // Access the first row as an object

// output

/*
    {id: '42', name: 'bruce', occupation: 'knight', age: '41'}
    {id: '57', name: 'bob', occupation: 'fry cook', age: '19'}
    {id: '63', name: 'blaine', occupation: 'quiz master', age: '58'}
    {id: '98', name: 'bill', occupation: 'doctor’s assistant', age: '26'}
    */
//Part 4: Sorting and Manipulating Data
function demoArray(demoData, delimiter = ",") {
  // Split CSV into rows
  const rows = demoData.split("\n").map((row) => row.trim());
  if (rows.length === 0) {
    console.error("Empty CSV data.");
    return [];
  }

  // Extract and process headers to lowercase
  const headers = rows[0]
    .split(delimiter)
    .map((header) => header.toLowerCase());

  // Process each row into an object with keys from headers
  const displayArray = rows.slice(1).map((row) => {
    const values = row.split(delimiter).map((cell) => cell.toLowerCase());
    const rowObject = {};
    headers.forEach((header, index) => {
      rowObject[header] = values[index] || null; // Assign each value to its corresponding header
    });
    return rowObject;
  });

  console.log("Array of objects with lowercase headers and values:");
  console.log(displayArray);

  // Remove the last element
  const removedElement = displayArray.pop();
  console.log("Removed Element:", removedElement);

  // Insert a new object at index 1
  const newObject1 = {
    id: "48",
    name: "barry",
    occupation: "runner",
    age: "25",
  };
  displayArray.splice(1, 0, newObject1);
  console.log("After Inserting at Index 1:", displayArray);

  // Add a new object to the end of the array
  const newObject2 = { id: "7", name: "bilbo", occupation: "none", age: "111" };
  displayArray.push(newObject2);
  console.log("After Adding to the End:", displayArray);

  return displayArray;
}

// CSV data provided
const demoData = `ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26`;

// Call the function and store the results in a variable
const csvObjects = demoArray(demoData);

// Accessing the final modified array
console.log("Final Array of Objects:", csvObjects);

//Output
/*
            { id: "42", name: "bruce", occupation: "knight", age: "41" },
            { id: "57", name: "bob", occupation: "fry cook", age: "19" },
            { id: "63", name: "blaine", occupation: "quiz master", age: "58" },
            { id: "98", name: "bill", occupation: "doctor’s assistant", age: "26" }
            */
