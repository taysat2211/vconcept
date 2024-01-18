"use client";
import "./page.css";
import Carousel from "./components/carousel/carousel";
import Section from "./components/section/section";
import Article from "./components/article/article";
import Card from "./components/card/card";
import ZoomImage from "./components/zoom-image/zoom-image";

export default function Home() {
  const carouselItems = [
    "carousel1.jpg",
    "carousel2.jpg",
    "carousel3.jpg",
    "carousel4.jpg",
  ];
  const about = {
    title: "Giới thiệu",
    description:
      "Thành lập năm 2018, hơn 4 năm kinh nghiệm trong lĩnh vực thiết kế kiến trúc nội thất tại Việt Nam, Ô Vuông mang đến những giá trị sống mới, chuẩn mực mới, hãy để chúng tôi mang đến giá trị tinh thần và sự bền vững cho không gian sống của bạn. Mang đến những công trình thi công chất lượng cao và sắc nét, tự tin làm hài lòng những vị khách hàng khó tính nhất." +
      "<br>" +
      "Liên hệ để được tư vấn cùng chuyên gia",
    directContent: "Đăng ký tư vấn",
  };
  const designs = [
    {
      image: "leopard-thumb.jpg",
      title: "thiết kế",
    },
    {
      image: "leopard-thumb.jpg",
      title: "thiết kế",
    },
    {
      image: "leopard-thumb.jpg",
      title: "thiết kế",
    },
    {
      image: "leopard-thumb.jpg",
      title: "thiết kế",
    },
  ];
  const partner = [
    {
      src: "carousel1.jpg",
      alt: "thumbnail"
    },
    {
      src: "carousel1.jpg",
      alt: "thumbnail"
    },
    {
      src: "carousel1.jpg",
      alt: "thumbnail"
    }
  ]
  return (
    <div>
      <Carousel carouselItems={carouselItems} />
      {/* <Section title="Xin chào" subtitle="Hello" link="/">
        <Article item={about} />
        <div className="col container">
          <h2>CHUYÊN THIẾT KẾ-THI CÔNG</h2>
          <div className="row gx-1 cate-show">
            <div className="col">
              <img src="leopard-thumb.jpg" className="cate-full" alt="thumb" />
            </div>
            <div className="col">
              <img src="leopard-thumb.jpg" className="cate-full" alt="thumb" />
            </div>
            <div className="col">
              <div className="row gy-1">
                <img
                  src="leopard-thumb.jpg"
                  className="cate-half"
                  alt="thumb"
                />
                <img
                  src="leopard-thumb.jpg"
                  className="cate-half"
                  alt="thumb"
                />
              </div>
            </div>
          </div>
        </div>
      </Section> */}
      <Section
        title="Một số thiết kế nổi bật"
        subtitle="Xem tất cả dự án"
        link="/category"
      >
        <div className="container px-3 section-content">
          <div className="row row-cols-3">
            {designs.map((item, index) => (
              <div key={index} className="col">
                <Card design={item} />
              </div>
            ))}
          </div>
        </div>
      </Section>
      {/* <Section
        title="VIDEO CÔNG TRÌNH THỰC TẾ"
        subtitle="LINK YOUTUBE"
        link="https://www.youtube.com/channel/UCCYZjOW59lhh_mM3VUSe4sg"
      >
        {
          designs.map((item,index) => (
            <div  key={index} className="col">
              <Card design={item} />
            </div>
          ))
        }
      </Section> */}
      <Section
        title="QUY TRÌNH LÀM VIỆC VỚI KHÁCH HÀNG"
        subtitle="ĐĂNG KÝ TƯ VẤN"
        link="/contact"
      >
      </Section>
      <img src="carousel2.jpg" alt="quy trình làm việc" className="process" />
      <Section
        title="Đối tác"
        subtitle="Xem thêm"
        link="/"
      >
        <div className="row row-cols-3 mt-3">
          {
            partner.map((item, index) => (
              <div key={index} className="col">
                <ZoomImage src={item.src} alt={item.alt} />
              </div>
            ))
          }
        </div>
      </Section>
    </div>
  );
}
