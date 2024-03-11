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

const serviceData = [
    {
        image: <Image src='/img/sigenergy/sigen-icon-1.png' alt="Thiết kế hợp nhất" width={40} height={40} />,
        title: <>Thiết kế<br />hợp nhất</>,
    },
    {
        image: <Image src='/img/sigenergy/sigen-icon-2.png' alt="An toàn cao độ" width={34} height={40} />,
        title: <>An toàn<br />cao độ</>
    },
    {
        image: <Image src='/img/sigenergy/sigen-icon-3.png' alt="Hệ thống độc lập" width={29} height={40} />,
        title: <>Hệ thống<br />độc lập</>
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
                        style={{ top: '90px', position: 'absolute', width: '100%', height: '100%', zIndex: 2 }}
                        animate={controls}
                        initial="hidden"
                        transition={{ duration: 0.5 }}
                        variants={{
                            visible: { opacity: 1, transform: 'translateY(0px)' },
                            hidden: { opacity: 0, transform: 'translateY(50px)' }
                        }}
                    >
                        <Typography.Title style={{ color: '#fff', textAlign: 'left', margin: '30px 0 0px 20px', fontSize: '20px', fontWeight: '600' }} >Sạc xe điện Sigen EV AC</Typography.Title>
                        <Typography.Paragraph style={{ color: '#fff', textAlign: 'left', margin: '20px 70px 10px 20px', fontSize: '14px', fontWeight: '300' }} >Khai thác năng lượng mặt trời <br />và công nghệ sạc siêu tốc EV-DC</Typography.Paragraph>

                    </motion.div>
                </div>

            </Row >





        </>
    );
}

export default Sigeneryframefour;


