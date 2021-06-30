import React, { useContext } from 'react'
import Transaction from './Transaction'

import { GlobalContext } from '../context/GlobalState'

const TransactionList = () => {
  const context = useContext(GlobalContext)
  const { transactions } = context

  return (
    <>
      {transactions.length > 0 && <h3>History</h3>}
      <ul className='list'>
        {transactions.map(transaction => (
          <Transaction transaction={transaction} key={transaction.id} />
        ))}
      </ul>
    </>
  )
}

export default TransactionList
