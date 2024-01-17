import React, { useState } from 'react';
import './styles.css';
import walmartLogo from "./..images/walmartLogo.svg";

interface HeaderProps {
    onSearch: (searchTerm: string) = void;
}

const Header: React.FC<HeaderProps> = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState<string>('');

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event. target.value);
    };

    const handleSearchSubmit = (event: React.FormEvent) => {
        event. preventDefault(); 
        onSearch (searchTerm);
    };

    return (
        <header className="header-container">
            <div className="logo">
                <img src={walmartLogo} className="logo-image" />
            </div>
            <nav>
                <ul className="nav-list">
                    <li>Home</li>
                    <li> Products</li>
                    <li> Cart </li>
                </ul>
            </nav>
            <form onSubmit={handleSearchSubmit}>
                <input 
                    type="text"
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={handleSearchChange}
                />
                <button type="submit">Search</button>
            </form>

        </header>
    );
 }

 export default Header;
