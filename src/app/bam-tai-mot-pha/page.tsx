'use client'
import { Card, Col, Divider, Layout, Row, Statistic, Steps, Tabs, Typography } from "antd";
import { Content } from "antd/es/layout/layout";
import Image from "next/image";

const comboOneFeatureData = [
  {
    he: '11 kW',
    pha: '1 Pha',
    title: 'Tấm pin mặt trời',
    feature1: 'Thương hiệu Pin top 3 thế giới',
    feature2: 'Inverter Hybrid 5kW 1 pha',
    feature3: 'Pin Lithium FePO4 5kWh',
    price: '220,000,000',
  },
  {
    he: '16.5 kW',
    pha: '1 Pha',
    title: 'Tấm pin mặt trời',
    feature1: 'Thương hiệu Pin top 3 thế giới',
    feature2: 'Inverter Hybrid 5kW 1 pha',
    feature3: 'Pin Lithium FePO4 5kWh',
    price: '330,000,000',
  },
  {
    he: '22 kW',
    pha: '1 Pha',
    title: 'Tấm pin mặt trời',
    feature1: 'Thương hiệu Pin top 3 thế giới',
    feature2: 'Inverter Hybrid 5kW 1 pha',
    feature3: 'Pin Lithium FePO4 5kWh',
    price: '440,000,000',
  },
  {
    he: '22 kW',
    pha: '1 Pha',
    title: 'Tấm pin mặt trời',
    feature1: 'Thương hiệu Pin top 3 thế giới',
    feature2: 'Inverter Hybrid 5kW 1 pha',
    feature3: 'Pin Lithium FePO4 5kWh',
    price: '440,000,000',
  },
  {
    he: '22 kW',
    pha: '1 Pha',
    title: 'Tấm pin mặt trời',
    feature1: 'Thương hiệu Pin top 3 thế giới',
    feature2: 'Inverter Hybrid 5kW 1 pha',
    feature3: 'Pin Lithium FePO4 5kWh',
    price: '440,000,000',
  }
]



const comboOneData = [
  {
    image: <Image src='/img/solar-hybrid-icon.svg' alt="Hoàn vốn trong 4 năm" width={30} height={30} />,
    title: <>Tấm pin<br />mặt trời</>,

  },
  {
    image: <Image src='/img/inverter-icon.svg' alt="Sử dụng điện thả ga 20 năm kế tiếp" width={30} height={30} />,
    title: <>inverter<br />hybrid</>


  },

  {
    image: <Image src='/img/bao-hanh-5-nam.svg' alt="Chống nóng cho mái nhà giảm 6 độ" width={40} height={30} />,
    title: <>năm<br />bảo hành</>

  },
]



export default function BamTaiMotPha() {

  return (
    <>

      <Layout style={{ width: '100%', background: '#fff' }}>
        <Content style={{ display: 'flex', flexDirection: 'column', width: '100%', alignContent: 'center' }}>
          <Row style={{ position: 'relative' }}>

            <Col style={{
              background: 'linear-gradient(to right, #6ef195 , #00e3fd)', width: '100%', height: '265px', margin: '0px 0px 0 0px', padding: '15px', textAlign: 'center', position: 'relative'
            }}>
              <div style={{ position: 'absolute', top: 0, left: '50%', translate: '-50% 0%', width: '100%', height: '600px' }}>
                <Typography.Title style={{ position: 'absolute', top: '100px', left: '50%', translate: '-50% -50%', width: '100%', textTransform: 'uppercase', color: '#fff' }} level={3}>Bám tải - 1 Pha</Typography.Title>
                <Typography.Title style={{ position: 'absolute', top: '150px', left: '50%', translate: '-50% -50%', width: '300px', fontSize: '14px', color: '#fff', fontWeight: 300 }} level={5}>Combo sản phẩm</Typography.Title>
              </div>
            </Col>
            <div style={{ background: 'linear-gradient(to bottom, #ffffff00, #ffffff60 , #fff)', width: '100%', height: '60px', position: 'absolute', bottom: '-1px' }}>
            </div>
          </Row>
          {comboOneFeatureData.map((data, index) => (
            <>




              <div style={{ marginTop: '15px' }}>

                <Row style={{ backgroundColor: '#E8E8EA', position: 'relative', height: '240px', borderRadius: '8px', margin: '0 10px', boxShadow: '0 1px 2px 0 rgba(60,64,67,.1), 0 2px 6px 2px rgba(60,64,67,.15)' }}>

                  <Row style={{ left: '65%', top: '10px', position: 'absolute', display: 'flex', alignItems: 'center', justifyContent: 'start' }}>
                    <Col>
                      <Image src='/img/combo-hybrid.png' alt="Sử dụng điện thả ga 20 năm kế tiếp" width={100} height={170} />
                    </Col>
                  </Row>

                  <Row style={{ left: '15px', borderRadius: '4px', border: 'solid 1px #000', top: '10px', position: 'absolute', display: 'flex', alignItems: 'center', justifyContent: 'start' }}>

                    <Col>
                      <Typography.Title style={{ color: '#000', margin: '0px 5px 0px 5px', textAlign: 'left', fontWeight: 300, fontSize: '18px' }}>{data.he}</Typography.Title>
                    </Col>
                  </Row>
                  <Row style={{ left: '75px', borderRadius: '4px', backgroundColor: '#000', top: '10px', position: 'absolute', display: 'flex', alignItems: 'center', justifyContent: 'start' }}>

                    <Col>
                      <Typography.Title style={{ color: '#fff', margin: '0px 5px 0px 5px', textAlign: 'left', fontWeight: 300, fontSize: '18px' }}>{data.pha}</Typography.Title>
                    </Col>
                  </Row>
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
                        key={index} xs={6} sm={6} md={6}>
                        {data.image}
                        <Typography.Paragraph style={{ textAlign: 'left', fontSize: '10px' }}>{data.title}</Typography.Paragraph>
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
