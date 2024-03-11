
'use client'
import { Col, Row, Typography } from "antd";
import Image from "next/image";

const heroData =
{
  image: '/img/sigenergy/sigenergy-header.png',
  title: 'Hệ Sigenergy cao cấp',
  content: 'Kết hợp năng lượng mặt trời, lưu trữ và sạc EV, Sigenergy cung cấp giải pháp năng lượng gia đình toàn diện giúp bạn giảm hóa đơn tiền điện và sự phụ thuộc vào lưới điện'
}

const serviceData = [
  {
    image: <Image src='/img/sigenergy/sigen-icon-1.png' alt="Thiết kế hợp nhất" width={40} height={40} />,
    title: <>Thiết kế<br />hợp nhất</>,
  },
  {
    image: <Image src='/img/sigenergy/sigen-icon-2.png' alt="An toàn cao độ" width={34} height={40} />,
    title: <>An toàn<br />cao độ</>
  },
  {
    image: <Image src='/img/sigenergy/sigen-icon-3.png' alt="Hệ thống độc lập" width={29} height={40} />,
    title: <>Hệ thống<br />độc lập</>
  },
  {
    image: <Image src='/img/sigenergy/sigen-icon-4.png' alt="Tiết kiệm tối đa" width={40} height={40} />,
    title: <>Tiết kiệm<br />tối đa</>
  },
]


export default function Sigeneryframeone() {

  return (
    <>
      <Row >
        <Col style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          width: '100%',
          height: '100%',

        }}>
          <div style={{ position: 'relative', paddingTop: '75%', height: '100%', overflow: 'hidden', maxWidth: '100%' }}>
            <video style={{
              position: 'absolute',
              top: 0,
              left: 0,
              bottom: 0,
              right: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}


              preload="auto" autoPlay muted loop playsInline>
              <source src="/img/sigenergy/sigenergy-5en1.mp4" type="video/mp4" />
              <track
                src="/img/sigenergy/sigenergy-5en1.mp4"
                kind="subtitles"
                srcLang="en"
                label="English"
              />
              Your browser does not support the video tag.
            </video>
          </div>
          <Row >
            <div style={{ position: 'absolute', top: '100%', left: '50%', translate: '-50% -50px', zIndex: 1 }}>
              <Typography.Title style={{ width: '350px', textAlign: 'center', fontSize: '30px', color: '#fff' }} level={5}>
                {heroData.title}
              </Typography.Title>
            </div>
            <div style={{ position: 'absolute', top: '130%', left: '50%', translate: '-50% -50px', zIndex: 1 }}>
              <Typography.Title style={{ width: '355px', textAlign: 'center', fontSize: '14px', color: '#fff', fontWeight: 300 }} level={5}>
                {heroData.content}
              </Typography.Title>
            </div>

          </Row>
          <div style={{ background: 'linear-gradient(to bottom, #00000000, #00000005,#00000040 , #000)', width: '100%', height: '90%', position: 'absolute', bottom: '-1px' }}>
          </div>
        </Col>
      </Row>

      <Row style={{ width: '100%', bottom: 0, backgroundColor: '#000', }} gutter={0}>
        {serviceData.map((data, index) => (
          <Col
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'end',
              height: '150px',
              marginTop: '140px',
            }}
            key={index} xs={6} sm={6} md={6}>
            {data.image}
            <Typography.Paragraph style={{ marginTop: '5px', lineHeight: '1.4', color: '#fff', textAlign: 'center', fontSize: '14px' }}>{data.title}</Typography.Paragraph>
          </Col>
        ))}
      </Row>

    </>
  )
}
