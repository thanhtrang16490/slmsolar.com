
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
    image: <Image src='/img/money-icon.svg' alt="Thiết kế hợp nhất" width={20} height={48} />,
    title: <>Thiết kế<br />hợp nhất</>,
  },
  {
    image: <Image src='/img/money-icon.svg' alt="Thiết kế hợp nhất" width={20} height={35} />,
    title: <>An toàn<br />cao độ</>
  },
  {
    image: <Image src='/img/money-icon.svg' alt="Thiết kế hợp nhất" width={20} height={35} />,
    title: <>Hệ thống<br />độc lập</>
  },
  {
    image: <Image src='/img/money-icon.svg' alt="Thiết kế hợp nhất" width={20} height={35} />,
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
          height: '100vh',
          margin: '-55px 0 80px 0',
        }}>
          <Row style={{ position: 'relative' }}>
            <div style={{ height: 'calc(40vh + 85px)', width: '100%', position: 'relative' }}>
              <Image
                src={heroData.image} alt={heroData.title}
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div style={{ position: 'absolute', top: '200px', left: '50%', translate: '-50% -50px' }}>
              <Typography.Title style={{ width: '350px', textAlign: 'center', fontSize: '26px', color: '#fff' }} level={5}>
                {heroData.title}
              </Typography.Title>
            </div>
            <div style={{ position: 'absolute', top: '265px', left: '50%', translate: '-50% -50px', zIndex: 1 }}>
              <Typography.Title style={{ width: '355px', textAlign: 'center', fontSize: '14px', color: '#fff', fontWeight: 300 }} level={5}>
                {heroData.content}
              </Typography.Title>
            </div>
            <video style={{ position: 'absolute', top: '400px', left: '50%', translate: '-50% -50px', backgroundColor: '#000' }} width="100%" height="220px" preload="auto" autoPlay muted loop playsInline>
              <source src="/img/sigenergy/sigenergy-5en1.mp4" type="video/mp4" />
              <track
                src="/img/sigenergy/sigenergy-5en1.mp4"
                kind="subtitles"
                srcLang="en"
                label="English"
              />
              Your browser does not support the video tag.
            </video>
          </Row>
          <Row style={{ position: 'absolute', width: '100%', bottom: 0, backgroundColor: '#000', }} gutter={0}>
            {serviceData.map((data, index) => (
              <Col
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'end',

                }}
                key={index} xs={6} sm={6} md={6}>
                {data.image}
                <Typography.Paragraph style={{ color: '#fff', textAlign: 'center', fontSize: '11px' }}>{data.title}</Typography.Paragraph>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>


    </>
  )
}
