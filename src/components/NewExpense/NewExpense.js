import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
    const [isFormVisible, setFormVisivility] = useState(false);

    const showForm =(value = true)=>{
        setFormVisivility(value);
    }; 
    
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
    };

    return (
        <div className="new-expense">
            {!isFormVisible ? <button onClick={showForm}>Add New Expense</button> :
                <ExpenseForm onShowForm={showForm} onSaveExpenseData={saveExpenseDataHandler} />}
        </div>
    );
};
export default NewExpense;