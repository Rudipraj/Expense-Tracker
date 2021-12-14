import ExpenseItem from './Components/Expenses/ExpenseItem'
import './App.css'
import NewExpense from './Components/NewExpense/NewExpense'
import React,{useState} from 'react';


const App = () => {
  const [expenses, setExpenses] = useState([]); 

 

  const addExpenseHandler = (expense) =>{
      setExpenses(prevExpenses => {
        return [expense, ...prevExpenses];
      });
  };

  return (
    <div className="App">
      <h2 className="heading">Expense Tracker</h2>
      <NewExpense onAddExpense ={addExpenseHandler}/>
    <div className="expenses">
      {expenses.map(expense => <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date}/>)}
      
     
      
      
    </div>
    </div>
  );
}

export default App;
