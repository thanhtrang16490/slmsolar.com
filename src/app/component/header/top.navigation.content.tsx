'use client'
import { Button, Col, Divider, Layout, Row, Typography } from "antd"
import { Content } from "antd/es/layout/layout"
import { RightOutlined, ThunderboltOutlined } from '@ant-design/icons';
import Link from "next/link";
import Image from "next/image";


const serviceData = [
    {
        title: <>Hệ bám tải <Button style={{ borderColor: 'black' }}>Ongrid</Button>  <Button style={{ backgroundColor: '#ddd' }}> 1 Pha</Button></>,
        path: '/bam-tai-mot-pha',
        icon: <Image src='/img/ongrid-1-icon.svg' alt='device icon' width={30} height={30} />
    },
    {
        title: <>Hệ bám tải <Button style={{ borderColor: 'black' }}>Ongrid</Button>  <Button style={{ backgroundColor: '#000', color: '#fff' }}> 3 Pha</Button></>,
        path: '/bam-tai-ba-pha',
        icon: <Image src='/img/ongrid-2-icon.svg' alt='device icon' width={30} height={30} />
    },
    {
        title: <>Hệ độc lập <Button style={{ borderColor: 'black' }}>Hybrid</Button>  <Button style={{ backgroundColor: '#ddd' }}> 1 Pha</Button></>,
        path: '/hybrid-mot-pha',
        icon: <Image src='/img/hybrid-1-icon.svg' alt='device icon' width={30} height={30} />
    },
    {
        title: <>Hệ độc lập <Button style={{ borderColor: 'black' }}>Hybrid</Button>  <Button style={{ backgroundColor: '#000', color: '#fff' }}> 3 Pha</Button></>,
        path: '/hybrid-ba-pha',
        icon: <Image src='/img/hybrid-2-icon.svg' alt='device icon' width={30} height={30} />
    },

];

const productsData = [
    {
        title: 'Pin mặt trời - Biến tần - Pin Lithium',
        path: '/pin-mat-troi',
        icon: <Image src='/img/device-icon.svg' alt='device icon' width={30} height={30} />
    },
    {
        title: 'Giải pháp hệ khung nhôm',
        path: '/inverter',
        icon: <Image src='/img/he-khung-nhom-icon.svg' alt='device icon' width={30} height={30} />
    },

];

const newsData = [
    {
        title: 'Dự án đã thực hiện',
        path: '/projects',
        icon: <Image src='/img/project-icon.svg' alt='device icon' width={30} height={30} />
    },
    {
        title: 'Bản tin về điện mặt trời',
        path: '/news',
        icon: <Image src='/img/news-1-icon.svg' alt='device icon' width={30} height={30} />
    },
    {
        title: 'Mega Story',
        path: '/mega-story',
        icon: <Image src='/img/mega-story.svg' alt='device icon' width={30} height={30} />
    },
];

const TopNavigationContent = (onClose: any) => {
    return (
        <>
            <Layout style={{ width: '100%', background: '#F2F1F6', padding: '0px' }}>
                <Content style={{ display: 'flex', flexDirection: 'column', width: '100%', height: '100%', minHeight: '700px', alignContent: 'center' }}>
                    <Row>
                        <Typography.Title style={{ paddingLeft: '25px' }} level={4}>Sản phẩm trọn gói</Typography.Title>
                        <Col style={{ width: '100%', margin: '0 15px 0', padding: '10px', background: '#fff', borderRadius: '8px' }}>
                            {serviceData.map((item, index) => {
                                return (
                                    <>
                                        <Link href={item.path} key={index}>
                                            <Row onClick={onClose} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                                    <Col>{item.icon}</Col>
                                                    <Col>
                                                        <Typography.Title style={{ color: '#000', margin: '0px 5px 0px 5px', textAlign: 'left', fontWeight: 300 }} level={5}>{item.title}</Typography.Title>
                                                    </Col>
                                                </div>
                                                <Col>
                                                    <RightOutlined />
                                                </Col>
                                            </Row>
                                        </Link>
                                        {index !== serviceData.length - 1 && <Divider style={{ margin: '5px 0' }} />}
                                    </>


                                );
                            })}
                        </Col>
                    </Row>

                    <Row>
                        <Typography.Title style={{ paddingLeft: '25px' }} level={4}>Danh mục thiết bị </Typography.Title>
                        <Col style={{ width: '100%', margin: '0 15px 0', padding: '10px', background: '#fff', borderRadius: '8px' }}>
                            {productsData.map((item, index) => {
                                return (
                                    <>
                                        <Link href={item.path} key={index}>
                                            <Row onClick={onClose} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                                    <Col>{item.icon}</Col>
                                                    <Col>
                                                        <Typography.Title style={{ color: '#000', margin: '0px 5px 0px 5px', textAlign: 'left', fontWeight: 300 }} level={5}>{item.title}</Typography.Title>
                                                    </Col>
                                                </div>
                                                <Col>
                                                    <RightOutlined />
                                                </Col>
                                            </Row>
                                        </Link>
                                        {index !== productsData.length - 1 && <Divider style={{ margin: '5px 0' }} />}
                                    </>
                                );
                            })}
                        </Col>
                    </Row>
                    <Row>
                        <Typography.Title style={{ paddingLeft: '25px' }} level={4}>Tin tức</Typography.Title>
                        <Col style={{ width: '100%', margin: '0 15px 100px', padding: '10px', background: '#fff', borderRadius: '8px' }}>
                            {newsData.map((item, index) => {
                                return (
                                    <>
                                        <Link href={item.path} key={index}>
                                            <Row onClick={onClose} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                                    <Col>{item.icon}</Col>
                                                    <Col>
                                                        <Typography.Title style={{ color: '#000', margin: '0px 5px 0px 5px', textAlign: 'left', fontWeight: 300 }} level={5}>{item.title}</Typography.Title>
                                                    </Col>
                                                </div>
                                                <Col>
                                                    <RightOutlined />
                                                </Col>
                                            </Row>
                                        </Link>
                                        {index !== newsData.length - 1 && <Divider style={{ margin: '5px 0' }} />}
                                    </>
                                );
                            })}
                        </Col>
                    </Row>
                </Content>
            </Layout>
        </>
    )
}

export default TopNavigationContent