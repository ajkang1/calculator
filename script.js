let op = "";
let num1 = "";
let num2 = "";
const display = document.querySelector(".display");
const numbers = document.querySelectorAll('.num');
const compute = document.querySelector('.compute');
const operators = document.querySelectorAll('.op');
const miscs = document.querySelectorAll('.misc');
const decimal = document.querySelector('.decimal');

numbers.forEach((num) => {
    num.addEventListener('click', () => {
        if(op === "" || num1 === ""){
            num1 += num.innerHTML;
            console.log(num1);
            display.textContent = num1;
        }else{
            num2 += num.innerHTML;
            console.log(num2);
            display.textContent = num2;
        }
    });
});

miscs.forEach((misc) => {
    misc.addEventListener('click', () => {
        switch(misc.innerHTML){
            case "AC":
                clear();
                break;
            case "+/-":
                if(op === "" || num1 === ""){
                    num1 *= -1;
                    display.textContent = num1;
                }else{
                    num2 *= -1;
                    display.textContent = num2;
                }
                break;
            case "%":
                if(op === "" || num1 === ""){
                    num1 /= 100;
                    display.textContent = num1;
                }else{
                    num2 /= 100;
                    display.textContent = num2;
                }
                break;
        }
    });
});

operators.forEach((operator) => {
    operator.addEventListener('click', () => {
        if(op !== "" && num2 !== ""){
            calculate(num1, op, num2);
            num1 = display.textContent;
            op = operator.innerHTML;
        }else{
            op = operator.innerHTML;
        }
        console.log(op);
    });
});

decimal.addEventListener('click', () => {
    if(display.textContent.indexOf('.') === -1){
        if(op === "" || num1 === ""){
            num1 += ".";
            display.textContent = num1;
        }else{
            num2 += ".";
            display.textContent = num2;
        }
    }
});

compute.addEventListener('click', () => {
    calculate(num1, op, num2);
});

function clear(){
    num1 = "";
    num2 = "";
    op = "";
    display.textContent = "";
}

function calculate(numOne, operator, numTwo){
    switch(operator){
        case "+":
            display.textContent = +numOne + +numTwo;
            break;
        case "-":
            display.textContent = +numOne - +numTwo;
            break;
        case "*":
            display.textContent = +numOne * +numTwo;
            break;
        case "/":
            display.textContent = +numOne / +numTwo;
            break;
    }
    num1 = display.textContent; //sets value of num1 to be ans and clears the rest
    num2 = "";
    op = "";
    console.log(num1);
}