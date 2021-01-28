import React, { useContext } from "react";
import Transactions from "./Transactions";
import { GlobalContext } from "../App";

const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);
  return (
    <div className="col col-md-4 mx-auto mt-4 mb-5">
      <h5>History</h5>
      <hr className="mt-0" />
      <ul className="list-group">
        {transactions.map((transaction) => (
          <Transactions key={transaction.id} transaction={transaction} />
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;
