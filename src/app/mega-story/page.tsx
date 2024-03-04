'use client'
import { Col, Layout, Row, Typography } from "antd";
import { Content } from "antd/es/layout/layout";
import Image from "next/image";

const itemsData = [

  {
    title: 'Khám phá dòng điện xanh từ vùng đất đỏ xứ Nghệ',
    image: '/img/kham-pha-dong-dien-xanh.webp',
  },
  {
    title: 'Công nghệ 2024: Ai và hơn thế nữa',
    image: '/img/cong-nghe-ai-va-hon-the-nua.webp',
  },
];



export default function MegaStory() {

  return (
    <>
      <Layout style={{ width: '100%', background: '#fff' }}>
        <Content style={{ display: 'flex', flexDirection: 'column', width: '100%', alignContent: 'center' }}>

          <Row style={{ position: 'relative' }}>

            <Col style={{
              width: '100%', height: '90px', margin: '50px 0px 0 0px', padding: '0px', textAlign: 'center', position: 'relative'
            }}>
              <div style={{ position: 'absolute', top: 0, left: '50%', translate: '-50% 0%', width: '100%', height: '600px' }}>
                <Typography.Title style={{ textAlign: 'left', margin: '30px 0 0px 20px', fontSize: '30px', fontWeight: '600' }} >Mega Story</Typography.Title>
              </div>
            </Col>
          </Row>





          {itemsData.map((item, index) => {
            return (
              <>

                <Row >
                  <Col style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    width: '100%',
                    margin: '20px 15px 0px 15px',
                    height: '100%',
                    padding: '0px',
                    background: '#fff',
                    borderRadius: '8px',
                    boxShadow: '0 1px 2px 0 rgba(60,64,67,.1), 0 2px 6px 2px rgba(60,64,67,.15)'
                  }}>

                    <Row style={{ position: 'relative' }}>

                      <div style={{ padding: '0px', width: '100%', paddingTop: '56%', position: 'relative' }}>
                        <Image style={{ borderRadius: '8px 8px 0px 0px', objectFit: 'cover' }} alt={item.title} fill src={item.image} />
                      </div>

                    </Row>
                    <div>
                      <Typography.Title style={{ margin: '10px 20px', fontSize: '14px' }} level={5}>
                        {item.title}
                      </Typography.Title>

                    </div>


                  </Col>
                </Row>


              </>
            )
          }
          )}
        </Content>
      </Layout>
    </>
  )
}
