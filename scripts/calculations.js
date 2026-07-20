let budgetValue = 0;
let totalExpensesValue = 0;

const expenseEntries = [
  ["groceries", 33],
  ["restaurants", 50],
  ["transport", 12],
  ["home", 70],
  ["subscriptions", 14],
  ["groceries", 28],
  ["subscriptions", 12],
];

for (let i = 0; i < expenseEntries.length; i++) {
  const entry = expenseEntries[i];

  totalExpensesValue = totalExpensesValue + entry[1];
}
console.log(`Valor total de los gastos: ${totalExpensesValue}`);

function calculateAverageExpense() {
  if (expenseEntries.length === 0) {
    return 0;
  } else {
    return totalExpensesValue / expenseEntries.length;
  }
}

function calculateBalance() {
  return budgetValue - totalExpensesValue;
}

let balanceColor = "green";

function updateBalanceColor() {
  if (calculateBalance() < 0) {
    balanceColor = "red";
  } else if (calculateBalance() < budgetValue * 0.25) {
    balanceColor = "orange";
  } else {
    balanceColor = "green";
  }
}

function calculateCategoryExpenses(category) {
  let categoryTotal = 0;
  for (let i = 0; i < expenseEntries.length; i++) {
    const entry = expenseEntries[i];
    if (entry[0] === category) {
      categoryTotal += entry[1];
    }
  }
  return categoryTotal;
}

function calculateLargestCategory() {
  let categoryTotals = [
    "groceries",
    "restaurants",
    "transport",
    "home",
    "subscriptions",
  ];

  let categoriesData = [];

  for (let i = 0; i < categoryTotals.length; i++) {
    const category = categoryTotals[i];
    const total = calculateCategoryExpenses(category);
    categoriesData.push([category, total]);
  }

  let maxTotal = 0;
  let maxCategoryName = "";

  for (let i = 0; i < categoriesData.length; i++) {
    const currentCategory = categoriesData[i][0];
    const currentTotal = categoriesData[i][1];

    if (currentTotal > maxTotal) {
      maxTotal = currentTotal;
      maxCategoryName = currentCategory;
    }
  }
  return maxCategoryName;
}

function addExpenseEntry(newEntry) {
  expenseEntries.push(newEntry);
  totalExpensesValue += newEntry[1];
}
