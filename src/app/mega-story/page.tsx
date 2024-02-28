'use client'
import { Card, Col, Divider, Layout, Row, Statistic, Steps, Tabs, Typography } from "antd";
import { Content } from "antd/es/layout/layout";
import { RightOutlined, ThunderboltOutlined } from '@ant-design/icons';
import Image from "next/image";

const itemsData = [
  {
    title: 'Khám phá dòng điện xanh từ vùng đất đỏ xứ Nghệ',
    path: '/hybrid-mot-pha',
    image: <>
      <div style={{}}>
        <Image
          src='/img/mega-story-1.png'
          alt='megastory 1'
          layout="fill"
          objectFit="cover"
        />
      </div>


    </>

  },
];



export default function MegaStory() {

  return (
    <>

      <Layout style={{ marginTop: '90px', width: '100%', background: '#fff' }}>

        <Content style={{ display: 'flex', flexDirection: 'column', width: '100%', alignContent: 'center' }}>
          <Typography.Title style={{ color: '#000', textAlign: 'left', margin: '0px 0 20px 20px', fontSize: '30x' }} >Mega Stories</Typography.Title>
          <Row>
            <Col style={{ width: '100%', margin: '0 5px 0', padding: '10px', background: '#fff', borderRadius: '8px' }}>
              {itemsData.map((item, index) => {
                return (
                  <>
                    <Row style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <Row style={{ display: 'flex', alignItems: 'flex-start', flexFlow: 'nowrap', position: 'relative' }}>
                        <Col style={{ borderRadius: '6px', background: '#F2F1F6', padding: '40%', width: '100%', position: 'relative' }}>
                          {item.image}
                        </Col>
                        <Col>
                          <Typography.Title style={{ color: '#000', margin: '10px 5px 0px 10px', textAlign: 'left', fontWeight: 500 }} level={5}>{item.title}</Typography.Title>
                        </Col>
                      </Row>

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
