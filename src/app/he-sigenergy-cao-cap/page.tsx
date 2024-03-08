'use client'
import { Card, Col, Divider, Layout, Row, Statistic, Steps, Tabs, Typography } from "antd";
import { Content } from "antd/es/layout/layout";
import { RightOutlined, ThunderboltOutlined } from '@ant-design/icons';
import Image from "next/image";






export default function heSigeneryCaoCap() {

  return (
    <>
      <Layout style={{ width: '100%', background: '#fff' }}>
        <Content style={{ display: 'flex', flexDirection: 'column', width: '100%', alignContent: 'center' }}>

          <Row style={{}}>
            <Col style={{
              width: '100%', height: '90px', margin: '0px 0px 0 0px', padding: '0px', textAlign: 'center', position: 'relative'
            }}>
              <div style={{ height: '220px', width: '100%', position: 'absolute', top: '80px' }}>
                <Image
                  src='/img/sigenergy-header.webp'
                  fill
                  style={{ objectFit: 'cover' }}
                  alt='sigenergy-logo'
                />
              </div>
              <Image alt='sigenergy-logo logo' src='/img/sigenergy/sigenergy-logo.svg' width={140} height={30} style={{ position: 'absolute', top: 28, right: '70px', zIndex: 1 }} />
              <div style={{ position: 'absolute', top: 290, left: '50%', translate: '-50% 0%', width: '100%', height: '600px', zIndex: 1 }}>
                <Typography.Title style={{ textAlign: 'left', margin: '30px 0 0px 20px', fontSize: '30px', fontWeight: '600' }} >HỆ THỐNG UPS SIGENSTOR</Typography.Title>
                <Typography.Paragraph style={{ textAlign: 'left', margin: '10px 70px 10px 20px', fontSize: '14px', fontWeight: '300' }} >Cuộc cách mạng công nghệ 5.0 cho hệ thống lưu trữ năng lượng</Typography.Paragraph>
              </div>
              <div style={{ position: 'absolute', top: 380, left: '50%', translate: '-50% 0%', width: '100%', height: '600px' }}>
                <video style={{}} width="100%" height="390" preload="auto" autoPlay muted loop playsInline>
                  <source src="/img/sigenergy/sigenergy-5en1.mp4" type="video/mp4" />
                  <track
                    src="/img/sigenergysigenergy-5en1.mp4"
                    kind="subtitles"
                    srcLang="en"
                    label="English"
                  />
                  Your browser does not support the video tag.
                </video>              </div>

            </Col>
          </Row>



        </Content>
      </Layout>



    </>
  )
}
