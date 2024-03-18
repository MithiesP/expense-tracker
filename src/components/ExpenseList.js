// src/components/ExpenseList.js
import React from 'react';
import Expense from './Expense';

const ExpenseList = ({ expenses, onDelete }) => {
  const totalAmount = expenses.reduce((acc, curr) => acc + curr.amount, 0);

  return (
    <div className="expense-list">
      <h2>Total Amount Spent: ${totalAmount.toFixed(2)}</h2>
      {expenses.map(expense => (
        <Expense key={expense.id} expense={expense} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default ExpenseList;
