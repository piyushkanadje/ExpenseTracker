import ExpenseDate from '../Expenses/ExpenseDate';
import Card from '../UI/Card';
import '../Expenses/Expense.css';
import React, {useState} from 'react';

function ExpenseItem(props) {
  const [title, setTitle] = useState(props.title);
  const [count, setCount] = useState(0);
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const clickHandler =()=>{
    setTitle('Updated!')
    setCount(count+1);
    if(count+1===2){
      alert("button Pressed Twice");
    }
    //nsetButtonDisabled(true);
    console.log("Clicked!");
  }
  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
      <button onClick={clickHandler} disabled={buttonDisabled}>Click Me !</button>
    </Card>
  );
}

export default ExpenseItem;