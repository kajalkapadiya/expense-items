import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "./Card";

function Expenses(props){
    return <Card className="expense">
    <ExpenseItem
      item={props.items[0].item}
      amount={props.items[0].amount}
      LocationOfExpenditure={props.items[0].LocationOfExpenditure}
      date={props.items[0].date}
    />
    <ExpenseItem
      item={props.items[1].item}
      amount={props.items[1].amount}
      LocationOfExpenditure={props.items[1].LocationOfExpenditure}
      date={props.items[1].date}
    />
    <ExpenseItem
      item={props.items[2].item}
      amount={props.items[2].amount}
      LocationOfExpenditure={props.items[2].LocationOfExpenditure}
      date={props.items[2].date}
    />
    </Card>

}

export default Expenses;