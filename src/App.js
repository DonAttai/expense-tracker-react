import React, { useReducer } from "react";
import Header from "./components/Header";
import Balance from "./components/Balance";
import Expenses from "./components/Expenses";
import TransactionList from "./components/TransactionList";
import AddTransaction from "./components/AddTransaction";
import Modal from "./components/Modal";
import reducer from "./context/reducer";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

const defaultState = {
  transactions: [],
  isModalOpen: false,
  modalContent: "",
};

export const GlobalContext = React.createContext();

function App() {
  const [state, dispatch] = useReducer(reducer, defaultState);

  const removeTransaction = (id) => {
    dispatch({
      type: "REMOVE_TRANSACTION",
      payload: id,
    });
  };

  const addTransaction = (transaction) => {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction,
    });
  };
  const noTransaction = () => {
    dispatch({
      type: "NO_TRANSACTION",
    });
  };

  const closeModal = () => {
    dispatch({ type: "CLOSE_MODAL" });
  };
  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        removeTransaction,
        addTransaction,
        closeModal,
        modalContent: state.modalContent,
        noTransaction,
      }}
    >
      <div className="container mt-4">
        <Header />

        <div className="mt-3">
          <Balance />
          <Expenses />
          <TransactionList />
          {state.isModalOpen && <Modal />}
          <AddTransaction />
        </div>
      </div>
    </GlobalContext.Provider>
  );
}

export default App;
