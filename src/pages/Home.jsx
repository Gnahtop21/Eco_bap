import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import { products } from "../db";

import img1 from "../img/sanpham.jpg";
import img2 from "../img/baovemoitruong.jpg";
import img3 from "../img/daotaonghe.jpg";
import img4 from "../img/business.jpg";
import img5 from "../img/thaymuahang.jpg";
import img6 from "../img/gianhang.jpg";
import img7 from "../img/gianhangtetjpg.jpg";
import img8 from "../img/XuanSacTayDo.jpg";
import img9 from "../img/wsSocTrang.jpg";
import fpt from "../img/fpt.jpg";
import ecoka from "../img/ecoka.jpg";
import members from "../img/members.jpg";

import "../cssPages/Home.css";
import { useCart } from "../contexts/CartContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function CustomCarousel() {
  const scrollToProducts = () => {
    document.querySelector(".product-section").scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <Carousel
      fade
      interval={2000}
      className="custom-carousel"
      pause={false}
      touch={true}
    >
      <Carousel.Item>
        <div className="carousel-image-container">
          <img src={img4} alt="First slide" />
          <div className="carousel-overlay">
            <h2>Khám phá sự đổi mới</h2>
            <p>Khám phá các sản phẩm thủ công  tuyệt vời của chúng tôi</p>
            <button className="carousel-btn" onClick={scrollToProducts}>
              Xem thêm
            </button>
          </div>
        </div>
      </Carousel.Item>

      <Carousel.Item>
        <div className="carousel-image-container">
          <img src={img9} alt="Second slide" />
          <div className="carousel-overlay">
            <h2>Đội ngũ chuyên gia</h2>
            <p>Làm việc với đội ngũ chuyên nghiệp và tận tâm của chúng tôi</p>
            <button
              className="carousel-btn"
              onClick={() => (window.location.href = "/shop")}
            >
              Cửa Hàng
            </button>
          </div>
        </div>
      </Carousel.Item>

      <Carousel.Item>
        <div className="carousel-image-container">
          <img src={img1} alt="Third slide" />
          <div className="carousel-overlay">
            <h2>Sản phẩm chất lượng</h2>
            <p>Cam kết những sản phẩm làm hài lòng khách hàng</p>
            <button
              className="carousel-btn"
              onClick={() => (window.location.href = "/contact")}
            >
              Liên Hệ
            </button>
          </div>
        </div>
      </Carousel.Item>
    </Carousel>
  );
}

function Home() {
  const product = products;
  const [visibleProducts, setVisibleProducts] = React.useState(4);
  const [currentEventIndex, setCurrentEventIndex] = useState(0);
  const { addToCart } = useCart();

  const events = [
    {
      image: img6,
      title: "Kết Nối Gian Hàng",
      description:
        "Nơi các sản phẩm độc đáo được trưng bày và giới thiệu, kết nối khách hàng với những giá trị tinh tế và bền vững.",
    },
    {
      image: img7,
      title: "Gian Hàng Tết",
      description:
        "Mang đến sự hòa quyện giữa giá trị văn hóa Tết truyền thống và sáng tạo xanh, với những sản phẩm thân thiện môi trường, đậm nét độc đáo.",
    },
    {
      image: img4,
      title: "Workshop Kết Nối Nghệ Nhân",
      description:
        "Quy trình để tạo nên sản phẩm xanh, kết nối trực tiếp với những người thợ lành nghề giàu kinh nghiệm.",
    },
    {
      image: img8,
      title: "Xuân Sắc Tây Đô",
      description:
        "Sự kiện giao lưu và tri ân các nhà giáo Đại học FPT, tôn vinh một năm cống hiến cho tri thức.",
    },
    {
      image: img9,
      title: "Nghề Truyền Thống Giá Trị Mới",
      description:
        "Workshop tuyên truyền và nâng cao nhận thức cho bà con tại ấp Hòa Thọ tỉnh Sóc Trăng.",
    },
    {
      image: img1,
      title: "Nghề Truyền Thống Giá Trị Mới",
      description: "Workhop nâng cao nhận thức tại Đại Học FPT",
    },
  ];

  const handlePrevEvent = () => {
    setCurrentEventIndex((prev) => {
      const maxIndex = Math.ceil(events.length / 4) - 1; // Tổng số nhóm 4 card
      return prev === 0 ? maxIndex : prev - 1;
    });
  };

  const handleNextEvent = () => {
    setCurrentEventIndex((prev) => {
      const maxIndex = Math.ceil(events.length / 4) - 1; // Tổng số nhóm 4 card
      return prev === maxIndex ? 0 : prev + 1;
    });
  };

  const handleLoadMore = () => {
    setVisibleProducts(products.length);
  };

  return (
    <div className="home-container">
      <ToastContainer />
      <CustomCarousel />

      <div className="tag-list">
        <div className="inner">
          <div className="tag"> Chào </div>
          <div className="tag"> Mừng</div>
          <div className="tag"> Đến</div>
          <div className="tag"> Với</div>
          <div className="tag"> Đại</div>
          <div className="tag"> Gia</div>
          <div className="tag"> Đình</div>
          <div className="tag"> Bắp!</div>
          <div className="tag"> </div>
          <div className="tag"> Chào </div>
          <div className="tag"> Mừng</div>
          <div className="tag"> Đến</div>
          <div className="tag"> Với</div>
          <div className="tag"> Đại</div>
          <div className="tag"> Gia</div>
          <div className="tag"> Đình</div>
          <div className="tag"> Bắp!</div>
        </div>
        <div className="fade"> </div>
      </div>
      <div className="home-hero">
        <div className="hero-image">
          <img src={members} alt="Hero" />
        </div>
        <div className="hero-content">
          <h1>Chào Mừng Đến Với Đại Gia Đình Bắp</h1>
          <p>Cùng khám phá những sản phẩm tuyệt vời nào ^^</p>
          <button
            className="hero-btn"
            onClick={() => (window.location.href = "/shop")}
          >
            Shopping Now
          </button>
        </div>
      </div>




      <div className="product-section">
        <h2>Sản Phẩm Nổi Bật</h2>
        <div className="product-grid">
          {products.slice(0, visibleProducts).map((product) => (
            <div className="product-card" key={product.id}>
              <img src={product.image} alt={product.name} />
              <div className="product-content">
                <h3>{product.name}</h3>
                <div className="product-price">
                  {product.price.toLocaleString()} VNĐ
                </div>
              </div>
              <button
                className="add-to-cart-home-btn"
                onClick={() => addToCart(product)}
              >
                Thêm Vào Giỏ Hàng
              </button>
            </div>
          ))}
        </div>
        {visibleProducts < products.length && (
          <div className="load-more-container">
            <button className="load-more-btn" onClick={handleLoadMore}>
              Xem Thêm
            </button>
          </div>
        )}
      </div>

      <div className="activities-section">
        <h2>Tầm Nhìn Và Sứ Mệnh</h2>
        <div className="activities-container">
          <div className="activity-item">
            <div className="activity-image">
              <img src={img1} alt="Hoạt động 1" />
            </div>
            <div className="activity-content">
              <h3>Sản xuất vật liệu bền vững thân thiện môi trường</h3>
              <p>
                Quy trình sản xuất tuân thủ các tiêu chuẩn xanh, sử dụng nguyên liệu tái chế từ vỏ bắp.
              </p>
            </div>
          </div>

          <div className="activity-item reverse">
            <div className="activity-image">
              <img src={img3} alt="Hoạt động 2" />
            </div>
            <div className="activity-content">
              <h3>Tạo ra nguồn thu nhập cho cộng đồng</h3>
              <p>
                Tổ chức các khóa đào tạo kỹ năng thủ công và phát triển sản phẩm bền vững.
              </p>
            </div>
          </div>

          <div className="activity-item">
            <div className="activity-image">
              <img src={img4} alt="Hoạt động 3" />
            </div>
            <div className="activity-content">
              <h3>Hợp tác để phát triển</h3>
              <p>
                Tăng cường liên kết với đối tác địa phương, doanh nghiệp cùng xây dựng chuỗi cung ứng xanh và mở rộng thị trường.
              </p>
            </div>
          </div>

          <div className="activity-item reverse">
            <div className="activity-image">
              <img src={img2} alt="Hoạt động 4" />
            </div>
            <div className="activity-content">
              <h3>Lan tỏa ý thức bảo vệ môi trường</h3>
              <p>
                Nhân cao ý thức bảo vệ môi trường, lan tỏa trách nhiệm bảo vệ môi trường với cộng đồng.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="events-section">
        <h2>Sự Kiện và Workshop</h2>
        <div className="events-carousel">
          <button className="carousel-nav prev" onClick={handlePrevEvent}>
            ❮
          </button>
          <div className="events-grid-wrapper">
            <div
              className="events-grid"
              style={{
                transform: `translateX(-${(currentEventIndex * 100) / 4}%)`,
                transition: "transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
              }}
            >
              {events.map((event, index) => (
                <div className="event-card" key={index}>
                  <div className="event-image">
                    <img src={event.image} alt={event.title} />
                  </div>
                  <div className="event-content">
                    <h3>{event.title}</h3>
                    <p>{event.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <button className="carousel-nav next" onClick={handleNextEvent}>
            ❯
          </button>
        </div>
      </div>

      <div className="partners-section">
        <h2>Đối Tác Chính</h2>
        <div className="partners-grid">
          <div className="partner-card">
            <div className="partner-logo">
              <img src={ecoka} alt="Đối tác 1" />
            </div>
            <h3>Công ty cổ phần Ecoka</h3>
            <p>
              Đối tác chiến lược hợp tác nhằm đảm bảo nguồn nguyên liệu chất lượng cao.
            </p>
          </div>

          <div className="partner-card">
            <div className="partner-logo">
              <img src={fpt} alt="Đối tác 3" />
            </div>
            <h3>Trường Đại Học FPT</h3>
            <p>
              Đồng hành cùng dự án, mang đến nguồn lực vững chắc và tạo nền tảng phát triển bền vững cho những ý tưởng sáng tạo.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;