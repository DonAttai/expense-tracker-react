import React, { useContext } from "react";
import { GlobalContext } from "../App";

const Balance = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map((transaction) => transaction.amount);
  const balance = amounts
    .reduce((total, item) => (total += item), 0)
    .toFixed(2);
  return (
    <div className="row">
      <div className="col col-md-4 mx-auto">
        <div className="text-left">
          <h5 className="mb-0 ">Your Balance</h5>
          <h3>N{balance}</h3>
        </div>
      </div>
    </div>
  );
};

export default Balance;
