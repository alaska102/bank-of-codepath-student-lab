import * as React from "react"
import "./FilterInput.css"

export default function FilterInput({ filterInputValue, onInputChange}) {
  return (
    <div className="filter-input">
      <i className="material-icons">search</i>
      <input 
        type="text" 
        placeholder="Search transactions"
        value={filterInputValue}
        onChange={onInputChange} />
    </div>
  )
}
