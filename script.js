"use strict";
let tpCover = document.querySelector(".transparentCover");

tpCover.addEventListener("click", ()=> {
 tpCover.style.visibility = "hidden";
})
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
    document.querySelector(
      "#foodExpense"
    ).innerHTML += `<div class="new__expense"><p>${ExpenseLocation}</p><p>$${ExpenseAmount.toFixed(
      2
    )}</p></div>`;
    spendArray.push(ExpenseAmount);
    totalSpend = spendArray.reduce(function (a, b) {
      return a + b;
    }, 0);
    console.log(spendArray);
    console.log(totalSpend);
    //update weekly spend
    document.querySelector("#weeklySpend").innerText = totalSpend;

    //update the category budget with the spendAmount
    let updatedAmount = Number(document.querySelector("#foodBudget").innerText);
    document.querySelector("#foodBudget").innerText =
      updatedAmount - ExpenseAmount;

    // change the icon red if updatedAmount > budget
    if (Number(document.querySelector("#foodBudget").innerText) <= 0) {
      document.querySelector("#hamburger_icon").style.color = "red"
    };

  } else if (ExpenseType == "clothing") {
    document.querySelector(
      "#clothingExpense"
    ).innerHTML += `<div class="new__expense"><p>${ExpenseLocation}</p><p>$${ExpenseAmount.toFixed(
      2
    )}</p></div>`;
    spendArray.push(ExpenseAmount);
    totalSpend = spendArray.reduce(function (a, b) {
      return a + b;
    }, 0);
    // update weekly spend
    document.querySelector("#weeklySpend").innerText = totalSpend;

    //update the category budget with the spendAmount
    let updatedAmount = Number(
      document.querySelector("#clothingBudget").innerText
    );

    
    document.querySelector("#clothingBudget").innerText =
    updatedAmount - ExpenseAmount;
    
    // change the icon red if updatedAmount > budget
    if (Number(document.querySelector("#clothingBudget").innerText) <= 0) {
      document.querySelector("#tshirt_icon").style.color = "red"
    };

  } else if (ExpenseType == "entertainment") {
    document.querySelector(
      "#entertainmentExpense"
    ).innerHTML += `<div class="new__expense"><p>${ExpenseLocation}</p><p>$${ExpenseAmount.toFixed(
      2
    )}</p></div>`;
    spendArray.push(ExpenseAmount);
    totalSpend = spendArray.reduce(function (a, b) {
      return a + b;
    }, 0);
    // update weekly spend
    document.querySelector("#weeklySpend").innerText = totalSpend;

    //update the category budget with the spendAmount
    let updatedAmount = Number(
      document.querySelector("#entertainmentBudget").innerText
    );

    
    document.querySelector("#entertainmentBudget").innerText =
    updatedAmount - ExpenseAmount;
    
    // change the icon red if updatedAmount > budget
    if (Number(document.querySelector("#entertainmentBudget").innerText) <= 0) {
      document.querySelector("#ticket_icon").style.color = "red"
    };

  } else if (ExpenseType == "bills") {
    document.querySelector(
      "#billsExpense"
    ).innerHTML += `<div class="new__expense"><p>${ExpenseLocation}</p><p>$${ExpenseAmount.toFixed(
      2
    )}</p></div>`;
    spendArray.push(ExpenseAmount);
    totalSpend = spendArray.reduce(function (a, b) {
      return a + b;
    }, 0);
    // update weekly spend
    document.querySelector("#weeklySpend").innerText = totalSpend;

    //update the category budget with the spendAmount
    let updatedAmount = Number(
      document.querySelector("#billsBudget").innerText
    );

    
    document.querySelector("#billsBudget").innerText =
    updatedAmount - ExpenseAmount;
    
    // change the icon red if updatedAmount > budget
    if (Number(document.querySelector("#billsBudget").innerText) <= 0) {
      document.querySelector("#home_icon").style.color = "red"
    };
  }

  // subtract from total budget

  if (
    Number(document.querySelector("#weeklySpend").innerText) >=
    Number(document.querySelector("#totalBudget").innerText)
  ) {
    document.documentElement.clientWidth <= 600 ? tpCover.style.backgroundImage = "url(images/budgie-bummer-mobile.png)" : tpCover.style.backgroundImage = "url(images/budgie-bummer.png)";
    tpCover.style.visibility = "visible";
    document.querySelector("#add_expense").disabled = true;
    document.querySelector("#set_budget_button").disabled = true;
    document.querySelector(".boxes__headline--red").style.color = "red";
  }
};

exp.addEventListener("submit", getExpenseAmounts);
