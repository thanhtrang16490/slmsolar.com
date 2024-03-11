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
        image: <Image src='/img/sigenergy/sigen-ev-icon-1.png' alt="Hoàn vốn trong 4 năm" width={30} height={30} />,
        title: <>Tấm pin mặt trời</>,

    },
    {
        image: <Image src='/img/sigenergy/sigen-ev-icon-2.png' alt="Hoàn vốn trong 4 năm" width={30} height={30} />,
        title: <>inverter hybrid</>


    },
    {
        image: <Image src='/img/sigenergy/sigen-ev-icon-3.png' alt="Hoàn vốn trong 4 năm" width={30} height={30} />,
        title: <>Pin Lithium</>

    },
]

const Sigeneryframefour = () => {
    const scrollY = useScroll();
    const controls = useAnimation();

    React.useEffect(() => {
        if (scrollY > 300) {
            controls.start("visible");
        } else {
            controls.start("hidden");
        }
    }, [controls, scrollY]);


    return (
        <>

            <Row>
                <div style={{ position: 'relative', width: '100%', height: '530px' }}>
                    <Image
                        src='/img/sigenergy/wf4.png'
                        alt="Video"
                        fill
                        style={{ objectFit: 'cover' }}
                    />
                    <motion.div
                        style={{ top: '80px', position: 'absolute', width: '100%', height: '100%', zIndex: 2 }}
                        animate={controls}
                        initial="hidden"
                        transition={{ duration: 0.5 }}
                        variants={{
                            visible: { opacity: 1, transform: 'translateY(0px)' },
                            hidden: { opacity: 0, transform: 'translateY(50px)' }
                        }}
                    >
                        <Typography.Title style={{ color: '#fff', textAlign: 'left', margin: '30px 0 5px 20px', fontSize: '30px', fontWeight: '600' }} >Sạc xe điện<br /> Sigen EV AC</Typography.Title>
                        <Typography.Paragraph style={{ color: '#fff', textAlign: 'left', margin: '0px 70px 10px 20px', fontSize: '14px', fontWeight: '300' }} >Khai thác năng lượng mặt trời và <br />công nghệ sạc siêu tốc EV-DC</Typography.Paragraph>
                    </motion.div>

                    <Row style={{ position: 'absolute', top: '250px', left: '50%', boxShadow: '0 1px 2px 0 rgba(60, 64, 67, .1), 0 2px 6px 2px rgba(60, 64, 67, .15)' }} gutter={5}>
                        {hybridData.map((data, index) => (
                            <Col
                                style={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    justifyContent: 'left',
                                    padding: '10px 0 0 10px',
                                }}
                                key={index} xs={24} sm={24} md={24}>
                                <div >{data.image}</div>
                                <Typography.Paragraph style={{ margin: '0 0 0 10px', color: '#fff', marginBottom: '0', textAlign: 'left', fontSize: '14px' }}>{data.title}</Typography.Paragraph>
                            </Col>
                        ))}
                    </Row >
                </div >

            </Row >






        </>
    );
}

export default Sigeneryframefour;


