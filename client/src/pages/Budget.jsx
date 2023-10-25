import React from "react";
import Budget from "../components/Budget/Budget";
import NewBudget from "../components/Budget/newBudget";

const page = () => {
  return (
    <main className="relative h-screen">
      <Budget />
      <NewBudget />
    </main>
  );
};

export default page;
