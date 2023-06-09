import React, { useState } from "react";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");
  const filterChanegeHandler = (selectedYear) => {
    console.log("expenses.js");
    setFilteredYear(selectedYear);
  };
  const filtredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChanegeHandler}
        />
        <ExpensesChart expenses={filtredExpenses} />
        <ExpensesList items={filtredExpenses} />
      </Card>
    </div>
  );
};
export default Expenses;
