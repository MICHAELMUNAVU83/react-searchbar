import React, { useState, useEffect } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

function AccountContainer() {
  const [transactions, setTransactions] = useState([]);
  const [search, setSearch] = useState("");
  const handleSearch = (e) => {
    setSearch(e.target.value);
    const filteredTransactions = transactions.filter((transaction) =>
      transaction.description.includes(e.target.value)
    );
    setTransactions(filteredTransactions);
  };
  const fetchingData = async () => {
    const response = await fetch("http://localhost:8001/transactions");
    const data = await response.json();
    setTransactions(data);
  };

  useEffect(() => {
    fetchingData();
  },[]);

  return (
    <div>
      <Search search={search} transactions={transactions} handleSearch={handleSearch} />
      <AddTransactionForm fetchingData={fetchingData} />
      <TransactionsList
        transactions={transactions}
        fetchingData={fetchingData}
        setTransactions={setTransactions}
      />
    </div>
  );
}

export default AccountContainer;
