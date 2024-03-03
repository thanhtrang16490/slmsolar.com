'use client'
import { Card, Col, Divider, Layout, Row, Statistic, Steps, Tabs, Typography } from "antd";
import { Content } from "antd/es/layout/layout";
import { RightOutlined, ThunderboltOutlined } from '@ant-design/icons';

const itemsData = [
  {
    title: 'Tin tức 1',

    image: <ThunderboltOutlined style={{ color: 'orange', fontSize: '40px', position: 'absolute', top: '50%', left: '50%', translate: '-50% -50%' }} />,
    expert: ' ',

  },
  {
    title: 'Tin tức 2',

    image: <ThunderboltOutlined style={{ color: 'orange', fontSize: '40px', position: 'absolute', top: '50%', left: '50%', translate: '-50% -50%' }} />,
    expert: ' ',

  },
  {
    title: 'Tin tức 3',

    image: <ThunderboltOutlined style={{ color: 'orange', fontSize: '40px', position: 'absolute', top: '50%', left: '50%', translate: '-50% -50%' }} />,
    expert: ' ',

  },
  {
    title: 'Tin tức 4',

    image: <ThunderboltOutlined style={{ color: 'orange', fontSize: '40px', position: 'absolute', top: '50%', left: '50%', translate: '-50% -50%' }} />,
    expert: ' ',

  },
  {
    title: 'Tin tức 5',

    image: <ThunderboltOutlined style={{ color: 'orange', fontSize: '40px', position: 'absolute', top: '50%', left: '50%', translate: '-50% -50%' }} />,
    expert: ' ',

  },

];



export default function News() {

  return (
    <>
      <Layout style={{ width: '100%', background: '#fff' }}>
        <Content style={{ display: 'flex', flexDirection: 'column', width: '100%', alignContent: 'center' }}>

          <Row style={{ position: 'relative' }}>

            <Col style={{
              width: '100%', height: '90px', margin: '50px 0px 0 0px', padding: '0px', textAlign: 'center', position: 'relative'
            }}>
              <div style={{ position: 'absolute', top: 0, left: '50%', translate: '-50% 0%', width: '100%', height: '600px' }}>
                <Typography.Title style={{ textAlign: 'left', margin: '30px 0 0px 20px', fontSize: '30px', fontWeight: '600' }} >Tin tức điện nặng lượng</Typography.Title>
              </div>
            </Col>
          </Row>


          <Row>

            <Col style={{ width: '100%', margin: '0 5px 0', padding: '10px', background: '#fff', borderRadius: '8px' }}>
              {itemsData.map((item, index) => {
                return (
                  <>
                    <Row style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <Row style={{ display: 'flex', alignItems: 'flex-start', position: 'relative' }}>
                        <Col style={{ borderRadius: '6px', background: '#F2F1F6', width: '140px', height: '90px' }}>{item.image}</Col>
                        <Col>
                          <Typography.Title style={{ color: '#000', margin: '10px 5px 0px 10px', textAlign: 'left', fontWeight: 500 }} level={5}>{item.title}</Typography.Title>
                          <Typography.Title style={{ color: '#000', margin: '0px 5px 0px 5px', textAlign: 'left', fontWeight: 300, fontSize: '14px' }} level={5}>{item.expert}</Typography.Title>
                        </Col>
                      </Row>
                      {/* <Col>
                        <RightOutlined />
                      </Col> */}
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
