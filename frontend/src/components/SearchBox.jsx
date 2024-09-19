// src/components/SearchBox.jsx
import React, { useState } from 'react';
import { IoSearchOutline } from "react-icons/io5";

function SearchBox({ onSearch }) {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch(searchTerm);
    };

    return (
        <form onSubmit={handleSubmit} className="search-box">
            <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Whar are you looking for?"
            />
            <button type="submit"><IoSearchOutline /></button>
        </form>
    );
}

export default SearchBox;
