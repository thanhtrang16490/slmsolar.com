'use client'
import { Col, Row, Typography } from "antd";

import Image from "next/image";



export default function Sigeneryframetwo() {

  return (
    <>
      <Row>
        <div style={{ position: 'relative', width: '100%', height: '339px', marginTop: '-90px' }}>
          <Image
            src='/img/sigenergy/pro-wap-1-1.jpg'
            alt="Video"
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>
      </Row>
      <div style={{ backgroundColor: '#000', width: '100%', height: '200px' }}>
        <Typography.Title style={{ color: '#fff', textAlign: 'left', margin: '-1px 0px 0px 20px', fontSize: '20px', fontWeight: '600' }} >Bộ sản phẩm 5 trong 1</Typography.Title>
        <Typography.Paragraph style={{ color: '#fff', textAlign: 'left', margin: '10px 20px', fontSize: '14px', fontWeight: '300' }} >Sigenergy là giải pháp hệ thống lưu trữ năng lượng đi đầu trong cuộc cách mạng năng lượng xanh 5.0 kết hợp công nghệ của Isarel và tiêu chuẩn Châu Âu, giúp đảm bảo an toàn hệ thống điệnlưới gia đình và doanh nghiệp. </Typography.Paragraph>
      </div>

    </>
  )
}
