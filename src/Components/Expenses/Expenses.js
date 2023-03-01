
import './Expenses.css'

import Card from'../UI/Card';
import ExpenseFilter from '../NewExpense/ExpenseFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

import { useState } from 'react';
function Expenses(props){
   const[changeFilter,setFilter]=useState('2023');
   const onChangeFilter=(changedvalue)=>{
    setFilter(changedvalue);
   }
   const filteredExpenses=props.expenses.filter(a=>{
       return a.date.getFullYear().toString() === changeFilter;
   })
return(
   <div>
    <Card className='expenses'>
     <ExpenseFilter RefreshedValue={changeFilter} ADDIT={onChangeFilter}/>
     <ExpensesChart expenses={filteredExpenses}></ExpensesChart>
     <ExpensesList apps={filteredExpenses}/>
    </Card>
    </div>
);}

export default Expenses;
/*
     <ExpenseItem
        title={props.expenses[0].title}
        amount={props.expenses[0].amount}
        date={props.expenses[0].date}
     />
     <ExpenseItem
        title={props.expenses[1].title}
        amount={props.expenses[1].amount}
        date={props.expenses[1].date}
     />
    <ExpenseItem
       title={props.expenses[2].title}
       amount={props.expenses[2].amount}
       date={props.expenses[2].date}
     />
    <ExpenseItem
       title={props.expenses[3].title}
       amount={props.expenses[3].amount}
       date={props.expenses[3].date}
     />
     
     
     
     */