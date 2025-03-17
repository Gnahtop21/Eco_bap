import React from 'react';
import { Card, Container, Row, Col, Button } from 'react-bootstrap';
import { FaCalendarAlt, FaArrowRight, FaFacebook, FaShare, FaShoppingCart } from 'react-icons/fa';
import News1 from '../img/BoSuuTam.jpg';
import News2 from '../img/SocTrangEvent.jpg';
import News3 from '../img/business.jpg';
import NewsLazada from '../img/lazada.jpg';
import '../cssPages/News.css';

function News() {
    const newsItems = [
        {
            id: 1,
            title: "✨ Ra Mắt Bộ Sưu Tập Thủ Công Độc Đáo ✨",
            category: "Bộ sưu tập",
            date: "17/03/2024",
            summary: "Khám phá bộ sưu tập mới với những thiết kế tinh tế, sáng tạo từ nguyên liệu bền vững.",
            content: "Chúng tôi hân hạnh giới thiệu bộ sưu tập thủ công độc đáo, kết hợp giữa nghệ thuật truyền thống và xu hướng hiện đại. Mỗi sản phẩm không chỉ mang giá trị thẩm mỹ mà còn hướng tới sự bền vững, thân thiện với môi trường.",
            image: News1,
            alt: "Ra mắt bộ sưu tập thủ công độc đáo",
            facebookLink: "https://www.facebook.com/share/p/1HGSLuCQtg/"
        },
        {
            id: 2,
            title: "Nhà Bắp Chính Thức Có Mặt Trên Sàn Lazada🛒",
            category: "Kênh bán hàng",
            date: "17/03/2025",
            summary: "Nhà Bắp mở rộng kênh phân phối với cửa hàng chính thức trên sàn thương mại điện tử Lazada.",
            content: "Từ hôm nay, Nhà Bắp chính thức có mặt trên sàn thương mại điện tử Lazada, mang đến trải nghiệm mua sắm tiện lợi cho khách hàng. Đây là bước đi quan trọng trong chiến lược mở rộng kênh phân phối online của chúng tôi. Quý khách có thể dễ dàng tìm kiếm và đặt hàng các sản phẩm chính hãng từ Nhà Bắp trực tiếp trên ứng dụng hoặc website của Lazada.",
            image: NewsLazada,
            alt: "Nhà Bắp chính thức có mặt trên Lazada",
            facebookLink: "https://www.facebook.com/share/lazada-launch/",
            lazadaLink: "https://www.lazada.vn/shop/eco-bap"
        },
        {
            id: 3,
            title: "Sự kiện nâng cao nhận thức về môi trường tại Sóc Trăng",
            category: "Sự kiện",
            date: "09/03/2025",
            summary: "Chúng tôi tổ chức sự kiện nâng cao nhận thức về bảo vệ môi trường tại Sóc Trăng, thu hút sự tham gia của cộng đồng và doanh nghiệp địa phương.",
            content: "Sự kiện nâng cao nhận thức về bảo vệ môi trường tại Sóc Trăng đã thu hút đông đảo người dân và các doanh nghiệp địa phương tham gia. Chương trình bao gồm các hoạt động thiết thực như hội thảo, triển lãm sản phẩm thân thiện với môi trường và các chiến dịch trồng cây xanh nhằm lan tỏa ý thức bảo vệ thiên nhiên.",
            image: News2,
            alt: "Sự kiện bảo vệ môi trường tại Sóc Trăng",
            facebookLink: "https://www.facebook.com/share/p/1A1GC4sjuj/"
        },
        {
            id: 4,
            title: "Nhà Bắp gọi vốn thành công 50 triệu cho dự án mở rộng",
            category: "Đầu tư",
            date: "19/01/2025",
            summary: "Nhà Bắp vừa được tài trợ cho dự án mở rộng sản xuất với tổng đầu tư 50 triệu.",
            content: "Nhà Bắp vừa được tài trợ 50 triệu cho dự án mở rộng sản xuất, đánh dấu một cột mốc quan trọng trong quá trình phát triển của công ty.",
            image: News3,
            alt: "Nhà Bắp gọi vốn thành công",
            facebookLink: "https://www.facebook.com/share/p/19NGAdBey9/"
        }
    ];

    return (
        <section className="news-section py-5">
            <Container>
                {/* Tiêu đề chính có thẻ H1 */}
                <div className="section-header text-center mb-5">
                    <h1 className="fw-bold">Tin Tức & Sự Kiện Mới Nhất</h1>
                    <p className="text-muted mt-2">Cập nhật những thông tin mới nhất về Nhà Bắp và ngành công nghiệp</p>
                    <div className="divider mt-3 mx-auto"></div>
                </div>

                {/* Bài viết nổi bật - Dùng tin Lazada mới làm tin nổi bật */}
                {newsItems.length > 0 && (
                    <div className="featured-news mb-5">
                        <Row className="g-4">
                            <Col md={7}>
                                <article className="featured-card h-100">
                                    <div className="card-img-wrapper">
                                        <img
                                            src={newsItems[1].image}
                                            alt={newsItems[1].alt}
                                            className="img-fluid rounded"
                                            loading="lazy"
                                        />
                                        <span className="category-badge">{newsItems[1].category}</span>
                                    </div>
                                    <div className="featured-content p-4">
                                        <h2 className="article-title">
                                            <a href={newsItems[1].lazadaLink} target="_blank" rel="noopener noreferrer" className="text-decoration-none">
                                                {newsItems[1].title}
                                            </a>
                                        </h2>
                                        <div className="article-meta d-flex align-items-center mt-2 mb-3">
                                            <FaCalendarAlt className="me-2 text-primary" />
                                            <span className="date">{newsItems[1].date}</span>
                                        </div>
                                        <p className="article-summary">{newsItems[1].content}</p>
                                        <div className="d-flex mt-3 flex-wrap gap-2">
                                            <Button as="a" href={newsItems[1].lazadaLink} target="_blank" rel="noopener noreferrer" variant="outline-danger" className="me-2">
                                                <FaShoppingCart className="me-2" /> Mua sắm ngay trên Lazada
                                            </Button>
                                            <Button as="a" href={newsItems[1].facebookLink} target="_blank" rel="noopener noreferrer" variant="outline-facebook" className="facebook-btn">
                                                <FaFacebook className="me-2" /> Xem trên Facebook
                                            </Button>
                                        </div>
                                    </div>
                                </article>
                            </Col>
                            <Col md={5}>
                                <Row className="g-4 h-100">
                                    {/* Hiển thị 2 tin khác, bỏ qua tin Lazada đã hiển thị ở trên */}
                                    <Col xs={12}>
                                        <article className="news-card h-100">
                                            <div className="card h-100 border-0 shadow-sm">
                                                <Row className="g-0 h-100">
                                                    <Col xs={5} className="news-img-wrapper">
                                                        <img
                                                            src={newsItems[0].image}
                                                            alt={newsItems[0].alt}
                                                            className="img-fluid h-100 rounded-start"
                                                            style={{ objectFit: 'cover' }}
                                                            loading="lazy"
                                                        />
                                                        <span className="category-badge small">{newsItems[0].category}</span>
                                                    </Col>
                                                    <Col xs={7}>
                                                        <div className="card-body d-flex flex-column h-100">
                                                            <h3 className="card-title h5">
                                                                <a className="text-decoration-none">
                                                                    {newsItems[0].title}
                                                                </a>
                                                            </h3>
                                                            <div className="article-meta d-flex align-items-center mt-2 mb-3">
                                                                <FaCalendarAlt className="me-2 text-primary small" />
                                                                <span className="date small">{newsItems[0].date}</span>
                                                            </div>
                                                            <p className="card-text small">{newsItems[0].summary}</p>
                                                            <div className="mt-auto d-flex align-items-center justify-content-between">
                                                                <a className="text-primary d-flex align-items-center">
                                                                </a>
                                                                <a href={newsItems[0].facebookLink} target="_blank" rel="noopener noreferrer" className="facebook-link">
                                                                    <FaFacebook />
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </div>
                                        </article>
                                    </Col>
                                    <Col xs={12}>
                                        <article className="news-card h-100">
                                            <div className="card h-100 border-0 shadow-sm">
                                                <Row className="g-0 h-100">
                                                    <Col xs={5} className="news-img-wrapper">
                                                        <img
                                                            src={newsItems[2].image}
                                                            alt={newsItems[2].alt}
                                                            className="img-fluid h-100 rounded-start"
                                                            style={{ objectFit: 'cover' }}
                                                            loading="lazy"
                                                        />
                                                        <span className="category-badge small">{newsItems[2].category}</span>
                                                    </Col>
                                                    <Col xs={7}>
                                                        <div className="card-body d-flex flex-column h-100">
                                                            <h3 className="card-title h5">
                                                                <a className="text-decoration-none">
                                                                    {newsItems[2].title}
                                                                </a>
                                                            </h3>
                                                            <div className="article-meta d-flex align-items-center mt-2 mb-3">
                                                                <FaCalendarAlt className="me-2 text-primary small" />
                                                                <span className="date small">{newsItems[2].date}</span>
                                                            </div>
                                                            <p className="card-text small">{newsItems[2].summary}</p>
                                                            <div className="mt-auto d-flex align-items-center justify-content-between">
                                                                <a className="text-primary d-flex align-items-center">
                                                                </a>
                                                                <a href={newsItems[2].facebookLink} target="_blank" rel="noopener noreferrer" className="facebook-link">
                                                                    <FaFacebook />
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </div>
                                        </article>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </div>
                )}

                {/* Nút xem tất cả tin tức trên Facebook */}
                <div className="text-center mt-4">
                    <Button as="a" href="https://www.facebook.com/profile.php?id=61568821003334" target="_blank" rel="noopener noreferrer" variant="facebook" className="px-4 py-2 me-3">
                        <FaFacebook className="me-2" /> Xem tất cả tin tức trên Facebook
                    </Button>
                    <Button as="a" href="https://www.lazada.vn/shop/eco-bap" target="_blank" rel="noopener noreferrer" variant="danger" className="px-4 py-2">
                        <FaShoppingCart className="me-2" /> Mua sắm trên Lazada
                    </Button>
                </div>
            </Container>
        </section>
    );
}

export default News;