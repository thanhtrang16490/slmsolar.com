'use client'
import React from 'react';
import { Col, Row, Typography } from "antd";
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



const questionAndAnswer = [
    {
        image: '/img/sigenergy/project-1.jpg',
        title: 'Dự án điện mặt trời Sigenergy hòa lưới có lưu trữ (Hybrid) cho hộ kinh doanh tại TP.HCM',
    },
    {
        image: '/img/sigenergy/project-2.jpg',
        title: 'Các dự án điện mặt trời Sigenergy hóa lưới có lưu trữ (Hybrid) tại Khánh Hòa',
    },
    {
        image: '/img/sigenergy/project-3.jpg',
        title: 'Các dự án điện mặt trời Sigenergy hóa lưới có lưu trữ (Hybrid) tại Khánh Hòa',
    },

]

const Sigeneryframesix = () => {
    const scrollY = useScroll();
    const controls = useAnimation();

    React.useEffect(() => {
        if (scrollY > 200) {
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
                <Typography.Title style={{ lineHeight: '44px', textAlign: 'left', margin: '30px 0 10px 20px', fontSize: '30px', fontWeight: '600' }} >Dự án triển khai <br />hệ thống Sigenery</Typography.Title>

            </motion.div>

            {questionAndAnswer.map((item, index) => {
                return (

                    <Row key={index}>
                        <Col style={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            width: '100%',
                            margin: '20px 15px 0px 15px',
                            height: '100%',
                            padding: '0px',
                            background: '#fff',
                            borderRadius: '8px',
                            boxShadow: '0 1px 2px 0 rgba(60,64,67,.1), 0 2px 6px 2px rgba(60,64,67,.15)'
                        }}>

                            <Row style={{ position: 'relative' }}>

                                <div style={{ padding: '0px', width: '100%', paddingTop: '56%', position: 'relative' }}>
                                    <Image style={{ borderRadius: '8px', objectFit: 'cover' }} alt={item.title} fill src={item.image} />
                                </div>

                                <div style={{ background: 'linear-gradient(to bottom, #ffffff00, #ffffff60 , #fff)', width: '100%', height: '60px', position: 'absolute', bottom: '-1px' }}>
                                </div>
                            </Row>
                            <div>
                                <Typography.Title style={{ margin: '10px 20px', fontSize: '14px' }} level={5}>
                                    {item.title}
                                </Typography.Title>

                            </div>


                        </Col>
                    </Row>
                )
            })

            }
        </>

    );
}

export default Sigeneryframesix;