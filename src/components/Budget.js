import React, { Fragment } from "react";
import { reviewBudget } from "../helpers";
import PropTypes from "prop-types";

const Budget = ({ budget, remainingBudget }) => (
  <Fragment>
    <div className="alert alert-primary"> Budget = {budget}€ </div>
    <div className={reviewBudget(budget, remainingBudget)}>
      Remaining = {remainingBudget}€
    </div>
  </Fragment>
);

Budget.propTypes = {
  budget: PropTypes.number.isRequired,
  remainingBudget: PropTypes.number.isRequired
};

export default Budget;
