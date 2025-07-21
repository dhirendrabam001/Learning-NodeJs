// Create a calculator using .env and chalk
const express = require("express");
const chalk = require("chalk");
require("dotenv").config();

const operation = (process.env.OPERATION);
const num1 = Number(process.env.NUM1);
const num2 = Number(process.env.NUM2);
const num3 = Number(process.env.NUM3);
const num4 = Number(process.env.NUM4);

let finalResult = [];

switch (operation) {
    case "add":
        finalResult = num1 + num2;
        console.log(chalk.red(`${num1} + ${num2} = ${finalResult}`));
        break;
        case "mul":
            finalResult = num1 * num2;
            console.log(chalk.green(`${num1} * ${num2} = ${finalResult}`));
            break;
            case "sub":
                finalResult = num1 - num2;
                console.log(chalk.blue(`${num1} - ${num2} = ${finalResult}`));
                break;
                case "divide":
                    finalResult = num1 / num2;
                    console.log(chalk.yellow(`${num1} / ${num2} = ${finalResult}`));

                    default:
                        console.log(chalk.black("Invalid Operation"));
                        
}


