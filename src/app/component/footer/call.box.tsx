'use client'
import React from 'react';
import { PhoneFilled } from '@ant-design/icons';
import { motion } from "framer-motion";
import Link from 'next/link';
const CallBoxModule: React.FC = () => (
    <>
        <Link href='tel:+84969663387' target="_blank" >
            <div style={{ width: '80%', position: 'fixed', bottom: 0, left: '50%', translate: '-50% -50%', zIndex: '9999', }}>
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: [0, 1, 0] }} // Scale from 0 to 1 and back to 0
                    transition={{ duration: 0.8, ease: "linear", times: [0, 0.5, 1], delay: 3 }} // Define when each animation should start
                    style={{
                        alignItems: 'center',
                        backgroundColor: 'blue',
                        height: '56px',
                        width: '56px',
                        position: 'absolute',
                        bottom: '0px',
                        borderRadius: '50%',
                        translate: '-50% -50%',
                        left: '50%',
                        zIndex: '1',
                    }} ></motion.div>
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: [0, 1, 0] }}
                    transition={{ duration: 0.8, ease: "linear", times: [0, 0.5, 1], delay: 3 }}
                    style={{
                        alignItems: 'center',
                        backgroundColor: 'white',
                        height: '36px',
                        width: '36px',
                        position: 'absolute',
                        bottom: '0px',
                        borderRadius: '50%',
                        translate: '-50% calc(-50% - 20px)',
                        left: '50%',
                        zIndex: '2',
                    }} ></motion.div>

                <motion.div
                    initial={{ width: '56px', visibility: 'hidden' }}
                    animate={{ width: '230px', visibility: 'visible' }}
                    transition={{ duration: 0.8, ease: "easeIn", delay: 3.3 }}
                    style={{
                        alignItems: 'center',
                        backgroundColor: 'rgb(232 232 237/70%)',
                        height: '56px',
                        position: 'absolute',
                        bottom: '0px',
                        backdropFilter: 'blur(7.5px)',
                        WebkitBackdropFilter: 'blur(7.5px)',
                        borderRadius: '32px',
                        translate: '-50% -50%',
                        left: '50%',
                        boxShadow: '0 0px 2px 0 rgba(60,64,67,.1), 0 0px 6px 0px rgba(60,64,67,.15)',
                    }} >


                    <motion.div
                        initial={{ scale: '30%', opacity: 0 }}
                        animate={{ scale: '100%', opacity: 1 }}
                        transition={{ duration: 0.8, ease: "easeIn", delay: 3.3 }}

                        style={{
                            lineHeight: '16px',
                            textAlign: 'left',
                            fontSize: '14px',
                            padding: '15px 0 16px',
                            fontWeight: '600',
                            letterSpacing: '-0.01em',
                            margin: '0 0 0 20px',
                            display: 'block',
                            left: '0',
                            bottom: '4px',
                            width: '200px',
                            whiteSpace: 'nowrap',
                            position: 'absolute',
                            originX: 0,

                        }}>Liên hệ tư vấn trực tiếp
                    </motion.div>
                    <motion.div
                        initial={{ scale: '0%', }}
                        animate={{ scale: '100%', }}
                        transition={{ duration: 0.3, ease: "easeIn", delay: 3.3 }}
                        style={{
                            width: '36px',
                            height: '36px',
                            borderRadius: '50%',
                            backgroundColor: 'blue',
                            opacity: '0.8',
                            textAlign: 'center',
                            color: 'white',
                            fontSize: '28px',
                            margin: '10px 10px 10px 0',
                            position: 'absolute',
                            right: '0',
                            bottom: '0',
                            overflow: 'hidden',
                        }}><PhoneFilled style={{ fontSize: '20px', position: 'absolute', top: '50%', left: '50%', translate: '-50% -50%' }} /></motion.div>
                </motion.div>
            </div >
        </Link>


    </>


);

export default CallBoxModule;
