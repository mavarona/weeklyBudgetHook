import React, { useState, useEffect } from "react";
import Question from "./components/Question";
import Form from "./components/Form";
import ListExpenses from "./components/ListExpenses";
import Budget from "./components/Budget";

function App() {
  const [budget, saveBudget] = useState(0);
  const [remainingBudget, saveRemainingBudget] = useState(0);
  const [showQuestion, saveShowQuestion] = useState(true);
  const [hasAddExpenses, saveHasAddExpenses] = useState(false);
  const [expense, saveExpense] = useState({});
  const [expenses, saveExpenses] = useState([]);

  useEffect(() => {
    if (hasAddExpenses) {
      const listExpenses = [...expenses, expense];
      saveExpenses(listExpenses);
      const remaining = remainingBudget - expense.amountExpense;
      saveRemainingBudget(remaining);
      saveHasAddExpenses(false);
    }
  }, [hasAddExpenses]);

  return (
    <div className="App container">
      <header>
        <h1>Weekly Expenses</h1>
        <div className="contenido-principal contenido">
          {showQuestion ? (
            <Question
              saveBudget={saveBudget}
              saveShowQuestion={saveShowQuestion}
              saveRemainingBudget={saveRemainingBudget}
            />
          ) : (
            <div className="row">
              <div className="one-half column">
                <Form
                  saveExpense={saveExpense}
                  saveHasAddExpenses={saveHasAddExpenses}
                />
              </div>
              <div className="one-half column">
                <ListExpenses expenses={expenses} />
                <Budget budget={budget} remainingBudget={remainingBudget} />
              </div>
            </div>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
