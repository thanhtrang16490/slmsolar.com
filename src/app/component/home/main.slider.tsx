'use client'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Settings } from "react-slick";
import { Col, Row, Typography } from "antd";
import Image from "next/image";

const MainSlider = () => {
    const settings: Settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <Slider {...settings}>
            <Row>
                <Col style={{ background: '#fff', height: '550px', margin: '80px 15px 0 15px', padding: '15px', borderRadius: '8px', textAlign: 'center', position: 'relative', boxShadow: '0 1px 2px 0 rgba(60,64,67,.1), 0 2px 6px 2px rgba(60,64,67,.15)' }}>
                    <div style={{ position: 'absolute', top: 0, left: '50%', translate: '-50% 0%', width: '100%', height: '600px' }}>
                        <div style={{ width: '100%', paddingTop: '550px', position: 'relative' }}>
                            <Image style={{ borderRadius: '8px' }} alt='bam-tai' layout="fill" objectFit="cover" src='/img/photovoltaic-solar-power-panel-field-green-clean-alternative-power-energy-concept-ai-generative.jpg' />
                        </div>
                        {/* <Image alt='slmsolar logo' src='/img/solarmax-logo.png' width={120} height={24} style={{ position: 'absolute', top: '50px', left: '50%', translate: '-50% -50%' }} /> */}
                        <Typography.Title style={{ position: 'absolute', top: '350px', left: '50%', translate: '-50% -50%', width: '100%', textTransform: 'uppercase', color: '#fff' }} level={4}>Phủ xanh mái nhà Việt</Typography.Title>
                        <Typography.Title style={{ position: 'absolute', top: '420px', left: '50%', translate: '-50% -50%', width: '300px', fontSize: '14px', color: '#fff', fontWeight: 300 }} level={5}>Sứ mệnh đến năm 2030 lắp đặt được 1 triệu m2 tấm pin NLMT cho mái nhà gia đình - nhà máy Việt</Typography.Title>
                    </div>
                </Col>
            </Row>

        </Slider>

    );
}

export default MainSlider;