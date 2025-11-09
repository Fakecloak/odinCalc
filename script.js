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
  
  //to avoid Multiple Decimals
  if (value === "."){
    if(!operator && num1.includes(".")) return;
    if(operator && num2.includes(".")) return;
  } 

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


// operator function
function setOperator(op){
  if(!operator ){
    operator = op;
    display.value = num1 + operator;
  } else if (operator && !num2){
    operator = op;
    display.value = num1 + operator;
    }
}

// opeartor btns
addOperator.addEventListener("click", () => setOperator("+"));
subOperator.addEventListener("click", () => setOperator("-"));
modulusOperator.addEventListener("click", () => setOperator("%"));
divisonOperator.addEventListener("click", () => setOperator("/"));
multiplyOperator.addEventListener("click", () => setOperator("*"));
sqrtOperator.addEventListener("click", () => setOperator("√"));


// extras 

clearBtn.addEventListener("click",() => {
  num1 = "";
  num2 = "";
  operator = null;
  display.value="";
});

equalBtn.addEventListener("click", () => {
  const n1 = parseFloat(num1);
  const n2 = parseFloat(num2);
  let result =0;

  if (operator === "+") result = n1 + n2
  if (operator === "-") result = n1 - n2
  if (operator === "%") result = n1 % n2
  if (operator === "*") result = n1 * n2
  if (operator === "√") result = Math.sqrt(n1)
    if (operator === "/"){
      if(n2===0){
        display.value="Error: Div by 0";
        [num1, num2] = ["", ""];
        operator="";
        return;
      }
    } result = n1 / n2

  display.value = result;
  num1 = result.toString();
  num2="";
  operator="";
});