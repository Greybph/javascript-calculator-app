const display = document.querySelector('.display')

const numBtns = document.querySelectorAll('.num-btn')
const opBtns = document.querySelectorAll('.op-btn')
const subBtn = document.querySelector('.sub-btn')
const clrBtn = document.querySelector('.clr-btn')
const dotBtn = document.querySelector('.dot-btn')
const eqlBtn = document.querySelector('.eql-btn')

let evalArr = []

let operand = false
let evaluated = false
let fresh = evalArr.length ? true : false

numBtns.forEach((btn) => {
	btn.addEventListener('click', (e) => {
		handleNumber(e.target)
	})
})

opBtns.forEach((btn) => {
	btn.addEventListener('click', (e) => {
		handleOperation(e.target)
	})
})

subBtn.addEventListener('click', (e) => {
	handleSub(e.target)
})

clrBtn.addEventListener('click', handleClear)
eqlBtn.addEventListener('click', handleEqual)
dotBtn.addEventListener('click', handleDot)

function handleNumber(element) {
	const number = element.textContent
	operand ? (display.value = number) : (display.value += number)
	operand = false
	evaluated = false
}

function handleOperation(element) {
	if (!operand) {
		evalArr.push(display.value, element.textContent)
		display.value = element.textContent
		operand = true
		evaluated = false
	}
}

function handleSub(element) {
	if (!operand) {
		evalArr.push(display.value, element.textContent)
		display.value = element.textContent
		operand = true
		evaluated = false
	}
	if (evalArr.length === 0) {
		display.value = '-'
		operand = false
	}
	if (display.value === '-') {
		return
	}
	if (operand) {
		display.value = '-'
		operand = false
	}
}

function handleEqual() {
	if (!evalArr.length) {
		return
	}
	evalArr.push(display.value)
	display.value = eval(evalArr.join(''))
	evalArr = []
	operand = false
	evaluated = true
}

function handleDot() {
	if (display.value.includes('.')) return
	if (evaluated) return
	display.value += '.'
	operand = false
}

function handleClear() {
	display.value = ''
	evalArr = []
	operand = true
	evaluated = false
}
