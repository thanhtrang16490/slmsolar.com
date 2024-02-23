'use client'
import { PhoneOutlined, CustomerServiceOutlined } from '@ant-design/icons';
import React from 'react';
import { FloatButton } from 'antd';

const ChatBoxModule: React.FC = () => (
    <>

        <FloatButton.Group
            trigger="hover"
            type="primary"
            style={{ right: 35, bottom: 35 }}
            icon={<CustomerServiceOutlined />}
            tooltip={<div>Tư vấn báo giá và khảo sát</div>}
        >
            <FloatButton tooltip={<div>Điện thoại: +84 (9175) 999-66</div>} href='tel:+84917599966' target="_blank" icon={<PhoneOutlined />} />
        </FloatButton.Group>
    </>
);

export default ChatBoxModule;
