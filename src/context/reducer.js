// import { useContext } from "react";
const reducer = (state, action) => {
  if (action.type === "REMOVE_TRANSACTION") {
    // const newTransactions =
    return {
      ...state,
      transactions: state.transactions.filter(
        (transaction) => transaction.id !== action.payload
      ),
    };
  }
  if (action.type === "ADD_TRANSACTION") {
    const newTransaction = {
      ...state,
      transactions: [...state.transactions, action.payload],
    };
    return newTransaction;
  }
  if (action.type === "NO_TRANSACTION") {
    return {
      ...state,
      isModalOpen: true,
      modalContent: "Please, Add Transaction",
    };
  }

  if (action.type === "CLOSE_MODAL") {
    return { ...state, isModalOpen: false };
  }
  return state;
};

export default reducer;
