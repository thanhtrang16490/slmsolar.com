'use client'
import { Card, Col, Divider, Layout, Row, Statistic, Steps, Tabs, Typography } from "antd";
import { Content } from "antd/es/layout/layout";
import { RightOutlined, ThunderboltOutlined } from '@ant-design/icons';
import Image from "next/image";

const itemsData = [
  {
    title: 'Cung ứng điện năm 2024: “Than và thủy” tiếp tục giữ vai trò chủ đạo, năng lượng tái tạo huy động theo nhu cầu',

    image: '/img/cung-ung-dien-2024.jpeg',
    expert: ' ',

  },
  {
    title: 'Phát triển điện mặt trời mái nhà: Cần quy định rõ ràng, thống nhất',

    image: '/img/phat-trien-dien-mat-troi-mai-nha.jpeg',
    expert: ' ',

  },
  {
    title: 'Ngành điện mặt trời châu Âu “tiến thoái lưỡng nan” vì hàng nhập khẩu giá rẻ từ Trung Quốc',

    image: '/img/nganh-dien-mat-troi-chau-au.png',
    expert: ' ',

  },
  {
    title: 'Khủng hoảng năng lượng mặt trời tại châu Âu sẽ còn kéo dài',

    image: '/img/cuoc-khung-hoang-nang-luong-tai-chau-au.png',
    expert: ' ',

  },
  {
    title: 'Mỹ có thể tăng gấp 3 lần khả năng lưu trữ của pin vào năm 2025',

    image: '/img/my-tang-gap-ba.jpeg',
    expert: ' ',

  },
  {
    title: 'Có đến 3/6 chỉ tiêu đảm bảo an ninh năng lượng quốc gia đang biến động bất lợi',

    image: '/img/co-den-36-chi-tieu-dam-bao-an-ninh-nang-luong-quoc-gia-dang-bien-dong-bat-loi.jpeg',
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

            <Col style={{ width: '100%', margin: '0 5px 0', background: '#fff', borderRadius: '8px' }}>
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

            </Col>
          </Row>
        </Content>
      </Layout>



    </>
  )
}
