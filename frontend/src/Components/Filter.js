import { useState } from "react"
import './News.css'

const Filter=({onFilter})=>{


    const [category,setCategory]=useState('')
    const [country,setCountry]=useState('')
    const [language,setLanguage]=useState('')



    const handleFilter=()=>{
        onFilter({category,country,language})
    }




    return(
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', alignItems: 'center' }}>
         <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="">All Categories</option>
        <option value="business">Business</option>
        <option value="entertainment">Entertainment</option>
        <option value="sports">Sports</option>
      </select>

      <select value={country} onChange={(e) => setCountry(e.target.value)}>
        <option value="">All Countries</option>
        <option value="us">United States</option>
        <option value="in">India</option>
        <option value="gb">United Kingdom</option>
      </select>

      <select value={language} onChange={(e) => setLanguage(e.target.value)}>
        <option value="">All Languages</option>
        <option value="en">English</option>
        <option value="es">Spanish</option>
        <option value="fr">French</option>
      </select>


      <button className="btn btn-primary" onClick={handleFilter}>Apply Filters</button>

    </div>
    )
}

export default Filter