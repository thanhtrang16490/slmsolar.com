'use client'
import { Card, Col, Divider, Layout, Row, Statistic, Steps, Tabs, Typography } from "antd";
import { Content } from "antd/es/layout/layout";
import { RightOutlined, ThunderboltOutlined } from '@ant-design/icons';




export default function BamTaiMotPha() {

  return (
    <>
      <Layout style={{ width: '100%', background: '#fff' }}>
        <Content style={{ display: 'flex', flexDirection: 'column', width: '100%', alignContent: 'center' }}>

          <Row style={{ position: 'relative' }}>

            <Col style={{
              background: 'linear-gradient(to right, #ffd78a , #f4762d)', width: '100%', height: '265px', margin: '0px 0px 0 0px', padding: '15px', textAlign: 'center', position: 'relative'
            }}>
              <div style={{ position: 'absolute', top: 0, left: '50%', translate: '-50% 0%', width: '100%', height: '600px' }}>
                <Typography.Title style={{ position: 'absolute', top: '100px', left: '50%', translate: '-50% -50%', width: '100%', textTransform: 'uppercase', color: '#fff' }} level={3}>Bám tải - 1 Pha</Typography.Title>
                <Typography.Title style={{ position: 'absolute', top: '150px', left: '50%', translate: '-50% -50%', width: '300px', fontSize: '14px', color: '#fff', fontWeight: 300 }} level={5}>Combo sản phẩm</Typography.Title>
              </div>
            </Col>
            <div style={{ background: 'linear-gradient(to bottom, #ffffff00, #ffffff60 , #fff)', width: '100%', height: '60px', position: 'absolute', bottom: '-1px' }}>
            </div>
          </Row>



          <Row>

            <Col style={{ width: '100%', margin: '0 5px 0', padding: '10px', background: '#fff', borderRadius: '8px' }}>
              <Row style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Row style={{ display: 'flex', alignItems: 'center', position: 'relative' }}>
                  <Col style={{ borderRadius: '6px', background: '#F2F1F6', width: '60px', height: '70px' }}><ThunderboltOutlined style={{ color: 'orange', fontSize: '40px', position: 'absolute', top: '50%', left: '50%', translate: '-50% -50%' }} /></Col>
                  <Col>
                    <Typography.Title style={{ color: '#000', margin: '0px 5px 0px 5px', textAlign: 'left', fontWeight: 500 }} level={5}>Bám tải - 1 Pha - 3kW</Typography.Title>
                    <Typography.Title style={{ color: '#6e6e73', margin: '0px 5px 0px 5px', textAlign: 'left', fontWeight: 300, fontSize: '14px' }} level={5}>Mo tả sản phẩm</Typography.Title>
                  </Col>
                </Row>
                <Col><RightOutlined /></Col>
              </Row>
              <Divider style={{ margin: '5px 0' }} />
              <Row style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Row style={{ display: 'flex', alignItems: 'center', position: 'relative' }}>
                  <Col style={{ borderRadius: '6px', background: '#F2F1F6', width: '60px', height: '70px' }}><ThunderboltOutlined style={{ color: 'orange', fontSize: '40px', position: 'absolute', top: '50%', left: '50%', translate: '-50% -50%' }} /></Col>
                  <Col>
                    <Typography.Title style={{ color: '#000', margin: '0px 5px 0px 5px', textAlign: 'left', fontWeight: 500 }} level={5}>Bám tải - 1 Pha - 5kW</Typography.Title>
                    <Typography.Title style={{ color: '#6e6e73', margin: '0px 5px 0px 5px', textAlign: 'left', fontWeight: 300, fontSize: '14px' }} level={5}>Thông tin sản phẩm</Typography.Title>
                  </Col>
                </Row>
                <Col><RightOutlined /></Col>
              </Row>
              <Divider style={{ margin: '5px 0' }} />
              <Row style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Row style={{ display: 'flex', alignItems: 'center', position: 'relative' }}>
                  <Col style={{ borderRadius: '6px', background: '#F2F1F6', width: '60px', height: '70px' }}><ThunderboltOutlined style={{ color: 'orange', fontSize: '40px', position: 'absolute', top: '50%', left: '50%', translate: '-50% -50%' }} /></Col>
                  <Col>
                    <Typography.Title style={{ color: '#000', margin: '0px 5px 0px 5px', textAlign: 'left', fontWeight: 500 }} level={5}>Bám tải - 1 Pha - 8kW</Typography.Title>
                    <Typography.Title style={{ color: '#6e6e73', margin: '0px 5px 0px 5px', textAlign: 'left', fontWeight: 300, fontSize: '14px' }} level={5}>Thông tin sản phẩm</Typography.Title>
                  </Col>
                </Row>
                <Col><RightOutlined /></Col>
              </Row>
              <Divider style={{ margin: '5px 0' }} />
              <Row style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Row style={{ display: 'flex', alignItems: 'center', position: 'relative' }}>
                  <Col style={{ borderRadius: '6px', background: '#F2F1F6', width: '60px', height: '70px' }}><ThunderboltOutlined style={{ color: 'orange', fontSize: '40px', position: 'absolute', top: '50%', left: '50%', translate: '-50% -50%' }} /></Col>
                  <Col>
                    <Typography.Title style={{ color: '#000', margin: '0px 5px 0px 5px', textAlign: 'left', fontWeight: 500 }} level={5}>Bám tải - 1 Pha - 11kW</Typography.Title>
                    <Typography.Title style={{ color: '#6e6e73', margin: '0px 5px 0px 5px', textAlign: 'left', fontWeight: 300, fontSize: '14px' }} level={5}>Thông tin sản phẩm</Typography.Title>
                  </Col>
                </Row>
                <Col><RightOutlined /></Col>
              </Row>
              <Divider style={{ margin: '5px 0' }} />
              <Row style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Row style={{ display: 'flex', alignItems: 'center', position: 'relative' }}>
                  <Col style={{ borderRadius: '6px', background: '#F2F1F6', width: '60px', height: '70px' }}><ThunderboltOutlined style={{ color: 'orange', fontSize: '40px', position: 'absolute', top: '50%', left: '50%', translate: '-50% -50%' }} /></Col>
                  <Col>
                    <Typography.Title style={{ color: '#000', margin: '0px 5px 0px 5px', textAlign: 'left', fontWeight: 500 }} level={5}>Bám tải - 1 Pha - 15kW</Typography.Title>
                    <Typography.Title style={{ color: '#6e6e73', margin: '0px 5px 0px 5px', textAlign: 'left', fontWeight: 300, fontSize: '14px' }} level={5}>Thông tin sản phẩm</Typography.Title>
                  </Col>
                </Row>
                <Col><RightOutlined /></Col>
              </Row>
              <Divider style={{ margin: '5px 0' }} />
              <Row style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Row style={{ display: 'flex', alignItems: 'center', position: 'relative' }}>
                  <Col style={{ borderRadius: '6px', background: '#F2F1F6', width: '60px', height: '70px' }}><ThunderboltOutlined style={{ color: 'orange', fontSize: '40px', position: 'absolute', top: '50%', left: '50%', translate: '-50% -50%' }} /></Col>
                  <Col>
                    <Typography.Title style={{ color: '#000', margin: '0px 5px 0px 5px', textAlign: 'left', fontWeight: 500 }} level={5}>Bám tải - 1 Pha - 18kW</Typography.Title>
                    <Typography.Title style={{ color: '#6e6e73', margin: '0px 5px 0px 5px', textAlign: 'left', fontWeight: 300, fontSize: '14px' }} level={5}>Thông tin sản phẩm</Typography.Title>
                  </Col>
                </Row>
                <Col><RightOutlined /></Col>
              </Row>
              <Divider style={{ margin: '5px 0' }} />
            </Col>
          </Row>
        </Content>
      </Layout>



    </>
  )
}
