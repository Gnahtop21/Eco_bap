import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import News1 from '../img/News1.jpg';
import News2 from '../img/News1.jpg';
import News3 from '../img/business.jpg';
import '../cssPages/News.css';


function News() {
    const newsItems = [
        {
            id: 1,
            title: "Sự kiện khuyến mãi lớn",
            date: "31/01/2024", 
            content: "Chương trình khuyến mãi đặc biệt dành cho khách hàng nhân dịp tết đến xuân về.",
            image: News1
        },
        {
            id: 2,
            title: "Ra mắt sản phẩm mới",
            date: "20/01/2025",
            content: "Chúng tôi vừa cho ra mắt dòng sản phẩm mới với thiết kế độc đáo và thân thiện môi trường.",
            image: News2
        },
        {
            id: 3,
            title: "Gọi vốn thành công",
            date: "19/01/2025",
            content: "Nhà Bắp vừa được tài trợ cho dự án mở rộng sản xuất",
            image: News3
        }
    ];

    return (
        <Container className="py-4">
            <h1 className="text-center mb-4">Tin Tức Mới Nhất</h1>
            <Row>
                {newsItems.map(news => (
                    <Col key={news.id} md={4} className="mb-4">
                        <Card style={{ height: '100%' }}>
                            <Card.Img variant="top" src={news.image} />
                            <Card.Body>
                                <Card.Title>{news.title}</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">{news.date}</Card.Subtitle>
                                <Card.Text>{news.content}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default News;
