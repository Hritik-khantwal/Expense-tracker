import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const titleChangehandler = (event) => {
    setEnteredTitle(event.target.value);
  };
  const amountChangehandler = (event) => {
    setEnteredAmount(event.target.value);
  };
  const dateChangehandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const Expensedata = {
      title: enteredTitle,
      price: enteredAmount,
      date: new Date(enteredDate),
    };
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");

    props.onSaveData(Expensedata);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <lable>Title</lable>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangehandler}
            required
          />
        </div>
        <div className="new-expense__control">
          <lable>Amount</lable>
          <input
            type="number"
            value={enteredAmount}
            min="0.01"
            step="0.01"
            onChange={amountChangehandler}
            required
          />
        </div>
        <div className="new-expense__control">
          <lable>Date</lable>
          <input
            type="date"
            value={enteredDate}
            onChange={dateChangehandler}
            required
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
