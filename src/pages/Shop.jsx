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
    const initialProducts = products;
    const [filteredProducts, setFilteredProducts] = useState(initialProducts);
    const { addToCart } = useCart();
    const [showPaymentModal, setShowPaymentModal] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulate loading
        setTimeout(() => {
            setIsLoading(false);
        }, 800);

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

    // Dữ liệu quảng cáo
    const advertisements = [
        { id: 1, title: "Ra mắt sản phẩm mới", image: "https://scontent.fsgn5-5.fna.fbcdn.net/v/t39.30808-6/476632530_122120490788627366_6539008516206799441_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_ohc=NnfxrPdE3goQ7kNvgFfF2wE&_nc_oc=AdgPSgKXQwmYgjMy_RfEL8QyNEIo8vWtpw92U9cnEOOjE8B22Gq4lWMNlrGgoJCLKRYyNHf1IVsP5DKeLKQQ6ijK&_nc_zt=23&_nc_ht=scontent.fsgn5-5.fna&_nc_gid=tu2H-bbJJWrO1h6ooirz-Q&oh=00_AYGFQ6t5SglHAJZlQnW-6dY-GH1q8-oLRcU85Uu1WoAI4g&oe=67DE3378", link: "#" },
        { id: 2, title: "Sản phẩm mới sale", image: "https://scontent.fsgn5-9.fna.fbcdn.net/v/t39.30808-6/481901943_122124142598627366_3456504968128262020_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_ohc=2ckhxszT4a8Q7kNvgFGu0ut&_nc_oc=AdjGboTaKeXhoi2SwvOlzgpPLeXGLqhKsTl6K0wQY2iv_JhVOoUFEBc75CLV8_xrQlAKsme6qTaCG-_eNTE20ucE&_nc_zt=23&_nc_ht=scontent.fsgn5-9.fna&_nc_gid=OuYpoiMKvtHpdkNvVAn5cA&oh=00_AYEnu9un8GSZc-WViUMBag6fwYCkPBX1IULdQLCr5jWQtQ&oe=67DE1EA3", link: "#" },
        { id: 3, title: "Sáng tạo bền vững", image: "https://scontent.fsgn5-14.fna.fbcdn.net/v/t39.30808-6/484161842_122125612160627366_7098370801253822824_n.jpg?stp=dst-jpg_s600x600_tt6&_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_ohc=K_ph7iD9l4sQ7kNvgH1bbQL&_nc_oc=Adhn-bL0-aUx1r5kXXF_HuCNV1qwlIstN16ooq6PSmp7ltI3Ni6QDRnjbOH4NmFB-kKSMcbEu1cyvHph821U9SQQ&_nc_zt=23&_nc_ht=scontent.fsgn5-14.fna&_nc_gid=VTJbT66RWtuQy3NNTJJr-A&oh=00_AYEfvIqfuWEB9Dm-K1rBcRhu0T8jTPxocyG_osLdrvNQuw&oe=67DE4163", link: "#" },
        { id: 4, title: "Sống xanh bảo vệ môi trường", image: "https://scontent.fsgn5-14.fna.fbcdn.net/v/t39.30808-6/477582779_122120884292627366_1776422915161162848_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_ohc=nX0hY1HI-6QQ7kNvgEY4pmq&_nc_oc=AdjrAe723xJ89xjeE8RsBvgamq99EQ0SnuTnUtgpBggIYvZmH6RBg3pcW5zYd4JjoAKUpflI-gBnNawAcNeF0GAh&_nc_zt=23&_nc_ht=scontent.fsgn5-14.fna&_nc_gid=i9dFIKvYC_kuIMmHr9zvpg&oh=00_AYFdCdrTa933xiaU_bIrLpKiWFe-c8Ss7t_clzQYn7i_Kw&oe=67DE4D8F", link: "#" }
    ];
    return (
        <div className="shop-layout-container">
            <ToastContainer position="top-right" autoClose={3000} />

            {/* Thanh tìm kiếm và lọc */}
            <div className="search-filter-area">

                <div className="search-sort-container">
                    <div className="search-box">
                        <i className="fas fa-search search-icon"></i>
                        <input
                            type="text"
                            placeholder="Tìm kiếm sản phẩm..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="search-input"
                            aria-label="Tìm kiếm sản phẩm"
                        />
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
                        </select>
                    </div>
                </div>
            </div>

            {/* Layout chính */}
            <div className="main-shop-layout">
                {/* Quảng cáo bên trái */}
                <div className="ad-sidebar left-sidebar">
                    {advertisements.slice(0, 2).map(ad => (
                        <div className="ad-item" key={`left-${ad.id}`}>
                            <a href={ad.link} title={ad.title} aria-label={ad.title}>
                                <img src={ad.image} alt={ad.title} loading="lazy" />
                                <div className="ad-title">{ad.title}</div>
                            </a>
                        </div>
                    ))}
                </div>

                {/* Khu vực sản phẩm */}
                <div className="products-container">
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
                                            <img src={product.image} alt={product.name} loading="lazy" />
                                        </div>
                                    </Link>
                                    <div className="product-info">
                                        <h3 title={product.name}>{product.name}</h3>
                                        <div className="product-price">
                                            {product.price.toLocaleString()} VNĐ
                                        </div>
                                        <div className="button-group">
                                            <button
                                                className="add-to-cart-shop-btn"
                                                onClick={() => addToCart(product)}
                                                aria-label={`Thêm ${product.name} vào giỏ hàng`}
                                            >
                                                <i className="fas fa-cart-plus"></i> Thêm Vào Giỏ
                                            </button>
                                            <button
                                                className="buy-now-shop-btn"
                                                onClick={() => handleBuyNow(product)}
                                                aria-label={`Mua ngay ${product.name}`}
                                            >
                                                <i className="fas fa-bolt"></i> Mua Ngay
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="no-products-found">
                            <i className="fas fa-search fa-3x"></i>
                            <h3>Không tìm thấy sản phẩm nào phù hợp</h3>
                            <p>Vui lòng thử lại với từ khóa khác hoặc xóa bộ lọc</p>
                            <button className="reset-search-btn" onClick={() => setSearchTerm('')}>
                                Xem tất cả sản phẩm
                            </button>
                        </div>
                    )}
                </div>

                {/* Quảng cáo bên phải */}
                <div className="ad-sidebar right-sidebar">
                    {advertisements.slice(2, 4).map(ad => (
                        <div className="ad-item" key={`right-${ad.id}`}>
                            <a href={ad.link} title={ad.title} aria-label={ad.title}>
                                <img src={ad.image} alt={ad.title} loading="lazy" />
                                <div className="ad-title">{ad.title}</div>
                            </a>
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal thanh toán */}
            {showPaymentModal && selectedProduct && (
                <div className="payment-modal-overlay" onClick={() => setShowPaymentModal(false)}>
                    <div className="payment-modal" onClick={(e) => e.stopPropagation()}>
                        <button
                            className="close-modal"
                            onClick={() => setShowPaymentModal(false)}
                            aria-label="Đóng"
                        >
                            ×
                        </button>
                        <h2>Thông tin thanh toán</h2>
                        <p className="product-name-modal">{selectedProduct.name}</p>
                        <p className="payment-label">Tổng tiền cần thanh toán:</p>
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
                            Quét mã QR bằng ứng dụng ngân hàng để thanh toán
                        </p>
                        <button className="confirm-payment-btn">
                            <i className="fas fa-check-circle"></i> Xác Nhận Thanh Toán
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Shop;