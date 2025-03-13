import React from 'react'
import '../cssPages/Footer.css'
import { FaFacebook, FaInstagram, FaTiktok } from 'react-icons/fa'

function Footer() {
    return (
        <div className="footer">
            <div className="footer-content">
                <div className="footer-section">
                    <h3 style={{ textAlign: 'center' }}>Về Chúng Tôi</h3>
                    <p style={{ textAlign: 'justify' }}>Chúng tôi cung cấp những sản phẩm chất lượng cao với giá cả hợp lý.</p>
                </div>
                <div className="footer-section">
                    <h3 style={{ textAlign: 'center' }}>Liên Hệ</h3>
                    <p style={{ textAlign: 'justify' }}>Email: Ecowarriors0509@gmail.com</p>
                    <p style={{ textAlign: 'justify' }}>Điện thoại: (84+) 964.179.329  </p>
                    <p style={{ textAlign: 'justify' }}>Địa chỉ: Đại học FPT tại TP. Cần Thơ.</p>
                </div>
                <div className="footer-section">
                    <h3 style={{ textAlign: 'center' }}>Thời Gian Hoạt Động</h3>
                    <p style={{ textAlign: 'justify' }}>Giờ mở cửa: 8:00 - 22:00</p>
                    <p style={{ textAlign: 'justify' }}>Hoạt động: Thứ 2 - Chủ nhật</p>
                    <p style={{ textAlign: 'justify' }}>Hỗ trợ khách hàng 24/7</p>
                </div>
                <div className="footer-section" style={{ marginBottom: '20px' }}>
                    <h3>Theo Dõi</h3>
                    <div className="social-links" style={{ marginTop: '15px' }}>
                        <a href="https://www.facebook.com/profile.php?id=61568821003334" 
                           target="_blank" 
                           rel="noopener noreferrer"
                           style={{ margin: '0 10px' }}>
                            <FaFacebook className="social-icon" />
                        </a>
                        <a href="#" style={{ margin: '0 10px' }}>
                            <FaInstagram className="social-icon" />
                        </a>
                        <a href="#" style={{ margin: '0 10px' }}>
                            <FaTiktok className="social-icon" />
                        </a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom" style={{ marginTop: '20px' }}>
                <span style={{ textAlign: 'center' }}>&copy; 2025 Bắp - All Rights Reserved.</span>
            </div>
        </div>
    )
}

export default Footer
