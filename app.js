// #1 - The first one I want you to do is create a method/function that takes in a range of numbers for each number if it's divisible by 15 print out FizzBuzz, if 5 print out Fizz, if 3 print out Buzz, and if none of those print out the number. I also want you to prompt the user for the range. When the function is done ask the user if they want to quit or run the application again.

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout
});
function FizzBuzz(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 15 === 0) {
      console.log("FizzBuzz");
    } else if (i % 5 === 0) {
      console.log("Fizz");
    } else if (i % 3 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}

function program() {
  readline.question(`Input number range: `, num => {
    FizzBuzz(num);
    readline.question(`Quit Program? y/n `, str => {
      if (str === "y") {
        console.log(`Leaving Program`);
        readline.close();
      } else if (str === "n") {
        program();
      }
    });
  });
}

// program();

// # 2 - You have a list of objects, convert that list into a unique list of objects.

const listObj = [
  { id: 1, name: "Frank" },
  { id: 1, name: "Paul" },
  { id: 1, name: "Dean" },
  { id: 3, name: "Kyle" },
  { id: 4, name: "James" },
  { id: 4, name: "Cody" },
  { id: 6, name: "Steve" },
  { id: 8, name: "Max" }
];

// Cheeky ES6 way it it weren't specifically objects
const regList = [1, 5, "dean", 6, 1, 3, "dean", "paul", 8];
const uniqueRegList = Array.from(new Set(regList));
console.log(uniqueRegList);

// Unique lists if by identifier (ID)
const uniqueIdList = Array.from(new Set(listObj.map(item => item.id))).map(
  id => {
    return listObj.find(a => a.id === id);
  }
);
console.log(uniqueIdList);

// Filter them using forEach and comparing indicies
let otherList = [
  { id: 11, name: "IT", person: "Frank" },
  { id: 11, name: "IT", person: "Paul" },
  { id: 22, name: "Sales", person: "Dean" },
  { id: 22, name: "Sales", person: "Kyle" },
  { id: 33, name: "Management", person: "James" },
  { id: 33, name: "Management", person: "Cody" },
  { id: 33, name: "Management", person: "Steve" }
];

let newList = [];
otherList.forEach(item => {
  let i = newList.findIndex(x => x.name == item.name);
  console.log(i);
  if (i <= -1) {
    newList.push({ id: item.id, name: item.name, person: item.person });
  }
});

console.log(newList);
