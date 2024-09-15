
import { useState } from "react";

import './News.css'

const SearchBar = ({ onSearch }) => {

    const [serch, setSearch] = useState('')



    const handleSer = () => {

        onSearch(serch)
        setSearch('')

    }

    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center' }}>
            <h2>News App</h2>
            <div style={{ marginLeft: '10px', display: 'flex', flexWrap: 'wrap', gap: '10px' }}>

                <input type="text" value={serch} onChange={(e) => setSearch(e.target.value)} placeholder="Enter Search.." />

                <button className="btn btn-primary" onClick={handleSer}>Search</button>

            </div>

        </div>
    )
}

export default SearchBar