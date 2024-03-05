let display = document.querySelector('display');
let numbers = document.querySelectorAll(".num");

numbers.forEach((num) => {
    num.addEventListener('click', () => {
        display.textContent = "test";
    })
})