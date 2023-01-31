import React, { useState, useEffect } from 'react';
import { Image } from 'react-bootstrap';
import '../assets/styles/header.css';
import coffeeimage from '../assets/image/coffeeimage.jpg'
import '../assets/styles/animation.css'

export default function Header() {
    const [showContent, setShowContent] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);

    const handleScroll = () => {
        if (window.pageYOffset > 0) {
            setShowContent(true);
        } else {
            setShowContent(false);
        }
    } 

    return (
        <header className='d-flex align-items-center justify-content-center mb-4'>
            <Image src={coffeeimage} alt='coffee' fluid className='darker-image' style={{ height: '100vh', width: '100%', objectFit:'cover', objectPosition: '50% 10%'}} />
            <div className='container text-center position-absolute text-white'>
                <h1>Welcome, to KuBrew</h1>
                <p className={`text-center ${showContent ? 'slide-in-from-bottom' : 'slide-out-to-bottom'}`}><i>""Kubrew: Where coffee knowledge meets convenience"</i></p>
            </div>
        </header>
    );
}