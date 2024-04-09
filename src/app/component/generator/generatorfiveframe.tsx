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
        image: '/img/generator/van-phong.png',
        title: 'Văn phòng',
    },
    {
        image: '/img/generator/khach-san.png',
        title: 'Khách sạn',
    },
    {
        image: '/img/generator/nha-hang.png',
        title: 'Nhà hàng',
    },
    {
        image: '/img/generator/ho-ca-coi.png',
        title: 'Hồ cá coi',
    },
    {
        image: '/img/generator/nha-xuong.png',
        title: 'Nhà xưởng',
    },
    {
        image: '/img/generator/trang-trai.png',
        title: 'Nhà hàng',
    },

]
const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];


const Generatorfiveframe = () => {
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
        <div style={{ margin: '0 15px 100px 15px' }}>
            <motion.div

                animate={controls}
                initial="hidden"
                transition={{ duration: 0.5 }}
                variants={{
                    visible: { opacity: 1, transform: 'translateY(0px)' },
                    hidden: { opacity: 0, transform: 'translateY(50px)' }
                }}
            >
                <Typography.Title style={{ lineHeight: '44px', textAlign: 'left', margin: '30px 0 10px 20px', fontSize: '24px', fontWeight: '600' }} >ĐỐI TƯỢNG KHÁCH HÀNG</Typography.Title>

            </motion.div>

            <Row gutter={15}>
                {questionAndAnswer.map((item, index) => (
                    <Col span={12} key={index}>
                        <Row style={{ position: 'relative' }}>

                            <div style={{ width: '100%', paddingTop: '115%', position: 'relative' }}>
                                <Image style={{ borderRadius: '8px 8px 8px 8px', objectFit: 'cover' }} alt={item.title} fill src={item.image} />
                            </div>


                        </Row>
                        <div>
                            <Typography.Title style={{ textAlign: 'center', margin: '10px', fontSize: '14px' }} level={5}>
                                {item.title}
                            </Typography.Title>

                        </div>
                    </Col>
                ))}
            </Row>


        </div>

    );
}

export default Generatorfiveframe;