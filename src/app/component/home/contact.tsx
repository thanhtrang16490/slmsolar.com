

import { Row, Col, Layout, Button, Typography } from 'antd';
import Image from "next/image";
import { ShopFilled, StarFilled, PhoneOutlined, MailOutlined, EnvironmentOutlined, HomeOutlined } from '@ant-design/icons';
import Link from "next/link";




const ContactHome = () => {


    return (
        <>
            <Typography.Title style={{ textAlign: 'left', margin: '30px 0 20px 20px', fontSize: '30x' }} >Liên hệ</Typography.Title>
            <Row >
                <Col style={{

                    width: '100%',
                    margin: '20px 15px 0px 15px',
                    height: '600px',
                    background: '#fff',
                    borderRadius: '8px',
                    boxShadow: '0 1px 2px 0 rgba(60,64,67,.1), 0 2px 6px 2px rgba(60,64,67,.15)',
                    marginBottom: '20px',
                    position: 'relative'
                }}>

                    <Row>
                        <div style={{ height: '100%', width: '100%', position: 'absolute', top: '-40px', left: '0px', zIndex: '1' }}>
                            <Image
                                src="/img/vietnam-map.png" alt="Vietnam map slmglobal"
                                layout="fill"
                                objectFit="cover"
                            />
                        </div>

                        <div style={{ position: 'absolute', top: 45, left: '95px', zIndex: '3' }}>
                            <Link target='_blank' rel='noopener noreferrer' href="https://maps.app.goo.gl/Q4AAR2xs7yRA2kQT6"><StarFilled style={{ fontSize: '20px', color: 'orange' }} /></Link>
                        </div>
                        <div style={{ position: 'absolute', top: 70, left: '115px', zIndex: '3', height: '8px', width: '8px', backgroundColor: 'black', borderRadius: '99%' }}>
                        </div>
                        <div style={{ position: 'absolute', top: 102, left: '90px', zIndex: '3', height: '8px', width: '8px', backgroundColor: 'black', borderRadius: '99%' }}>
                        </div>
                        <div style={{ position: 'absolute', top: 45, left: '125px', zIndex: '3' }}>
                            SLM OFFICE
                        </div>
                        <div style={{ position: 'absolute', top: 65, left: '135px', zIndex: '3' }}>
                            Chi nhánh Hải Dương
                        </div>
                        <div style={{ position: 'absolute', top: 97, left: '110px', zIndex: '3' }}>
                            Tổng kho Thanh Hoá
                        </div>
                    </Row>


                    <Row style={{ bottom: 0, position: 'absolute', zIndex: '5', backgroundColor: '#ffffff90' }} >
                        <div style={{ position: 'relative', border: 'dashed 1px #17274f', borderRadius: '8px', padding: '0 10px 0', margin: '5px' }}>
                            <h3 style={{ color: '#17274f', marginBottom: '5px' }}>CÔNG TY CỔ PHẦN ĐẦU TƯ SLM</h3>
                            <div style={{ display: 'flex', alignItems: 'center', margin: '-15px 0 -10px' }}>
                                <div ><HomeOutlined style={{ fontSize: '18px', padding: '0px 10px 18px 0px' }} /> </div>
                                <div><p style={{ fontSize: '14px' }}> Diamond Flower Tower, Hoàng Đạo Thuý, Quận Thanh Xuân, Thành phố Hà Nội</p></div>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <div><EnvironmentOutlined style={{ fontSize: '18px', padding: '0px 10px 0px 0px' }} /></div>
                                <div><Link target='_blank' rel='noopener noreferrer' href="https://maps.app.goo.gl/Q4AAR2xs7yRA2kQT6" style={{ fontSize: '14px' }}><Button danger shape="round" style={{ background: 'none' }}>View on google maps</Button></Link></div>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', marginTop: '-10px' }}>
                                <div><MailOutlined style={{ fontSize: '18px', padding: '0px 10px 0px 0px' }} />  </div>
                                <div><p style={{ fontSize: '14px' }}>sale@slmsolar.com</p></div>
                            </div>


                        </div>

                    </Row>



                </Col>
            </Row>

        </>

    );
}

export default ContactHome;