'use client'
import { PlayCircleFilled } from '@ant-design/icons';
import React, { useState } from 'react';
import type { CollapseProps } from 'antd';
import { Col, Collapse, ConfigProvider, Layout, Row, Select, Typography } from 'antd';
import Image from 'next/image';
import { Content } from 'antd/es/layout/layout';

const { Option } = Select;

const noidung1 = (
  <ul>
    <li>EMS bên trong để kiểm soát chính xác</li>
    <li>Khả năng tương thích lưới bật và tắt</li>
    <li>Bảo vệ chạm đất DC</li>
    <li>Tỷ lệ DC / AC lên đến 2(một pha)</li>
    <li>Khởi động đen đa nguồn</li>
    <li>Xếp hạng bảo vệ IP66</li>
  </ul>
);

const noidung2 = (
  <ul>
    <li>Bộ nguồn V2H, năng lượng dự phòng dồi dào</li>
    <li>Truyền năng lượng V2G, sẵn sàng cho giao dịch năng lượng</li>
    <li>Khởi động đen với hỗ trợ EV hệ thống năng lượng gia đình</li>
    <li>Sạc hai chiều ổn định tối đa 25 kW</li>
    <li>Sạc 150 V - 1000 V, khả năng tương thích EV đa dạng</li>
    <li>Sạc EV với 100% năng lượng mặt trời</li>
    <li>Theo dõi và lên lịch sạc trên ứng dụng mySigen</li>
    <li>Bảo vệ IP66, không cần bảo trì</li>
  </ul>
);
const noidung3 = (
  <>
    <ul>
      <li>Dung lượng tế bào lớn, điện áp thấp và bền</li>
      <li>Bảo vệ trọn vẹn an toàn pin nhiều lớp</li>
      <li>Trạng thái pin có thể nhìn thấy trên ứng dụng mySigen</li>
      <li>Kết nối nhanh để cài đặt nhanh</li>
      <li>Hỗ trợ AI, tuổi thọ pin được tối ưu hóa</li>
      <li>Kết nối song song để kết hợp pin linh hoạt</li>
    </ul>
  </>
);
const noidung4 =
  <div style={{ padding: '10px', textAlign: 'justify' }}>
    Cổng năng lượng Sigen, khi được sử dụng với SigenStor, cung cấp hệ thống quản lý và giám sát năng lượng thông minh. Cổng năng lượng Sigen tự động phát hiện sự cố mất điện và chuyển đổi trơn tru sang nguồn điện dự phòng. Bạn có thể theo dõi việc sử dụng năng lượng và kiểm soát tất cả dòng năng lượng bằng Ứng dụng mySigen.
  </div>
  ;



type ExpandIconPosition = 'start' | 'end';

const Sigeneryframetwo: React.FC = () => {
  const [expandIconPosition, setExpandIconPosition] = useState<ExpandIconPosition>('start');

  const onPositionChange = (newExpandIconPosition: ExpandIconPosition) => {
    setExpandIconPosition(newExpandIconPosition);
  };

  const onChange = (key: string | string[]) => {
    console.log(key);
  };


  const itemone: CollapseProps['items'] = [
    {
      key: '1',
      label: <div style={{ height: '60px', paddingTop: '5px' }}>
        <Typography.Title style={{ fontSize: '14px', fontWeight: '600', lineHeight: 1 }} >Biến tần Sigen PV</Typography.Title>
        <Typography.Paragraph style={{ fontSize: '14px', fontWeight: '300', lineHeight: 1 }} >Hybrid / On-grid Inverter</Typography.Paragraph>
      </div>,
      children: <div style={{ padding: '2px', borderRadius: '6px', backgroundColor: '#fff2e8' }}>{noidung1}</div>,
      extra:
        <div style={{ position: 'relative' }}>
          <Image style={{ position: 'absolute', top: '0px', right: 0 }} src="/img/sigenergy/pro-3jm-1.png" alt="Picture of the author" width={150} height={60} />
        </div>
    },
  ];
  const itemtwo: CollapseProps['items'] = [
    {
      key: '2',
      label: <div style={{ height: '50px', paddingTop: '5px' }}>
        <Typography.Title style={{ fontSize: '14px', fontWeight: '600', lineHeight: 1 }} >Mô-đun sạc Sigen DC</Typography.Title>
        <Typography.Paragraph style={{ fontSize: '14px', fontWeight: '300', lineHeight: 1 }} >Sạc siêu tốc EV DC</Typography.Paragraph>

      </div>,
      children: <div style={{ padding: '2px', borderRadius: '6px', backgroundColor: '#fff2e8' }}>{noidung2}</div>,
      extra:
        <div style={{ position: 'relative' }}>
          <Image style={{ position: 'absolute', top: '0px', right: 0 }} src="/img/sigenergy/pro-3jm-2.png" alt="Picture of the author" width={150} height={50} />
        </div>
    },
  ];
  const itemthree: CollapseProps['items'] = [
    {
      key: '3',
      label: <div style={{ height: '180px', paddingTop: '5px' }}>
        <Typography.Title style={{ fontSize: '14px', fontWeight: '600', lineHeight: 1 }} >Sigen Battery</Typography.Title>
        <Typography.Paragraph style={{ fontSize: '14px', fontWeight: '300', lineHeight: 1 }} >Pinlithium hiệu suất cao</Typography.Paragraph>

      </div>,
      children: <div style={{ padding: '2px', borderRadius: '6px', backgroundColor: '#fff2e8' }}>{noidung3}</div>,
      extra:
        <div style={{ position: 'relative' }}>
          <Image style={{ position: 'absolute', top: '0px', right: 0 }} src="/img/sigenergy/pro-3jm-3.png" alt="Picture of the author" width={150} height={180} />
        </div>
    },
  ];
  const itemfour: CollapseProps['items'] = [
    {
      key: '4',
      label: <div style={{ height: '205px', paddingTop: '5px' }}>
        <Typography.Title style={{ fontSize: '14px', fontWeight: '600', lineHeight: 1 }} >Cổng năng lượng Sigen
        </Typography.Title>

      </div>,
      children: <div style={{ padding: '2px', borderRadius: '6px', backgroundColor: '#fff2e8' }}>{noidung4}</div>,
      extra:
        <div style={{ position: 'relative' }}>
          <Image style={{ position: 'absolute', top: '20px', right: '20px' }} src="/img/sigenergy/sigen-getway-2.png" alt="Picture of the author" width={100} height={177} />
        </div>
    },
  ];

  return (
    <>
      <Layout style={{ width: '100%', background: '#fff' }}>
        <Content style={{ display: 'flex', flexDirection: 'column', width: '100%', alignContent: 'center' }}>

          <Row style={{ position: 'relative' }}>
            <Col style={{
              width: '100%', height: '120px', margin: '-15px 0px 0 0px', padding: '0px', textAlign: 'center', position: 'relative'
            }}>

              <div style={{ position: 'absolute', top: 0, left: '50%', translate: '-50% 0%', width: '100%', height: '600px' }}>
                <Typography.Title style={{ textAlign: 'left', margin: '30px 0 0px 20px', fontSize: '30px', fontWeight: '600' }} >Chi tiết thành phần<br />hệ Sigenergy</Typography.Title>
              </div>

            </Col>
          </Row>
          <ConfigProvider
            theme={{
              components: {
                Collapse: {
                  headerPadding: '0px 15px',
                  headerBg: '#fff',
                  contentPadding: '10px 20px',


                },
              },
            }}
          >
            <Collapse
              expandIcon={({ isActive }) => <PlayCircleFilled style={{ fontSize: '24px', paddingTop: '20px' }} rotate={isActive ? 90 : 0} />}
              style={{ borderRadius: 0 }}
              bordered={false}
              onChange={onChange}
              items={itemone}
            />
            <Collapse
              expandIcon={({ isActive }) => <PlayCircleFilled style={{ fontSize: '24px', paddingTop: '20px' }} rotate={isActive ? 90 : 0} />}
              style={{ borderRadius: 0 }}
              bordered={false}
              onChange={onChange}
              items={itemtwo}
            />
            <Collapse
              expandIcon={({ isActive }) => <PlayCircleFilled style={{ fontSize: '24px', paddingTop: '20px' }} rotate={isActive ? 90 : 0} />}
              style={{ borderRadius: 0 }}
              bordered={false}
              onChange={onChange}
              items={itemthree}
            />
            <Collapse
              expandIcon={({ isActive }) => <PlayCircleFilled style={{ fontSize: '24px', paddingTop: '20px' }} rotate={isActive ? 90 : 0} />}
              style={{ borderRadius: 0 }}
              bordered={false}
              onChange={onChange}
              items={itemfour}
            />

          </ConfigProvider>
        </Content>
      </Layout>

    </>
  );
};

export default Sigeneryframetwo;