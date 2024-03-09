'use client'
import { Col, Row, Typography } from "antd";

import Image from "next/image";



export default function Sigeneryframeone() {

  return (
    <>
      <Row >
        <Col style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          width: '100%',
          height: '480px',
          margin: '-50px auto',
        }}>
          <Row style={{ position: 'relative', margin: '0 auto' }}>
            <div style={{ position: 'absolute', top: 0, translate: '-50% 50%' }}>
              <Image
                src='/img/sigenergy/sigenergy-header.webp'
                alt="Video"
                height={250}
                width={800}
              />
            </div>
            <div style={{ position: 'absolute', top: 440, width: '390px', left: '0px', translate: '-50% -50%' }}>
              <Typography.Title style={{ textAlign: 'left', margin: '30px 0px 0px 20px', fontSize: '20px', fontWeight: '600' }} >HỆ THỐNG UPS SIGENSTOR</Typography.Title>
              <Typography.Paragraph style={{ textAlign: 'left', margin: '20px 70px 10px 20px', fontSize: '14px', fontWeight: '300' }} >Cuộc cách mạng công nghệ 5.0 cho hệ thống lưu trữ năng lượng</Typography.Paragraph>
            </div>
          </Row>
        </Col>
      </Row>
      <Row >
        <video style={{}} width="100%" height="390" preload="auto" autoPlay muted loop playsInline>
          <source src="/img/sigenergy/sigenergy-5en1.mp4" type="video/mp4" />
          <track
            src="/img/sigenergysigenergy-5en1.mp4"
            kind="subtitles"
            srcLang="en"
            label="English"
          />
          Your browser does not support the video tag.
        </video>
      </Row>
    </>
  )
}
