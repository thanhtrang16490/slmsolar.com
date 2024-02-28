'use client'
import React from 'react';
import { Col, Row, Typography } from "antd";
import Image from "next/image";
import { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

const useScroll = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return scrollY;
};


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
  const scrollY = useScroll();
  const controls = useAnimation();

  React.useEffect(() => {
    if (scrollY > 320) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, scrollY]);

  return (
    <>
      {serviceData.map((item, index) => {
        return (
          <motion.div
            animate={controls}
            initial="hidden"
            transition={{ duration: 0.5 }}
            variants={{
              visible: { opacity: 1, transform: 'translateY(0px)' },
              hidden: { opacity: 0, transform: 'translateY(50px)' }
            }}
          >
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

                  <Image style={{ position: 'absolute', margin: '0px 20px 0px 20px' }} src={item.image} alt={item.title} width={45} height={45} />

                </Row>


                <Row style={{ position: 'relative' }}>

                  <Typography.Title style={{ position: 'absolute', margin: '60px 20px 0px 20px' }} level={5}>
                    {item.title}
                  </Typography.Title>

                </Row>


                <Row >
                  <Typography.Paragraph style={{ margin: '90px 100px 0px 20px', textAlign: 'left' }}>
                    {item.content}
                  </Typography.Paragraph>
                </Row>

              </Col>
            </Row>
          </motion.div>
        )
      })
      }


    </>

  );
}



export default ServiceSlider;


