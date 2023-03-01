//Component code is just a java script function with jsx return syntax
import React ,{ useState }from 'react';/*all hooks start with small letter and
 followed by capital letter in next word.*/
import Card from '../UI/Card';
import ExpenseDate from'./ExpenseDate';
import './ExpenseItem.css';
//const expenseDate = new Date(12,1,2023);
/*const expenseTitle= "BikeInsurance";
const expensePrice= 295;*/
/*{} these are known as dynamic place holders and these can be used to evaluate 
the experssions and it can also run inbuilt functions.*/
//only one root div should be present
const ExpenseItem=(props)=>{
    // hooks must be used in the main function only
    const [title,setTitle]=useState(props.title);
    //console.log("Evalute");
    //let title=props.title;

    const clickHandler=()=>{
        setTitle("updated");
        console.log(title);
    }

    /*const clickHandler=()=>{
    console.log("Clicked")
    }*/
    
    return (
        <Card className='expense-item'>
            <ExpenseDate D={props.date}/>
            <div className='expense-item__description'>
                <h2>{title}</h2>
                <div className='expense-item__price'>${props.amount}</div>
                <button onClick={clickHandler}>change Item</button>
            </div>
        </Card>
    );
}

//Everytime you create component it should be exported in javascript
export default ExpenseItem;