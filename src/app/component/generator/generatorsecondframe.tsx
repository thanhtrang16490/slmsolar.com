'use client'
import React from 'react';
import { Col, Row, Typography } from "antd";
import Image from "next/image";
import { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';




const questionAndAnswer = [

    {
        image: '/img/generator/bao-hanh.png',

    },
    {
        image: '/img/generator/bao-hanh-2-nam-2.png',

    },
    {
        image: '/img/generator/nong-nan-mui-xang-2.png',

    },
    {
        image: '/img/generator/nong-nan-mui-xang.png',

    },
    {
        image: '/img/generator/tieng-on-at-tieng-noi.png',

    },
    {
        image: '/img/generator/tieng-on-at-tieng-noi-2.png',

    },
    {
        image: '/img/generator/gia-xang-dat-do-2.png',

    },
    {
        image: '/img/generator/gia-xang-dat-do.png',

    },


]
const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];


const Generatorsecondframe = () => {



    return (
        <div style={{ backgroundColor: '#011422', padding: '0 15px 20px 15px' }}>
            <Row gutter={15}>
                {questionAndAnswer.map((item, index) => (
                    <Col span={12} key={index}>
                        <Row style={{ position: 'relative' }}>
                            <div style={{ width: '100%', paddingTop: '100%', position: 'relative' }}>
                                <Image style={{ objectFit: 'cover' }} alt='tiêu đề' fill src={item.image} />
                            </div>


                        </Row>

                    </Col>
                ))}
            </Row>


        </div>

    );
}

export default Generatorsecondframe;