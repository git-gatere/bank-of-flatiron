import React, { useState } from "react"

import Table from "./Info";
function Form(){
const handleSubmit=(e)=>{
    e.preventDefault();
    const newTransaction={
      date,
        description,
        category,
        amount
    };
    setTransactions([...transactions,newTransaction]);
    setDate('');
    setDescription('');
    setCategory('');
    setAmount('');
  }
  const [transactions,setTransactions]=useState([]);
    const [date,setDate]=useState('');
    const [description,setDescription]=useState('');
    const [category,setCategory]=useState('');
    const [amount,setAmount]=useState('');
    return(
        <div>
            <form onSubmit={handleSubmit}>
    <label>Date</label>
    <input type="date" placeholder='Date'value={date} onChange={(e)=>setDate(e.target.value)}/>
    <label></label>
    <input type="text" placeholder='Description' value={description} onChange={(e)=>setDescription(e.target.value)}/>
  <label></label>
  <input type="text" placeholder='Category'value={category} onChange={(e)=>setCategory(e.target.value)} />
  <label ></label>
  <input type="number" placeholder='amount' value={amount} onChange={(e)=>setAmount(e.target.value)}/>
  <button type="submit" class="button">Add Transaction</button>
  </form>
  <div>
  <Table transactions={transactions}/>
  </div>
  </div>
    );}
  export default Form;