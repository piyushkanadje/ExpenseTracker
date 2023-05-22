import React from 'react';

import ExpenseForm from '../NewExpenses/ExpensesForm';
import '../NewExpenses/NewExpenses.css';

const NewExpense = (props) => {

    const saveExpenseHandler = (enterendExpenses)=>{

        const expenseData = {
            ...enterendExpenses,
            id: Math.random().toString()
        }
        console.log(expenseData)
        props.onSaveInNewExpense(expenseData);
    }
    


    return (
        <div className='new-expense'>
            <ExpenseForm onSaveExpenseDate={saveExpenseHandler} />
        </div>
    );
};

export default NewExpense;