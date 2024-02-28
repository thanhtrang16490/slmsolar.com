

import { Col, Divider, Row, Typography } from "antd";
import Image from "next/image";



const ongridData = [
    {
        image: <Image src='/img/solar-hybrid-icon.svg' alt="Hoàn vốn trong 4 năm" width={35} height={35} />,
        title: <>Tấm pin<br />mặt trời</>,

    },

    {
        image: <Image src='/img/hybrid-lithium-icon.svg' alt="Chống nóng cho mái nhà giảm 6 độ" width={35} height={35} />,
        title: <>Pin<br />Lithium</>

    },
]

const ongridContentData = [
    {
        title: 'Nguồn điện từ pin mặt trời',
        image: '/img/stick-green.svg'
    },

    {
        title: 'Nguồn điện từ lưới điện',
        image: '/img/stick-green.svg'
    },
    {
        title: 'Hoạt động độc lập khi mất điện lưới',
        image: '/img/stick-red.svg'
    },
]

const Ongrid = () => {

    return (
        <>
            <Typography.Title style={{ textAlign: 'left', margin: '30px 0 10px 20px', fontSize: '30px', fontWeight: '600' }} >Hệ thống <br />điện mặt trời <br />bám tải On-Grid</Typography.Title>
            <Row>
                <div style={{ position: 'relative', width: '100%', height: '339px' }}>
                    <Image
                        src='/img/ongrid-system.png'
                        alt="Video"
                        layout='fill'
                        objectFit='cover'
                    />
                </div>

            </Row>
            <Row style={{ boxShadow: '0 1px 2px 0 rgba(60,64,67,.1), 0 2px 6px 2px rgba(60,64,67,.15)', backgroundColor: '#E9E9EB', margin: '20px', borderRadius: '6px', padding: '5px' }} gutter={5}>
                {ongridData.map((data, index) => (
                    <Col
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                        key={index} xs={12} sm={12} md={12}>
                        {data.image}
                        <Typography.Paragraph style={{ textAlign: 'left', fontSize: '12px' }}>{data.title}</Typography.Paragraph>
                    </Col>
                ))}
            </Row >
            <Row style={{ margin: '0 20px' }}>
                {ongridContentData.map((item, index) => {
                    return (
                        <>
                            <Row style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                <Col>
                                    <Typography.Title style={{ color: '#000', margin: '0px 5px 0px 5px', textAlign: 'left', fontWeight: 300 }} level={5}>{item.title}</Typography.Title>
                                </Col>

                                <Col>
                                    <Image src={item.image} alt="Check" width={40} height={40} />
                                </Col>
                            </Row>
                            {index !== ongridContentData.length - 1 && <Divider style={{ margin: '5px 0' }} />}
                        </>


                    )
                })}
            </Row>



        </>
    );
}

export default Ongrid;


