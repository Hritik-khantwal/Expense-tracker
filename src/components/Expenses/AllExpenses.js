import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./AllExpenses.css";
import Card from "../UI/card";

const AllExpenses = (props) => {
  return (
    <Card className="expenses">
      {props.item.map((expense) => (
        <ExpenseItem
          title={expense.title}
          price={expense.price}
          date={expense.date}
        />
      ))}
    </Card>
  );
};

export default AllExpenses;
