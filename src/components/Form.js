import React, { useState } from "react";
import PropTypes from "prop-types";
import Error from "./Error";
import shortid from "shortid";

const Form = props => {
  const { saveExpense, saveHasAddExpenses } = props;

  const [conceptExpense, saveConceptExpense] = useState("");
  const [amountExpense, saveAmountExpense] = useState("");
  const [error, saveError] = useState(false);

  const addExpense = e => {
    e.preventDefault();
    if (amountExpense < 1 || isNaN(amountExpense) || conceptExpense === "") {
      saveError(true);
      return;
    }
    const expense = {
      conceptExpense,
      amountExpense,
      id: shortid.generate()
    };
    saveExpense(expense);
    saveError(false);
    saveConceptExpense("");
    saveAmountExpense("");
    saveHasAddExpenses(true);
  };

  return (
    <form onSubmit={addExpense}>
      <h2> Add your expenses </h2>
      {error ? (
        <Error message="All fieds are required or amount of the expense is wrong" />
      ) : null}
      <input
        type="text"
        className="u-full-width"
        placeholder="Ex. food"
        onChange={e => saveConceptExpense(e.target.value)}
        value={conceptExpense}
      />
      <input
        type="number"
        className="u-full-width"
        placeholder="Ex. 50"
        onChange={e => saveAmountExpense(parseInt(e.target.value, 10))}
        value={amountExpense}
      />
      <input
        type="submit"
        className="button-primary u-full-width"
        value="Add Expense"
      />
    </form>
  );
};

Form.propTypes = {
  saveExpense: PropTypes.func.isRequired,
  saveHasAddExpenses: PropTypes.func.isRequired
};

export default Form;
