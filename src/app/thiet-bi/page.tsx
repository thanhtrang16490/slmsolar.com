'use client'
import { Col, Collapse, Divider, Layout, Row, Typography } from "antd";
import { Content } from "antd/es/layout/layout";
import { CaretRightOutlined, RightOutlined } from '@ant-design/icons';
import Image from "next/image";
import { Descriptions } from 'antd';
import type { DescriptionsProps } from 'antd';

const jaSolarItems: DescriptionsProps['items'] = [
  {
    label: 'Công suất',
    children: '550 Wp',
  },
  {
    label: 'Loại Cell',
    children: 'Mono (đơn tinh thể)',
  },
  {
    label: 'Bề mặt',
    children: <>Kính cường lực<br /> dày 3,5mm</>,
  },
  {
    label: 'Khung pin',
    children: <>Hợp kim nhôm<br /> dày 3,5mm</>,
  },
  {
    label: 'Cân nặng',
    children: '26,8 kg',
  },
  {
    label: 'Kích thước',
    children: '2279 x 1134 x 35(mm)',
  },
  {
    label: 'Số lượng Cell',
    children: '144（6×24)',
  },
  {
    label: <>Bảo hành<br /> hiệu suất</>,
    children: '25 năm',
  },
  {
    label: <>Hiệu suất <br />quang năng</>,
    children: '21.3%',
  },
];

const canadianSolarItems: DescriptionsProps['items'] = [
  {
    label: 'Công suất',
    children: '550 Wp',
  },
  {
    label: 'Loại Cell',
    children: 'Mono',
  },
  {
    label: 'Bề mặt',
    children: <>Kính cường lực<br /> dày 3,5mm</>,
  },
  {
    label: 'Kích thước',
    children: '2279 x 1134 x 35(mm)',
  },
  {
    label: 'Cân nặng',
    children: '27,8 kg',
  },
  {
    label: 'Số lượng Cell',
    children: '144（6×24)',
  },
  {
    label: <>Nhiệt độ<br />vận hành</>,
    children: '-40°C ~ +85°C',
  },

  {
    label: <>Hiệu suất <br />quang năng</>,
    children: '20.7%',
  },
  {
    label: <>Điện áp<br />cực đại</>,
    children: <>1500V (IEC/UL)<br /> hoặc 1000V (IEC/UL)</>,
  },
  {
    label: <>Bảo hành<br /> hiệu suất</>,
    children: '25 năm',
  },
];

const risenSolarItems: DescriptionsProps['items'] = [
  {
    label: 'Tế bào quang điện',
    children: 'Monocrystalline, 9BB',
  },
  {
    label: 'Số lượng Cell pin',
    children: '110 cells',
  },
  {
    label: 'Cân nặng',
    children: '32,5 kg',
  },
  {
    label: 'Loại cell',
    children: "Đơn tinh thể half cell 156 cell",
  },
  {
    label: 'Nhiệt độ vận hành',
    children: '-40°C ~ +85°C',
  },

  {
    label: 'Điện áp hệ thống tối đa',
    children: '1500V DC (IEC), 1500V DC (UL)',
  },
  {
    label: 'Hiệu suất',
    children: '20.7%',
  },
  {
    label: 'Kích thước',
    children: '2384 x 1096 x 30(mm)',
  },
  {
    label: <>Bảo hành<br /> hiệu suất</>,
    children: '25 năm',
  },
];

const longgiSolarItems: DescriptionsProps['items'] = [
  {
    label: 'Công suất',
    children: '550 Wp',
  },
  {
    label: 'Loại Cell',
    children: 'Mono',
  },
  {
    label: 'Kích thước',
    children: '2256 x 1096 x 30(mm)',
  },
  {
    label: 'Cân nặng',
    children: '27,5 kg',
  },

  {
    label: 'Số lượng Cell',
    children: '144',
  },
  {
    label: 'Nhiệt độ vận hành',
    children: '-40C ~ +85C',
  },
  {
    label: 'Khung pin',
    children: <>Hợp kim nhôm<br /> dày 3,5mm</>,
  },

  {
    label: <>Điện áp <br />cực đại</>,
    children: '1500V (IEC/UL)',
  },
  {
    label: <>Hiệu suất <br />quang năng</>,
    children: '21.5%',
  },
  {
    label: <>Bảo hành<br /> hiệu suất</>,
    children: '25 năm',
  },

];

const inverterDeyeeitems: DescriptionsProps['items'] = [
  {
    label: 'Công suất đầu vào DC lớn nhất',
    children: '6.5 kw',
  },
  {
    label: 'Đầu ra AC lớn nhất ',
    children: '5.5kW',
  },
  {
    label: 'Hiệu suất',
    children: '97,6%',
  },
  {
    label: 'Hiệu suất tiêu chuẩn EU',
    children: '97%',
  },
  {
    label: 'Bảo hành',
    children: '5 năm',
  },
  {
    label: 'Chống nước, chống bụi',
    children: 'IP65',
  },
  {
    label: 'Hiển thị',
    children: 'Màn hình LCD',
  },
  {
    label: 'Kết nối',
    children: 'Wifi',
  },
  {
    label: 'Ứng dụng theo dõi',
    children: 'iOS, Android',
  },

];
const inverterLuxpoweritems: DescriptionsProps['items'] = [
  {
    label: 'Công suất đầu vào DC lớn nhất',
    children: '15 kw',
  },
  {
    label: 'Đầu ra AC lớn nhất ',
    children: '10kW',
  },
  {
    label: 'Khả năng ghép',
    children: 'Tối đa 6 máy thành 1 pha hoặc 3 pha',
  },
  {
    label: 'Bảo hành',
    children: '5 năm',
  },
  {
    label: 'Chống nước, bụi',
    children: 'IP65',
  },
  {
    label: 'Hiển thị',
    children: 'Màn hình LCD',
  },
  {
    label: 'Kết nối',
    children: 'Wifi',
  },
  {
    label: 'Ứng dụng theo dõi',
    children: 'iOS, Android',
  },
];
const inverterHuaweiitems: DescriptionsProps['items'] = [
  {
    label: 'Điện áp đầu vào tối đa',
    children: '1,100V',
  },
  {
    label: 'Công suất AC hiệu dụng',
    children: '10,000W',
  },
  {
    label: 'Hiệu suất',
    children: '98.6%',
  },
  {
    label: 'Bảo hành',
    children: '5 năm',
  },
  {
    label: 'Chống nước, bụi',
    children: 'IP65',
  },
  {
    label: 'Hiển thị',
    children: 'Màn hình LCD',
  },
  {
    label: 'Kết nối',
    children: 'Wifi',
  },
  {
    label: 'Ứng dụng theo dõi',
    children: 'iOS, Android',
  },
];
const inverterGrowattitems: DescriptionsProps['items'] = [
  {
    label: 'Công suất đầu vào DC lớn nhất',
    children: '15kW',
  },
  {
    label: 'Công suất AC hiệu dụng',
    children: '10kW',
  },
  {
    label: 'Hiệu suất',
    children: '98.6%',
  },
  {
    label: 'Bảo hành',
    children: '5 năm',
  },
  {
    label: 'Chống nước, bụi',
    children: 'IP65',
  },
  {
    label: 'Hiển thị',
    children: 'Màn hình LCD',
  },
  {
    label: 'Kết nối',
    children: 'Wifi',
  },
  {
    label: 'Ứng dụng theo dõi',
    children: 'iOS, Android',
  },
];

const lithiumUfoItems: DescriptionsProps['items'] = [
  {
    label: 'Dung lượng pin',
    children: '100Ah',
  },
  {
    label: 'Cell pin',
    children: '15 cells',
  },
  {
    label: 'Dòng sạc',
    children: '20A',
  },
  {
    label: 'Điện áp sạc',
    children: '54.75V',
  },
  {
    label: 'Dòng xả',
    children: '20A',
  },
  {
    label: 'Điện áp hoạt động',
    children: '48-49.5V',
  },
  {
    label: 'Điện áp hoạt động',
    children: '48-49.5V',
  },
  {
    label: 'Điện áp ngừng xả ',
    children: '37.5V',
  },
  {
    label: 'Điện áp sạc',
    children: '54-54.75V',
  },
  {
    label: 'Dòng sạc liên tục cực đại',
    children: '50A',
  },
  {
    label: 'Dòng xả liên tục cực đại',
    children: '100A',
  },
  {
    label: 'Nhiệt độ sạc',
    children: '0-45°C ',
  },
  {
    label: 'Nhiệt độ xả',
    children: '22-55°C',
  },
  {
    label: 'Nhiệt độ xả',
    children: '22-55°C',
  },
  {
    label: 'Kích thước loại gắn tường',
    children: '650 x 485 x 200 mm',
  },
  {
    label: 'Trọng lượng loại giá đỡ',
    children: '57.5 kg',
  },

];
const lithiumSveItems: DescriptionsProps['items'] = [
  {
    label: 'Công suất',
    children: '5.12 kWh',
  },
  {
    label: 'Dải điện áp',
    children: '44.8V - 57.6V',
  },
  {
    label: 'Dòng sạc tối đa',
    children: '100A',
  },
  {
    label: 'Dòng sạc tiêu chuẩn',
    children: '< 50A',
  },
  {
    label: 'Dòng xả tối đa',
    children: '100A',
  },
  {
    label: 'Kích thước',
    children: '442x470x154 mm',
  },
  {
    label: 'Trọng lượng',
    children: '148kg',
  },
];
const lithiumLaradaItems: DescriptionsProps['items'] = [
  {
    label: 'Điện áp danh định',
    children: '48Vdc',
  },
  {
    label: 'Dung lượng pin',
    children: '50Ah',
  },
  {
    label: 'Dòng xả',
    children: '40A',
  },
  {
    label: 'Điện áp xả',
    children: '40.5Vdc',
  },
  {
    label: 'Điện áp sạc danh định',
    children: '54.6V ± 0.5Vdc',
  },
  {
    label: 'Dòng sạc',
    children: '10A - 40A',
  },
  {
    label: 'Trọng lượng',
    children: '32 Kg',
  },
  {
    label: 'Kích thước',
    children: '442 x 390 x 132.5 mm',
  },

];
const lithiumSMBItems: DescriptionsProps['items'] = [

];



const itemsSolarData = [
  {
    title: 'Pin mặt trời JA Solar - 550W',
    icon:
      <div style={{ position: 'relative' }}>
        <Image style={{ zIndex: '1', position: 'absolute', left: '15px', top: '15px', translate: '-50% -50%' }} loading='eager' src='/img/solar-device.png' alt='device icon' width={40} height={65} />
        <div style={{ left: '15px', top: '15px', translate: '-50% -50%', position: 'absolute', borderRadius: '6px', background: '#F2F1F6', width: '60px', height: '70px' }}></div>
      </div>,
    desc:
      <>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
          {jaSolarItems.map((item, index) => {
            return (
              <>
                <div key={index} style={{ flex: '1 0 calc(50% - 5px)' }}>
                  <div style={{ height: '1px', width: '50px', backgroundColor: '#939393' }} ></div>
                  <Typography.Title style={{ fontSize: '14px', fontWeight: '600' }}>{item.label}</Typography.Title>
                  <Typography.Paragraph >{item.children}</Typography.Paragraph>
                </div >

              </>
            )
          })}
        </div >
      </>
  },
  {
    title: 'Pin mặt trời Canadian Solar - 550W',
    icon:
      <div style={{ position: 'relative' }}>
        <Image style={{ zIndex: '1', position: 'absolute', left: '15px', top: '15px', translate: '-50% -50%' }} loading='eager' src='/img/solar-device.png' alt='device icon' width={40} height={65} />
        <div style={{ left: '15px', top: '15px', translate: '-50% -50%', position: 'absolute', borderRadius: '6px', background: '#F2F1F6', width: '60px', height: '70px' }}></div>
      </div>,
    desc:
      <>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
          {canadianSolarItems.map((item, index) => {
            return (
              <>
                <div key={index} style={{ flex: '1 0 calc(50% - 5px)' }}>
                  <div style={{ height: '1px', width: '50px', backgroundColor: '#939393' }} ></div>
                  <Typography.Title style={{ fontSize: '14px', fontWeight: '600' }}>{item.label}</Typography.Title>
                  <Typography.Paragraph >{item.children}</Typography.Paragraph>
                </div >

              </>
            )
          })}
        </div >
      </>
  },
  {
    title: 'Pin mặt trời Risen Solar - 550W',
    icon:
      <div style={{ position: 'relative' }}>
        <Image style={{ zIndex: '1', position: 'absolute', left: '15px', top: '15px', translate: '-50% -50%' }} loading='eager' src='/img/solar-device.png' alt='device icon' width={40} height={65} />
        <div style={{ left: '15px', top: '15px', translate: '-50% -50%', position: 'absolute', borderRadius: '6px', background: '#F2F1F6', width: '60px', height: '70px' }}></div>
      </div>,
    desc:
      <>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
          {risenSolarItems.map((item, index) => {
            return (
              <>
                <div key={index} style={{ flex: '1 0 calc(50% - 5px)' }}>
                  <div style={{ height: '1px', width: '50px', backgroundColor: '#939393' }} ></div>
                  <Typography.Title style={{ fontSize: '14px', fontWeight: '600' }}>{item.label}</Typography.Title>
                  <Typography.Paragraph >{item.children}</Typography.Paragraph>
                </div >

              </>
            )
          })}
        </div >
      </>
  },
  {
    title: 'Pin mặt trời Longi Solar - 550W',
    icon:
      <div style={{ position: 'relative' }}>
        <Image style={{ zIndex: '1', position: 'absolute', left: '15px', top: '15px', translate: '-50% -50%' }} loading='eager' src='/img/solar-device.png' alt='device icon' width={40} height={65} />
        <div style={{ left: '15px', top: '15px', translate: '-50% -50%', position: 'absolute', borderRadius: '6px', background: '#F2F1F6', width: '60px', height: '70px' }}></div>
      </div>,
    desc:
      <>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
          {longgiSolarItems.map((item, index) => {
            return (
              <>
                <div key={index} style={{ flex: '1 0 calc(50% - 5px)' }}>
                  <div style={{ height: '1px', width: '50px', backgroundColor: '#939393' }} ></div>
                  <Typography.Title style={{ fontSize: '14px', fontWeight: '600' }}>{item.label}</Typography.Title>
                  <Typography.Paragraph >{item.children}</Typography.Paragraph>
                </div >

              </>
            )
          })}
        </div >
      </>
  },
];

const itemsInverterData = [
  {
    title: 'Inverter Hybrid Deye - 5kW',
    icon:
      <div style={{ position: 'relative' }}>
        <Image style={{ zIndex: '1', position: 'absolute', left: '15px', top: '15px', translate: '-50% -50%' }} loading='eager' src='/img/inverter-deyee-device.png' alt='device icon' width={40} height={65} />
        <div style={{ left: '15px', top: '15px', translate: '-50% -50%', position: 'absolute', borderRadius: '6px', background: '#F2F1F6', width: '60px', height: '70px' }}></div>
      </div>,
    desc:
      <>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
          {inverterDeyeeitems.map((item, index) => {
            return (
              <>
                <div key={index} style={{ flex: '1 0 calc(50% - 5px)' }}>
                  <div style={{ height: '1px', width: '50px', backgroundColor: '#939393' }} ></div>
                  <Typography.Title style={{ fontSize: '14px', fontWeight: '600' }}>{item.label}</Typography.Title>
                  <Typography.Paragraph >{item.children}</Typography.Paragraph>
                </div >

              </>
            )
          })}
        </div >
      </>
  },
  {
    title: 'Inverter Hybrid Luxpower - 10kW ',
    icon:
      <div style={{ position: 'relative' }}>
        <Image style={{ zIndex: '1', position: 'absolute', left: '15px', top: '15px', translate: '-50% -50%' }} loading='eager' src='/img/inverter-luxpower-device.png' alt='device icon' width={40} height={62} />
        <div style={{ left: '15px', top: '15px', translate: '-50% -50%', position: 'absolute', borderRadius: '6px', background: '#F2F1F6', width: '60px', height: '70px' }}></div>
      </div>,
    desc:
      <>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
          {inverterLuxpoweritems.map((item, index) => {
            return (
              <>
                <div key={index} style={{ flex: '1 0 calc(50% - 5px)' }}>
                  <div style={{ height: '1px', width: '50px', backgroundColor: '#939393' }} ></div>
                  <Typography.Title style={{ fontSize: '14px', fontWeight: '600' }}>{item.label}</Typography.Title>
                  <Typography.Paragraph >{item.children}</Typography.Paragraph>
                </div >

              </>
            )
          })}
        </div >
      </>
  },
  {
    title: 'Inverter Hybrid Huawei - 10kW',
    icon:
      <div style={{ position: 'relative' }}>
        <Image style={{ zIndex: '1', position: 'absolute', left: '15px', top: '15px', translate: '-50% -50%' }} loading='eager' src='/img/inverter-huawei-device.png' alt='device icon' width={40} height={40} />
        <div style={{ left: '15px', top: '15px', translate: '-50% -50%', position: 'absolute', borderRadius: '6px', background: '#F2F1F6', width: '60px', height: '70px' }}></div>
      </div>,
    desc:
      <>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
          {inverterHuaweiitems.map((item, index) => {
            return (
              <>
                <div key={index} style={{ flex: '1 0 calc(50% - 5px)' }}>
                  <div style={{ height: '1px', width: '50px', backgroundColor: '#939393' }} ></div>
                  <Typography.Title style={{ fontSize: '14px', fontWeight: '600' }}>{item.label}</Typography.Title>
                  <Typography.Paragraph >{item.children}</Typography.Paragraph>
                </div >

              </>
            )
          })}
        </div >
      </>
  },
  {
    title: 'Inverter Hybrid Growatt 10kW',
    icon:
      <div style={{ position: 'relative' }}>
        <Image style={{ zIndex: '1', position: 'absolute', left: '15px', top: '15px', translate: '-50% -50%' }} loading='eager' src='/img/inverter-growatt-device.png' alt='device icon' width={40} height={47} />
        <div style={{ left: '15px', top: '15px', translate: '-50% -50%', position: 'absolute', borderRadius: '6px', background: '#F2F1F6', width: '60px', height: '70px' }}></div>
      </div>,
    desc:
      <>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
          {inverterGrowattitems.map((item, index) => {
            return (
              <>
                <div key={index} style={{ flex: '1 0 calc(50% - 5px)' }}>
                  <div style={{ height: '1px', width: '50px', backgroundColor: '#939393' }} ></div>
                  <Typography.Title style={{ fontSize: '14px', fontWeight: '600' }}>{item.label}</Typography.Title>
                  <Typography.Paragraph >{item.children}</Typography.Paragraph>
                </div >

              </>
            )
          })}
        </div >
      </>

  },
];

const itemsBatteryData = [
  {
    title: 'Pin lưu trữ lithium SMB',
    icon:
      <div style={{ position: 'relative' }}>
        <Image style={{ zIndex: '1', position: 'absolute', left: '15px', top: '15px', translate: '-50% -50%' }} loading='eager' src='/img/smb-device.png' alt='device icon' width={40} height={46} />
        <div style={{ left: '15px', top: '15px', translate: '-50% -50%', position: 'absolute', borderRadius: '6px', background: '#F2F1F6', width: '60px', height: '70px' }}></div>
      </div>,
    desc:
      <>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
          {lithiumSMBItems.map((item, index) => {
            return (
              <>
                <div key={index} style={{ flex: '1 0 calc(50% - 5px)' }}>
                  <div style={{ height: '1px', width: '50px', backgroundColor: '#939393' }} ></div>
                  <Typography.Title style={{ fontSize: '14px', fontWeight: '600' }}>{item.label}</Typography.Title>
                  <Typography.Paragraph >{item.children}</Typography.Paragraph>
                </div >

              </>
            )
          })}
        </div >
      </>

  },
  {
    title: 'Pin lưu trữ lithium UFO ',
    icon:
      <div style={{ position: 'relative' }}>
        <Image style={{ zIndex: '1', position: 'absolute', left: '15px', top: '15px', translate: '-50% -50%' }} loading='eager' src='/img/ufo-device.png' alt='device icon' width={40} height={59} />
        <div style={{ left: '15px', top: '15px', translate: '-50% -50%', position: 'absolute', borderRadius: '6px', background: '#F2F1F6', width: '60px', height: '70px' }}></div>
      </div>,
    desc:
      <>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
          {lithiumUfoItems.map((item, index) => {
            return (
              <>
                <div key={index} style={{ flex: '1 0 calc(50% - 5px)' }}>
                  <div style={{ height: '1px', width: '50px', backgroundColor: '#939393' }} ></div>
                  <Typography.Title style={{ fontSize: '14px', fontWeight: '600' }}>{item.label}</Typography.Title>
                  <Typography.Paragraph >{item.children}</Typography.Paragraph>
                </div >

              </>
            )
          })}
        </div >
      </>
  },
  {
    title: 'Pin lưu trữ lithium SVE',
    icon:
      <div style={{ position: 'relative' }}>
        <Image style={{ zIndex: '1', position: 'absolute', left: '15px', top: '15px', translate: '-50% -50%' }} loading='eager' src='/img/sve-device.png' alt='device icon' width={40} height={18} />
        <div style={{ left: '15px', top: '15px', translate: '-50% -50%', position: 'absolute', borderRadius: '6px', background: '#F2F1F6', width: '60px', height: '70px' }}></div>
      </div>,
    desc:
      <>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
          {lithiumSveItems.map((item, index) => {
            return (
              <>
                <div key={index} style={{ flex: '1 0 calc(50% - 5px)' }}>
                  <div style={{ height: '1px', width: '50px', backgroundColor: '#939393' }} ></div>
                  <Typography.Title style={{ fontSize: '14px', fontWeight: '600' }}>{item.label}</Typography.Title>
                  <Typography.Paragraph >{item.children}</Typography.Paragraph>
                </div >

              </>
            )
          })}
        </div >
      </>

  },
  {
    title: 'Pin lưu trữ lithium Larada',
    icon:
      <div style={{ position: 'relative' }}>
        <Image style={{ zIndex: '1', position: 'absolute', left: '15px', top: '15px', translate: '-50% -50%' }} loading='eager' src='/img/nadara-device.png' alt='device icon' width={40} height={50} />
        <div style={{ left: '15px', top: '15px', translate: '-50% -50%', position: 'absolute', borderRadius: '6px', background: '#F2F1F6', width: '60px', height: '70px' }}></div>
      </div>,
    desc:
      <>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
          {lithiumLaradaItems.map((item, index) => {
            return (
              <>
                <div key={index} style={{ flex: '1 0 calc(50% - 5px)' }}>
                  <div style={{ height: '1px', width: '50px', backgroundColor: '#939393' }} ></div>
                  <Typography.Title style={{ fontSize: '14px', fontWeight: '600' }}>{item.label}</Typography.Title>
                  <Typography.Paragraph >{item.children}</Typography.Paragraph>
                </div >

              </>
            )
          })}
        </div >
      </>


  },
];


export default function ThietBi() {

  return (
    <>
      <Layout style={{ width: '100%', background: '#fff' }}>
        <Content style={{ display: 'flex', flexDirection: 'column', width: '100%', alignContent: 'center' }}>

          <Row style={{ position: 'relative' }}>

            <Col style={{
              width: '100%', height: '265px', margin: '50px 0px 0 0px', padding: '0px', textAlign: 'center', position: 'relative'
            }}>
              <div style={{ position: 'absolute', top: 0, left: '50%', translate: '-50% 0%', width: '100%', height: '600px' }}>
                <Typography.Title style={{ textAlign: 'left', margin: '30px 0 0px 20px', fontSize: '30px', fontWeight: '600' }} >Danh mục thiết bị<br />Pin mặt trời - Inverter<br />Pin lưu trữ</Typography.Title>
                <Typography.Paragraph style={{ textAlign: 'left', margin: '20px 70px 10px 20px', fontSize: '14px', fontWeight: '300' }} >Solarmax cung cấp thiết bị năng lượng mặt trời đến từ các thương hiệu hàng đầu thế giới với chi phí và hiệu năng tối ưu giúp khách hàng trải có được trải nhiệm tốt và hài lòng nhất</Typography.Paragraph>
              </div>
            </Col>
          </Row>

          <Row>
            <Typography.Title style={{ paddingLeft: '25px' }} level={4}>Pin năng lượng mặt trời</Typography.Title>
            <Col style={{ width: '100%', margin: '0 10px 0', background: '#fff', borderRadius: '8px' }}>
              <Row>
                {itemsSolarData.map((item, index) => {
                  return (
                    <>
                      <Col key={index} style={{ width: '100%', borderRadius: '8px' }}>
                        <Collapse
                          size="large"
                          items={[{
                            key: '1',
                            label: <Typography.Title style={{ margin: '20px 0 0 50px', height: '35px', color: '#000', textAlign: 'left', fontWeight: 400, fontSize: '14px' }} >{item.title}</Typography.Title>,
                            children: <>{item.desc}</>,
                            extra: <RightOutlined style={{ margin: '20px 0 0 0px' }} />,

                          }]}
                          expandIcon={({ isActive }) => <>{item.icon}</>}
                          style={{ background: '#ddd', margin: '5px 0', borderRadius: '6px' }}
                        />
                      </Col>
                    </>
                  )
                }
                )}


              </Row>

            </Col>
          </Row>

          <Row>
            <Typography.Title style={{ paddingLeft: '25px' }} level={4}>Biến tần - Inverter</Typography.Title>
            <Col style={{ width: '100%', margin: '0 10px 0', background: '#fff', borderRadius: '8px' }}>
              <Row>
                {itemsInverterData.map((item, index) => {
                  return (
                    <>
                      <Col key={index} style={{ width: '100%', borderRadius: '8px' }}>
                        <Collapse
                          size="large"
                          items={[{
                            key: '1',
                            label: <Typography.Title style={{ margin: '20px 0 0 50px', height: '35px', color: '#000', textAlign: 'left', fontWeight: 400, fontSize: '14px' }} >{item.title}</Typography.Title>,
                            children: <>{item.desc}</>,
                            extra: <RightOutlined style={{ margin: '20px 0 0 0px' }} />,

                          }]}
                          expandIcon={({ isActive }) => <>{item.icon}</>}
                          style={{ background: '#ddd', margin: '5px 0', borderRadius: '6px' }}
                        />
                      </Col>

                    </>
                  )
                }
                )}

              </Row>

            </Col>
          </Row>

          <Row>
            <Typography.Title style={{ paddingLeft: '25px' }} level={4}>Pin lưu trữ Lithium</Typography.Title>
            <Col style={{ width: '100%', margin: '0 10px 0', background: '#fff', borderRadius: '8px' }}>
              <Row>
                {itemsBatteryData.map((item, index) => {
                  return (
                    <>
                      <Col key={index} style={{ width: '100%', borderRadius: '8px' }}>
                        <Collapse
                          size="large"
                          items={[{
                            key: '1',
                            label: <Typography.Title style={{ margin: '20px 0 0 50px', height: '35px', color: '#000', textAlign: 'left', fontWeight: 400, fontSize: '14px' }} >{item.title}</Typography.Title>,
                            children: <>{item.desc}</>,
                            extra: <RightOutlined style={{ margin: '20px 0 0 0px' }} />,

                          }]}
                          expandIcon={({ isActive }) => <>{item.icon}</>}
                          style={{ background: '#ddd', margin: '5px 0', borderRadius: '6px' }}
                        />
                      </Col>

                    </>
                  )
                }
                )}

              </Row>

            </Col>
          </Row>

        </Content>
      </Layout >



    </>
  )
}
