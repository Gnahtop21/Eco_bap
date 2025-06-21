import React, { useState, useEffect } from 'react';
import { products } from '../db';
import { Link } from 'react-router-dom';
import { QRCodeSVG } from 'qrcode.react';
import '../cssPages/Shop.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function Shop() {
    const [searchTerm, setSearchTerm] = useState('');
    const [sortOption, setSortOption] = useState('');
    const [filteredProducts, setFilteredProducts] = useState(products);
    const [searchInput, setSearchInput] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [visibleQRs, setVisibleQRs] = useState({});

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 800);

        let results = products.filter(product =>
            product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            product.description.toLowerCase().includes(searchTerm.toLowerCase())
        );

        switch (sortOption) {
            case 'priceLowToHigh':
                results.sort((a, b) => a.price - b.price);
                break;
            case 'priceHighToLow':
                results.sort((a, b) => b.price - a.price);
                break;
            case 'newToOld':
                results.sort((a, b) => b.id - a.id);
                break;
            case 'oldToNew':
                results.sort((a, b) => a.id - b.id);
                break;
            case 'alphabetical':
                results.sort((a, b) => a.name.localeCompare(b.name));
                break;
            default:
                break;
        }

        setFilteredProducts(results);
    }, [searchTerm, sortOption]);

    const handleSearch = () => setSearchTerm(searchInput);

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') handleSearch();
    };

    const toggleQR = (productId) => {
        setVisibleQRs(prev => ({
            ...prev,
            [productId]: !prev[productId]
        }));
    };

    return (
        <div className="shop-layout-container">
            <div className="search-filter-area">
                <div className="search-sort-container">
                    <div className="search-box">
                        <input
                            type="text"
                            placeholder="Tìm kiếm sản phẩm..."
                            value={searchInput}
                            onChange={(e) => setSearchInput(e.target.value)}
                            onKeyPress={handleKeyPress}
                            className="search-input"
                            aria-label="Tìm kiếm sản phẩm"
                        />
                        <button className="search-button" onClick={handleSearch}>
                            <i className="fas fa-search"></i>
                        </button>
                    </div>
                    <div className="filter-box">
                        <select
                            value={sortOption}
                            onChange={(e) => setSortOption(e.target.value)}
                            className="filter-select"
                            aria-label="Bộ lọc sản phẩm"
                        >
                            <option value="">Bộ Lọc</option>
                            <option value="priceLowToHigh">Giá: Tăng Dần</option>
                            <option value="priceHighToLow">Giá: Giảm Dần</option>
                            <option value="newToOld">Sản phẩm mới nhất</option>
                            <option value="oldToNew">Sản phẩm cũ nhất</option>
                            <option value="alphabetical">Tên: A-Z</option>
                        </select>
                    </div>
                </div>
            </div>

            <div className="main-shop-layout no-ads">
                <main className="products-container">
                    {isLoading ? (
                        <div className="loading-container">
                            <div className="loading-spinner"></div>
                            <p>Đang tải sản phẩm...</p>
                        </div>
                    ) : filteredProducts.length > 0 ? (
                        <div className="products-grid">
                            {filteredProducts.map(product => (
                                <div className="product-card" key={product.id}>
                                    <Link to={`/product/${product.id}`} aria-label={`Xem chi tiết ${product.name}`}>
                                        <div className="product-image">
                                            <img
                                                src={product.image}
                                                alt={product.name}
                                                loading="lazy"
                                            />
                                        </div>
                                        <div className="product-info">
                                            <h3 title={product.name}>{product.name}</h3>
                                            <div className="product-price">
                                                {product.price.toLocaleString()} VNĐ
                                            </div>
                                        </div>
                                    </Link>

                                    {/* Nút icon QR nhỏ */}
                                    <button
                                        className="toggle-qr-btn-icon"
                                        onClick={() => toggleQR(product.id)}
                                        title={visibleQRs[product.id] ? 'Ẩn mã QR' : 'Hiện mã QR'}
                                    >
                                        <i className="fas fa-qrcode"></i>
                                    </button>

                                    {/* QR code nếu được bật */}
                                    {visibleQRs[product.id] && (
                                        <div className="qr-code">
                                            <QRCodeSVG
                                                value={`${window.location.origin}/product/${product.id}`}
                                                size={80}
                                            />
                                            <p className="qr-label">Quét để xem chi tiết</p>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="no-products-found">
                            <i className="fas fa-search fa-3x"></i>
                            <h3>Không tìm thấy sản phẩm nào phù hợp</h3>
                            <p>Vui lòng thử lại với từ khóa khác hoặc xóa bộ lọc</p>
                            <button
                                className="reset-search-btn"
                                onClick={() => {
                                    setSearchTerm('');
                                    setSearchInput('');
                                }}
                            >
                                Xem tất cả sản phẩm
                            </button>
                        </div>
                    )}
                </main>
            </div>
        </div>
    );
}

export default Shop;
