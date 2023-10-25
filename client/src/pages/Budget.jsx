import React from "react";
import Budgets from "../components/Budget/Budgets";
import NewBudget from "../components/Budget/newBudget";

const Budget = () => {
  return (
    <main className="relative h-screen">
      <Budgets />
      <NewBudget />
    </main>
  );
};

export default Budget;
