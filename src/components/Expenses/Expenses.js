
import React, { useState } from 'react';
import Card from '../UI/Card';
import ExpensesFilter from '../ExpensesFilter/ExpensesFilter';
import './Expenses.css';
import ExpensesList from './ExpensesList';

const Expenses = (props) => {
  
  // const [expenses, setExpenses] = useState(props.items);
  
  const [filteredExpenses, setFilteredExpenses] = useState(props.items);

  const yearChangHandler = (year) => {
    let result = [];
    if (year === '') {
      setFilteredExpenses(props.items);
    }
    else {
      result = props.items.filter(ex => ex.date.getFullYear() == year);
      setFilteredExpenses(result);
    }
  };
  return (
    <Card className="expenses">
      <ExpensesFilter onYearChange={yearChangHandler} />
      <ExpensesList items={filteredExpenses} />
    </Card>
  );
}

export default Expenses;