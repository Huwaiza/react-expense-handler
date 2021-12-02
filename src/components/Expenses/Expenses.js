import { useState } from "react/cjs/react.development";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {

  const [filteredYear, setFilteredYear] = useState('2021')

  const filterChangeHandler = (selectedYear) =>{
    setFilteredYear(selectedYear)
  };
  
  return (
    <Card className="expenses">
      <ExpensesFilter  selected={filteredYear} onChangeFilter={filterChangeHandler} />
      {props.items.map( (expense) =>(<ExpenseItem title={expense.title} amount={expense.amount} date={expense.date}></ExpenseItem>))}
    </Card>
  );
}

export default Expenses;
