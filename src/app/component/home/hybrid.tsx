

import { Col, Divider, Row, Typography } from "antd";
import Image from "next/image";



const hybridData = [
    {
        image: <Image src='/img/solar-hybrid-icon.svg' alt="Hoàn vốn trong 4 năm" width={35} height={35} />,
        title: <>Tấm pin<br />mặt trời</>,

    },
    {
        image: <Image src='/img/inverter-icon.svg' alt="Sử dụng điện thả ga 20 năm kế tiếp" width={35} height={35} />,
        title: <>inverter<br />hybrid</>


    },
    {
        image: <Image src='/img/hybrid-lithium-icon.svg' alt="Chống nóng cho mái nhà giảm 6 độ" width={35} height={35} />,
        title: <>Pin<br />Lithium</>

    },
]

const hybridContentData = [
    {
        title: 'Nguồn điện từ pin mặt trời',
    },
    {
        title: 'Nguồn điện từ pin lưu trữ',
    },
    {
        title: 'Nguồn điện từ lưới điện',
    },
    {
        title: 'Hoạt động độc lập khi mất điện lưới',
    },
]

const Hybrid = () => {

    return (
        <>
            <Typography.Title style={{ textAlign: 'center', margin: '20px auto', fontSize: '20px' }} >Hệ thống điện mặt trời độc lập Hybrid</Typography.Title>
            <Row>
                <div style={{ position: 'relative', width: '100%', height: '339px' }}>
                    <Image
                        src='/img/hybrid-system.png'
                        alt="Video"
                        layout='fill'
                        objectFit='cover'
                    />
                </div>

            </Row>
            <Row style={{ boxShadow: '0 1px 2px 0 rgba(60,64,67,.1), 0 2px 6px 2px rgba(60,64,67,.15)', backgroundColor: '#E9E9EB', margin: '20px', borderRadius: '8px', padding: '5px' }} gutter={5}>
                {hybridData.map((data, index) => (
                    <Col
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                        key={index} xs={8} sm={8} md={8}>
                        {data.image}
                        <Typography.Paragraph style={{ textAlign: 'left', fontSize: '12px' }}>{data.title}</Typography.Paragraph>
                    </Col>
                ))}
            </Row >
            <Row style={{ margin: '0 20px' }}>
                {hybridContentData.map((item, index) => {
                    return (
                        <>
                            <Row style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                <Col>
                                    <Typography.Title style={{ color: '#6e6e73', margin: '0px 5px 0px 5px', textAlign: 'left', fontWeight: 300 }} level={5}>{item.title}</Typography.Title>
                                </Col>

                                <Col>
                                    <Image src='/img/stick-green.svg' alt="Check" width={40} height={40} />
                                </Col>
                            </Row>
                            {index !== hybridContentData.length - 1 && <Divider style={{ margin: '5px 0' }} />}
                        </>


                    )
                })}
            </Row>



        </>
    );
}

export default Hybrid;


