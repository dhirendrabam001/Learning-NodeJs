const express = require("express");
const chalk = require("chalk");
require("dotenv").config();

// import .env num1 and num2

const num1 = Number(process.env.NUM1);
const num2 = Number(process.env.NUM2);

const finalFun = function(calculation, a, b) {
    let finalResult = [];
    switch(calculation) {
        case "add":
            finalResult = a + b;
            console.log(chalk.red(`${num1} + ${num2} = ${finalResult}`));
            break;
            case "mul":
                finalResult = a * b;
                console.log(chalk.yellow(`${num1} * ${num2} = ${finalResult}`));
                break;
                case "sub":
                    finalResult = a - b;
                    console.log(chalk.blue(`${num1} - ${num2} = ${finalResult}`));
                    break;
                    case "divide": 
                    finalResult = a / b;
                    console.log(chalk.black(`${num1} / ${num2} = ${finalResult}`));
    }

}


finalFun("add", num1, num2);
finalFun("mul", num1, num2);
finalFun("sub", num1, num2);
finalFun("divide", num1, num2);


// Second function used
function createCalculator(calculation, a, b) {
    let finalResult = [];
    switch(calculation) {
        case "add":
            finalResult = a + b;
            console.log(chalk.red(`${num1} + ${num2} = ${finalResult}`));
            break;
            case "mul":
                finalResult = a * b;
                console.log(chalk.yellow(`${num1} * ${num2} = ${finalResult}`));
                break;
                case "sub":
                    finalResult = a - b;
                    console.log(chalk.blue(`${num1} - ${num2} = ${finalResult}`));
                    break;
                    case "divide": 
                    finalResult = a / b;
                    console.log(chalk.black(`${num1} / ${num2} = ${finalResult}`));
    }
}


createCalculator("add", num1, num2);
createCalculator("mul", num1, num2);
createCalculator("sub", num1, num2);
createCalculator("divide", num1, num2);
