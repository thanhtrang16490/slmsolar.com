'use client'


import { Col, Row } from 'antd';
import { SketchOutlined, ShoppingCartOutlined, SolutionOutlined, SafetyOutlined } from '@ant-design/icons';
import { Content } from 'antd/es/layout/layout';


const BottomNavigation = () => {


    return (
        <>
            <Content >
                <Row style={{
                    position: 'absolute',
                    bottom: '0px',
                    width: '100%',
                    background: '#fff',
                    backdropFilter: 'blur(7.5px)',
                    WebkitBackdropFilter: 'blur(7.5px)',
                    zIndex: '999',
                    height: '55px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-around',
                    boxShadow: '0 1px 2px 0 rgba(60,64,67,.1), 0 2px 6px 2px rgba(60,64,67,.15)'
                }}>
                    <Col>
                        <SketchOutlined style={{ fontSize: '24px' }} />
                    </Col>
                    <Col>
                        <ShoppingCartOutlined style={{ fontSize: '24px' }} />
                    </Col>
                    <Col>
                        <SafetyOutlined style={{ fontSize: '24px' }} />
                    </Col>
                    <Col>
                        <SolutionOutlined style={{ fontSize: '24px' }} />
                    </Col>

                </Row>
            </Content>


        </>
    );
};


export default BottomNavigation;