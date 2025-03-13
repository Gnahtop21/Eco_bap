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
    const [notification, setNotification] = useState('');
    const [showPaymentModal, setShowPaymentModal] = useState(false);

    // Define the getProductById function
    const getProductById = (id) => {

        return products.find(product => product.id === parseInt(id));
    };

    useEffect(() => {
        // Fetch product details by ID
        const fetchProduct = async () => {
            const productData = getProductById(id); // Use the defined function
            setProduct(productData);
        };
        fetchProduct();
    }, [id]);

    if (!product) {
        return <div>Product not found</div>;
    }

    const handleAddToCart = () => {
        addToCart({ ...product, quantity });
    };

    const handleQuantityChange = (newQuantity) => {
        setQuantity(newQuantity);
        // Optionally update the cart immediately if needed
        // updateQuantity(product.id, newQuantity);
    };

    const handleBackToShop = () => {
        navigate('/shop');
    };

    const handleBuyNow = () => {
        setShowPaymentModal(true);
    };

    const recommendedProducts = products

    return (

        <div> 
            <div className='product-detail-container-all'>
            <div className="product-detail-container">
            <ToastContainer />
            <div className="product-detail-image">
                <img src={product.image} alt={product.name} />
            </div>
            <div className="product-detail-info">
                <h1>{product.name}</h1>
                <p>{product.description}</p>
                <div className="product-detail-price">
                    {product.price.toLocaleString()} VNĐ
                </div>
                <div className="quantity-selector">
                    <button onClick={() => handleQuantityChange(quantity - 1)} disabled={quantity <= 1}>-</button>
                    <span>{quantity}</span>
                    <button onClick={() => handleQuantityChange(quantity + 1)}>+</button>
                </div>
                <button className="add-to-cart-btn" onClick={handleAddToCart}>
                    Thêm Vào Giỏ Hàng
                </button>
                <button className="buy-now-btn" onClick={handleBuyNow}>
                    Mua Ngay
                </button>
                <button className="back-to-shop-btn" onClick={handleBackToShop}>
                    <FontAwesomeIcon icon={faArrowLeft} /> Quay Lại Shop
                </button>
            </div>

                 </div>
            <div className='recommended-products-container-all'>
            <div className="recommended-products-container">
                <div className="recommended-products">
                    <h2>Sản phẩm đề xuất</h2>
                    <div className="recommended-products-list">
                        {recommendedProducts.map(product => (
                            <div key={product.id} className="product-recommended-card">
                                <img src={product.image} alt={product.name} />
                                <h3>{product.name}</h3>
                                <p>{product.price.toLocaleString()} VNĐ</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div> </div>
        </div>
        
        
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
                        <p>Tổng tiền cần thanh toán:</p>
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
