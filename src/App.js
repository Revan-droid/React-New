import React, { useState } from 'react';
import Expenses from'./Components/Expenses/Expenses';
import NewExpense from './Components/NewExpense/NewExpense';
const Dummyexpenses=[
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2022, 7, 14)
  },
  { id: 'e2', 
    title: 'New Car', 
    amount: 799.49, 
    date: new Date(2022, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2022, 2, 28)
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2022, 5, 12)
  },
];
function App() {

const [expenses,setExpenses]=useState(Dummyexpenses)
const addExpenseHandler=(expense)=>{
//console.log("App.js");
//setExpenses(expense,...expenses);
setExpenses((prevExpenses)=>{
  return [expense,...prevExpenses]
})
}
  /*return React.createElement(
  'div',
  { },
  React.createElement('h2',{},"Let us see Dattaathreya"),
  React.createElement(Expenses,{expenses:expenses})
  );*/
  return (
    <div>
        <h2 align="center">Let us see Dattaathreya</h2>
        <NewExpense addit={addExpenseHandler}></NewExpense>
        <Expenses expenses={expenses}></Expenses>
    </div>
  );
}

export default App;