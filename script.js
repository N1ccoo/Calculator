let fadedText = document.getElementById('fadedText')
let numberInput = document.getElementById('numberInput')
let inputContainer = document.getElementById('inputContainer')
let addBtn = document.getElementById('add')
let minusBtn = document.getElementById('subtract')
let multiplyBtn = document.getElementById('multiply')
let divideBtn = document.getElementById('divide')
let equalBtn = document.getElementById('equal')
let numberBtn = document.querySelectorAll('.numberBtn')
let clearEntryBtn = document.getElementById('clearEntry')
let clearBtn = document.getElementById('clear')
let numberBtnZero = document.querySelector('.numberBtn-0')
let gridItem = document.querySelectorAll('.grid-item')
let dotBtn = document.getElementById('dot')

let operator = ''
let numberValue = ''
let number = []
let fadedNumber = ''
let fadedInput = []
let param = []

inputContainer.addEventListener('focus',focusInputBar)
inputContainer.addEventListener('blur',unfocusInputBar)
addBtn.addEventListener('click',addOperator)
minusBtn.addEventListener('click',minusOperator)
divideBtn.addEventListener('click',divideOperator)
multiplyBtn.addEventListener('click',multiplyOperator) 
equalBtn.addEventListener('click',equalOperator)
clearEntryBtn.addEventListener('click',clearEntry)
clearBtn.addEventListener('click',clearAll)
numberBtnZero.addEventListener('click',writeZero)
dotBtn.addEventListener('click',writeDot)

numberBtn.forEach(item => {item.addEventListener('click',writeNumber)})

inputContainer.addEventListener('mouseenter',highlight)
inputContainer.addEventListener('mouseleave',removeHighlight)
gridItem.forEach(item => {
    item.addEventListener('mouseover',highlightBtn)
    item.addEventListener('mouseout',removeHighlightBtn)
    })



function add(a,b) {
    return parseFloat(a) + parseFloat(b)
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
        case '+': return add(a,b);
        break;
        case '-': return subtract(a,b);
        break;
        case '??': return multiply(a,b);
        break;
        case '??': return divide(a,b);
        break;
        default:
            return b
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
    if (e.key in [1,2,3,4,5,6,7,8,9,0] && number.length == 1 && number == 0) {
        number.push(`.${e.key}`)
        numberValue = number.join('')
        numberInput.textContent = number.join('')
    } else if (e.key in [1,2,3,4,5,6,7,8,9,0]) {
        number.push(e.key)
        numberValue = number.join('')
        numberInput.textContent = number.join('')
    } else if (e.key === 'Backspace') {    
        number.pop(number.length-1)
        numberValue = number.join('')
        numberInput.textContent = number.join('')
    } else if (e.key === '*') {
        multiplyOperator()
    } else if (e.key === '+') {
        addOperator()
    } else if (e.key === '-') {
        minusOperator()
    } else if (e.key === '/') {
        divideOperator()
    } else if (e.key === 'Enter') { 
        equalOperator()
    }
}

function addOperator() {
    
    operator = '+'
    fadedNumber = numberValue
    fadedInput = [fadedNumber,operator]
    fadedText.textContent = fadedInput.join(' ')
    numberValue = number.join('')
    number = []

}

function minusOperator() {
    operator = '-'
    fadedNumber = numberValue
    fadedInput = [fadedNumber,operator]
    fadedText.textContent = fadedInput.join(' ')
    numberValue = number.join('')
    number = []
   
}

function divideOperator() {
    operator = '??'
    fadedNumber = numberValue
    fadedInput = [fadedNumber,operator]
    fadedText.textContent = fadedInput.join(' ')
    numberValue = number.join('')
    number = []
}

function multiplyOperator() {
   
    operator = '??'
    fadedNumber = numberValue
    fadedInput = [fadedNumber,operator]
    fadedText.textContent = fadedInput.join(' ')
    numberValue = number.join('')
    number = []
   
}

function equalOperator() {
    
    param = [fadedNumber,operator,numberValue,'=']
    fadedText.textContent = param.join(' ')
    ans = operate(param[1],param[0],param[2])
    numberInput.textContent = ans
     numberValue = [ans]
     operator = ''
     fadedNumber = ''

}

function writeNumber(e) {
    if (number == 0 && number.length == 1) {
        number.push(`.${this.textContent}`)
        numberValue = number.join('')
        numberInput.textContent = number.join('')
    } else {

    number.push(this.textContent)
    numberValue = number.join('')
    numberInput.textContent = number.join('')
    }
}

function clearEntry() {
   number.pop(number.length -1)
   numberInput.textContent = number.join('')
}

function clearAll() {
    operator = ''
    number = []
    fadedNumber = ''
    fadedInput = []
    param = []
    
    numberInput.textContent = number.join('')
    fadedText.textContent = fadedInput.join(' ')
}

function writeZero() {
    if (number == 0 && number.length == 1) {
        number.push('.0')
        numberValue = number.join('')
        numberInput.textContent = number.join('')

    } else {
        number.push('0')
        numberValue = number.join('')
        numberInput.textContent = number.join('')
    }
}

function writeDot(e) {
    if (number.length == 0) {
        number.push('0')
        number.push('.')
        numberValue = number.join('')
        numberInput.textContent = number.join('')
    } 

    else if (number.join('').split('').indexOf('.') == -1 ) {
    number.push('.')
    numberValue = number.join('')
    numberInput.textContent = number.join('')
    }
}

function highlight(e) {
   
    e.target.classList.add('highlight')
    
}

function removeHighlight(e) {
    
    e.target.classList.remove('highlight')
}

function highlightBtn(e) {
   
    e.target.classList.add('highlightBtn')
    
}

function removeHighlightBtn(e) {
    
    e.target.classList.remove('highlightBtn')
}