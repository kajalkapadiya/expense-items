import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enterdTitle, setEnterdTitle] = useState("");
  const [enterdAmount, setEnterdAmount] = useState("");
  const [enterdDate, setEnterdDate] = useState("");
  const [enterdExpend, setEnterdExpend] = useState("");

  const titleChangeHandler = (event) => {
    setEnterdTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnterdAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnterdDate(event.target.value);
  };

  const expendChangeHandler = (event) => {
    setEnterdExpend(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      item: enterdTitle,
      amount: enterdAmount,
      date: new Date(enterdDate),
      LocationOfExpenditure: enterdExpend,
    };

    props.onSaveExpenseData(expenseData);
    setEnterdTitle("");
    setEnterdAmount("");
    setEnterdDate("");
    setEnterdExpend("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Item</label>
          <input
            type="text"
            value={enterdTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enterdAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2023-12-31"
            value={enterdDate}
            onChange={dateChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Location Of Expenditure</label>
          <input
            type="text"
            value={enterdExpend}
            onChange={expendChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions"></div>
      <button type="submit">Add Expense</button>
    </form>
  );
};

export default ExpenseForm;
