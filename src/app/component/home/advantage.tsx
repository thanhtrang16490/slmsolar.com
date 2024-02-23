

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
        <div style={{ position: 'relative', width: '100%', height: '500px' }}>
          <Image
            src='/img/advantage-video.png'
            alt="Video"
            layout='fill'
            objectFit='cover'
          />
        </div>

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


    </>

  );
}



export default Advantage;


