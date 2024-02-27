import AllExpenses from "./components/Expenses/AllExpenses";
import React, { useState } from "react";
import NewExpense from "./components/NewExpenses/NewExpense";

let DummyExpenses = [
  {
    id: "e1",
    title: "school fees",
    price: 200,
    date: new Date(2023, 5, 12),
  },
  {
    id: "e2",
    title: "tution",
    price: 100,
    date: new Date(2023, 4, 15),
  },
  {
    id: "e3",
    title: "cab",
    price: 300,
    date: new Date(2023, 3, 12),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DummyExpenses);

  const addExpenseHandler = (expense) => {
    const upadatedExpense = [expense, ...expenses];
    setExpenses(upadatedExpense);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <AllExpenses item={expenses} />
    </div>
  );
};

export default App;
