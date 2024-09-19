// src/components/Header.jsx
import React from "react";
import './header.css';
import SearchBox from "../components/SearchBox";
import { MdOutlineShoppingCart } from "react-icons/md";
import { MdFavoriteBorder } from "react-icons/md";
import { FiUser } from "react-icons/fi";

const Header = () => {
    const handleSearch = (searchTerm) => {
        console.log('Searching for:', searchTerm);
        // Implement search functionality here
    };

    return (
        <div className="header">
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/products">Shop</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/contact">Contact Us</a></li>
                    <li><SearchBox onSearch={handleSearch} /></li>
                    <li><a href="/wishlist"><MdFavoriteBorder /> </a></li>
                    <li><a href="/cart"><MdOutlineShoppingCart /></a></li>
                    <li><a href="/profile"><FiUser /> </a></li>
                </ul>
            </nav>
        </div>
    );
}

export default Header;
