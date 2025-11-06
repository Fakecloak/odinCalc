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
const dotOperator = document.querySelector("#dot")

const equalBtn = document.querySelector("#equal")
const clearBtn = document.querySelector("#clear")

let num1 = "";
let num2 =  "";
let operator = "";
const display = document.querySelector("#display");


oneBtn.addEventListener("click", () => {
  if (!operator){
    num1 = "1";
    display.value = num1;
  } else {
    num2 = "1";
    display.value = num1 + operator + num2;
  }
  });

twoBtn.addEventListener("click", () => {
  if (!operator){
    num1 = "2";
    display.value = num1;
  } else {
    num2 = "2";
    display.value = num1 + operator + num2;
  }
  });

threeBtn.addEventListener("click", () => {
  if (!operator){
    num1 = "3";
    display.value = num1;
  } else {
    num2 = "3";
    display.value = num1 + operator + num2;
  }
  });

fourBtn.addEventListener("click", () => {
  if (!operator){
    num1 = "4";
    display.value = num1;
  } else {
    num2 = "4";
    display.value = num1 + operator + num2;
  }
  });

fiveBtn.addEventListener("click", () => {
  if (!operator){
    num1 = "5";
    display.value = num1;
  } else {
    num2 = "5";
    display.value = num1 + operator + num2;
  }
  });

sixBtn.addEventListener("click", () => {
  if (!operator){
    num1 = "6";
    display.value = num1;
  } else {
    num2 = "6";
    display.value = num1 + operator + num2;
  }
  });

sevenBtn.addEventListener("click", () => {
  if (!operator){
    num1 = "7";
    display.value = num1;
  } else {
    num2 = "7";
    display.value = num1 + operator + num2;
  }
  });

eightBtn.addEventListener("click", () => {
  if (!operator){
    num1 = "8";
    display.value = num1;
  } else {
    num2 = "8";
    display.value = num1 + operator + num2;
  }
  });

nineBtn.addEventListener("click", () => {
  if (!operator){
    num1 = "9";
    display.value = num1;
  } else {
    num2 = "9";
    display.value = num1 + operator + num2;
  }
  });

zeroBtn.addEventListener("click", () => {
  if (!operator){
    num1 = "0";
    display.value = num1;
  } else {
    num2 = "0";
    display.value = num1 + operator + num2;
  }
})

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

// extras 

clearBtn.addEventListener("click",() => {
  num1 = "";
  num2 = "";
  operator = "";
  display.value="";
});

equalBtn.addEventListener("click", () => {
  let result =0;

  if (operator === "+") result = num1 + num2
  if (operator === "-") result = num1 - num2
  if (operator === "%") result = num1 % num2
  if (operator === "/") result = num1 / num2
  if (operator === "*") result = num1 * num2

  display.value = result;
  num
})