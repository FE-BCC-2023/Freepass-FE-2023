import React from 'react';
import { Container, Image, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './assets/styles/style.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Article from './home/Article';
import Quotes from './home/Quotes';
import coffeeimage from './assets/image/coffeeimage2.jpg';

export default function Home() {
    return (
        <>
            <Header />

            <Container>
                <div className='mt-4 d-flex flex-column flex-lg-row shadow rounded-4 p-4 gap-3 justify-content-center' style={{backgroundColor: 'var(--quaternary-color)'}}>
                    <Image src={coffeeimage} alt='coffee' fluid className='col-lg-6 col-md-12 order-2 order-lg-1' />
                    <div className='text col-lg-5 col-md-12 order-1 order-lg-2 d-flex flex-column justify-content-center text-white p-4 rounded-4 m-lg-auto' style={{backgroundColor: 'var(--tertiary-color)'}}>
                        <h2>KuBrew</h2>
                        <p>Kubrew is a website that provides information about coffee. Whether you're a coffee aficionado or just a casual drinker, Kubrew has something for you. On the site, you'll find articles about the description of coffee, different brewing methods, and ingredients of coffee.</p>
                    </div>
                </div>

                <Quotes />

                    <h2 className='mt-5 text-center p-4 text-white rounded-4' style={{backgroundColor: 'var(--secondary-color)'}}>Our Some Articles</h2>
                    <Article />
                    <div className='p-3 text-white rounded-4' style={{backgroundColor: 'var(--secondary-color)'}}></div>

                <div className='text-center mt-5'>
                        <h2>Explore More About Coffee</h2>
                        <p>Learn more about coffee and how to brew it.</p>
                        <Link to={ '/article' }><Button variant="success">Explore!</Button>{' '}</Link>
                </div>
            </Container>

            <Footer />
        </>
    );
}
