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


const comboOneFeatureData =
{
    he: '5 kW',
    pha: '1 Pha',
    title: 'Tấm pin mặt trời',
    feature1: 'Thương hiệu Pin top 3 thế giới',
    feature2: 'Inverter Hybrid 5kW 1 pha',
    feature3: 'Pin Lithium FePO4 5kWh',
    price: <>122,000,000 <Image src='/img/dong-icon.svg' alt="vnd" width={18} height={18} /></>,

}




const comboOneData = [
    {
        image: <Image src='/img/solar-hybrid-icon.svg' alt="Hoàn vốn trong 4 năm" width={30} height={30} />,
        title: <>Tấm pin<br />mặt trời</>,

    },
    {
        image: <Image src='/img/inverter-icon.svg' alt="Sử dụng điện thả ga 20 năm kế tiếp" width={30} height={30} />,
        title: <>inverter<br />hybrid</>


    },
    {
        image: <Image src='/img/hybrid-lithium-icon.svg' alt="Chống nóng cho mái nhà giảm 6 độ" width={30} height={30} />,
        title: <>Pin<br />Lithium</>

    },
    {
        image: <Image src='/img/bao-hanh-5-nam.svg' alt="Chống nóng cho mái nhà giảm 6 độ" width={40} height={30} />,
        title: <>năm<br />bảo hành</>

    },
]

const comboTwoFeatureData =
{
    he: '10 kW',
    pha: '3 Pha',
    title: 'Tấm pin mặt trời',
    feature1: 'Thương hiệu Pin top 3 thế giới',
    feature2: 'Inverter Hybrid 10kW 3 pha',
    feature3: 'Pin Lithium FePO4 5kWh',
    price: <>216,000,000 <Image src='/img/dong-icon.svg' alt="vnd" width={18} height={18} /></>,
}

const comboTwoData = [
    {
        image: <Image src='/img/solar-hybrid-icon.svg' alt="Hoàn vốn trong 4 năm" width={30} height={30} />,
        title: <>Tấm pin<br />mặt trời</>,

    },
    {
        image: <Image src='/img/inverter-icon.svg' alt="Sử dụng điện thả ga 20 năm kế tiếp" width={30} height={30} />,
        title: <>inverter<br />hybrid</>


    },
    {
        image: <Image src='/img/hybrid-lithium-icon.svg' alt="Chống nóng cho mái nhà giảm 6 độ" width={30} height={30} />,
        title: <>Pin<br />Lithium</>

    },
    {
        image: <Image src='/img/hybrid-lithium-icon.svg' alt="Chống nóng cho mái nhà giảm 6 độ" width={30} height={30} />,
        title: <>năm<br />bảo hành</>

    },
]




const ComboHybrid = () => {
    const scrollY = useScroll();
    const controls = useAnimation();

    React.useEffect(() => {
        if (scrollY > 3800) {
            controls.start("visible");
        } else {
            controls.start("hidden");
        }
    }, [controls, scrollY]);

    return (
        <div style={{ padding: '20px 0 30px 0', backgroundColor: '#999' }}>
            <div><motion.div
                animate={controls}
                initial="hidden"
                transition={{ duration: 0.5 }}
                variants={{
                    visible: { opacity: 1, transform: 'translateY(0px)' },
                    hidden: { opacity: 0, transform: 'translateY(50px)' }
                }}
            >
                <Typography.Title style={{ textAlign: 'left', margin: '30px 0 20px 20px', fontSize: '30px', fontWeight: '600' }} >Combo<br />Off-Grid / Hybrid</Typography.Title>

            </motion.div>
                <Row style={{ backgroundColor: '#E8E8EA', position: 'relative', height: '240px', borderRadius: '8px', margin: '0 10px', boxShadow: '0 1px 2px 0 rgba(60,64,67,.1), 0 2px 6px 2px rgba(60,64,67,.15)' }}>

                    <Row style={{ left: '65%', top: '10px', position: 'absolute', display: 'flex', alignItems: 'center', justifyContent: 'start' }}>
                        <Col>
                            <Image src='/img/combo-hybrid.png' alt="Sử dụng điện thả ga 20 năm kế tiếp" width={100} height={170} />
                        </Col>
                    </Row>

                    <Row style={{ left: '15px', borderRadius: '4px', border: 'solid 1px #000', top: '10px', position: 'absolute', display: 'flex', alignItems: 'center', justifyContent: 'start' }}>

                        <Col>
                            <Typography.Title style={{ color: '#000', margin: '0px 5px 0px 5px', textAlign: 'left', fontWeight: 300, fontSize: '18px' }}>{comboOneFeatureData.he}</Typography.Title>
                        </Col>
                    </Row>
                    <Row style={{ left: '75px', borderRadius: '4px', backgroundColor: '#000', top: '10px', position: 'absolute', display: 'flex', alignItems: 'center', justifyContent: 'start' }}>

                        <Col>
                            <Typography.Title style={{ color: '#fff', margin: '0px 5px 0px 5px', textAlign: 'left', fontWeight: 300, fontSize: '18px' }}>{comboOneFeatureData.pha}</Typography.Title>
                        </Col>
                    </Row>
                    <Row style={{ left: '10px', top: '50px', position: 'absolute', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'start' }}>
                        <Col>
                            <Image src='/img/stick-green-full.svg' alt="Check" width={20} height={20} />
                        </Col>
                        <Col>
                            <Typography.Title style={{ color: '#000', margin: '0px 5px 0px 5px', textAlign: 'left', fontWeight: 300, fontSize: '12px' }}>{comboOneFeatureData.feature1}</Typography.Title>
                        </Col>
                    </Row>
                    <Row style={{ left: '10px', top: '75px', position: 'absolute', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'start' }}>
                        <Col>
                            <Image src='/img/stick-green-full.svg' alt="Check" width={20} height={20} />
                        </Col>
                        <Col>
                            <Typography.Title style={{ color: '#000', margin: '0px 5px 0px 5px', textAlign: 'left', fontWeight: 300, fontSize: '12px' }}>{comboOneFeatureData.feature2}</Typography.Title>
                        </Col>
                    </Row>
                    <Row style={{ left: '10px', top: '100px', position: 'absolute', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'start' }}>
                        <Col>
                            <Image src='/img/stick-green-full.svg' alt="Check" width={20} height={20} />
                        </Col>
                        <Col>
                            <Typography.Title style={{ color: '#000', margin: '0px 5px 0px 5px', textAlign: 'left', fontWeight: 300, fontSize: '12px' }}>{comboOneFeatureData.feature3}</Typography.Title>
                        </Col>
                    </Row>
                    <Row style={{ left: '15px', borderRadius: '6px', border: 'solid 1px #000', top: '138px', position: 'absolute', display: 'flex', alignItems: 'center', justifyContent: 'start' }}>

                        <Col>
                            <Typography.Title style={{ color: '#000', margin: '0px 5px 0px 5px', textAlign: 'left', fontWeight: 500, fontSize: '24px' }}>{comboOneFeatureData.price}</Typography.Title>
                        </Col>
                    </Row>
                    <Row style={{ bottom: '8px', left: '50%', translate: '-50% 0px', position: 'absolute', height: '50px', width: 'calc(100% - 16px)', backgroundColor: '#fff', borderRadius: '4px' }} >
                        {comboOneData.map((data, index) => (
                            <Col
                                style={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}
                                key={index} xs={6} sm={6} md={6}>
                                {data.image}
                                <Typography.Paragraph style={{ marginBottom: '0', textAlign: 'left', fontSize: '10px' }}>{data.title}</Typography.Paragraph>
                            </Col>
                        ))}
                    </Row >
                </Row>
            </div>
            <div style={{ marginTop: '15px' }}>

                <Row style={{ backgroundColor: '#E8E8EA', position: 'relative', height: '240px', borderRadius: '8px', margin: '0 10px', boxShadow: '0 1px 2px 0 rgba(60,64,67,.1), 0 2px 6px 2px rgba(60,64,67,.15)' }}>

                    <Row style={{ left: '65%', top: '10px', position: 'absolute', display: 'flex', alignItems: 'center', justifyContent: 'start' }}>
                        <Col>
                            <Image src='/img/combo-hybrid.png' alt="Sử dụng điện thả ga 20 năm kế tiếp" width={100} height={170} />
                        </Col>
                    </Row>

                    <Row style={{ left: '15px', borderRadius: '4px', border: 'solid 1px #000', top: '10px', position: 'absolute', display: 'flex', alignItems: 'center', justifyContent: 'start' }}>

                        <Col>
                            <Typography.Title style={{ color: '#000', margin: '0px 5px 0px 5px', textAlign: 'left', fontWeight: 300, fontSize: '18px' }}>{comboTwoFeatureData.he}</Typography.Title>
                        </Col>
                    </Row>
                    <Row style={{ left: '80px', borderRadius: '4px', backgroundColor: '#000', top: '10px', position: 'absolute', display: 'flex', alignItems: 'center', justifyContent: 'start' }}>

                        <Col>
                            <Typography.Title style={{ color: '#fff', margin: '0px 5px 0px 5px', textAlign: 'left', fontWeight: 300, fontSize: '18px' }}>{comboTwoFeatureData.pha}</Typography.Title>
                        </Col>
                    </Row>
                    <Row style={{ left: '10px', top: '50px', position: 'absolute', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'start' }}>
                        <Col>
                            <Image src='/img/stick-green-full.svg' alt="Check" width={20} height={20} />
                        </Col>
                        <Col>
                            <Typography.Title style={{ color: '#000', margin: '0px 5px 0px 5px', textAlign: 'left', fontWeight: 300, fontSize: '12px' }}>{comboTwoFeatureData.feature1}</Typography.Title>
                        </Col>
                    </Row>
                    <Row style={{ left: '10px', top: '75px', position: 'absolute', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'start' }}>
                        <Col>
                            <Image src='/img/stick-green-full.svg' alt="Check" width={20} height={20} />
                        </Col>
                        <Col>
                            <Typography.Title style={{ color: '#000', margin: '0px 5px 0px 5px', textAlign: 'left', fontWeight: 300, fontSize: '12px' }}>{comboTwoFeatureData.feature2}</Typography.Title>
                        </Col>
                    </Row>
                    <Row style={{ left: '10px', top: '100px', position: 'absolute', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'start' }}>
                        <Col>
                            <Image src='/img/stick-green-full.svg' alt="Check" width={20} height={20} />
                        </Col>
                        <Col>
                            <Typography.Title style={{ color: '#000', margin: '0px 5px 0px 5px', textAlign: 'left', fontWeight: 300, fontSize: '12px' }}>{comboTwoFeatureData.feature3}</Typography.Title>
                        </Col>
                    </Row>
                    <Row style={{ left: '15px', borderRadius: '6px', border: 'solid 1px #000', top: '138px', position: 'absolute', display: 'flex', alignItems: 'center', justifyContent: 'start' }}>

                        <Col>
                            <Typography.Title style={{ color: '#000', margin: '0px 5px 0px 5px', textAlign: 'left', fontWeight: 500, fontSize: '24px' }}>{comboTwoFeatureData.price}</Typography.Title>
                        </Col>
                    </Row>
                    <Row style={{ bottom: '8px', left: '50%', translate: '-50% 0px', position: 'absolute', height: '50px', width: 'calc(100% - 16px)', backgroundColor: '#fff', borderRadius: '4px' }} >
                        {comboOneData.map((data, index) => (
                            <Col
                                style={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}
                                key={index} xs={6} sm={6} md={6}>
                                {data.image}
                                <Typography.Paragraph style={{ marginBottom: '0', textAlign: 'left', fontSize: '10px' }}>{data.title}</Typography.Paragraph>
                            </Col>
                        ))}
                    </Row >
                </Row>
            </div>

        </div>

    );
}



export default ComboHybrid;


