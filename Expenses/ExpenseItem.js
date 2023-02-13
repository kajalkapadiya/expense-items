import React, { useState } from "react";
import "./ExpenseItem.css";
import ExpeneseDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.item);
  const [desc, setDesk] = useState(props.LocationOfExpenditure);
  const [amount, setAmount] = useState(props.amount);

  const clickEvent = () => {
    setTitle("updated!!");
    setDesk("spent");
    console.log(title);
  };

  const changeExpense = () => {
    setAmount("Rs. 100");
    console.log("change expense is done!");
  };


  return (
    <li>
      <Card className="expense-item">
        <ExpeneseDate date={props.date} />
        <div className="expense-item__description">
          <h2>
            {title} - {desc}
          </h2>
          <div className="expense-item__price">{amount}</div>
        </div>
        <button onClick={clickEvent}>change title</button>
        <button onClick={changeExpense}>change expense</button>
      </Card>
    </li>
  );
};

export default ExpenseItem;
