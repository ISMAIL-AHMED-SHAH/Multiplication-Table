#! /usr/bin/env node
import inquirer from "inquirer"
import chalk from "chalk"
let userInput = await inquirer.prompt(
    {
        name: "num1",
        message: chalk.blueBright("Please enter your number: "),
        type: "number",
        validate: (input) => {
            const num2 = parseInt(input)
            if (isNaN(num2)) {
                return chalk.magenta("A numeric entry is required. Please enter a number.")
            } else {
                return true
            }
        }
    }
)

let userNum:number = userInput.num1

for (let i = 1; i <= 10; i++) {
    let result = userNum * i
    console.log(userNum, 'x', i, '=', result);
    
}