import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses.js";
import NewExpense from "./components/Expenses/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id:"e1",
    item: "food",
    amount: "Rs. 10",
    LocationOfExpenditure: "cafe",
    date: new Date(2023, 7, 2),
  },
  {
    id:"e2",
    item: "petrol",
    amount: "Rs. 100",
    LocationOfExpenditure: "bike",
    date: new Date(2023, 8, 1),
  },
  {
    id:"e3",
    item: "movie",
    amount: "Rs. 200",
    LocationOfExpenditure: "PVR",
    date: new Date(2023, 29, 5),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div className="App">
      <NewExpense onSaveExpenseData={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
