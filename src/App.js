import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense"

const App = () =>  {
  const expenses = [
    { id: "e1", title: "Car Insurance", amount: 1900, date: new Date(2021, 7, 14) },
    { id: "e2", title: "Health Insurance", amount: 1900, date: new Date(2021, 7, 14) },
    { id: "e3", title: "Car Maintainence", amount: 1900, date: new Date(2021, 7, 14) }
  ];

  return (
    <div>
      <NewExpense></NewExpense>
      <Expenses items={expenses}></Expenses>
    </div>
  );
}

export default App;
