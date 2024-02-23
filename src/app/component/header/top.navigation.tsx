'use client'
import React, { useState, useEffect } from 'react';

import { Button, Drawer, Space } from 'antd';
import { MenuOutlined } from '@mui/icons-material';
import Image from 'next/image';
import TopNavigationContent from './top.navigation.content';
import Link from 'next/link';


const TopNavigation = () => {
    const [open, setOpen] = useState(false);


    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };

    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 0;
            setIsScrolled(isScrolled);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);



    return (
        <>
            <Space style={{
                position: 'fixed',
                top: '0px',
                width: '100%',
                background: isScrolled ? 'rgba(225, 225, 225, 0.55)' : 'transparent',
                backdropFilter: isScrolled ? 'blur(7.5px)' : 'none',
                WebkitBackdropFilter: isScrolled ? 'blur(7.5px)' : 'none',
                zIndex: '99',
                transition: 'background 0.7s ease-in-out',
                boxShadow: isScrolled ? '0 0px 2px 0 rgba(60,64,67,.1), 0 0px 6px 0px rgba(60,64,67,.15)' : 'none'
            }}>
                <div style={{
                    width: '100%',
                    height: '55px'
                }}>

                    <Link href='/'>
                        <Image alt='slmsolar logo' src='/img/solarmax-logo.png' width={120} height={24} style={{ position: 'absolute', top: '15px', left: '20px', zIndex: 1 }} />
                    </Link>
                    <Button type="link" onClick={showDrawer} style={{ color: '#000', position: 'absolute', top: '13px', right: '20px', zIndex: 1 }}>
                        <MenuOutlined />
                    </Button>
                </div>



            </Space >
            <Drawer
                title="SolarMax - Điện mặt trời áp mái"
                placement='left'
                closable={true}
                onClose={onClose}
                open={open}
                key='left'
                width='100%'
                bodyStyle={{ padding: '0px' }}

            >
                <TopNavigationContent onClose={onClose} />

            </Drawer >
        </>
    );
};


export default TopNavigation;