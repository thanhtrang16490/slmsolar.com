'use client'
import { Col, Collapse, Divider, Layout, Row, Typography } from "antd";
import { Content } from "antd/es/layout/layout";
import { CaretRightOutlined, RightOutlined } from '@ant-design/icons';
import Image from "next/image";
import { Descriptions } from 'antd';
import type { DescriptionsProps } from 'antd';

const items: DescriptionsProps['items'] = [
  {
    label: 'Thông số 1',
    children: 'Nội dung',
  },
  {
    label: 'Thông số 2',
    children: 'Nội dung',
  },
  {
    label: 'Thông số 3',
    children: 'Nội dung',
  },
  {
    label: 'Thông số 4',
    children: 'Nội dung',
  },
];



const itemsSolarData = [
  {
    title: 'Pin mặt trời JA Solar',
    icon:
      <div style={{ position: 'relative' }}>
        <Image style={{ zIndex: '1', position: 'absolute', left: '15px', top: '15px', translate: '-50% -50%' }} loading='eager' src='/img/solar-device.png' alt='device icon' width={40} height={65} />
        <div style={{ left: '15px', top: '15px', translate: '-50% -50%', position: 'absolute', borderRadius: '6px', background: '#F2F1F6', width: '60px', height: '70px' }}></div>
      </div>,
    desc:
      <Descriptions
        title="Thông số kỹ thuật"
        bordered
        column={{ xs: 1, sm: 2, md: 3, lg: 3, xl: 4, xxl: 4 }}
        items={items}
        style={{ margin: '0 0 0 0' }}
      />
  },
  {
    title: 'Pin mặt trời Canadian Solar',
    icon:
      <div style={{ position: 'relative' }}>
        <Image style={{ zIndex: '1', position: 'absolute', left: '15px', top: '15px', translate: '-50% -50%' }} loading='eager' src='/img/solar-device.png' alt='device icon' width={40} height={65} />
        <div style={{ left: '15px', top: '15px', translate: '-50% -50%', position: 'absolute', borderRadius: '6px', background: '#F2F1F6', width: '60px', height: '70px' }}></div>
      </div>,
    desc:
      <Descriptions
        title="Thông số kỹ thuật"
        bordered
        column={{ xs: 1, sm: 2, md: 3, lg: 3, xl: 4, xxl: 4 }}
        items={items}
        style={{ margin: '0 0 0 0' }}
      />
  },
  {
    title: 'Pin mặt trời Risen Solar',
    icon:
      <div style={{ position: 'relative' }}>
        <Image style={{ zIndex: '1', position: 'absolute', left: '15px', top: '15px', translate: '-50% -50%' }} loading='eager' src='/img/solar-device.png' alt='device icon' width={40} height={65} />
        <div style={{ left: '15px', top: '15px', translate: '-50% -50%', position: 'absolute', borderRadius: '6px', background: '#F2F1F6', width: '60px', height: '70px' }}></div>
      </div>,
    desc:
      <Descriptions
        title="Thông số kỹ thuật"
        bordered
        column={{ xs: 1, sm: 2, md: 3, lg: 3, xl: 4, xxl: 4 }}
        items={items}
        style={{ margin: '0 0 0 0' }}
      />
  },
  {
    title: 'Pin mặt trời Longi Solar',
    icon:
      <div style={{ position: 'relative' }}>
        <Image style={{ zIndex: '1', position: 'absolute', left: '15px', top: '15px', translate: '-50% -50%' }} loading='eager' src='/img/solar-device.png' alt='device icon' width={40} height={65} />
        <div style={{ left: '15px', top: '15px', translate: '-50% -50%', position: 'absolute', borderRadius: '6px', background: '#F2F1F6', width: '60px', height: '70px' }}></div>
      </div>,
    desc:
      <Descriptions
        title="Thông số kỹ thuật"
        bordered
        column={{ xs: 1, sm: 2, md: 3, lg: 3, xl: 4, xxl: 4 }}
        items={items}
        style={{ margin: '0 0 0 0' }}
      />
  },
];

const itemsInverterData = [
  {
    title: 'Inverter Deyee',
    icon:
      <div style={{ position: 'relative' }}>
        <Image style={{ zIndex: '1', position: 'absolute', left: '15px', top: '15px', translate: '-50% -50%' }} loading='eager' src='/img/inverter-deyee-device.png' alt='device icon' width={40} height={65} />
        <div style={{ left: '15px', top: '15px', translate: '-50% -50%', position: 'absolute', borderRadius: '6px', background: '#F2F1F6', width: '60px', height: '70px' }}></div>
      </div>,
    desc:
      <Descriptions
        title="Thông số kỹ thuật"
        bordered
        column={{ xs: 1, sm: 2, md: 3, lg: 3, xl: 4, xxl: 4 }}
        items={items}
        style={{ margin: '0 0 0 0' }}
      />
  },
  {
    title: 'Inverter Luxpower ',
    icon:
      <div style={{ position: 'relative' }}>
        <Image style={{ zIndex: '1', position: 'absolute', left: '15px', top: '15px', translate: '-50% -50%' }} loading='eager' src='/img/inverter-luxpower-device.png' alt='device icon' width={40} height={62} />
        <div style={{ left: '15px', top: '15px', translate: '-50% -50%', position: 'absolute', borderRadius: '6px', background: '#F2F1F6', width: '60px', height: '70px' }}></div>
      </div>,
    desc:
      <Descriptions
        title="Thông số kỹ thuật"
        bordered
        column={{ xs: 1, sm: 2, md: 3, lg: 3, xl: 4, xxl: 4 }}
        items={items}
        style={{ margin: '0 0 0 0' }}
      />
  },
  {
    title: 'Inverter Huawei',
    icon:
      <div style={{ position: 'relative' }}>
        <Image style={{ zIndex: '1', position: 'absolute', left: '15px', top: '15px', translate: '-50% -50%' }} loading='eager' src='/img/inverter-huawei-device.png' alt='device icon' width={40} height={40} />
        <div style={{ left: '15px', top: '15px', translate: '-50% -50%', position: 'absolute', borderRadius: '6px', background: '#F2F1F6', width: '60px', height: '70px' }}></div>
      </div>,
    desc:
      <Descriptions
        title="Thông số kỹ thuật"
        bordered
        column={{ xs: 1, sm: 2, md: 3, lg: 3, xl: 4, xxl: 4 }}
        items={items}
        style={{ margin: '0 0 0 0' }}
      />
  },
  {
    title: 'Inverter Growatt',
    icon:
      <div style={{ position: 'relative' }}>
        <Image style={{ zIndex: '1', position: 'absolute', left: '15px', top: '15px', translate: '-50% -50%' }} loading='eager' src='/img/inverter-growatt-device.png' alt='device icon' width={40} height={47} />
        <div style={{ left: '15px', top: '15px', translate: '-50% -50%', position: 'absolute', borderRadius: '6px', background: '#F2F1F6', width: '60px', height: '70px' }}></div>
      </div>,
    desc:
      <Descriptions
        title="Thông số kỹ thuật"
        bordered
        column={{ xs: 1, sm: 2, md: 3, lg: 3, xl: 4, xxl: 4 }}
        items={items}
        style={{ margin: '0 0 0 0' }}
      />

  },
];

const itemsBatteryData = [
  {
    title: 'Pin lưu trữ lithium SMB',
    icon:
      <div style={{ position: 'relative' }}>
        <Image style={{ zIndex: '1', position: 'absolute', left: '15px', top: '15px', translate: '-50% -50%' }} loading='eager' src='/img/smb-device.png' alt='device icon' width={40} height={46} />
        <div style={{ left: '15px', top: '15px', translate: '-50% -50%', position: 'absolute', borderRadius: '6px', background: '#F2F1F6', width: '60px', height: '70px' }}></div>
      </div>,
    desc:
      <Descriptions
        title="Thông số kỹ thuật"
        bordered
        column={{ xs: 1, sm: 2, md: 3, lg: 3, xl: 4, xxl: 4 }}
        items={items}
        style={{ margin: '0 0 0 0' }}
      />

  },
  {
    title: 'Pin lưu trữ lithium UFO ',
    icon:
      <div style={{ position: 'relative' }}>
        <Image style={{ zIndex: '1', position: 'absolute', left: '15px', top: '15px', translate: '-50% -50%' }} loading='eager' src='/img/ufo-device.png' alt='device icon' width={40} height={59} />
        <div style={{ left: '15px', top: '15px', translate: '-50% -50%', position: 'absolute', borderRadius: '6px', background: '#F2F1F6', width: '60px', height: '70px' }}></div>
      </div>

  },
  {
    title: 'Pin lưu trữ lithium SVE',
    icon:
      <div style={{ position: 'relative' }}>
        <Image style={{ zIndex: '1', position: 'absolute', left: '15px', top: '15px', translate: '-50% -50%' }} loading='eager' src='/img/sve-device.png' alt='device icon' width={40} height={18} />
        <div style={{ left: '15px', top: '15px', translate: '-50% -50%', position: 'absolute', borderRadius: '6px', background: '#F2F1F6', width: '60px', height: '70px' }}></div>
      </div>,
    desc:
      <Descriptions
        title="Thông số kỹ thuật"
        bordered
        column={{ xs: 1, sm: 2, md: 3, lg: 3, xl: 4, xxl: 4 }}
        items={items}
        style={{ margin: '0 0 0 0' }}
      />

  },
  {
    title: 'Pin lưu trữ lithium Larada',
    icon:
      <div style={{ position: 'relative' }}>
        <Image style={{ zIndex: '1', position: 'absolute', left: '15px', top: '15px', translate: '-50% -50%' }} loading='eager' src='/img/nadara-device.png' alt='device icon' width={40} height={50} />
        <div style={{ left: '15px', top: '15px', translate: '-50% -50%', position: 'absolute', borderRadius: '6px', background: '#F2F1F6', width: '60px', height: '70px' }}></div>
      </div>,
    desc:
      <Descriptions
        title="Thông số kỹ thuật"
        bordered
        column={{ xs: 1, sm: 2, md: 3, lg: 3, xl: 4, xxl: 4 }}
        items={items}
        style={{ margin: '0 0 0 0' }}
      />


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
                {itemsSolarData.map((item, index) => {
                  return (
                    <>
                      <Col style={{ width: '100%', borderRadius: '8px' }}>
                        <Collapse
                          size="large"
                          items={[{
                            key: '1',
                            label: <Typography.Title style={{ margin: '20px 0 0 50px', height: '35px', color: '#000', textAlign: 'left', fontWeight: 400, fontSize: '14px' }} >{item.title}</Typography.Title>,
                            children: <>{item.desc}</>,
                            extra: <RightOutlined style={{ margin: '20px 0 0 0px' }} />,

                          }]}
                          expandIcon={({ isActive }) => <>{item.icon}</>}
                          style={{ background: '#ddd', margin: '5px 0', borderRadius: '6px' }}
                        />
                      </Col>
                    </>
                  )
                }
                )}


              </Row>

            </Col>
          </Row>

          <Row>
            <Typography.Title style={{ paddingLeft: '25px' }} level={4}>Biến tần - Inverter</Typography.Title>
            <Col style={{ width: '100%', margin: '0 10px 0', background: '#fff', borderRadius: '8px' }}>
              <Row>
                {itemsInverterData.map((item, index) => {
                  return (
                    <>
                      <Col style={{ width: '100%', borderRadius: '8px' }}>
                        <Collapse
                          size="large"
                          items={[{
                            key: '1',
                            label: <Typography.Title style={{ margin: '20px 0 0 50px', height: '35px', color: '#000', textAlign: 'left', fontWeight: 400, fontSize: '14px' }} >{item.title}</Typography.Title>,
                            children: <>{item.desc}</>,
                            extra: <RightOutlined style={{ margin: '20px 0 0 0px' }} />,

                          }]}
                          expandIcon={({ isActive }) => <>{item.icon}</>}
                          style={{ background: '#ddd', margin: '5px 0', borderRadius: '6px' }}
                        />
                      </Col>

                    </>
                  )
                }
                )}

              </Row>

            </Col>
          </Row>

          <Row>
            <Typography.Title style={{ paddingLeft: '25px' }} level={4}>Pin lưu trữ Lithium</Typography.Title>
            <Col style={{ width: '100%', margin: '0 10px 0', background: '#fff', borderRadius: '8px' }}>
              <Row>
                {itemsBatteryData.map((item, index) => {
                  return (
                    <>
                      <Col style={{ width: '100%', borderRadius: '8px' }}>
                        <Collapse
                          size="large"
                          items={[{
                            key: '1',
                            label: <Typography.Title style={{ margin: '20px 0 0 50px', height: '35px', color: '#000', textAlign: 'left', fontWeight: 400, fontSize: '14px' }} >{item.title}</Typography.Title>,
                            children: <>{item.desc}</>,
                            extra: <RightOutlined style={{ margin: '20px 0 0 0px' }} />,

                          }]}
                          expandIcon={({ isActive }) => <>{item.icon}</>}
                          style={{ background: '#ddd', margin: '5px 0', borderRadius: '6px' }}
                        />
                      </Col>

                    </>
                  )
                }
                )}

              </Row>

            </Col>
          </Row>

        </Content>
      </Layout >



    </>
  )
}
