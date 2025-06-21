import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import '../cssPages/ProductDetail.css';
import { products } from '../db';

function ProductDetail() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        setProduct(products.find(p => p.id === parseInt(id)));
        window.scrollTo(0, 0);
    }, [id]);

    if (!product) return <div>Không tìm thấy sản phẩm</div>;

    const recommendedProducts = products
        .filter(item => item.id !== parseInt(id))
        .slice(0, 4);

    return (
        <div className="main-product-wrapper">
            {/* Chi tiết sản phẩm */}
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

                    <div className="product-details">
                        <h3 className="details-title">THÔNG TIN</h3>
                        <ul className="details-list">
                            <li className="details-item">• Sản phẩm làm từ vỏ bắp tái chế – lựa chọn xanh cho cuộc sống hiện đại.</li>
                            <li className="details-item">• Chất liệu: Vỏ bắp tự nhiên, được xử lý khéo léo để đảm bảo độ bền và tính thẩm mỹ.</li>
                            <li className="details-item">• Thiết kế thủ công tinh tế, phù hợp túi tiền.</li>
                            <li className="details-item">• Màu sắc và họa tiết mang phong cách mộc mạc, gần gũi với thiên nhiên.</li>
                        </ul>
                        <div className="product-specs">
                            <p className="spec-item">Vận chuyển nhanh trong 2-3 ngày làm việc.</p>
                            <p className="spec-item">Sản phẩm độc quyền chỉ có tại Nhà Bắp.</p>
                        </div>
                    </div>


                    {/* Nút quay lại đặt cuối */}
                    <div className="product-buttons">
                        <button className="back-to-shop-btn" onClick={() => navigate('/shop')}>
                            <FontAwesomeIcon icon={faArrowLeft} /> QUAY LẠI SHOP
                        </button>
                    </div>
                </div>
            </div>

            {/* Sản phẩm đề xuất */}
            <div className="recommended-products-section">
                <h2 className="recommended-title">SẢN PHẨM ĐỀ XUẤT</h2>
                <div className="recommended-products-grid">
                    {recommendedProducts.map(item => (
                        <div
                            key={item.id}
                            className="recommended-product-card"
                            onClick={() => navigate(`/product/${item.id}`)}
                        >
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
        </div>
    );
}

export default ProductDetail;
