'use client'
import { Card, Col, Divider, Layout, Row, Statistic, Steps, Tabs, Typography } from "antd";
import { Content } from "antd/es/layout/layout";
import { RightOutlined, ThunderboltOutlined } from '@ant-design/icons';

const itemsData = [


  {
    title: 'Inverter Deye',
    path: '/hybrid-mot-pha',
    icon: <ThunderboltOutlined style={{ color: 'orange', fontSize: '40px', position: 'absolute', top: '50%', left: '50%', translate: '-50% -50%' }} />,
    expert: 'Giới thiệu nhãn hàng',

  },
  {
    title: 'Inverter Luxpower',
    path: '/hybrid-mot-pha',
    icon: <ThunderboltOutlined style={{ color: 'orange', fontSize: '40px', position: 'absolute', top: '50%', left: '50%', translate: '-50% -50%' }} />,
    expert: 'Giới thiệu nhãn hàng',

  },

  {
    title: 'Inverter Huawei',
    path: '/hybrid-mot-pha',
    icon: <ThunderboltOutlined style={{ color: 'orange', fontSize: '40px', position: 'absolute', top: '50%', left: '50%', translate: '-50% -50%' }} />,
    expert: 'Giới thiệu nhãn hàng',

  },
  {
    title: 'Inverter GoodWe',
    path: '/hybrid-mot-pha',
    icon: <ThunderboltOutlined style={{ color: 'orange', fontSize: '40px', position: 'absolute', top: '50%', left: '50%', translate: '-50% -50%' }} />,
    expert: 'Giới thiệu nhãn hàng',

  },
  {
    title: 'Inverter Growatt',
    path: '/hybrid-mot-pha',
    icon: <ThunderboltOutlined style={{ color: 'orange', fontSize: '40px', position: 'absolute', top: '50%', left: '50%', translate: '-50% -50%' }} />,
    expert: 'Giới thiệu nhãn hàng',

  },
  {
    title: 'Inverter Fronius',
    path: '/hybrid-mot-pha',
    icon: <ThunderboltOutlined style={{ color: 'orange', fontSize: '40px', position: 'absolute', top: '50%', left: '50%', translate: '-50% -50%' }} />,
    expert: 'Giới thiệu nhãn hàng',

  },

];



export default function Inverter() {

  return (
    <>
      <Layout style={{ width: '100%', background: '#fff' }}>
        <Content style={{ display: 'flex', flexDirection: 'column', width: '100%', alignContent: 'center' }}>

          <Row style={{ position: 'relative' }}>

            <Col style={{
              background: 'linear-gradient(to right, #6ef195 , #00e3fd)', width: '100%', height: '265px', margin: '0px 0px 0 0px', padding: '15px', textAlign: 'center', position: 'relative'
            }}>
              <div style={{ position: 'absolute', top: 0, left: '50%', translate: '-50% 0%', width: '100%', height: '600px' }}>
                <Typography.Title style={{ position: 'absolute', top: '100px', left: '50%', translate: '-50% -50%', width: '100%', textTransform: 'uppercase', color: '#fff' }} level={3}>Inverter</Typography.Title>
                <Typography.Title style={{ position: 'absolute', top: '150px', left: '50%', translate: '-50% -50%', width: '300px', fontSize: '14px', color: '#fff', fontWeight: 300 }} level={5}>Biến tần</Typography.Title>
              </div>
            </Col>
            <div style={{ background: 'linear-gradient(to bottom, #ffffff00, #ffffff60 , #fff)', width: '100%', height: '60px', position: 'absolute', bottom: '-1px' }}>
            </div>
          </Row>


          <Row>

            <Col style={{ width: '100%', margin: '0 5px 0', padding: '10px', background: '#fff', borderRadius: '8px' }}>
              {itemsData.map((item, index) => {
                return (
                  <>
                    <Row style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <Row style={{ display: 'flex', alignItems: 'center', position: 'relative' }}>
                        <Col style={{ borderRadius: '6px', background: '#F2F1F6', width: '60px', height: '70px' }}>{item.icon}</Col>
                        <Col>
                          <Typography.Title style={{ color: '#000', margin: '0px 5px 0px 5px', textAlign: 'left', fontWeight: 500 }} level={5}>{item.title}</Typography.Title>
                          <Typography.Title style={{ color: '#000', margin: '0px 5px 0px 5px', textAlign: 'left', fontWeight: 300, fontSize: '14px' }} level={5}>{item.expert}</Typography.Title>
                        </Col>
                      </Row>
                      <Col>
                        <RightOutlined />
                      </Col>
                    </Row>
                    {index !== itemsData.length - 1 && <Divider style={{ margin: '5px 0' }} />}
                  </>
                )
              }
              )}

            </Col>
          </Row>
        </Content>
      </Layout>



    </>
  )
}
