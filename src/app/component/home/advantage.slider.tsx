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

      {/* Hoàn Vốn chỉ trong 4 năm */}

      <Row>
        <Col style={{ background: 'linear-gradient(to right, #6ef195 , #00e3fd)', height: '550px', margin: '0px 15px 0 15px', padding: '15px', borderRadius: '8px', textAlign: 'center', position: 'relative', boxShadow: '0 1px 2px 0 rgba(60,64,67,.1), 0 2px 6px 2px rgba(60,64,67,.15)' }}>
          <div style={{ position: 'absolute', top: 0, left: '50%', translate: '-50% 0%', width: '100%', height: '600px' }}>
            <div style={{ width: '100%', paddingTop: '550px', position: 'relative' }}>
              <Image style={{ borderRadius: '8px' }} alt='bam-tai' layout="fill" objectFit="cover" src='/img/loi-ich.png' />
            </div>
            {/* <Image alt='slmsolar logo' src='/img/home-solar.jpg' width={220} height={220} style={{ position: 'absolute', top: '50px', left: '50%', translate: '-50% -50%' }} /> */}
            <Typography.Title style={{ position: 'absolute', top: '470px', left: '50%', translate: '-50% -50%', width: '100%', color: '#000', textAlign: 'left', padding: '0px 20px' }} level={3}>Hoàn vốn trong 4 năm</Typography.Title>
            {/* <Typography.Title style={{ position: 'absolute', top: '470px', left: '50%', translate: '-50% -50%', width: '100%', fontSize: '14px', color: '#000', fontWeight: 300, textAlign: 'left', padding: '0 20px' }} level={5}>Xác định nhu cầu sử dụng điện và hệ năng lượng mặt trời với công suất phù hợp</Typography.Title> */}
            <div style={{ background: 'linear-gradient(to bottom, #ffffff00, #ffffff60 , #fff)', width: '100%', height: '60px', position: 'absolute', bottom: '-1px' }}></div>
          </div>
        </Col>
      </Row>

      {/* Xài điện mặt trời 20 năm miễn phí */}

      <Row>
        <Col style={{ background: 'linear-gradient(to right, #6ef195 , #00e3fd)', height: '550px', margin: '0px 15px 0 15px', padding: '15px', borderRadius: '8px', textAlign: 'center', position: 'relative', boxShadow: '0 1px 2px 0 rgba(60,64,67,.1), 0 2px 6px 2px rgba(60,64,67,.15)' }}>
          <div style={{ position: 'absolute', top: 0, left: '50%', translate: '-50% 0%', width: '100%', height: '600px' }}>
            <div style={{ width: '100%', paddingTop: '550px', position: 'relative' }}>
              {/* <Image style={{ borderRadius: '8px' }} alt='bam-tai' layout="fill" objectFit="cover" src='/img/photovoltaic-solar-power-panel-field-green-clean-alternative-power-energy-concept-ai-generative.jpg' /> */}
            </div>
            <Typography.Title style={{ position: 'absolute', top: '460px', left: '50%', translate: '-50% -50%', width: '100%', color: '#000', textAlign: 'left', padding: '0px 20px' }} level={3}>Sử dụng điện điện thả ga 20 năm kế tiếp</Typography.Title>
            {/* <Typography.Title style={{ position: 'absolute', top: '470px', left: '50%', translate: '-50% -50%', width: '100%', fontSize: '14px', color: '#000', fontWeight: 300, textAlign: 'left', padding: '0 20px' }} level={5}>Gồm Hóa đơn tiền điện, Mặt bằng mái, Hướng nắng, Đường điện và thiết bị điện trong nhà</Typography.Title> */}
            <div style={{ background: 'linear-gradient(to bottom, #ffffff00, #ffffff60 , #fff)', width: '100%', height: '60px', position: 'absolute', bottom: '-1px' }}></div>
          </div>
        </Col>
      </Row>

      {/* Chống nóng cho mái nhà */}

      <Row>
        <Col style={{ background: 'linear-gradient(to right, #6ef195 , #00e3fd)', height: '550px', margin: '0px 15px 0 15px', padding: '15px', borderRadius: '8px', textAlign: 'center', position: 'relative', boxShadow: '0 1px 2px 0 rgba(60,64,67,.1), 0 2px 6px 2px rgba(60,64,67,.15)' }}>
          <div style={{ position: 'absolute', top: 0, left: '50%', translate: '-50% 0%', width: '100%', height: '600px' }}>
            <div style={{ width: '100%', paddingTop: '550px', position: 'relative' }}>
              {/* <Image style={{ borderRadius: '8px' }} alt='bam-tai' layout="fill" objectFit="cover" src='/img/photovoltaic-solar-power-panel-field-green-clean-alternative-power-energy-concept-ai-generative.jpg' /> */}
            </div>
            <Typography.Title style={{ position: 'absolute', top: '440px', left: '50%', translate: '-50% -50%', width: '100%', color: '#000', textAlign: 'left', padding: '0px 20px' }} level={3}>Chống nắng, chống nóng cho mái nhà giảm từ 6-10 độ, tăng tuổi thọ cho mái nhà</Typography.Title>
            {/* <Typography.Title style={{ position: 'absolute', top: '470px', left: '50%', translate: '-50% -50%', width: '100%', fontSize: '14px', color: '#000', fontWeight: 300, textAlign: 'left', padding: '0 20px' }} level={5}><span>giảm từ 6 - 10 độ <br />giúp tăng độ bền của mái nhà</span></Typography.Title> */}
            <div style={{ background: 'linear-gradient(to bottom, #ffffff00, #ffffff60 , #fff)', width: '100%', height: '60px', position: 'absolute', bottom: '-1px' }}></div>
          </div>
        </Col>
      </Row>

      {/* Luôn sử dụng dòng điện xanh ngay cả khi mất điện lưới */}

      <Row>
        <Col style={{ background: 'linear-gradient(to right, #6ef195 , #00e3fd)', height: '550px', margin: '0px 15px 0 15px', padding: '15px', borderRadius: '8px', textAlign: 'center', position: 'relative', boxShadow: '0 1px 2px 0 rgba(60,64,67,.1), 0 2px 6px 2px rgba(60,64,67,.15)' }}>
          <div style={{ position: 'absolute', top: 0, left: '50%', translate: '-50% 0%', width: '100%', height: '600px' }}>
            <div style={{ width: '100%', paddingTop: '550px', position: 'relative' }}>
              {/* <Image style={{ borderRadius: '8px' }} alt='bam-tai' layout="fill" objectFit="cover" src='/img/photovoltaic-solar-power-panel-field-green-clean-alternative-power-energy-concept-ai-generative.jpg' /> */}
            </div>
            <Typography.Title style={{ position: 'absolute', top: '450px', left: '50%', translate: '-50% -50%', width: '100%', color: '#000', textAlign: 'left', padding: '0px 20px' }} level={3}>Luôn sử dụng dòng điện xanh ngay cả khi mất điện lưới</Typography.Title>
            {/* <Typography.Title style={{ position: 'absolute', top: '480px', left: '50%', translate: '-50% -50%', width: '100%', fontSize: '14px', color: '#000', fontWeight: 300, textAlign: 'left', padding: '0 20px' }} level={5}><span>- Kiểm tra bảo dưỡng định kỳ<br />- Vệ sinh tấm pin<br />- Kiểm tra hiệu suất Inverter</span></Typography.Title> */}
            <div style={{ background: 'linear-gradient(to bottom, #ffffff00, #ffffff60 , #fff)', width: '100%', height: '60px', position: 'absolute', bottom: '-1px' }}></div>
          </div>
        </Col>
      </Row>

    </Slider>

  );
}

export default AdvantageSlider;


