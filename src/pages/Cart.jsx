import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import '../cssPages/Cart.css';
import cart from '../img/cart.jpg';
import QRcode from '../img/QRcode.jpg';

function Cart() {
    const { cartItems, removeFromCart, updateQuantity } = useCart();
    const [showPaymentModal, setShowPaymentModal] = useState(false);

    const totalPrice = cartItems.reduce((sum, item) => sum + (parseFloat(item.price) * item.quantity), 0);

    return (
        <div className="cart-container">
            <h1>Giỏ hàng của bạn ({cartItems.length} sản phẩm)</h1>

            {cartItems.length === 0 ? (
                <div className="empty-cart">
                    <img src={cart} alt="Giỏ hàng trống" />
                    <p>Giỏ hàng của bạn đang trống</p>
                    <button
                        className="continue-shopping"
                        onClick={() => window.location.href = '/shop'}
                    >
                        Tiếp tục mua sắm
                    </button>
                </div>
            ) : (
                <>
                    <div className="cart-items">
                        {cartItems.map(item => (
                            <div key={item.id} className="cart-item">
                                <img src={item.image} alt={item.name} />
                                <div className="item-details">
                                    <h3>{item.name}</h3>
                                    <p>{item.description}</p>
                                    <p className="price">
                                        {item.price.toLocaleString('vi-VN')} VNĐ
                                    </p>
                                    <div className="quantity-controls">
                                        <button
                                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                            disabled={item.quantity <= 1}
                                        >-</button>
                                        <span>{item.quantity}</span>
                                        <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                                    </div>
                                    <button
                                        className="remove-btn"
                                        onClick={() => removeFromCart(item.id)}
                                    >
                                        🗑️
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="cart-summary">
                        <h3>Tóm tắt đơn hàng</h3>
                        <p> Đơn Giá: {totalPrice.toLocaleString('vi-VN')} VNĐ</p>
                        <p>Vận chuyển: Miễn phí</p>
                        <p>Thuế: Tính khi thanh toán</p>
                        <hr />
                        <p><strong>Tổng tiền: {totalPrice.toLocaleString('vi-VN')} VNĐ</strong></p>
                        <button
                            className="checkout-btn"
                            onClick={() => setShowPaymentModal(true)}
                        >
                            <span className="checkout-icon">$</span> Thanh toán
                        </button>
                        <a href="/shop" className="continue-shopping-link">← Tiếp tục mua sắm</a>
                    </div>
                </>
            )}

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
                        <p>Tổng tiền cần thanh toán:</p>
                        <p className="modal-price">
                            {totalPrice.toLocaleString('vi-VN')} VNĐ
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

export default Cart;