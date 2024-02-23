'use client'
import { Layout, Typography } from "antd";
import QuestionAndAnswer from "./component/home/question.answer";
import { Content } from "antd/es/layout/layout";
import MetricSlider from "./component/home/metric.slider";



export default function Home() {

  return (
    <>

      <Layout style={{ width: '100%', background: '#F2F1F6' }}>
        <Content style={{ display: 'flex', flexDirection: 'column', width: '100%', alignContent: 'left' }}>

          <Typography.Title style={{ margin: '20px auto', fontSize: '20px' }} >Câu hỏi thường gặp</Typography.Title>
          <QuestionAndAnswer />
          <Typography.Title style={{ margin: '20px auto', fontSize: '20px' }}>Tư vấn vấn - Báo giá</Typography.Title>
          <MetricSlider />
        </Content>
      </Layout>

    </>
  )
}