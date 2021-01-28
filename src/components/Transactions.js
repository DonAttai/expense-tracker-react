import React, { useContext } from "react";
import { GlobalContext } from "../App";

const Transactions = ({ transaction }) => {
  const { removeTransaction } = useContext(GlobalContext);
  const sign = transaction.amount < 0 ? "-" : "+";
  return (
    <div>
      <li className="list-group-item d-flex justify-content-between">
        <span>{transaction.item}</span>
        <span>
          {sign}N{Math.abs(transaction.amount)}
        </span>
        <button
          className="btn btn-sm btn-danger float-right"
          onClick={() => removeTransaction(transaction.id)}
        >
          X
        </button>
      </li>
    </div>
  );
};

export default Transactions;
