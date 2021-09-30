import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense"

const App = () =>  {
  const expenses = [
    { id: "e1", title: "Car Insurance", amount: 1900, date: new Date(2021, 7, 14) },
    { id: "e2", title: "Health Insurance", amount: 1900, date: new Date(2021, 7, 14) },
    { id: "e3", title: "Car Maintainence", amount: 1900, date: new Date(2021, 7, 14) }
  ];

  const addExpenseHandler = (expense) =>{
    console.log("In app.js")
    console.log(expense)
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
      <Expenses items={expenses}></Expenses>
    </div>
  );
}

export default App;
