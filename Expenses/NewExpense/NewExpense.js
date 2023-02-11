import React from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const newExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
    };
    props.onSaveExpenseData(expenseData);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default newExpense;
