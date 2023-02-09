import "./ExpenseItem.css";
import ExpeneseDate from "./ExpenseDate";
import Card from "./Card";

function ExpenseItem(props) {
  return (
    <Card className="expense-item">
      <ExpeneseDate date={props.date} />
      <div className="expense-item__description">
        <h3>
          {props.item} - {props.LocationOfExpenditure}
        </h3>
        <div className="expense-item__price">{props.amount}</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;
