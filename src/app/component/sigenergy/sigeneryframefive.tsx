'use client'
import { Col, Layout, Row, Typography } from "antd";
import { Content } from "antd/es/layout/layout";
import Image from "next/image";

const comboOneFeatureData = [

    {
        he: '3.3 kW',
        pha: '1 Pha',
        price: <>124,000,000 <Image src='/img/dong-icon.svg' alt="vnd" width={18} height={18} /></>,
    },
    {
        he: '5.5 kW',
        pha: '1 Pha',
        price: <>149,000,000 <Image src='/img/dong-icon.svg' alt="vnd" width={18} height={18} /></>,
    },
    {
        he: '11 kW',
        pha: '3 Pha',
        price: <>250,000,000 <Image src='/img/dong-icon.svg' alt="vnd" width={18} height={18} /></>,
    },
    {
        he: '16.5 kW',
        pha: '3 Pha',
        price: <>320,000,000 <Image src='/img/dong-icon.svg' alt="vnd" width={18} height={18} /></>,
    },

]

export default function Sigeneryframefive() {
    return (
        <>
            <Layout style={{ width: '100%', background: '#fff' }}>
                <Content style={{ display: 'flex', flexDirection: 'column', width: '100%', alignContent: 'center' }}>
                    <Row style={{ position: 'relative' }}>

                        <Col style={{
                            width: '100%', height: '110px', margin: '10px 0px 0 0px', padding: '0px', textAlign: 'center', position: 'relative'
                        }}>
                            <div style={{ position: 'absolute', top: 0, left: '50%', translate: '-50% 0%', width: '100%', height: '600px' }}>
                                <Typography.Title style={{ textAlign: 'left', margin: '30px 0 0px 20px', fontSize: '30px', fontWeight: '600' }} >Combo hệ cao cấp<br />SoLarMax Sigenery</Typography.Title>
                            </div>
                        </Col>
                    </Row>
                    {comboOneFeatureData.map((data, index) => (
                        <>
                            <div key={index} style={{ margin: '8px' }}>

                                <Row style={{ backgroundColor: '#E8E8EA', position: 'relative', height: '450px', borderRadius: '8px', margin: '0 10px', boxShadow: '0 1px 2px 0 rgba(60,64,67,.1), 0 2px 6px 2px rgba(60,64,67,.15)' }}>

                                    <Row style={{ translate: '-50% -50%', left: '50%', top: '50%', position: 'absolute', display: 'flex', alignItems: 'center', justifyContent: 'start' }}>
                                        <Col>
                                            <Image src='/img/sigenergy/combo-sigen-1.png' alt="Sử dụng điện thả ga 20 năm kế tiếp" width={240} height={380} />
                                        </Col>
                                    </Row>
                                    <div style={{ position: 'absolute', display: 'flex', right: '10px', bottom: '10px', gap: '5px' }}>
                                        <Row style={{ left: '15px', borderRadius: '4px', border: 'solid 1px #000', top: '10px', display: 'flex', alignItems: 'center', justifyContent: 'start' }}>
                                            <Col>
                                                <Typography.Title style={{ color: '#000', margin: '0px 5px 0px 5px', textAlign: 'left', fontWeight: 300, fontSize: '18px' }}>{data.he}</Typography.Title>
                                            </Col>
                                        </Row>
                                        <Row style={{ left: '75px', borderRadius: '4px', backgroundColor: '#000', display: 'flex', alignItems: 'center', justifyContent: 'start' }}>
                                            <Col>
                                                <Typography.Title style={{ color: '#fff', margin: '0px 5px 0px 5px', textAlign: 'left', fontWeight: 300, fontSize: '18px' }}>{data.pha}</Typography.Title>
                                            </Col>
                                        </Row>
                                    </div>
                                    <Row style={{ left: '15px', borderRadius: '6px', bottom: '10px', position: 'absolute', display: 'flex', alignItems: 'center', justifyContent: 'start' }}>
                                        <Col>
                                            <Typography.Title style={{ color: '#000', margin: '0px 5px 0px 5px', textAlign: 'left', fontWeight: 500, fontSize: '24px' }}>{data.price}</Typography.Title>
                                        </Col>
                                    </Row>
                                </Row>
                            </div>
                        </>
                    ))}
                </Content>
            </Layout>
        </>
    )
}

