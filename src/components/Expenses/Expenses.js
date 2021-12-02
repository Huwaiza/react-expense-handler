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
  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() == filteredYear;
  })

  let expensesContent = <p>No expenses found.</p>

  if(filteredExpenses.length > 0 ){
    expensesContent = filteredExpenses.map( (expense) =>(<ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date}></ExpenseItem>))
  }
  
  return (
    <div>
        <Card className="expenses">
        <ExpensesFilter  selected={filteredYear} onChangeFilter={filterChangeHandler} />

        {/* without adding the key to expense item list, the state associattion will run into bugs
        react just compares the lenght of list and add new list item without having record of previous list
        so key is basically associated to give exact idea to react that this is the new item so now 
        our state item will also work */}
        {expensesContent}
    </Card>
    </div>
  );
}

export default Expenses;
