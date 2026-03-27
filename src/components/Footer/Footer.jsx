import React from 'react';
import FloatingCard from '../ui/FloatingCard';
import FooterMiddle from './FooterMiddle/FooterMiddle';

const Footer = () => {
    return (
        <div className='bg-black relative pt-50'>
            <div className='absolute w-full -top-37 '>
                <FloatingCard></FloatingCard>
            </div>
            <FooterMiddle></FooterMiddle>
            <div className='py-6 text-center border-t-2'>
                <p className='text-gray-400'>
                    @2024 Your Company All Rights Reserved.
                </p>
            </div>
        </div>
    );
};

export default Footer;