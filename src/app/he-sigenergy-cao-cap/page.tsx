'use client'
import { Card, Col, Divider, Layout, Row, Statistic, Steps, Tabs, Typography } from "antd";
import { Content } from "antd/es/layout/layout";
import { RightOutlined, ThunderboltOutlined } from '@ant-design/icons';






export default function heSigeneryCaoCap() {

  return (
    <>
      <Layout style={{ width: '100%', background: '#fff' }}>
        <Content style={{ display: 'flex', flexDirection: 'column', width: '100%', alignContent: 'center' }}>

          <Row style={{ position: 'relative' }}>

            <Col style={{
              width: '100%', height: '90px', margin: '50px 0px 0 0px', padding: '0px', textAlign: 'center', position: 'relative'
            }}>
              <div style={{ position: 'absolute', top: 0, left: '50%', translate: '-50% 0%', width: '100%', height: '600px' }}>
                <Typography.Title style={{ textAlign: 'left', margin: '30px 0 0px 20px', fontSize: '30px', fontWeight: '600' }} >Hệ Sigenergy cao cấp</Typography.Title>
              </div>
            </Col>
          </Row>



        </Content>
      </Layout>



    </>
  )
}
