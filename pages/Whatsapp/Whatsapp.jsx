import React from 'react';
// import './whatsapp.css';
import { whatsapp } from '@/public/Images';
import Image from 'next/image';

const Whatsapp = () => {
    const number = "9414160724";
    const message = "I want to make an inquiry about your product";
    return (
        <>
            <div className='fixed right-2 bottom-2 z-50'>
                <a href={`https://api.whatsapp.com/send/?phone=${number}&text=${message}`} target="_blank" rel="noopener noreferrer">
                    <div className='flex items-center contact-text-wrapper'>
                        <div className='w-10 p-2 bg-green-500 rounded-xl'>
                            <Image src={whatsapp} alt="whatsapp" width={32} height={32} />
                        </div>
                        {/* <div className='px-2 contact-whatsapp-text'>WhatsApp Us</div> */}
                    </div>
                </a>
            </div>
        </>
    );
};

export default Whatsapp;
