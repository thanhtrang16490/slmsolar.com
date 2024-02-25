

import { Col, Row, Typography } from "antd";
import Image from "next/image";



const serviceData = [
  {
    image: <Image src='/img/money-icon.svg' alt="Hoàn vốn trong 4 năm" width={20} height={35} />,
    title: <>Hoàn vốn <br />trong 4 năm</>,

  },
  {
    image: <Image src='/img/solar-icon.svg' alt="Sử dụng điện thả ga 20 năm kế tiếp" width={50} height={50} />,
    title: <>Sử dụng điện thả ga<br />20 năm kế tiếp</>


  },
  {
    image: <Image src='/img/giam-6-do-icon.svg' alt="Chống nóng cho mái nhà giảm 6 độ" width={50} height={35} />,
    title: <>Chống nóng cho<br /> mái nhà giảm 6 độ</>

  },
]

const Advantage = () => {

  return (
    <>
      <Row>


        <video width="100%" height="420" preload="auto" autoPlay muted loop playsInline>
          <source src="/img/solar-assessment-mobile.mp4" type="video/mp4" />
          <track
            src="/img/solar-assessment-mobile.mp4"
            kind="subtitles"
            srcLang="en"
            label="English"
          />
          Your browser does not support the video tag.
        </video>


      </Row>
      <Row style={{ paddingTop: '20px' }} gutter={5}>
        {serviceData.map((data, index) => (
          <Col
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'end',

            }}
            key={index} xs={8} sm={8} md={8}>
            {data.image}
            <Typography.Paragraph style={{ textAlign: 'center', fontSize: '11px' }}>{data.title}</Typography.Paragraph>
          </Col>
        ))}
      </Row>
      <Row >
        <div style={{ margin: '0 20px', backgroundColor: 'black', width: '100%', borderRadius: '8px', height: '50px', }}>
          <div style={{ margin: '0 35px', display: 'flex', justifyContent: 'space-evenly' }}>
            <Image src='/img/support-icon-white.svg' alt="Phone" width={50} height={50} />
            <Typography.Paragraph style={{ color: 'white', fontSize: '32px' }}>09175.999.66</Typography.Paragraph>
          </div>
        </div>
      </Row>
    </>
  );
}

export default Advantage;


