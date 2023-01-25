import React from 'react';
import { Image } from 'react-bootstrap';
import '../assets/styles/header.css';
import coffeeimage from '../assets/image/coffeeimage.jpg'

export default function Header() {
    return (
        <header className='d-flex align-items-center justify-content-center mb-4'>
            <Image src={coffeeimage} alt='coffee' fluid className='darker-image' />
            <div className='container text-center position-absolute text-white'>
                <h1>Welcome, to KuBrew</h1>
                <p><i>"Kubrew: Where coffee knowledge meets convenience"</i></p>
            </div>
        </header>
    );
}