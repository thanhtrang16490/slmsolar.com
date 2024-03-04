'use client'
import React from 'react';
import { Col, Divider, Row, Typography } from "antd";
import Image from "next/image";
import { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

const useScroll = () => {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return scrollY;
};

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
    const scrollY = useScroll();
    const controls = useAnimation();

    React.useEffect(() => {
        if (scrollY > 1600) {
            controls.start("visible");
        } else {
            controls.start("hidden");
        }
    }, [controls, scrollY]);


    return (
        <>
            <motion.div
                animate={controls}
                initial="hidden"
                transition={{ duration: 0.5 }}
                variants={{
                    visible: { opacity: 1, transform: 'translateY(0px)' },
                    hidden: { opacity: 0, transform: 'translateY(50px)' }
                }}
            >
                <Typography.Title style={{ textAlign: 'left', margin: '30px 0 0px 20px', fontSize: '30px', fontWeight: '600' }} >Hệ thống <br /> điện mặt trời <br />Off-Grid / Hybrid</Typography.Title>
                <Typography.Paragraph style={{ textAlign: 'left', margin: '20px 70px 10px 20px', fontSize: '14px', fontWeight: '300' }} >Hệ thống điện mặt trời Hybrid, có bao gồm Pin lưu trữ Lithium, nên có thể vận hành độc lập với nguồn lưới điện. Do vậy, khi mất điện lưới, hệ thống sẽ tự động vận hành dựa trên nguồn điện từ Pin Lithium. </Typography.Paragraph>
            </motion.div>
            <Row>
                <div style={{ position: 'relative', width: '100%', height: '339px' }}>
                    <Image
                        src='/img/hybrid-system.png'
                        alt="Video"
                        fill
                        style={{ objectFit: 'cover' }}
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
                                    <Typography.Title style={{ color: '#000', margin: '0px 5px 0px 5px', textAlign: 'left', fontWeight: 300 }} level={5}>{item.title}</Typography.Title>
                                </Col>

                                <Col>
                                    <Image src='/img/stick-green.svg' alt="Check" width={30} height={30} />
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


