const oneBtn = document.querySelector("#one")
const twoBtn = document.querySelector("#two")
const threeBtn = document.querySelector("#three")
const fourBtn = document.querySelector("#four")
const fiveBtn = document.querySelector("#five")
const sixBtn = document.querySelector("#six")
const sevenBtn = document.querySelector("#seven")
const eightBtn = document.querySelector("#eight")
const nineBtn = document.querySelector("#nine")
const zeroBtn = document.querySelector("#zero")

const addOperator = document.querySelector("#add")
const subOperator = document.querySelector("#sub")
const modulusOperator = document.querySelector("#modulus")
const multiplyOperator = document.querySelector("#multiply")
const divisonOperator = document.querySelector("#divison")
const dotBtn = document.querySelector("#dot")
const sqrtOperator = document.querySelector("#sqr")

const equalBtn = document.querySelector("#equal")
const clearBtn = document.querySelector("#clear")

let num1 = "";
let num2 = "";
let operator = "";
const display = document.querySelector("#display");

// add number function
function addNumber(value){
  if (!operator){
    num1 += value;
    display.value = num1;
  } else {
    num2 += value;
    display.value = num1 + operator + num2;
  }
}

// number btns

oneBtn.addEventListener("click", () => addNumber("1"));
twoBtn.addEventListener("click", () => addNumber("2"));
threeBtn.addEventListener("click", () => addNumber("3"));
fourBtn.addEventListener("click", () => addNumber("4"));
fiveBtn.addEventListener("click", () => addNumber("5"));
sixBtn.addEventListener("click", () => addNumber("6"));
sevenBtn.addEventListener("click", () => addNumber("7"));
eightBtn.addEventListener("click", () => addNumber("8"));
nineBtn.addEventListener("click", () => addNumber("9"));
zeroBtn.addEventListener("click", () => addNumber("0"))
dotBtn.addEventListener("click",()=> addNumber("."))

// operators

addOperator.addEventListener("click",()=>{
  operator = "+";
  display.value =num1 +operator;
});

subOperator.addEventListener("click",()=>{
  operator = "-";
  display.value =num1 +operator;
});

modulusOperator.addEventListener("click",()=>{
  operator = "%";
  display.value =num1 +operator;
});

divisonOperator.addEventListener("click",()=>{
  operator = "/";
  display.value =num1 +operator;
});

multiplyOperator.addEventListener("click",()=>{
  operator = "*";
  display.value =num1 +operator;
});

sqrtOperator.addEventListener("click",()=>{
  operator = "√";
  display.value =num1 +operator;
});


// extras 

clearBtn.addEventListener("click",() => {
  num1 = "";
  num2 = "";
  operator = "";
  display.value="";
});

equalBtn.addEventListener("click", () => {
  const n1 = parseFloat(num1);
  const n2 = parseFloat(num2);
  let result =0;

  if (operator === "+") result = n1 + n2
  if (operator === "-") result = n1 - n2
  if (operator === "%") result = n1 % n2
  if (operator === "/") result = n1 / n2
  if (operator === "*") result = n1 * n2
  if (operator === "√") result = Math.sqrt(n1) 

  display.value = result;
  num1 = result.toString();
  num2="";
  operator="";
});