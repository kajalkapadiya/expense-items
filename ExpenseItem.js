import "./ExpenseItem.css";
import ExpeneseDate from "./ExpenseDate";


function ExpenseItem(props) {
  return (
    <div className="expense-item">
            <ExpeneseDate date={props.date} />
      <div className="expense-item__description">
        <h4>
          {props.item} - {props.amount} - {props.LocationOfExpenditure}
        </h4>
      </div>
    </div>
  );
}

export default ExpenseItem;
