'use client'
import { Layout, Typography } from "antd";
import QuestionAndAnswer from "./component/home/question.answer";
import { Content } from "antd/es/layout/layout";
import MetricSlider from "./component/home/metric.slider";
import ServiceSlider from "./component/home/service.slider";
import Hero from "./component/home/hero";
import Advantage from "./component/home/advantage";
import Hybrid from "./component/home/hybrid";
import Ongrid from "./component/home/ongrid";
import Combo from "./component/home/combo.hybrid";
import ComboHybrid from "./component/home/combo.hybrid";
import ComboOngrid from "./component/home/combo.ongrid";




export default function Home() {

  return (
    <>

      <Layout style={{ width: '100%', background: '#F2F1F6' }}>
        <Content style={{ display: 'flex', flexDirection: 'column', width: '100%', alignContent: 'left' }}>
          <div style={{ marginTop: '70px' }}>
            <Hero />
          </div>

          <div style={{ marginTop: '0px' }}>
            <ServiceSlider />
          </div>
          <div style={{ marginTop: '70px' }}>
            <Advantage />
          </div>
          <div style={{ marginTop: '20px' }}>
            <Hybrid />
          </div>
          <div style={{ marginTop: '20px' }}>
            <Ongrid />
          </div>
          <div style={{ marginTop: '20px' }}>
            <ComboHybrid />
          </div>
          <div style={{ marginTop: '20px' }}>
            <ComboOngrid />
          </div>
          <Typography.Title style={{ margin: '20px auto', fontSize: '20px' }} >Câu hỏi thường gặp</Typography.Title>
          <QuestionAndAnswer />
          <Typography.Title style={{ margin: '20px auto', fontSize: '20px' }}>Tư vấn vấn - Báo giá</Typography.Title>
          <MetricSlider />
        </Content>
      </Layout>

    </>
  )
}
