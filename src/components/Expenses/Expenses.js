
import React, { useState } from 'react';

import Card from '../UI/Card';
import ExpensesFilter from '../ExpensesFilter/ExpensesFilter';
import ExpensesList from './ExpensesList';
import './Expenses.css';

const Expenses = (props) => {

  const [filteredYear, setFilteredYear] = useState("0");

  const yearChangHandler = (year) => {
    setFilteredYear(year);
  };
 
  const  filteredExpenses = props.items.filter((expense) => {
      if (filteredYear === '0')
        return props.items;
      return expense.date.getFullYear().toString() === filteredYear;
    }).sort((a,b) => b.date - a.date);;

  return (
    <Card className="expenses">
      <ExpensesFilter onYearChange={yearChangHandler} />
      <ExpensesList items={filteredExpenses} />
    </Card>
  );
}

export default Expenses;