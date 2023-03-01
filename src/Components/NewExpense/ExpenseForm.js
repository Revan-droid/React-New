import React ,{ useState } from'react';

import './ExpenseForm.css'

const ExpenseForm= (props) =>{
   //document.getElementById('').addEventListener('click',(event)=>{});
   
   const [enteredTitle,setEnteredTitle] =useState('');
   const [enteredAmount,setEnteredAmount] =useState('');
   const [enteredDate,setEnteredDate] =useState('');

   /*const [userInput,setInput]=useState({
      enteredTitle:'',
      enteredAmount:'',
      enteredDate:''
   })*/

   const titleChangeHandler=(event)=>{
      setEnteredTitle(event.target.value)
      /*setInput({
         ...userInput,
        */
      /*setInput((prevState)=>{
          return {...prevState,enteredTitle:event.target.value}
       })*/
   }
   const amountChangeHandler=(event)=>{
      setEnteredAmount(event.target.value)
      /*setInput({
         ...userInput,
         enteredAmount:event.target.value,
      })*/
   }
   const dateChangeHandler=(event)=>{
      setEnteredDate(event.target.value)
      /*setInput({
         ...userInput,
         enteredDate:event.target.value,
      })*/
   }
   const submitHandler=(event)=>{
      event.preventDefault();

      const expenseData={
      title :enteredTitle,
      amount:+enteredAmount,
      date :new Date(enteredDate)}
      //console.log(expenseData)
      setEnteredTitle('');  //Adding two-way binding
      setEnteredAmount('');
      setEnteredDate('');
      props.onSaveExpenseData(expenseData);
   }
   

    return <form onSubmit={submitHandler}>
        <div className='new-expense__controls'>
           <div className='new-expense__control'>
              <label>Title</label>
              <input type='text' value={enteredTitle} onChange={titleChangeHandler}></input> 
            </div>
           <div className='new-expense__control'>
              <label>Amount</label>
              <input type='number' min="0.01" step="0.01" value={enteredAmount} onChange={amountChangeHandler}></input>
           </div>
           <div className='new-expense__control'>
              <label>Date</label>
              <input type='date' min='01-01-2019' max='31-12-2027'value={enteredDate} onChange={dateChangeHandler}/>
           </div>
           <div>
              <button type='submit' className='new-expenses__actions'>Add Expense</button>
              <button type='button'onClick={props.setToNormal}>Cancel</button>
           </div>
      </div>
    </form>
}
export default ExpenseForm