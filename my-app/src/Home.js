import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { Image } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import coffeeimage from './assets/image/coffeeimage2.jpg';

export default function Home() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await fetch('https://api.sampleapis.com/coffee/hot');
                const json = await response.json();
                setData(json);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();

    }, []);

    if (loading) return (
        <div className='text-center'>
            <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    );
    if (error) return <div>Error: {error.message}</div>;

    return (
        <>
            <Header />
            <div className='container'>
                <div className='mt-4 d-flex flex-column flex-lg-row shadow rounded-2 p-4 gap-3'>
                    <Image src={coffeeimage} alt='coffee' fluid className='col-lg-6 col-md-5 col-sm-4 order-2 order-lg-1' />
                    <div className='text col-lg-6 col-md-7 col-sm-8 order-1 order-lg-2'>
                        <h2>KuBrew</h2>
                        <p>Kubrew is a website that provides information about coffee. Whether you're a coffee aficionado or just a casual drinker, Kubrew has something for you. On the site, you'll find articles about the history of coffee, different brewing methods, and tips for getting the most out of your coffee. Additionally, they also have a section of coffee beans and equipment review, so you can find the best beans and equipment to suit your taste and budget. You can also find a list of coffee shops, roasters and cafes in different locations and read reviews from other users. Kubrew is the ultimate resource for all things coffee!</p>
                    </div>
                </div>

                <div className='text-center mt-5 shadow rounded-2'>
                <h2 className='text-center p-4'>Our Some Articles</h2>
                    <div className='row row-cols-1 row-cols-md-3 g-4 p-3'>
                        {data.slice(4, 7).map((item) => (
                            <div className='col' key={item.id}>
                                <Card>
                                    <Card.Img variant="top" src={item.image} />
                                    <Card.Body>
                                        <Card.Title>{item.title}</Card.Title>
                                        <Card.Text>
                                            {item.description}
                                        </Card.Text>
                                        <Button variant="success">Read More</Button>{' '}
                                    </Card.Body>
                                </Card>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className='text-center mt-5'>
                    <h2>Explore More About Coffee</h2>
                    <p>Learn more about coffee and how to brew it.</p>
                    <Button variant="success">Explore!</Button>{' '}
            </div>
            <Footer />
        </>
    );
}
