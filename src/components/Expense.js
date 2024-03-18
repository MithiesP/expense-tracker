// src/components/Expense.js
import React from 'react';

const Expense = ({ expense, onDelete }) => {
  return (
    <div className="expense">
      <span>{expense.description}</span>
      <span>${expense.amount}</span>
      <button onClick={() => onDelete(expense.id)}>Delete</button>
    </div>
  );
};

export default Expense;
