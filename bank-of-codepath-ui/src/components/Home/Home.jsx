import AddTransaction from "../AddTransaction/AddTransaction"
import BankActivity from "../BankActivity/BankActivity"
import "./Home.css"

export default function Home({ transactions = [], transfers = [], filterInputValue, isLoading, addTransaction }) {
  const transactionsToShow = filterInputValue
    ? transactions?.filter((t) => t.description.toLowerCase().indexOf(filterInputValue.toLowerCase()) !== -1)
    : transactions

  return (
    <div className="Home">
      <AddTransaction addTransaction={addTransaction} />
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <BankActivity transfers={transfers} transactions={transactionsToShow} filterInput={filterInput} />
      )}
    </div>
  )
}