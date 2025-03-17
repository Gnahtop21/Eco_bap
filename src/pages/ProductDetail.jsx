import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../cssPages/ProductDetail.css';

import QRcode from '../img/QRcode.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { products } from '../db';

function ProductDetail() {
    const { id } = useParams();
    const navigate = useNavigate();
    const { addToCart } = useCart();
    const [quantity, setQuantity] = useState(1);
    const [product, setProduct] = useState(null);
    const [showPaymentModal, setShowPaymentModal] = useState(false);

    // Define the getProductById function
    const getProductById = (id) => {
        return products.find(product => product.id === parseInt(id));
    };

    useEffect(() => {
        // Fetch product details by ID
        const fetchProduct = async () => {
            const productData = getProductById(id);
            setProduct(productData);
        };
        fetchProduct();
    }, [id]);

    if (!product) {
        return <div>Product not found</div>;
    }

    const handleAddToCart = () => {
        addToCart({ ...product, quantity });
        toast.success("Sản phẩm đã được thêm vào giỏ hàng!");
    };

    const handleQuantityChange = (newQuantity) => {
        if (newQuantity >= 1) {
            setQuantity(newQuantity);
        }
    };

    const handleBackToShop = () => {
        navigate('/shop');
    };

    const handleBuyNow = () => {
        addToCart({ ...product, quantity });
        setShowPaymentModal(true);
    };

    // Get recommended products (filtering out the current product)
    const recommendedProducts = products.filter(item => item.id !== parseInt(id)).slice(0, 4);

    // Product info for bag
    const productInfo = [
        "Túi đeo làm từ vỏ bắp bền vững, thân thiện môi trường",
        "Chất liệu: Vỏ bắp tự nhiên, nhẹ, bền"
    ];

    return (
        <div className="main-product-wrapper">
            <div className="product-layout-container">
                <div className="product-image-section">
                    <img src={product.image} alt={product.name} className="product-main-image" />
                </div>

                <div className="product-info-section">
                    <div className="product-heading">
                        <h1 className="product-title">{product.name}</h1>
                        <p className="product-sku">SKU: {product.id}</p>
                    </div>

                    <div className="product-pricing">
                        <span className="discount-badge">-30%</span>
                        <span className="current-price">{product.price.toLocaleString()} VNĐ</span>
                        <span className="original-price">{(product.price * 1.3).toLocaleString()} VNĐ</span>
                    </div>

                    <div className="quantity-selector">
                        <button onClick={() => handleQuantityChange(quantity - 1)} disabled={quantity <= 1}>-</button>
                        <span>{quantity}</span>
                        <button onClick={() => handleQuantityChange(quantity + 1)}>+</button>
                    </div>

                    <div className="product-buttons">
                        <button className="add-to-cart-btn" onClick={handleAddToCart}>
                            THÊM VÀO GIỎ HÀNG
                        </button>
                        <button className="buy-now-btn" onClick={handleBuyNow}>MUA NGAY</button>
                        <button className="back-to-shop-btn" onClick={handleBackToShop}>
                            <FontAwesomeIcon icon={faArrowLeft} /> QUAY LẠI SHOP
                        </button>
                    </div>

                    <div className="product-details">
                        <h3 className="details-title">THÔNG TIN</h3>
                        <ul className="details-list">
                            {productInfo.map((info, index) => (
                                <li key={index} className="details-item">• {info}</li>
                            ))}
                        </ul>

                        <div className="product-specs">
                            <p className="spec-item">Kích thước: 20cm x 15cm x 5cm</p>
                            <p className="spec-item">Vận chuyển từ 2-3 ngày</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="recommended-products-section">
                <h2 className="recommended-title">SẢN PHẨM ĐỀ XUẤT</h2>
                <div className="recommended-products-grid">
                    {recommendedProducts.map(item => (
                        <div key={item.id} className="recommended-product-card" onClick={() => navigate(`/product/${item.id}`)}>
                            <div className="recommended-product-image">
                                <img src={item.image} alt={item.name} />
                            </div>
                            <div className="recommended-product-info">
                                <h3 className="recommended-product-name">{item.name}</h3>
                                <div className="recommended-product-price">
                                    <span className="recommended-current-price">{item.price.toLocaleString()} VNĐ</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <ToastContainer position="top-right" autoClose={3000} />

            {showPaymentModal && (
                <div className="payment-modal-overlay">
                    <div className="payment-modal">
                        <button
                            className="close-modal"
                            onClick={() => setShowPaymentModal(false)}
                        >
                            ×
                        </button>
                        <h2>Thông tin thanh toán</h2>
                        <p>Sản phẩm: {product.name}</p>
                        <p className="modal-price">
                            {(product.price * quantity).toLocaleString('vi-VN')} VNĐ
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

export default ProductDetail;