'use client'
import { Card, Col, Divider, Layout, Row, Statistic, Steps, Tabs, Typography } from "antd";
import { Content } from "antd/es/layout/layout";
import Image from "next/image";

const comboOneFeatureData = [
  {
    he: '3.8 kW',
    pha: '1 Pha',
    title: 'Tấm pin mặt trời',
    feature1: 'Thương hiệu Pin top 3 thế giới',
    feature2: 'Inverter On-Grid 3 kW - 1 pha',
    price: <>42,930,000 <Image src='/img/dong-icon.svg' alt="vnd" width={18} height={18} /></>,
  },
  {
    he: '6.6 kW',
    pha: '1 Pha',
    title: 'Tấm pin mặt trời',
    feature1: 'Thương hiệu Pin top 3 thế giới',
    feature2: 'Inverter On-Grid 5 kW - 1 pha',
    price: <>62,035,000 <Image src='/img/dong-icon.svg' alt="vnd" width={18} height={18} /></>,
  },

  {
    he: '10,45 kW',
    pha: '1 Pha',
    title: 'Tấm pin mặt trời',
    feature1: 'Thương hiệu Pin top 3 thế giới',
    feature2: 'Inverter On-Grid 8 kW - 1 pha',
    price: <>92,010,000 <Image src='/img/dong-icon.svg' alt="vnd" width={18} height={18} /></>,
  },
  {
    he: '15.95 kW',
    pha: '1 Pha',
    title: 'Tấm pin mặt trời',
    feature1: 'Thương hiệu Pin top 3 thế giới',
    feature2: 'Inverter On-Grid 10 kW - 1 pha',
    price: <>136,720,000 <Image src='/img/dong-icon.svg' alt="vnd" width={18} height={18} /></>,
  }
]



const comboOneData = [
  {
    image: <Image src='/img/solar-hybrid-icon.svg' alt="Hoàn vốn trong 4 năm" width={30} height={30} />,
    title: <>Tấm pin<br />mặt trời</>,

  },
  {
    image: <Image src='/img/inverter-icon.svg' alt="Sử dụng điện thả ga 20 năm kế tiếp" width={30} height={30} />,
    title: <>inverter<br />On-Grid</>


  },

  {
    image: <Image src='/img/bao-hanh-5-nam.svg' alt="Chống nóng cho mái nhà giảm 6 độ" width={40} height={30} />,
    title: <>năm<br />bảo hành</>

  },
]



export default function BamTaiMotPha() {

  return (
    <>

      <Layout style={{ marginBottom: '100px', width: '100%', background: '#fff' }}>
        <Content style={{ display: 'flex', flexDirection: 'column', width: '100%', alignContent: 'center' }}>
          <Row style={{ position: 'relative' }}>

            <Col style={{
              width: '100%', height: '285px', margin: '50px 0px 0 0px', padding: '0px', textAlign: 'center', position: 'relative'
            }}>
              <div style={{ position: 'absolute', top: 0, left: '50%', translate: '-50% 0%', width: '100%', height: '600px' }}>
                <Typography.Title style={{ textAlign: 'left', margin: '30px 0 0px 20px', fontSize: '30px', fontWeight: '600' }} >Điện mặt trời<br />Bám trải On-Grid<br />1 pha</Typography.Title>
                <Typography.Paragraph style={{ textAlign: 'left', margin: '20px 70px 10px 20px', fontSize: '14px', fontWeight: '300' }} >Hệ thống sử dụng nguồn điện 1 pha, diện tích mái tối thiểu 30 - 50m2. Phù hợp với đối tượng khách hàng hộ kinh doanh tạp hoá, quán ăn sáng, quán cafe, nhà có con nhỏ và người già cần sử dụng nhiều điều hoà với hoá đơn điện từ 3-5 triệu/tháng  </Typography.Paragraph>
              </div>
            </Col>

          </Row>
          {comboOneFeatureData.map((data, index) => (
            <>
              <div key={index} style={{ marginTop: '20px' }}>

                <Row style={{ backgroundColor: '#E8E8EA', position: 'relative', height: '240px', borderRadius: '8px', margin: '0 10px', boxShadow: '0 1px 2px 0 rgba(60,64,67,.1), 0 2px 6px 2px rgba(60,64,67,.15)' }}>

                  <Row style={{ left: '58%', top: '10px', position: 'absolute', display: 'flex', alignItems: 'center', justifyContent: 'start' }}>
                    <Col>
                      <Image src='/img/combo-ongrid.png' alt="Sử dụng điện thả ga 20 năm kế tiếp" width={151} height={170} />
                    </Col>
                  </Row>
                  <div style={{ position: 'absolute', display: 'flex', left: '10px', top: '10px', gap: '5px' }}>
                    <Row style={{ left: '15px', borderRadius: '4px', border: 'solid 1px #000', top: '10px', display: 'flex', alignItems: 'center', justifyContent: 'start' }}>
                      <Col>
                        <Typography.Title style={{ color: '#000', margin: '0px 5px 0px 5px', textAlign: 'left', fontWeight: 300, fontSize: '18px' }}>{data.he}</Typography.Title>
                      </Col>
                    </Row>
                    <Row style={{ left: '75px', borderRadius: '4px', backgroundColor: '#000', display: 'flex', alignItems: 'center', justifyContent: 'start' }}>

                      <Col>
                        <Typography.Title style={{ color: '#fff', margin: '0px 5px 0px 5px', textAlign: 'left', fontWeight: 300, fontSize: '18px' }}>{data.pha}</Typography.Title>
                      </Col>
                    </Row>
                    <Row style={{ left: '75px', borderRadius: '4px', backgroundColor: '#ff5b00', display: 'flex', alignItems: 'center', justifyContent: 'start' }}>

                      <Col>
                        <Typography.Title style={{ color: '#fff', margin: '0px 5px 0px 5px', textAlign: 'left', fontWeight: 300, fontSize: '18px' }}>bám tải</Typography.Title>
                      </Col>
                    </Row>
                  </div>

                  <Row style={{ left: '10px', top: '70px', position: 'absolute', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'start' }}>
                    <Col>
                      <Image src='/img/stick-green-full.svg' alt="Check" width={20} height={20} />
                    </Col>
                    <Col>
                      <Typography.Title style={{ color: '#000', margin: '0px 5px 0px 5px', textAlign: 'left', fontWeight: 300, fontSize: '12px' }}>{data.feature1}</Typography.Title>
                    </Col>
                  </Row>
                  <Row style={{ left: '10px', top: '95px', position: 'absolute', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'start' }}>
                    <Col>
                      <Image src='/img/stick-green-full.svg' alt="Check" width={20} height={20} />
                    </Col>
                    <Col>
                      <Typography.Title style={{ color: '#000', margin: '0px 5px 0px 5px', textAlign: 'left', fontWeight: 300, fontSize: '12px' }}>{data.feature2}</Typography.Title>
                    </Col>
                  </Row>

                  <Row style={{ left: '15px', borderRadius: '6px', border: 'solid 1px #000', top: '138px', position: 'absolute', display: 'flex', alignItems: 'center', justifyContent: 'start' }}>

                    <Col>
                      <Typography.Title style={{ color: '#000', margin: '0px 5px 0px 5px', textAlign: 'left', fontWeight: 500, fontSize: '24px' }}>{data.price}</Typography.Title>
                    </Col>
                  </Row>
                  <Row style={{ bottom: '8px', left: '50%', translate: '-50% 0px', position: 'absolute', height: '50px', width: 'calc(100% - 16px)', backgroundColor: '#fff', borderRadius: '4px' }} >
                    {comboOneData.map((data, index) => (
                      <Col
                        style={{
                          display: 'flex',
                          flexDirection: 'row',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                        key={index} xs={8} sm={8} md={8}>
                        {data.image}
                        <Typography.Paragraph style={{ marginBottom: '0', textAlign: 'left', fontSize: '10px' }}>{data.title}</Typography.Paragraph>
                      </Col>
                    ))}
                  </Row >
                </Row>
              </div></>
          ))}
        </Content>
      </Layout>





    </>
  )
}
