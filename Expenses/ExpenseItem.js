import "./ExpenseItem.css";
import ExpeneseDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  const title = props.item;
  const desc = props.LocationOfExpenditure;

  const clickEvent = () => {
    console.log('clicked!!');
  }

  const deleteEvent = () => {
    // const element = document.getElementsByTagName("ExpeneseDate");
    // const element1 = document.getElementsByTagName("h2");
    // const element2 = document.getElementsByClassName("expense-item__price");
    // element.remove();
    // element1.remove();
    // element2.remove();    
  }

  return (
    <Card className="expense-item">
      <ExpeneseDate date={props.date} />
      <div className="expense-item__description">
        <h2>
          {title} - {desc}
        </h2>
        <div className="expense-item__price">{props.amount}</div>
      </div>
      <button onClick={clickEvent}>change title</button>
      <button onClick={deleteEvent}>delete expense</button>
    </Card>
  );
};

export default ExpenseItem;
