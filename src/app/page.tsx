'use client'
import { Badge, Card, Col, Descriptions, Layout, Row, Statistic, Steps, Tabs, Typography } from "antd";
import QuestionAndAnswer from "./component/home/question.answer";
import Image from "next/image";
import { Content } from "antd/es/layout/layout";
import MainSlider from "./component/home/main.slider";
import ServiceSlider from "./component/home/service.slider";
import AdvantageSlider from "./component/home/advantage.slider";
import MetricSlider from "./component/home/metric.slider";

type DescriptionsProps = any;



const itemHybrid: DescriptionsProps['items'] = [
  {
    key: '1',
    label: <>Nguyên lý <br /> hoạt động</>,
    children: <>
      - Điện mặt trời<br />
      - Điện pin lưu trữ<br />
      - Điện lưới
    </>,
  },
  {
    key: '2',
    label: <>Khả năng<br /> vận hành</>,
    children: <>Có thể hoạt động<br /> độc lập ngay cả<br /> khi mất điện lưới</>,
  },
  {
    key: '3',
    label: 'Thiết bị chính',
    children:
      <>
        - Tấm pin NLMT<br />
        - Inverter Hybrid<br />
        - Pin Lithium
      </>,
  },


];


const itemOnGrid: DescriptionsProps['items'] = [
  {
    key: '1',
    label: <>Nguyên lý <br /> hoạt động</>,
    children: <>
      - Điện mặt trời<br />
      - Điện lưới<br />

    </>,
  },
  {
    key: '2',
    label: <>Khả năng<br /> vận hành</>,
    children: <>Chỉ hoạt động được<br />khi được kết hợp<br />cùng điện lưới</>,
  },
  {
    key: '3',
    label: 'Thiết bị chính',
    children:
      <>
        - Tấm pin NLMT<br />
        - Inverter On-Grid<br />

      </>,
  },


];


export default function Home() {

  return (
    <>

      <Layout style={{ width: '100%', background: '#F2F1F6' }}>
        <Content style={{ display: 'flex', flexDirection: 'column', width: '100%', alignContent: 'left' }}>
          <MainSlider />


          <Row>
            <Typography.Title style={{ margin: '20px auto' }} level={4}>Quy trình dịch vụ</Typography.Title>
            <Col>
              <ServiceSlider />
            </Col>
          </Row>
          <Row>
            <Typography.Title style={{ margin: '20px auto' }} level={4}>Lợi ích của điện mặt trời</Typography.Title>
            <Col>
              <AdvantageSlider />
            </Col>
          </Row>






          <Row >
            <Typography.Title style={{ margin: '20px auto' }} level={4}>Phân biệt hybrid và bám tải</Typography.Title>
            <Col style={{ width: '100%', margin: '0px 15px 0px 15px', height: '600px', padding: '10px', background: '#fff', borderRadius: '8px', boxShadow: '0 1px 2px 0 rgba(60,64,67,.1), 0 2px 6px 2px rgba(60,64,67,.15)' }}>
              <Tabs
                defaultActiveKey="1"
                centered
                items={[

                  {
                    key: '1',
                    label: 'Hệ Hybrid',
                    children:
                      <>
                        <div style={{ padding: '10px', width: '100%', paddingTop: '56%', position: 'relative' }}>
                          <Image style={{ borderRadius: '8px' }} alt='bam-tai' layout="fill" objectFit="cover" src='/img/hybrid.png' />
                        </div><br />
                        <Descriptions
                          bordered
                          column={1}
                          items={itemHybrid}
                        />
                      </>,
                  },
                  {
                    key: '2',
                    label: 'Hệ bám tải',
                    children:
                      <>
                        <div style={{ padding: '10px', width: '100%', paddingTop: '56%', position: 'relative' }}>
                          <Image style={{ borderRadius: '8px' }} alt='bam-tai' layout="fill" objectFit="cover" src='/img/off-grid.png' />
                        </div><br />
                        <Descriptions
                          bordered
                          column={1}
                          items={itemOnGrid}
                        />
                      </>

                  },

                ]}
              />
            </Col>
          </Row>
          <Typography.Title style={{ margin: '20px auto' }} level={4}>Câu hỏi thường gặp</Typography.Title>
          <QuestionAndAnswer />
          <Typography.Title style={{ margin: '20px auto' }} level={4}>Tư vấn vấn- Báo giá</Typography.Title>
          <MetricSlider />
        </Content>
      </Layout>

    </>
  )
}
