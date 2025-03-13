import React, { useState, useEffect } from 'react';
import { products } from '../db';

import QRcode from '../img/QRcode.jpg';
import { useCart } from '../context/CartContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../cssPages/Shop.css';
import { Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';

function Shop() {
    const [searchTerm, setSearchTerm] = useState('');
    const [sortOption, setSortOption] = useState('');
    const initialProducts = products

    const [filteredProducts, setFilteredProducts] = useState(initialProducts);

    const { addToCart } = useCart();

    const [showPaymentModal, setShowPaymentModal] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);

    useEffect(() => {
        let results = initialProducts.filter(product =>
            product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            product.description.toLowerCase().includes(searchTerm.toLowerCase())
        );

        if (sortOption === 'priceLowToHigh') {
            results.sort((a, b) => a.price - b.price);
        } else if (sortOption === 'priceHighToLow') {
            results.sort((a, b) => b.price - a.price);
        } else if (sortOption === 'newToOld') {
            results.sort((a, b) => b.id - a.id);
        } else if (sortOption === 'oldToNew') {
            results.sort((a, b) => a.id - b.id);
        }

        setFilteredProducts(results);
    }, [searchTerm, sortOption]);

    const handleBuyNow = (product) => {
        setSelectedProduct(product);
        setShowPaymentModal(true);
    };

    return (
        <div className="shop-container">
           
            <ToastContainer />
            <div className="shop-header">
                <h1>Sản Phẩm Của Chúng Tôi</h1>
                <p>Khám phá bộ sưu tập sản phẩm đa dạng của chúng tôi</p>

                <div className="search-sort-wrapper">
                    <div className="search-container">
                        <i className="fas fa-search search-icon"></i>
                        <input
                            type="text"
                            placeholder="Tìm kiếm sản phẩm..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="search-input"
                        />
                    </div>
                    
                    <div className="sort-container">
                        <select 
                            value={sortOption} 
                            onChange={(e) => setSortOption(e.target.value)}
                            className="sort-select"
                        >
                            <option value=""> Bộ Lọc </option>
                            <option value="priceLowToHigh">Giá: Tăng Dần</option>
                            <option value="priceHighToLow">Giá: Giảm Dần</option>
                            <option value="newToOld">Sản phẩm mới nhất</option>
                            <option value="oldToNew">Sản phẩm cũ nhất</option>
                        </select>
                    </div>
                </div>
            </div>
            
            <div className="products-grid">
                {filteredProducts.map(product => (
                    <div className="product-card" key={product.id}>
                        <Link to={`/product/${product.id}`}>
                            <div className="product-image">
                                <img src={product.image} alt={product.name} />
                            </div>
                        </Link>
                        <div className="product-info">
                            <h3>{product.name}</h3>
                            <div className="product-price">
                                {product.price.toLocaleString()} VNĐ
                            </div>
                            <div className="button-group">
                                <button 
                                    className="add-to-cart-shop-btn" 
                                    onClick={() => addToCart(product)}
                                >
                                    Thêm Vào Giỏ Hàng
                                </button>
                                <button 
                                    className="buy-now-shop-btn" 
                                    onClick={() => handleBuyNow(product)}
                                >
                                    Mua Ngay
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {showPaymentModal && selectedProduct && (
                <div className="payment-modal-overlay">
                    <div className="payment-modal">
                        <button 
                            className="close-modal"
                            onClick={() => setShowPaymentModal(false)}
                        >
                            ×
                        </button>
                        <h2>Thông tin thanh toán</h2>
                        <p>Sản phẩm: {selectedProduct.name}</p>
                        <p>Tổng tiền cần thanh toán:</p>
                        <p className="modal-price">
                            {selectedProduct.price.toLocaleString('vi-VN')} VNĐ
                        </p>
                        <div className="qr-container">
                            <img 
                                src={QRcode}
                                alt="QR Code thanh toán" 
                                className="qr-code"
                            />
                        </div>
                        <p className="payment-instructions">
                            Quét mã QR để thanh toán
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Shop;
