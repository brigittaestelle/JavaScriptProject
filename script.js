"use strict";
alert(
  "Welcome to Budgie Budget. Enter in you budget amounts for the categories listed in the Setting section to get started."
);
let frm = document.querySelector("#set_budget");

const getBudgetAmounts = (event) => {
  event.preventDefault();
  let budgetData = new FormData(frm);
  const billAmount = new Number(budgetData.get("billsBudgetAmount"));
  console.log(billAmount);
  const foodAmount = new Number(budgetData.get("foodBudgetAmount"));
  console.log(foodAmount);
  const entertainmentAmount = new Number(
    budgetData.get("entertainmentBudgetAmount")
  );
  console.log(entertainmentAmount);
  const clothingAmount = new Number(budgetData.get("clothingBudgetAmount"));
  console.log(clothingAmount);
  console.log(billAmount + foodAmount);

  document.querySelector("#billsBudget").innerText = billAmount;
  document.querySelector("#foodBudget").innerText = foodAmount;
  document.querySelector("#entertainmentBudget").innerText =
    entertainmentAmount;
  document.querySelector("#clothingBudget").innerText = clothingAmount;
  document.querySelector("#totalBudget").innerText =
    billAmount + foodAmount + entertainmentAmount + clothingAmount;
};

frm.addEventListener("submit", getBudgetAmounts);

let exp = document.querySelector("#ExpenseForm");

let spendArray = [];


const getExpenseAmounts = (e) => {
  e.preventDefault();
  let ExpenseData = new FormData(exp);
  const ExpenseLocation = ExpenseData.get("WhereInput");
  console.log(ExpenseLocation);
  const ExpenseType = ExpenseData.get("input_radio");
  console.log(ExpenseType);
  const ExpenseAmount = Number(ExpenseData.get("inputAmount"));
  console.log(ExpenseAmount);
var totalSpend;
  if (ExpenseType == "food") {
    document.querySelector("#foodExpense").innerHTML += `<div class="new__expense"><p>${ExpenseLocation}</p><p>$${ExpenseAmount.toFixed(2)}</p></div>`
    spendArray.push(ExpenseAmount)
    totalSpend = spendArray.reduce(function(a,b){
      return a + b;
    },0);
    console.log(spendArray);
    console.log(totalSpend);
    //update the category budget with the spendAmount
    let updatedAmount = Number(document.querySelector("#foodBudget").innerText)
    document.querySelector("#foodBudget").innerText = updatedAmount - ExpenseAmount;
  } else if (ExpenseType == "clothing") {
    document.querySelector("#clothingExpense").innerHTML += `<div class="new__expense"><p>${ExpenseLocation}</p><p>$${ExpenseAmount.toFixed(2)}</p></div>`
    spendArray.push(ExpenseAmount)
    totalSpend = spendArray.reduce(function(a,b){
      return a + b;
    },0);    
    //update the category budget with the spendAmount
        let updatedAmount = Number(document.querySelector("#clothingBudget").innerText)
        document.querySelector("#clothingBudget").innerText = updatedAmount - ExpenseAmount;
    

  } else if (ExpenseType == "entertainment") {
    document.querySelector("#entertainmentExpense").innerHTML += `<div class="new__expense"><p>${ExpenseLocation}</p><p>$${ExpenseAmount.toFixed(2)}</p></div>`
    spendArray.push(ExpenseAmount)
    totalSpend = spendArray.reduce(function(a,b){
      return a + b;
    },0);  
    //update the category budget with the spendAmount
      let updatedAmount = Number(document.querySelector("#entertainmentBudget").innerText)
      document.querySelector("#entertainmentBudget").innerText = updatedAmount - ExpenseAmount;

  } else if (ExpenseType == "bills") {
    document.querySelector("#billsExpense").innerHTML += `<div class="new__expense"><p>${ExpenseLocation}</p><p>$${ExpenseAmount.toFixed(2)}</p></div>`
    spendArray.push(ExpenseAmount)
    totalSpend = spendArray.reduce(function(a,b){
      return a + b;
    },0);
    
    //update the category budget with the spendAmount
        let updatedAmount = Number(document.querySelector("#billsBudget").innerText)
        document.querySelector("#billsBudget").innerText = updatedAmount - ExpenseAmount;
  
  }
};

exp.addEventListener("submit", getExpenseAmounts);
