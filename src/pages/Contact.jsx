import React, { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaUser, FaComments } from 'react-icons/fa';
import '../cssPages/Contact.css';

function Contact() {
    const [formData, setState] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { id, value } = e.target;
        setState(prevState => ({
            ...prevState,
            [id]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Form submission logic here
        console.log('Form data:', formData);
        setSubmitted(true);
        // Reset form after submission
        setTimeout(() => {
            setState({
                name: '',
                email: '',
                subject: '',
                message: ''
            });
            setSubmitted(false);
        }, 3000);
    };

    return (
        <div className="contact-container">
            <div className="contact-header">
                <h1>Liên Hệ Với Chúng Tôi</h1>
                <p className="contact-subtitle">Hãy để lại thông tin của bạn, chúng tôi sẽ liên hệ lại trong thời gian sớm nhất</p>
            </div>

            <div className="contact-wrapper">
                <div className="contact-info">
                    <div className="info-card">
                        <FaPhone className="info-icon" />
                        <div className="info-content">
                            <h3>Điện thoại</h3>
                            <p><a href="tel:+84964179329">+84 96 417 93 29</a></p>
                        </div>
                    </div>

                    <div className="info-card">
                        <FaEnvelope className="info-icon" />
                        <div className="info-content">
                            <h3>Email</h3>
                            <p><a href="mailto:Ecobap954@gmail.com">Ecobap954@gmail.com</a></p>
                        </div>
                    </div>

                    <div className="info-card">
                        <FaMapMarkerAlt className="info-icon" />
                        <div className="info-content">
                            <h3>Địa chỉ</h3>
                            <p>Đại học FPT tại TP.Cần Thơ</p>
                        </div>
                    </div>
                </div>

                <div className="contact-form-wrapper">
                    <h2>Gửi tin nhắn cho chúng tôi</h2>

                    {submitted ? (
                        <div className="form-success">
                            <h3>Cảm ơn bạn đã liên hệ!</h3>
                            <p>Chúng tôi sẽ phản hồi trong thời gian sớm nhất.</p>
                        </div>
                    ) : (
                        <form className="contact-form" onSubmit={handleSubmit}>
                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="name">
                                        <FaUser className="form-icon" />
                                        <span>Họ và tên</span>
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Nhập họ và tên của bạn"
                                        required
                                        aria-required="true"
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="email">
                                        <FaEnvelope className="form-icon" />
                                        <span>Email</span>
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="Nhập email của bạn"
                                        required
                                        aria-required="true"
                                    />
                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="subject">
                                    <FaComments className="form-icon" />
                                    <span>Tiêu đề</span>
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    placeholder="Nhập tiêu đề tin nhắn"
                                    required
                                    aria-required="true"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="message">
                                    <FaComments className="form-icon" />
                                    <span>Nội dung</span>
                                </label>
                                <textarea
                                    id="message"
                                    rows="5"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Nhập nội dung tin nhắn của bạn"
                                    required
                                    aria-required="true"
                                ></textarea>
                            </div>

                            <button type="submit" className="submit-btn">
                                Gửi tin nhắn
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Contact;