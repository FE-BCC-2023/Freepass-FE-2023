import React, { useEffect, useState } from 'react';
import { getAllDataCoffee } from '../data/Coffee';
import { Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';
import Loading from '../components/Loading';
import Error from '../components/Error';
import '../assets/styles/style.css';
import '../assets/styles/animation.css';

export default function Article() {
    const [coffee, setCoffee] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        
        getAllDataCoffee()
            .then(response => {
                setCoffee(response);
            })
            .catch(error => {
                setError(error);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);
    
    if (loading) return (
        <Loading />
    );

    if (error || !coffee.length) return <Error />;

    return (
        <>
            <div className='row row-cols-1 row-cols-md-3 g-4 p-3'>
                {coffee.slice(3, 6).map((item) => (
                    <div className='col' key={item.id}>
                        <Card className='text-white shadow outline' style={{backgroundColor: 'var(--quaternary-color)'}}>
                            <Card.Img className='' variant="top" src={item.image} style={{ height:'300px', objectFit: 'cover' }} />
                            <Card.Body>
                                <Card.Title>{item.title}</Card.Title>
                                <Card.Text style={{ height: '150px' }}>
                                    {item.description}
                                </Card.Text>
                                <Link to={`/article/${item.id}`} className='p-0'><Button className='border-0' style={{backgroundColor: 'var(--tertiary-color)'}}>Read More</Button></Link>
                            </Card.Body>
                        </Card>
                    </div>
                ))}
            </div>
        </>
    );
}
