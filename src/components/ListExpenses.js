import React from "react";
import Expense from "./Expense";
import PropTypes from "prop-types";

const ListExpenses = ({ expenses }) => {
  return (
    <div className="gastos-realizados">
      <h2>List Expenses</h2>
      {expenses.map(expense => (
        <Expense key={expense.id} expense={expense} />
      ))}
    </div>
  );
};

ListExpenses.propTypes = {
  expenses: PropTypes.array.isRequired
};

export default ListExpenses;
