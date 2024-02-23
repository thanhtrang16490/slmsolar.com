'use client'
import React, { useState } from 'react';
import { Button, Card, Slider, Statistic, Form, Input, Space, Select, Divider, ConfigProvider } from 'antd';
import type { SliderSingleProps } from 'antd';
import { Col, Row } from "antd";
import CountUp from 'react-countup';
import type { FormInstance } from 'antd';
import Link from 'next/link';


const SubmitButton = ({ form }: { form: FormInstance }) => {
    const [submittable, setSubmittable] = React.useState(false);

    // Watch all values
    const values = Form.useWatch([], form);

    React.useEffect(() => {
        form.validateFields({ validateOnly: true }).then(
            () => {
                setSubmittable(true);
            },
            () => {
                setSubmittable(false);
            },
        );
    }, [values]);

    return (
        <Button style={{ width: '100%' }} type="primary" htmlType="submit" disabled={!submittable}>
            Nhận báo giá
        </Button>
    );
};


const marks: SliderSingleProps['marks'] = {
    0: '0',
    15: '15',
    25: '25',
    40: '40',
    50: '50',
    60: '60',
    75: '75',

    100: {
        style: {
            color: '#f50',
        },
        label: <strong>m²</strong>,
    },
};


interface ValueMap {
    [key: number]: {
        capacity: number;
        saveMoney: number;
    };
}

const valueMap: ValueMap = {
    0: { capacity: 0, saveMoney: 0 },
    15: { capacity: 3.3, saveMoney: 1000000 },
    25: { capacity: 5.5, saveMoney: 1800000 },
    40: { capacity: 8.8, saveMoney: 2900000 },
    50: { capacity: 11, saveMoney: 3600000 },
    60: { capacity: 13.2, saveMoney: 4300000 },
    75: { capacity: 16.5, saveMoney: 5400000 },
    100: { capacity: 22, saveMoney: 7200000 },
};

const typeData = ['Bám_tải', 'Hybrid'];

const electricData = {
    Bám_tải: ['1 Pha', '3 Pha'],
    Hybrid: ['1 Pha', '3 Pha'],
};

type TypeName = keyof typeof electricData;


const MetricSlider = () => {
    const [sliderValue, setSliderValue] = React.useState<number>(15); // Initial value
    const [capacityValue, setCapacityValue] = React.useState<number>(valueMap[sliderValue].capacity);
    const [saveMoneyValue, setSaveMoneyValue] = React.useState<number>(valueMap[sliderValue].saveMoney);

    const handleSliderChange = (value: number) => {
        setSliderValue(value);
        setCapacityValue(parseFloat(valueMap[value].capacity.toFixed(2)));
        setSaveMoneyValue(valueMap[value].saveMoney);
    };

    const formatter = (value: any) => <CountUp end={value} separator="," />;
    const [form] = Form.useForm();

    const [cities, setCities] = useState(electricData[typeData[0] as TypeName]);
    const [secondCity, setSecondCity] = useState(electricData[typeData[0] as TypeName][0]);

    const handleProvinceChange = (value: TypeName) => {
        setCities(electricData[value]);
        setSecondCity(electricData[value][0]);
    };

    const onSecondCityChange = (value: TypeName) => {
        setSecondCity(value);
    };

    return (
        <Row>
            <Col style={{ width: '100%', margin: '0 15px 0', minHeight: '500px', height: '100%', padding: '10px', background: '#fff', borderRadius: '8px', boxShadow: '0 1px 2px 0 rgba(60,64,67,.1), 0 2px 6px 2px rgba(60,64,67,.15)' }}>

                <Row gutter={5}>
                    <Col span={13}>
                        <Card  >
                            <ConfigProvider
                                theme={{
                                    components: {
                                        Statistic: {
                                            contentFontSize: 20,
                                        },
                                    },
                                }}
                            >
                                <Statistic suffix='₫' title="Tiết kiệm / tháng:" value={saveMoneyValue} formatter={formatter} />
                            </ConfigProvider>
                        </Card>
                    </Col>
                    <Col span={11}>
                        <Card >
                            <ConfigProvider
                                theme={{
                                    components: {
                                        Statistic: {
                                            contentFontSize: 20,
                                        },
                                    },
                                }}
                            >
                                <Statistic suffix='kWp' title="Công suất:" value={(Math.floor(capacityValue * 100) / 100).toString()} precision={1} />
                            </ConfigProvider>
                        </Card>

                    </Col>
                </Row>
                <Slider marks={marks} step={null} defaultValue={15} onChange={handleSliderChange} />

                <Form form={form} name="validateOnly" layout="vertical" autoComplete="off">
                    <Divider />
                    <h3>Thông tin tư vấn khách hàng</h3>
                    <Form.Item name="check" rules={[{ required: true }]}>
                        <Space wrap>
                            <Select
                                defaultValue={typeData[0] as TypeName}
                                style={{ width: 120 }}
                                onChange={handleProvinceChange}
                                options={typeData.map((province) => ({ label: province, value: province }))}
                            />
                            <Select
                                style={{ width: 120 }}
                                value={secondCity as TypeName}
                                onChange={onSecondCityChange}
                                options={cities.map((city) => ({ label: city, value: city }))}
                            />
                        </Space>
                    </Form.Item>


                    <Form.Item name="name" rules={[{ required: true }]}>
                        <Input placeholder="Vui lòng nhập họ tên" />
                    </Form.Item>
                    <Form.Item name="email" rules={[{ required: true }]}>
                        <Input placeholder="Vui lòng nhập email" />
                    </Form.Item>
                    <Form.Item name="phone" rules={[{ required: true }]}>
                        <Input placeholder="Vui lòng nhập số điện thoại" />
                    </Form.Item>
                    <Form.Item>

                        <Row gutter={5}>
                            <Col span={12}>
                                <Link href='tel:+84962736891'>
                                    <Button style={{ width: '100%' }} type="primary">Khảo sát trực tiếp</Button>
                                </Link>
                            </Col>
                            <Col span={12}>
                                <SubmitButton form={form} />
                            </Col>
                        </Row>



                    </Form.Item>
                </Form>

            </Col>
        </Row>
    );
};


export default MetricSlider;