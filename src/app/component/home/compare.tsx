'use client'
import { Col, Row, Tabs, Typography } from "antd";
import Image from "next/image";

const Compare = () => {


    return (
        <>

            <Row >
                <Typography.Title style={{ margin: '20px auto' }} level={4}>Phân biệt Hybrid và On-Grid</Typography.Title>
                <Col style={{ width: '100%', margin: '0px 10px 0px 10px', height: '550px', padding: '10px', background: '#fff', borderRadius: '8px', boxShadow: '0 1px 2px 0 rgba(60,64,67,.1), 0 2px 6px 2px rgba(60,64,67,.15)' }}>
                    <Tabs
                        defaultActiveKey="1"
                        centered
                        items={[
                            {
                                key: '1',
                                label: 'Hệ bám tải',
                                children: <div style={{ padding: '10px', width: '100%', paddingTop: '56%', position: 'relative' }}><Image style={{ borderRadius: '8px' }} alt='bam-tai' layout="fill" objectFit="cover" src='/img/hybrid.png' /> </div>,
                            },
                            {
                                key: '2',
                                label: 'Hệ Hybrid',
                                children: <div style={{ padding: '10px', width: '100%', paddingTop: '56%', position: 'relative' }}><Image style={{ borderRadius: '8px' }} alt='bam-tai' layout="fill" objectFit="cover" src='/img/off-grid.png' /> </div>,
                            },

                        ]}
                    />
                </Col>
            </Row>


        </>
    );
}

export default Compare;