// #1 - The first one I want you to do is create a method/function that takes in a range of numbers for each number if it's divisible by 15 print out FizzBuzz, if 5 print out Fizz, if 3 print out Buzz, and if none of those print out the number. I also want you to prompt the user for the range. When the function is done ask the user if they want to quit or run the application again.

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout
});
function FizzBuzz(n) {
  for (let i = 0; i <= n; i++) {
    if (i % 15 === 0) {
      console.log("FizzBuzz");
    } else if (i % 5 === 0) {
      console.log("Fizz");
    } else if (i % 3 === 0) {
      console.log("Buzz");
    }
    console.log(i);
  }
}

function program() {
  readline.question(`Input Number`, num => {
    FizzBuzz(num);
    readline.question(`Quit Program? y/n`, str => {
      if (str === "y") {
        console.log(`Leaving Program`);
        readline.close();
      } else if (str === "n") {
        program();
      }
    });
  });
}

program();

// # 2 - You have a list of objects, convert that list into a unique list of objects.
