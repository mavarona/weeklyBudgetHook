import React, { Fragment, useState } from "react";
import Error from "./Error";
import PropTypes from "prop-types";

const Question = props => {
  const [amount, saveAmount] = useState(0);
  const [error, saveError] = useState(false);

  const { saveBudget, saveShowQuestion, saveRemainingBudget } = props;

  const addBudget = e => {
    e.preventDefault();
    if (amount < 1 || isNaN(amount)) {
      saveError(true);
      return;
    }
    saveError(false);
    saveBudget(amount);
    saveRemainingBudget(amount);
    saveShowQuestion(false);
  };

  return (
    <Fragment>
      <h2> Budget </h2> {error ? <Error message="The Budget is Wrong" /> : null}
      <form onSubmit={addBudget}>
        <input
          type="number"
          className="u-full-width"
          placeholder="Add Budget"
          onChange={e => saveAmount(parseInt(e.target.value, 10))}
        />{" "}
        <input
          type="submit"
          className="button-primary u-full-width"
          value="Define Budget"
        />
      </form>{" "}
    </Fragment>
  );
};

Question.propTypes = {
  saveBudget: PropTypes.func.isRequired,
  saveShowQuestion: PropTypes.func.isRequired,
  saveRemainingBudget: PropTypes.func.isRequired
};

export default Question;
