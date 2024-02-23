'use client'
import { Col, Row } from "antd";
import { Footer } from "antd/es/layout/layout";

export default function FooterModule() {

    return (
        <Footer style={{ color: 'white', opacity: 1, backgroundColor: '#00000000', position: 'absolute', bottom: '0', width: '100%', zIndex: '1000', textAlign: 'center' }}>
            <Row style={{ alignItems: 'center', display: 'flex', gap: '15px', justifyContent: 'center' }}>
                <Col>SLM SOLAR © 2024</Col>
                <Col>|</Col>
                <Col>Điều khoản sử dụng</Col>
                <Col>|</Col>
                <Col>Chính sách bảo mật</Col>
            </Row>
        </Footer>
    )
}
