import { Card, Col, Divider, Layout, Row, Statistic, Steps, Tabs, Typography } from "antd"
import { Content } from "antd/es/layout/layout"
import { RightOutlined, ThunderboltOutlined } from '@ant-design/icons';
import Link from "next/link";


const serviceData = [
    {
        title: <>Hệ bám tải Ongrid 1 pha</>,
        path: '/bam-tai-mot-pha',
        icon: <ThunderboltOutlined style={{ color: 'blue' }} />
    },
    {
        title: <>Hệ bám tải Ongrid 3 pha</>,
        path: '/bam-tai-ba-pha',
        icon: <ThunderboltOutlined style={{ color: 'blue' }} />
    },
    {
        title: <>Hệ độc lập Hybrid 1 pha</>,
        path: '/hybrid-mot-pha',
        icon: <ThunderboltOutlined style={{ color: 'blue' }} />
    },
    {
        title: <>Hệ độc lập Hybrid 3 pha</>,
        path: '/hybrid-ba-pha',
        icon: <ThunderboltOutlined style={{ color: 'blue' }} />
    },

];

const productsData = [
    {
        title: 'Pin mặt trời - Biến tần - Pin Lithium',
        path: '/pin-mat-troi',
        icon: <ThunderboltOutlined style={{ color: 'blue' }} />
    },
    {
        title: 'Giải pháp hệ khung nhôm',
        path: '/inverter',
        icon: <ThunderboltOutlined style={{ color: 'blue' }} />
    },

];



const newsData = [
    {
        title: 'Bản tin về điện mặt trời',
        path: '/news',
        icon: <ThunderboltOutlined style={{ color: 'blue' }} />
    },
    {
        title: 'Mega Story',
        path: '/mega-story',
        icon: <ThunderboltOutlined style={{ color: 'blue' }} />
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
                                                        <Typography.Title style={{ color: '#6e6e73', margin: '0px 5px 0px 5px', textAlign: 'left', fontWeight: 300 }} level={5}>{item.title}</Typography.Title>
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
                                                        <Typography.Title style={{ color: '#6e6e73', margin: '0px 5px 0px 5px', textAlign: 'left', fontWeight: 300 }} level={5}>{item.title}</Typography.Title>
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
                                                        <Typography.Title style={{ color: '#6e6e73', margin: '0px 5px 0px 5px', textAlign: 'left', fontWeight: 300 }} level={5}>{item.title}</Typography.Title>
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