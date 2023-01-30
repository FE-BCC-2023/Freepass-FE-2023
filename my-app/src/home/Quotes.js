import React, { useState, useEffect } from 'react';
import { Image } from 'react-bootstrap';
import people from '../assets/image/people.jpg';
import '../assets/styles/animation.css'

export default function Quotes() {
    const [showContent, setShowContent] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);

    const handleScroll = () => {
        if (window.pageYOffset > 800) {
            setShowContent(true);
        } else {
            setShowContent(false);
        }
    } 

    return (
        <>
            <div className='mt-5 d-flex justify-content-center align-items-center '>
                <p className={`text-center ${showContent ? 'slide-in-left' : ''}`}><i>"Coffee is a daily necessity. The bottom of a cup of coffee is my idea of happiness." </i> - <b>Edna Lewis</b></p>
                <Image src={people} alt='people' fluid className='col-5' />
            </div>
        </>
    );
}
