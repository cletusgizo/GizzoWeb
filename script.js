let expenses = [];
const threshold = 100000;

function addExpense() {
  const desc = document.getElementById("desc").value.trim();
  const amount = parseFloat(document.getElementById("amount").value);
  const category = document.getElementById("category").value;

  if (!desc || isNaN(amount) || amount <= 0 || !category) {
    alert("Please enter valid description, amount, and category.");
    return;
  }

  const expense = {
    id: Date.now(),
    desc,
    amount,
    category
  };

  expenses.push(expense);

  // Clear inputs
  document.getElementById("desc").value = "";
  document.getElementById("amount").value = "";
  document.getElementById("category").value = "";

  renderExpenses();
}

function deleteExpense(id) {
  expenses = expenses.filter(exp => exp.id !== id);
  renderExpenses();
}

function renderExpenses() {
  const list = document.getElementById("expenseList");
  list.innerHTML = "";

  const filterCategory = document.getElementById("filterCategory").value;
  const filteredExpenses = filterCategory
    ? expenses.filter(exp => exp.category === filterCategory)
    : expenses;

  let total = 0;

  filteredExpenses.forEach(exp => {
    const li = document.createElement("li");
    li.innerHTML = `
      ${exp.desc} : #${exp.amount.toFixed(2)} <em>(${exp.category})</em>
      <button class="delete-btn" onclick="deleteExpense(${exp.id})">X</button>
    `;
    list.appendChild(li);
    total += exp.amount;
  });

  document.getElementById("total").textContent = `Total: #${total.toFixed(2)}`;

  const warning = document.getElementById("warning");
  if (total > threshold) {
    warning.classList.remove("hidden");
  } else {
    warning.classList.add("hidden");
  }
}
