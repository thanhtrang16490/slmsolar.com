'use client'
import { Col, Divider, Layout, Row, Typography } from "antd";
import { Content } from "antd/es/layout/layout";
import { RightOutlined } from '@ant-design/icons';
import Image from "next/image";



const itemsSolarData = [
  {
    title: 'Pin mặt trời JA Solar',
    icon: <Image style={{ position: 'absolute', left: '50%', top: '50%', translate: '-50% -50%' }} loading='eager' src='/img/solar-device.png' alt='device icon' width={40} height={65} />

  },
  {
    title: 'Pin mặt trời Canadian Solar',
    icon: <Image style={{ position: 'absolute', left: '50%', top: '50%', translate: '-50% -50%' }} loading='eager' src='/img/solar-device.png' alt='device icon' width={40} height={65} />

  },
  {
    title: 'Pin mặt trời Risen Solar',
    icon: <Image style={{ position: 'absolute', left: '50%', top: '50%', translate: '-50% -50%' }} loading='eager' src='/img/solar-device.png' alt='device icon' width={40} height={65} />

  },
  {
    title: 'Pin mặt trời Longi Solar',
    icon: <Image style={{ position: 'absolute', left: '50%', top: '50%', translate: '-50% -50%' }} loading='eager' src='/img/solar-device.png' alt='device icon' width={40} height={65} />


  },
];

const itemsInverterData = [
  {
    title: 'Inverter Deyee',
    icon: <Image style={{ position: 'absolute', left: '50%', top: '50%', translate: '-50% -50%' }} loading='eager' src='/img/inverter-deyee-device.png' alt='device icon' width={40} height={65} />

  },
  {
    title: 'Inverter Luxpower ',
    icon: <Image style={{ position: 'absolute', left: '50%', top: '50%', translate: '-50% -50%' }} loading='eager' src='/img/inverter-luxpower-device.png' alt='device icon' width={40} height={62} />

  },
  {
    title: 'Inverter Huawei',
    icon: <Image style={{ position: 'absolute', left: '50%', top: '50%', translate: '-50% -50%' }} loading='eager' src='/img/inverter-huawei-device.png' alt='device icon' width={40} height={40} />

  },
  {
    title: 'Inverter Growatt',
    icon: <Image style={{ position: 'absolute', left: '50%', top: '50%', translate: '-50% -50%' }} loading='eager' src='/img/inverter-growatt-device.png' alt='device icon' width={40} height={47} />


  },
];

const itemsBatteryData = [
  {
    title: 'Pin lưu trữ lithium SMB',
    icon: <Image style={{ position: 'absolute', left: '50%', top: '50%', translate: '-50% -50%' }} loading='eager' src='/img/smb-device.png' alt='device icon' width={40} height={46} />

  },
  {
    title: 'Pin lưu trữ lithium UFO ',
    icon: <Image style={{ position: 'absolute', left: '50%', top: '50%', translate: '-50% -50%' }} loading='eager' src='/img/ufo-device.png' alt='device icon' width={40} height={59} />

  },
  {
    title: 'Pin lưu trữ lithium SVE',
    icon: <Image style={{ position: 'absolute', left: '50%', top: '50%', translate: '-50% -50%' }} loading='eager' src='/img/sve-device.png' alt='device icon' width={40} height={18} />

  },
  {
    title: 'Pin lưu trữ lithium Larada',
    icon: <Image style={{ position: 'absolute', left: '50%', top: '50%', translate: '-50% -50%' }} loading='eager' src='/img/nadara-device.png' alt='device icon' width={40} height={50} />


  },
];




export default function ThietBi() {

  return (
    <>
      <Layout style={{ width: '100%', background: '#fff' }}>
        <Content style={{ display: 'flex', flexDirection: 'column', width: '100%', alignContent: 'center' }}>



          <Row style={{ position: 'relative' }}>

            <Col style={{
              width: '100%', height: '265px', margin: '50px 0px 0 0px', padding: '0px', textAlign: 'center', position: 'relative'
            }}>
              <div style={{ position: 'absolute', top: 0, left: '50%', translate: '-50% 0%', width: '100%', height: '600px' }}>
                <Typography.Title style={{ textAlign: 'left', margin: '30px 0 0px 20px', fontSize: '30px', fontWeight: '600' }} >Danh mục thiết bị<br />Pin mặt trời - Inverter<br />Pin lưu trữ</Typography.Title>
                <Typography.Paragraph style={{ textAlign: 'left', margin: '20px 70px 10px 20px', fontSize: '14px', fontWeight: '300' }} >Solarmax cung cấp thiết bị năng lượng mặt trời đến từ các thương hiệu hàng đầu thế giới với chi phí và hiệu năng tối ưu giúp khách hàng trải có được trải nhiệm tốt và hài lòng nhất</Typography.Paragraph>
              </div>
            </Col>

          </Row>

          <Row>
            <Typography.Title style={{ paddingLeft: '25px' }} level={4}>Pin năng lượng mặt trời</Typography.Title>
            <Col style={{ width: '100%', margin: '0 10px 0', background: '#fff', borderRadius: '8px' }}>
              <Row>

                <Col style={{ width: '100%', padding: '10px', background: '#fff', borderRadius: '8px' }}>
                  {itemsSolarData.map((item, index) => {
                    return (
                      <>
                        <Row style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                          <Row style={{ display: 'flex', alignItems: 'center' }}>
                            <Col style={{ position: 'relative', borderRadius: '6px', background: '#F2F1F6', width: '60px', height: '70px' }}>{item.icon}</Col>
                            <Col>
                              <Typography.Title style={{ color: '#000', margin: '0px 5px 0px 5px', textAlign: 'left', fontWeight: 500 }} level={5}>{item.title}</Typography.Title>
                            </Col>
                          </Row>
                          <Col>
                            <RightOutlined />
                          </Col>
                        </Row>
                        {index !== itemsSolarData.length - 1 && <Divider style={{ margin: '5px 0' }} />}
                      </>
                    )
                  }
                  )}

                </Col>
              </Row>



            </Col>
          </Row>
          <Row>
            <Typography.Title style={{ paddingLeft: '25px' }} level={4}>Biến tần - Inverter</Typography.Title>
            <Col style={{ width: '100%', margin: '0 10px 0', background: '#fff', borderRadius: '8px' }}>
              <Row>

                <Col style={{ width: '100%', padding: '10px', background: '#fff', borderRadius: '8px' }}>
                  {itemsInverterData.map((item, index) => {
                    return (
                      <>
                        <Row style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                          <Row style={{ display: 'flex', alignItems: 'center', position: 'relative' }}>
                            <Col style={{ borderRadius: '6px', background: '#F2F1F6', width: '60px', height: '70px' }}>{item.icon}</Col>
                            <Col>
                              <Typography.Title style={{ color: '#000', margin: '0px 5px 0px 5px', textAlign: 'left', fontWeight: 500 }} level={5}>{item.title}</Typography.Title>
                            </Col>
                          </Row>
                          <Col>
                            <RightOutlined />
                          </Col>
                        </Row>
                        {index !== itemsInverterData.length - 1 && <Divider style={{ margin: '5px 0' }} />}
                      </>
                    )
                  }
                  )}

                </Col>
              </Row>



            </Col>
          </Row>

          <Row>
            <Typography.Title style={{ paddingLeft: '25px' }} level={4}>Pin Lithium</Typography.Title>
            <Col style={{ width: '100%', margin: '0 10px 0', background: '#fff', borderRadius: '8px' }}>
              <Row>

                <Col style={{ width: '100%', padding: '10px', background: '#fff', borderRadius: '8px' }}>
                  {itemsBatteryData.map((item, index) => {
                    return (
                      <>
                        <Row style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                          <Row style={{ display: 'flex', alignItems: 'center', position: 'relative' }}>
                            <Col style={{ borderRadius: '6px', background: '#F2F1F6', width: '60px', height: '70px' }}>{item.icon}</Col>
                            <Col>
                              <Typography.Title style={{ color: '#000', margin: '0px 5px 0px 5px', textAlign: 'left', fontWeight: 500 }} level={5}>{item.title}</Typography.Title>
                            </Col>
                          </Row>
                          <Col>
                            <RightOutlined />
                          </Col>
                        </Row>
                        {index !== itemsBatteryData.length - 1 && <Divider style={{ margin: '5px 0' }} />}
                      </>
                    )
                  }
                  )}

                </Col>
              </Row>



            </Col>
          </Row>

        </Content>
      </Layout >



    </>
  )
}
