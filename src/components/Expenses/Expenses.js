import ExpenseItem from '../Expenses/ExpenseItem';
import Card from '../UI/Card';
import '../Expenses/Expenses.css';
import ExpensesFilter from './ExpenseFilter';
import {useState} from 'react';

function Expenses(props) {

  const[filteredYear,setFilteredYear] = useState('2020');
  const filterChangeHandler = (selectYear) => {
    setFilteredYear(selectYear);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter selected={filteredYear} onSelect={filterChangeHandler} />
     {props.items.map((expense)=>(
      <ExpenseItem
        key= {expense.id} 
       title= {expense.title}
       amount = {expense.amount}
       date = {expense.date}
      />
     ))}
    </Card>
  );
}

export default Expenses;