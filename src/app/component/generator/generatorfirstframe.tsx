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


const firstRowData = [
    {
        image: <Image src='/img/generator/sun-solar-icon.svg' alt="Hoàn vốn trong 4 năm" width={50} height={50} />,
        title: <>25 năm<br />hiệu suất</>,

    },
    {
        image: <Image src='/img/generator/battery-lithium-icon.svg' alt="Sử dụng điện thả ga 20 năm kế tiếp" width={45} height={45} />,
        title: <>5 năm pin<br /> Lithium</>
    },

]
const secondRowData = [
    {
        image: <Image src='/img/generator/mute-icon.svg' alt="Hoàn vốn trong 4 năm" width={35} height={35} />,
        title: <>Không ồn</>,

    },
    {
        image: <Image src='/img/generator/odourless-icon.svg' alt="Sử dụng điện thả ga 20 năm kế tiếp" width={35} height={35} />,
        title: <>Không mùi</>
    },
    {
        image: <Image src='/img/generator/smokeless-icon.svg' alt="Chống nóng cho mái nhà giảm 6 độ" width={35} height={35} />,
        title: <>Không khói</>
    },
]
const thirdRowData = [
    {
        image: <Image src='/img/generator/invest-icon.svg' alt="Hoàn vốn trong 4 năm" width={35} height={35} />,
        title: <>Đầu tư<br />1 lần</>,

    },
    {
        image: <Image src='/img/generator/payback-icon.svg' alt="Sử dụng điện thả ga 20 năm kế tiếp" width={35} height={35} />,
        title: <>4 năm<br />Hoàn vốn</>
    },
    {
        image: <Image src='/img/generator/energy-icon.svg' alt="Chống nóng cho mái nhà giảm 6 độ" width={35} height={35} />,
        title: <>Sử dụng điện<br />thả ga 20 năm</>
    },
]

const fourthRowData = [
    {
        image: <Image src='/img/generator/automation-2.svg' alt="Hoàn vốn trong 4 năm" width={35} height={35} />,

    },
    {
        image: <Image src='/img/generator/automation-3.svg' alt="Hoàn vốn trong 4 năm" width={35} height={35} />,

    },
    {
        image: <Image src='/img/generator/automation-4.svg' alt="Hoàn vốn trong 4 năm" width={35} height={35} />,

    },
    {
        image: <Image src='/img/generator/automation-1.svg' alt="Hoàn vốn trong 4 năm" width={35} height={35} />,

    },

]

const Generatorfirstframe = () => {
    const scrollY = useScroll();
    const controls = useAnimation();

    React.useEffect(() => {
        if (scrollY > 2500) {
            controls.start("visible");
        } else {
            controls.start("hidden");
        }
    }, [controls, scrollY]);


    return (
        <div style={{ backgroundColor: '#011422', paddingBottom: '10px' }}>
            <div style={{ width: '100%' }}>
                <Typography.Title style={{ color: '#fff', padding: '20px 0 0 20px', textAlign: 'center', fontSize: '24px', fontWeight: '700' }}>GIẢI PHÁP<br />ĐIỆN MẶT TRỜI<br />SOLARMAX</Typography.Title>
            </div>
            <Row>
                <div style={{ position: 'relative', height: '220px', left: '40px' }}>
                    <div style={{ position: 'absolute', top: '20px', width: '324px', height: '220px' }}>
                        <Image
                            src='/img/generator/may-phat-dien-1.png'
                            alt="Video"
                            fill
                            style={{ objectFit: 'cover' }}
                        />
                    </div>
                </div>
            </Row>
            <Row>
                <div style={{ position: 'relative', height: '220px', left: '40px' }}>
                    <div style={{ position: 'absolute', top: '20px', width: '324px', height: '220px' }}>
                        <Image
                            src='/img/generator/may-phat-dien-2.png'
                            alt="Video"
                            fill
                            style={{ objectFit: 'cover' }}
                        />
                    </div>
                </div>
            </Row>



        </div>
    );
}

export default Generatorfirstframe;


