

import { Col, Row, Typography } from "antd";
import Image from "next/image";



const heroData =
{
    image: '/img/hero-image.png',
    title: 'ĐIỆN XANH MÁI NHÀ VIỆT',
    content: 'Đến năm 2030, Solarmax hoàn thành lắp đặt 1 triệu m2 tấm pin năng lượng mặt trời cho mái nhà Việt'
}


const Hero = () => {


    return (
        <>

            <Row >
                <Col style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    width: '100%',
                    height: '100vh',
                    margin: '-55px 0 80px 0',

                }}>

                    <Row style={{ position: 'relative' }}>
                        <div style={{ height: 'calc(100vh + 55px)', width: '100%', position: 'relative' }}>
                            <Image
                                src={heroData.image} alt={heroData.title}
                                layout="fill"
                                objectFit="cover"
                            />
                        </div>
                        {/* <Image style={{ position: 'absolute' }} src={heroData.image} alt={heroData.title} width={389} height={500} /> */}
                        <div style={{ position: 'absolute', top: '120px', left: '50%', translate: '-50% -50px' }}>
                            <Typography.Title style={{ width: '350px', textAlign: 'center', fontSize: '24px', color: '#1D1D1F' }} level={5}>
                                {heroData.title}
                            </Typography.Title>
                        </div>

                        <div style={{ position: 'absolute', top: '180px', left: '50%', translate: '-50% -50px' }}>
                            <Typography.Title style={{ width: '350px', textAlign: 'center', fontSize: '14px', color: '#1D1D1F' }} level={5}>
                                {heroData.content}
                            </Typography.Title>
                        </div>





                    </Row>

                </Col>
            </Row>

        </>

    );
}



export default Hero;


