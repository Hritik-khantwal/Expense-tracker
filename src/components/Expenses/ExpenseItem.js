import React from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseData";

const ExpenseItem = (props) => {
  return (
    <div className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__discription">
        <h2> {props.title} </h2>
        <div className="expense-item__price">${props.price}</div>
      </div>
    </div>
  );
};

export default ExpenseItem;
