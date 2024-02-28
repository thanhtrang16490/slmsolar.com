'use client'
import { Layout } from "antd";
import QuestionAndAnswer from "./component/home/question.answer";
import { Content } from "antd/es/layout/layout";
import MetricSlider from "./component/home/metric.slider";
import ServiceSlider from "./component/home/service.slider";
import Hero from "./component/home/hero";
import Advantage from "./component/home/advantage";
import Hybrid from "./component/home/hybrid";
import Ongrid from "./component/home/ongrid";
import ComboHybrid from "./component/home/combo.hybrid";
import ComboOngrid from "./component/home/combo.ongrid";
import AdvantageSlider from "./component/home/advantage.slider";
import ContactHome from "./component/home/contact";




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
          <QuestionAndAnswer />
          <div style={{ margin: '30px 16px', borderRadius: '8px', backgroundColor: '#000' }}>
            <video width="100%" height="210" preload="none" controls>
              <source src="/img/slm-video.mp4" type="video/mp4" />
              <track
                src="/img/slm-video.mp4"
                kind="subtitles"
                srcLang="en"
                label="English"
              />
              Your browser does not support the video tag.
            </video>
          </div>

          <AdvantageSlider />

          <MetricSlider />

          <ContactHome />
        </Content>
      </Layout>

    </>
  )
}

