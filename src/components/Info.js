import React from 'react';
import './table.css'
function Table({ transactions }) {
  return (
    <div className='table-container'>
      <table className="my-table">
        <thead>
          <tr >
            <th className='title'>Date</th>
            <th className='title'>Description</th>
            <th className='title'>Category</th>
            <th className='title'>Amount</th>
          </tr>
        </thead>
        <tbody>
          {transactions && transactions.map((transaction, index) => (
            <tr key={index}>
              <td>{transaction.date}</td>
              <td>{transaction.description}</td>
              <td>{transaction.category}</td>
              <td>{transaction.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;