const number1 = Number(prompt("Please Enter First Number:"))
let operator = (prompt("Please Enter Type of Operator: +,-,*,/"))
const number2 = Number(prompt("Please Enter Second Number:"))
let result = 0
if (operator === "+") {
    result = number1 + number2
} else if (operator === "-") {
    result = number1 - number2
} else if (operator === "*") {
    result = number1 * number2
} else if (operator === "/") {
    result = number1 / number2
} else {
    console.log("Incorrect Operator Selection")
    operator = null
}

if (operator) {
    console.log(`İşleminizin Sonucu=${result}`)
}