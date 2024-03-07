const display = document.querySelector('.display');
const numbers = document.querySelectorAll('.num');
const operators = document.querySelectorAll('.op');
const compute = document.querySelector('.compute');

numbers.forEach((num) => {
    num.addEventListener('click', () => {
        display.textContent += num.innerHTML;
    })
})

operators.forEach((op) => {
    op.addEventListener('click', () => {
        if(display.textContent.substring(display.textContent.length - 1) !== op.innerHTML){
            display.textContent += op.innerHTML;
        }
    });
});

const miscs = document.querySelectorAll('.misc');
miscs.forEach((misc) => {
    misc.addEventListener('click', () => {
        if(misc.innerHTML == "AC"){
            display.textContent = "";
        }else if(misc.innerHTML == "+/-"){
            display.textContent = "-" + display.textContent;
        }else{
            // finish
        }
    });
});

function calculate(){
    
}