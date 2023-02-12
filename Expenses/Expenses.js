import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  // const filteredExpenses = props.items.filter((expense) => {
  //   return expense.date.getFullYear().toString() === filteredYear;
  // });

  return (
    <div>
      <Card className="expense">
        <ExpenseFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {props.items.map((expense) => (
          <ExpenseItem
            key={expense.id}
            item={expense.item}
            amount={expense.amount}
            LocationOfExpenditure={expense.LocationOfExpenditure}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  );
};

export default Expenses;
