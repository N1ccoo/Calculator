let fadedText = document.getElementById('fadedText')
let numberInput = document.getElementById('numberInput')
let inputContainer = document.getElementById('inputContainer')
let addBtn = document.getElementById('add')
let minusBtn = document.getElementById('subtract')
let multiplyBtn = document.getElementById('multiply')
let divideBtn = document.getElementById('divide')

let operator = ''
let number = []
let fadedNumber = []

inputContainer.addEventListener('focus',focusInputBar)
inputContainer.addEventListener('blur',unfocusInputBar)
addBtn.addEventListener('click',addOperator)
minusBtn.addEventListener('click',minusOperator)
divideBtn.addEventListener('click',divideOperator)
multiplyBtn.addEventListener('click',multiplyOperator) 

function add(a,b) {
    return a + b
}

function subtract(a,b) {
    return a - b
}

function multiply(a,b) {
    return a * b
}

function divide(a,b) {
   return a / b
}

function operate(operator,a,b) {
    switch (operator) {
        case 'add': return add(a,b);
        break;
        case 'subract': return subtract(a,b);
        break;
        case 'multiply': return multiply(a,b);
        break;
        case 'divide': return divide(a,b);
        break;
        default:
            console.log('U BROKE IT!')
    }
}

function focusInputBar(e) {
    e.target.classList.add('focus')
    e.target.addEventListener('keydown',addInput)
}

function unfocusInputBar(e) {
    e.target.classList.remove('focus')
    e.target.removeEventListener('keydown',addInput)
}

function addInput(e) {

    if (e.key in [1,2,3,4,5,6,7,8,9,0]) {
    number.push(e.key)
    numberInput.textContent = number.join('')
    }
}

function addOperator() {
    console.log('add')
    operator = '+'
}

function minusOperator() {
    console.log('minus')
    operator = '-'
}

function divideOperator() {
    console.log('divide')
    operator = '÷'
}

function multiplyOperator() {
    console.log('multiply')
    operator = '×'
}