import React, { useState } from 'react';
import './App.css';
import Form from './components/Form';
import SearchBar from './components/Searchbar'; 


function App() {
  const [transactions, setTransactions] = useState([]);
  const addTransaction = (transaction) => {
    setTransactions([...transactions, transaction]);
  };

  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="container"> {/* Container to span the whole width of the page */}
      <h1 className="App">The Royal Bank of Flatiron</h1>
      <SearchBar value={searchTerm} onChange={(value) => setSearchTerm(value)} /> {/* Pass onChange prop */}
      <Form addTransaction={addTransaction} />
      
    </div>
  );
}

export default App;