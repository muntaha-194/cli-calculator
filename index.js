#! /usr/bin/env node
// SHABANG 
import inquirer from "inquirer";
// just a welcome message
console.log("WELCOME TO MUNTAHA'S CLI CALCULATOR");
const answer = await inquirer.prompt([
    { message: "Enter your first number", type: "number", name: "firstNumber" },
    { message: "Enter your Second number", type: "number", name: "secondNumber" },
    {
        message: "Select one of the operator to perform action!",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtraction", "Division", "Multiplication"],
    },
]);
console.log(answer);
// if-else Statements
if (answer.operator === "Addition") {
    console.log(answer.firstNumber + answer.secondNumber);
}
else if (answer.operator === "Subtraction") {
    console.log(answer.firstNumber - answer.secondNumber);
}
else if (answer.operator === "Division") {
    console.log(answer.firstNumber / answer.secondNumber);
}
else if (answer.operator === "Multiplication") {
    console.log(answer.firstNumber * answer.secondNumber);
}
else {
    console.log("\nplease select valid operator");
}
console.log("\nTHE END");
