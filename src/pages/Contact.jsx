import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import '../cssPages/Contact.css';

function Contact() {
    const handleSubmit = (e) => {
        e.preventDefault();
        // Xử lý logic gửi form ở đây
    };

    return (
        <div className="contact-container">
            <h1>Liên Hệ Với Chúng Tôi</h1>
            
            <div className="contact-info">
                <div className="info-item">
                    <FaPhone className="icon" style={{ color: 'black' }} />
                    <div>
                        <h3>Điện thoại</h3>
                        <p>+84 96 417 93 29</p>
                    </div>
                </div>
                
                <div className="info-item">
                    <FaEnvelope className="icon" style={{ color: 'black' }} />
                    <div>
                        <h3>Email</h3>
                        <p>Ecowarriors0509@gmail.com</p>
                    </div>
                </div>
                
                <div className="info-item">
                    <FaMapMarkerAlt className="icon" style={{ color: 'black' }} />
                    <div>
                        <h3>Địa chỉ</h3>
                        <p> Đại học FPT tại TP.Cần Thơ</p>
                    </div>
                </div>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Họ và tên</label>
                    <input type="text" id="name" required />
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" required />
                </div>

                <div className="form-group">
                    <label htmlFor="subject">Tiêu đề</label>
                    <input type="text" id="subject" required />
                </div>

                <div className="form-group">
                    <label htmlFor="message">Nội dung</label>
                    <textarea id="message" rows="5" required></textarea>
                </div>

                <button type="submit" className="submit-btn">Gửi tin nhắn</button>
            </form>
        </div>
    );
}

export default Contact;
