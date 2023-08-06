$(document).ready(() => {
    const expenseForm = $('#expenseForm');
    const expenseList = $('#expenseList');
    const totalExpense = $('#totalExpense');
  
    let expenses = [];
  
    expenseForm.on('submit', (event) => {
      event.preventDefault();
  
      const expenseName = $('#expenseName').val().trim();
      const expenseAmount = parseFloat($('#expenseAmount').val());
      const expenseDate = $('#expenseDate').val().trim();
  
      if (expenseName === '' || isNaN(expenseAmount) || expenseAmount <= 0 || expenseDate === '') {
        alert('Please fill in all fields with valid data.');
        return;
      }
  
      const newExpense = {
        name: expenseName,
        amount: expenseAmount,
        date: expenseDate,
      };
  
      expenses.push(newExpense);
      saveExpensesToLocalStorage();
      displayExpenses();
  
      expenseForm.trigger('reset');
    });
  
    expenseList.on('click', '.btn-delete', function() {
      const index = $(this).data('index');
      expenses.splice(index, 1);
      saveExpensesToLocalStorage();
      displayExpenses();
    });
  
    function displayExpenses() {
      expenseList.empty();
      let total = 0;
  
      expenses.forEach((expense, index) => {
        const item = $(`
          <li class="list-group-item d-flex justify-content-between align-items-center">
            <span>${expense.name}</span>
            <span>$${expense.amount}</span>
            <span>${expense.date}</span>
            <button type="button" class="btn btn-sm btn-danger btn-delete" data-index="${index}">Delete</button>
          </li>
        `);
  
        expenseList.append(item);
        total += expense.amount;
      });
  
      totalExpense.text(`Total Expense: $${total.toFixed(2)}`);
    }
  
    function saveExpensesToLocalStorage() {
      localStorage.setItem('expenses', JSON.stringify(expenses));
    }
  
    function loadExpensesFromLocalStorage() {
      const storedExpenses = localStorage.getItem('expenses');
      expenses = storedExpenses ? JSON.parse(storedExpenses) : [];
      displayExpenses();
    }
  
    loadExpensesFromLocalStorage();
  });
  