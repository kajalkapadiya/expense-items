import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css"

const ExpensesList = (props) => {
  if (props.items.length === 0) {
    return <h3 className="expenses-list__fallback">Found no expenses.</h3>;
  }

  return (
    <ul className="expenses-list">
      {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          item={expense.item}
          amount={expense.amount}
          LocationOfExpenditure={expense.LocationOfExpenditure}
          date={expense.date}
        />
      ))}
    </ul>
  );
};
export default ExpensesList;
