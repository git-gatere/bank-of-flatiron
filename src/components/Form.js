import React, { useState, useRef } from "react"
import './form.css'
import Table from "./Info";
import SearchBar from './Searchbar'
function Form() {
  const input = useRef({form: {}})
  
  const formRef = useRef()
  const [data, setData] = useState([])
  const [query, setQuery] = useState('')


  const handleSubmit = (e) => {
    e.preventDefault();
    const clone = structuredClone(input.current.form)
    setData(prev => {
      return [ ...prev, clone ];
  });
    formRef.current.reset()
    };
    
    function handleChange(e) {
      input.current.form[e.target.name] = e.target.value
    }

    function getSearchTerm(e) {
      setQuery(e.target.value)
     
    }

    const searchedItems = data.filter((item) => {
      return item.description.toLowerCase().includes(query.toLowerCase())
    })

   
    console.log(data)
 
  return (
    <div>
      <SearchBar getSearchTerm={getSearchTerm}/>
      <form onSubmit={handleSubmit} className="form" ref={formRef}>
        <label>Date</label>
        <input type="date" placeholder='Date' name="date"  input={input} onChange={handleChange}/>
        <label>Description</label>
        <input type="text" placeholder='Description' name="description" input={input} onChange={handleChange}/>
        <label>Category</label>
        <input type="text" placeholder='Category' name="category" input={input} onChange={handleChange}/>
        <label>Amount</label>
        <input type="number" placeholder='amount' name="amount" input={input} onChange={handleChange}/>
        <button type="submit" class="button">Add Transaction</button>
      </form>
      <div>
        <Table transactions={searchedItems} />
      </div>
    </div>
  );
}
export default Form;