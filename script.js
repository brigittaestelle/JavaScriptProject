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

const getExpenseAmounts = (e) => {
  e.preventDefault();
  let ExpenseData = new FormData(exp);
  const ExpenseLocation = ExpenseData.get("WhereInput");
  console.log(ExpenseLocation);
  const ExpenseType = ExpenseData.get("input_radio");
  console.log(ExpenseType);
  const ExpenseAmount = new Number(ExpenseData.get("inputAmount"));
  console.log(ExpenseAmount);

  if (ExpenseType == "food") {
    document.querySelector("FoodSquare.expense_display").innerText += (
      <p>unicorns</p>
    );
  }
};

exp.addEventListener("submit", getExpenseAmounts);
