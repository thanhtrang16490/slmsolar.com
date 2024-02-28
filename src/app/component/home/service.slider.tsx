'use client'

import { Col, Row, Typography } from "antd";
import Image from "next/image";
import React, { useState, useEffect } from 'react';
import './service.slider.css';



const serviceData = [
  {
    image: '/img/support-icon.svg',
    title: 'TƯ VẤN MIỄN PHÍ',
    content: 'Dựa trên dữ liệu: Hoá đơn tiền điện hàng tháng, mặt bằng lắp đặt, hướng nắng, hệ thống điện gia đình'
  },
  {
    image: '/img/khao-sat.svg',
    title: 'KHẢO SÁT MIỄN PHÍ',
    content: 'Khảo sát trực tiếp mặt bằng lắp đặt, đo đạc và đưa ra phương án thi công phù hợp và tối ưu nhất'
  },
  {
    image: '/img/lap-dat-icon.svg',
    title: 'LẮP ĐẶT TRỌN GÓI',
    content: 'Tổng thầu EPC các dự án NLMT hệ gia đình 3kW-50kW, hệ công nghiệp từ 100kW - 5 MW'
  },
  {
    image: '/img/bao-hanh-icon.svg',
    title: 'BẢO HÀNH 24/7',
    content: 'Solarmax cam kết bảo hành sản phẩm và hỗ trợ gia đình trong suốt thời gian sử dụng 24/7'
  },

]

const ServiceSlider = () => {
  const [showTitle, setShowTitle] = useState(false);

  const checkScroll = () => {
    if (window.pageYOffset > 250) { // Change this value based on when you want the title to appear
      setShowTitle(true);
    } else {
      setShowTitle(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', checkScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', checkScroll);
    };
  }, []);

  return (
    <>
      {serviceData.map((item, index) => {
        return (
          <Row >
            <Col style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              width: '100%',
              margin: '20px 15px 0px 15px',
              height: '100%',
            }}>

              <Row style={{ position: 'relative' }}>
                <div className={`scroll-title ${showTitle ? 'show' : ''}`}>
                  <Image style={{ position: 'absolute', margin: '0px 20px 0px 20px' }} src={item.image} alt={item.title} width={45} height={45} />
                </div>
              </Row>
              <Row style={{ position: 'relative' }}>
                <div className={`scroll-title ${showTitle ? 'show' : ''}`}>
                  <Typography.Title style={{ position: 'absolute', margin: '60px 20px 0px 20px' }} level={5}>
                    {item.title}
                  </Typography.Title>
                </div>
              </Row>
              <Row >

                <Typography.Paragraph style={{ margin: '90px 100px 0px 20px', textAlign: 'left' }}>
                  {item.content}
                </Typography.Paragraph>
              </Row>
            </Col>
          </Row>
        )
      })

      }
    </>

  );
}



export default ServiceSlider;


