

import { Col, Row, Typography } from "antd";
import Image from "next/image";



const serviceData = [
  {
    image: '/img/off-grid.png',
    title: 'TƯ VẤN - MIỄN PHÍ',
    content: 'Solarmax tư vấn nhu cầu sử dụng điện của gia đình bạn, đưa ra giải pháp hệ NLMT công suất phù hợp'
  },
  {
    image: '/img/off-grid.png',
    title: 'KHẢO SÁT - MIỄN PHÍ',
    content: 'Solarmax luôn có mặt tại gia đình để đưa ra phương án lắp đặt tối ưu nhất, dựa vào Hóa đơn tiền điện hàng tháng, Mặt bằng lắp đặt, Hướng nắng, Hệ thống điện gia đình'
  },
  {
    image: '/img/off-grid.png',
    title: 'LẮP ĐẶT - TRỌN GÓI',
    content: 'Solarmax là tổng thầu EPC các dự án NLMT hệ gia đình 3kW-50kW, hệ công nghiệp từ 100kW- 5 MW'
  },
  {
    image: '/img/off-grid.png',
    title: 'BẢO HÀNH - TRỌN ĐỜI',
    content: 'Solarmax cam kết bảo hành sản phẩm và hỗ trợ gia đình trong suốt thời gian sử dụng 24/7'
  },

]

const ServiceSlider = () => {


  return (
    <>
      {serviceData.map((item, index) => {
        return (
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
                  <Image style={{ borderRadius: '8px' }} alt='bam-tai' layout="fill" objectFit="cover" src={item.image} />
                </div>
                <Typography.Title style={{ position: 'absolute', margin: '10px 20px' }} level={5}>
                  {item.title}
                </Typography.Title>
              </Row>


              <Typography.Paragraph style={{ margin: '10px 20px', textAlign: 'justify' }}>
                {item.content}
              </Typography.Paragraph>


            </Col>
          </Row>
        )
      })

      }
    </>

  );
}



export default ServiceSlider;


