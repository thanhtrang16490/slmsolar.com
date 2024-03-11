'use client'
import { Col, Collapse, Divider, Layout, Row, Typography } from "antd";
import { Content } from "antd/es/layout/layout";
import { RightOutlined } from '@ant-design/icons';
import Image from "next/image";

const Items = [
  {
    label: 'Loại pin',
    children: 'LiFePO4',
  },
  {
    label: 'Chống nước / bụi',
    children: 'Chuẩn IP66',
  },

  {
    label: <>Tổng công suất <br /> năng lượng</>,
    children: '5,38 / 8,06 (kWh)',
  },
  {
    label: <>Làm mát </>,
    children: 'Tự nhiên / Thông minh',
  },
  {
    label: <>Công suất<br />sạc/xả tối đa</>,
    children: '2500 / 4000 (W)',
  },
  {
    label: <>Phương thức<br />lắp đặt</>,
    children: 'Đặt sàn / treo tường',
  },

];

export default function Sigeneryframethree() {

  return (
    <>
      <Layout style={{ width: '100%', background: '#fff' }}>
        <Content style={{ display: 'flex', flexDirection: 'column', width: '100%', alignContent: 'center' }}>
          <Row style={{ position: 'relative' }}>
            <Col style={{
              width: '100%', height: '100px', margin: '10px 0px 0 0px', padding: '0px', textAlign: 'center', position: 'relative'
            }}>
              <div style={{ position: 'absolute', top: 0, left: '50%', translate: '-50% 0%', width: '100%', height: '600px' }}>
                <Typography.Title style={{ textAlign: 'left', margin: '30px 0 0px 20px', fontSize: '30px', fontWeight: '600' }} >Hệ thống module pin<br />Lithium Sigen</Typography.Title>
              </div>
            </Col>
          </Row>
          <div style={{ margin: '20px 16px', borderRadius: '8px', backgroundColor: '#000' }}>
            <video width="100%" height="210" preload="auto" autoPlay muted loop playsInline poster='/img/sigenergy/video-thumb-sigen-lithium.png' >
              <source src="/img/sigenergy/sigen_battery.mp4" type="video/mp4" />
              <track
                src="/img/sigenergy/sigen_battery.mp4"
                kind="subtitles"
                srcLang="en"
                label="English"
              />
              Your browser does not support the video tag.
            </video>
          </div>
          <Row>
            <Col style={{ width: '100%', margin: '0 16px 0', background: '#fff', borderRadius: '8px' }}>
              <Row>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
                  {Items.map((item, index) => {
                    return (
                      <>
                        <div key={index} style={{ flex: '1 0 calc(50% - 5px)' }}>
                          <div style={{ height: '1px', width: '50px', backgroundColor: '#939393' }} ></div>
                          <Typography.Title style={{ fontSize: '14px', fontWeight: '600' }}>{item.label}</Typography.Title>
                          <Typography.Paragraph >{item.children}</Typography.Paragraph>
                        </div >

                      </>
                    )
                  })}
                </div >
              </Row>
            </Col>
          </Row>
        </Content>
      </Layout >



    </>
  )
}
