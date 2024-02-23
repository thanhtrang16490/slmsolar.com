'use client'
import { Card, Col, Layout, Row, Statistic, Steps, Tabs, Typography } from "antd";

import { Content } from "antd/es/layout/layout";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Settings } from "react-slick";
import Image from "next/image";



const settings: Settings = {
  dots: true,
  appendDots: dots => (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start"  // Aligns dots to the top
      }}
    >
      <ul style={{ margin: "0 0 40px 0" }}> {dots} </ul>
    </div>
  ),
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
};

export default function he3kw() {

  return (
    <>

      <Layout style={{ width: '100%', background: '#fff' }}>
        <Content style={{ display: 'flex', flexDirection: 'column', width: '100%', alignContent: 'center' }}>
          <Row>
            <Typography.Title style={{ margin: '80px auto 0' }} level={5}>COMBO BÁM TẢI - 1 PHA - 3KWP</Typography.Title>
            <Col>

              <Slider {...settings}>

                <Row>
                  <Col style={{ background: '#fff', height: '520px', margin: '10px 0px 0 0px', padding: '15px', textAlign: 'left' }}>
                    <div style={{ position: 'absolute', top: 0, left: '50%', translate: '-50% 0%', width: '90%', height: '300px' }}>
                      <div style={{ width: '100%', paddingTop: '100%', position: 'relative' }}>
                        <Image alt='bam-tai' layout="fill" objectFit="cover" src='/img/combo-solar.webp' />
                      </div>
                      {/* <Image alt='slmsolar logo' src='/img/solarmax-logo.png' width={120} height={24} style={{ position: 'absolute', top: '50px', left: '50%', translate: '-50% -50%' }} /> */}
                      <Typography.Title style={{ position: 'absolute', top: '390px', left: '50%', translate: '-50% -50%', width: '100%', color: '#000' }} level={5}>Phủ xanh mái nhà Việt</Typography.Title>
                      <Typography.Title style={{ position: 'absolute', top: '440px', left: '50%', translate: '-50% -50%', width: '100%', fontSize: '14px', color: '#000', fontWeight: 300 }} level={5}>Sứ mệnh đến năm 2030 lắp đặt được 1 triệu m2 tấm pin NLMT cho mái nhà gia đình - nhà máy Việt</Typography.Title>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col style={{ background: '#fff', height: '520px', margin: '10px 0px 0 0px', padding: '15px', textAlign: 'left' }}>
                    <div style={{ position: 'absolute', top: 0, left: '50%', translate: '-50% 0%', width: '90%', height: '300px' }}>
                      <div style={{ width: '100%', paddingTop: '100%', position: 'relative' }}>
                        <Image alt='bam-tai' layout="fill" objectFit="cover" src='/img/combo-solar.webp' />
                      </div>
                      <Image alt='slmsolar logo' src='/img/solarmax-logo.png' width={120} height={24} style={{ position: 'absolute', top: '50px', left: '50%', translate: '-50% -50%' }} />
                      <Typography.Title style={{ position: 'absolute', top: '390px', left: '50%', translate: '-50% -50%', width: '100%', color: '#000' }} level={5}>Phủ xanh mái nhà Việt</Typography.Title>
                      <Typography.Title style={{ position: 'absolute', top: '440px', left: '50%', translate: '-50% -50%', width: '100%', fontSize: '14px', color: '#000', fontWeight: 300 }} level={5}>Sứ mệnh đến năm 2030 lắp đặt được 1 triệu m2 tấm pin NLMT cho mái nhà gia đình - nhà máy Việt</Typography.Title>
                    </div>
                  </Col>
                </Row>


              </Slider>

            </Col>
          </Row>




        </Content>
      </Layout>



    </>
  )
}
