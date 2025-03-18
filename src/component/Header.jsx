import React, { useEffect, useState, useRef } from 'react'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import '../cssPages/Header.css'
import logo from '../img/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faSearch, faTimes } from '@fortawesome/free-solid-svg-icons'
import { useCart } from '../contexts/CartContext';  // Sửa đường dẫn này nếu cần

function Header({ products }) {
    const location = useLocation();
    const navigate = useNavigate();
    const { cartItemCount } = useCart();
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [showResults, setShowResults] = useState(false);
    const searchRef = useRef(null);

    // Handle click outside search results to close dropdown
    useEffect(() => {
        function handleClickOutside(event) {
            if (searchRef.current && !searchRef.current.contains(event.target)) {
                setShowResults(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    // Scroll to top when route changes
    useEffect(() => {
        window.scrollTo(0, 0);
        setSearchTerm('');
        setShowResults(false);
    }, [location]);

    // Function to handle link click and scroll to top
    const handleLinkClick = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    // Handle search input change
    const handleSearchChange = (e) => {
        const value = e.target.value;
        setSearchTerm(value);

        if (value.trim() === '' || !products || !Array.isArray(products)) {
            setSearchResults([]);
            setShowResults(false);
            return;
        }

        // Filter products based on search term
        const filteredProducts = products.filter(product =>
            product.name.toLowerCase().includes(value.toLowerCase()) ||
            (product.description && product.description.toLowerCase().includes(value.toLowerCase())) ||
            (product.category && product.category.toLowerCase().includes(value.toLowerCase()))
        );

        setSearchResults(filteredProducts);
        setShowResults(true);
    };

    // Handle search form submission
    const handleSearchSubmit = (e) => {
        e.preventDefault();
        if (searchTerm.trim() !== '') {
            navigate(`/shop?search=${encodeURIComponent(searchTerm)}`);
            setShowResults(false);
        }
    };

    // Handle product click in search results
    const handleProductClick = (productId) => {
        navigate(`/product/${productId}`);
        setSearchTerm('');
        setShowResults(false);
    };

    // Clear search input
    const clearSearch = () => {
        setSearchTerm('');
        setSearchResults([]);
        setShowResults(false);
    };

    return (
        <header className="header-container">
            <div className="header-content">
                <div className="logo-container">
                    <NavLink to="/" onClick={handleLinkClick}>
                        <img src={logo} alt="logo" className="logo" />
                    </NavLink>
                </div>

                <div className="search-box" ref={searchRef}>
                    <form onSubmit={handleSearchSubmit}>
                        <input
                            type="text"
                            placeholder="Search products..."
                            value={searchTerm}
                            onChange={handleSearchChange}
                        />
                        {searchTerm && (
                            <button
                                type="button"
                                className="clear-search-button"
                                onClick={clearSearch}
                            >
                                <FontAwesomeIcon icon={faTimes} />
                            </button>
                        )}
                        <button type="submit" className="search-button">
                            <FontAwesomeIcon icon={faSearch} />
                        </button>
                    </form>

                    {showResults && searchResults.length > 0 && (
                        <div className="search-results">
                            {searchResults.slice(0, 5).map(product => (
                                <div
                                    key={product.id}
                                    className="search-result-item"
                                    onClick={() => handleProductClick(product.id)}
                                >
                                    {product.image && (
                                        <img
                                            src={product.image}
                                            alt={product.name}
                                            className="search-result-image"
                                        />
                                    )}
                                    <div className="search-result-info">
                                        <h4>{product.name}</h4>
                                        <p className="search-result-price">
                                            ${product.price.toFixed(2)}
                                        </p>
                                    </div>
                                </div>
                            ))}
                            {searchResults.length > 5 && (
                                <div
                                    className="see-all-results"
                                    onClick={() => {
                                        navigate(`/shop?search=${encodeURIComponent(searchTerm)}`);
                                        setShowResults(false);
                                    }}
                                >
                                    See all {searchResults.length} results
                                </div>
                            )}
                        </div>
                    )}

                    {showResults && searchResults.length === 0 && searchTerm && (
                        <div className="search-results">
                            <div className="no-results">No products found</div>
                        </div>
                    )}
                </div>

                <nav className="nav-links">
                    <NavLink
                        to="/"
                        className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                        onClick={handleLinkClick}
                    >
                        <span className="nav-text">Home</span>
                    </NavLink>
                    <NavLink
                        to="/news"
                        className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                        onClick={handleLinkClick}
                    >
                        <span className="nav-text">News</span>
                    </NavLink>
                    <NavLink
                        to="/shop"
                        className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                        onClick={handleLinkClick}
                    >
                        <span className="nav-text">Shop</span>
                    </NavLink>
                    <NavLink
                        to="/contact"
                        className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                        onClick={handleLinkClick}
                    >
                        <span className="nav-text">Contact</span>
                    </NavLink>
                    <NavLink
                        to="/cart"
                        className={({ isActive }) => isActive ? "nav-link active" : "nav-link cart-link"}
                        onClick={handleLinkClick}
                    >
                        <span className="nav-text">
                            Cart <FontAwesomeIcon icon={faShoppingCart} />
                            {cartItemCount > 0 && <span className="cart-count">{cartItemCount}</span>}
                        </span>
                    </NavLink>
                </nav>
            </div>
        </header>
    )
}

export default Header