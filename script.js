const point = document.querySelector("#point.button")
const pointValue = point.textContent;

const zero = document.querySelector("#zero.button")
const zeroValue = zero.textContent;
zero.addEventListener("click",() => {
    console.log(zeroValue)
})
const num1 = document.querySelector("#num1.button")
const num1Value = num1.textContent;
num1.addEventListener("click", ()=> test(num1Value))

const num2 = document.querySelector("#num2.button")
const num2Value = num2.textContent;
num2.addEventListener("click", ()=> test(num2Value))

const num3 = document.querySelector("#num3.button")
const num3Value = num3.textContent;
num3.addEventListener("click", ()=> test(num3Value))

const num4 = document.querySelector("#num4.button")
const num4Value = num4.textContent;
num4.addEventListener("click", ()=> test(num4Value))

const num5 = document.querySelector("#num5.button")
const num5Value = num5.textContent;
num5.addEventListener("click", ()=> test(num5Value))

const num6 = document.querySelector("#num6.button")
const num6Value = num6.textContent;
num6.addEventListener("click", ()=> test(num6Value))


const num7 = document.querySelector("#num7.button")
const num7Value = num7.textContent;
num7.addEventListener("click", ()=> test(num7Value))

const num8 = document.querySelector("#num8.button")
const num8Value = num8.textContent;
num8.addEventListener("click", ()=> test(num8Value))


const num9 = document.querySelector("#num9.button")
const num9Value = num9.textContent;
num9.addEventListener("click", ()=> test(num9Value))

const add = document.querySelector("#add.button")
const addValue = add.textContent;
add.addEventListener("click", ()=> test(addValue))

const substract = document.querySelector("#substract.button")
const substractValue = substract.textContent;
substract.addEventListener("click", ()=> test(substractValue))

const multiply = document.querySelector("#multiply.button")
const multiplyValue = multiply.textContent;
multiply.addEventListener("click", ()=> test(multiplyValue))

const divide = document.querySelector("#divide.button")
const divideValue = divide.textContent;
divide.addEventListener("click", ()=> test(divideValue))

const equal = document.querySelector("#equal.button")
const equalValue = equal.textContent;
equal.addEventListener("click", ()=> test(equalValue))

const clear1 = document.querySelector("#clear1.button")

const clear2 = document.querySelector("#clear2.button")

const typing = document.getElementById("typing")

const displayTying = (arg) => {
    
    typing.textContent += arg;

}

const test = (arg) => {
    console.log(arg)
    displayTying(arg)
}