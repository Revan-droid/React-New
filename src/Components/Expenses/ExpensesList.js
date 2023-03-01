import './ExpensesList.css'
import ExpenseItem from './ExpenseItem';

const ExpensesList=(props)=>{
       if(props.apps.length===0){
        return <h2 className='expenses-list__fallback'>No Expenses Found.</h2>
       }
       return <li className='expenses-list'>
        {props.apps.map((expense)=>
       <ExpenseItem 
       key={expense.id}//key must  be given to uniquely render this element only...
       tile={expense.title}
       amount={expense.amount} 
       date={expense.date}/>)}
       </li>

}
export default ExpensesList;