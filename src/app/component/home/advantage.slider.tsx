'use client'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Settings } from "react-slick";
import { Col, Row, Typography } from "antd";
import Image from "next/image";

const AdvantageSlider = () => {
  const settings: Settings = {
    dots: true,
    appendDots: dots => (
      <div
        style={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "flex-start"
        }}
      >
        <ul style={{ margin: "0 0 40px 200px" }}> {dots} </ul>
      </div>
    ),
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <Slider {...settings}>



      <Row>
        <Col style={{ height: '360px', margin: '0px 15px 0 15px', padding: '15px', borderRadius: '8px', textAlign: 'center', position: 'relative', boxShadow: '0 1px 2px 0 rgba(60,64,67,.1), 0 2px 6px 2px rgba(60,64,67,.15)' }}>
          <div style={{ position: 'absolute', top: 0, left: '50%', translate: '-50% 0%', width: '100%', height: '360px' }}>
            <div style={{ width: '100%', paddingTop: '360px', position: 'relative' }}>
              <Image style={{ borderRadius: '8px' }} alt='bam-tai' layout="fill" objectFit="cover" src='/img/ad1.png' />
            </div>
          </div>
        </Col>
      </Row>



    </Slider>

  );
}

export default AdvantageSlider;


