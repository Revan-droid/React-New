import React ,{ useState }from 'react'

import './ExpenseForm'
import './NewExpense.css'
import ExpenseForm from './ExpenseForm'

const NewExpense =(props) =>{
    const [isEditing,setIsEditing]=useState(false);
    const onSaveExpenseDataHandler=(enteredExpenseData)=>{
          const expenseData={
          ...enteredExpenseData,
          id:Math.random().toString(),
          };
          //console.log(expenseData);
          props.addit(expenseData);
          setIsEditing(false);
    }
    const startEditingHandler=()=>{
     setIsEditing(true);
    }
    const stopEditingHandler=()=>{
      setIsEditing(false);
    }
    return (
    <div className="new-expense">
      {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
      {isEditing &&<ExpenseForm onSaveExpenseData={onSaveExpenseDataHandler} setToNormal={stopEditingHandler}/> }
    </div>);
}

export default NewExpense