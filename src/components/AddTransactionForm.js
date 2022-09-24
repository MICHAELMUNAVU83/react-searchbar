import React, { useState } from "react";

function AddTransactionForm() {
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");
  const postTransaction = async (e) => {
    await fetch("http://localhost:8001/transactions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        date: date,
        description: description,
        category: category,
        amount: amount,
      }),
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    postTransaction();
    setDate("");
    setDescription("");
    setCategory("");
    setAmount("");
  };
  return (
    <div className="ui segment">
      <form className="ui form" onSubmit={handleSubmit}>
        <div className="inline fields">
          <input
            onChange={(e) => {
              setDate(e.target.value);
            }}
            value={date}
            type="date"
            name="date"
          />
          <input
            type="text"
            onChange={(e) => {
              setDescription(e.target.value);
            }}
            value={description}
            name="description"
            placeholder="Description"
          />
          <input
            onChange={(e) => {
              setCategory(e.target.value);
            }}
            value={category}
            type="text"
            name="category"
            placeholder="Category"
          />
          <input
            onChange={(e) => {
              setAmount(e.target.value);
            }}
            value={amount}
            type="number"
            name="amount"
            placeholder="Amount"
            step="0.01"
          />
        </div>
        <button className="ui button" type="submit">
          Add Transaction
        </button>
      </form>
    </div>
  );
}

export default AddTransactionForm;
