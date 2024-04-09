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

const Generatorthirstframe = () => {
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
        <div style={{ backgroundColor: '#E2F3FB', paddingBottom: '10px' }}>
            <div style={{ width: '100%' }}>
                <Typography.Title style={{ padding: '20px 0 0 20px', textAlign: 'left', fontSize: '24px', fontWeight: '700' }}>GIẢI PHÁP<br />ĐIỆN MẶT TRỜI<br />SOLARMAX</Typography.Title>
            </div>
            <Row>
                <div style={{ position: 'relative', height: '220px', left: '40px' }}>
                    <div style={{ position: 'absolute', top: '20px', width: '324px', height: '220px' }}>
                        <Image
                            src='/img/generator/solar-pictrure.png'
                            alt="Video"
                            fill
                            style={{ objectFit: 'cover' }}
                        />
                    </div>
                </div>
            </Row>
            <Row style={{ backgroundColor: '#ffffff', margin: '20px', borderRadius: '8px', padding: '5px' }} gutter={5}>
                <div style={{ width: '100%' }}>
                    <Typography.Paragraph style={{ textAlign: 'center', fontSize: '14px', fontWeight: '700' }}>Bảo hành trọn đời sản phẩm</Typography.Paragraph>
                </div>
                {firstRowData.map((data, index) => (
                    <Col
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                        key={index} xs={12} sm={12} md={12}>
                        {data.image}
                        <Typography.Paragraph style={{ marginBottom: '0', textAlign: 'left', fontSize: '12px' }}>{data.title}</Typography.Paragraph>
                    </Col>
                ))}
            </Row >
            <Row style={{ backgroundColor: '#ffffff', margin: '20px', borderRadius: '8px', padding: '5px' }} gutter={5}>
                {secondRowData.map((data, index) => (
                    <Col
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                        key={index} xs={8} sm={8} md={8}>
                        {data.image}
                        <Typography.Paragraph style={{ marginBottom: '0', textAlign: 'left', fontSize: '12px' }}>{data.title}</Typography.Paragraph>
                    </Col>
                ))}
            </Row >
            <Row style={{ backgroundColor: '#ffffff', margin: '20px', borderRadius: '8px', padding: '5px' }} gutter={5}>
                {thirdRowData.map((data, index) => (
                    <Col
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                        key={index} xs={8} sm={8} md={8}>
                        {data.image}
                        <Typography.Paragraph style={{ marginBottom: '0', textAlign: 'left', fontSize: '12px' }}>{data.title}</Typography.Paragraph>
                    </Col>
                ))}
            </Row >
            <Row style={{ backgroundColor: '#ffffff', margin: '20px', borderRadius: '8px', padding: '5px' }} gutter={5}>
                <div style={{ width: '100%' }}>
                    <Typography.Paragraph style={{ textAlign: 'center', fontSize: '14px', fontWeight: '700' }}>Vận hành tự động quanh năm suốt tháng</Typography.Paragraph>
                </div>

                {fourthRowData.map((data, index) => (
                    <Col
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                        key={index} xs={6} sm={6} md={6}>
                        {data.image}
                    </Col>
                ))}
            </Row >


        </div>
    );
}

export default Generatorthirstframe;


