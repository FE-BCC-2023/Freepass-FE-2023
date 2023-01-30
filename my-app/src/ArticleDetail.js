import React, { useState, useEffect } from 'react';
import { Container, Image, Card, Col, Row, Button } from 'react-bootstrap';
import { useParams, Link } from 'react-router-dom';
import Error from './components/Error';
import Footer from './components/Footer';
import Loading from './components/Loading';
import { getDataCoffeeById } from './data/Coffee';
import './assets/styles/animation.css';
import './assets/styles/style.css';

export default function ArticleDetail() {
    const [article, setArticle] = useState({});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        setLoading(true);
        getDataCoffeeById(id)
            .then(response => {
                setArticle(response);
            })
            .catch(error => {
                setError(error);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [id]);

    if (loading) return (
        <Loading />
    );

    if (error || !article.title) return <Error />;

    return (
        <>
            <Container className='pt-5 text-white'>
                <Link to='/article' className='btn mt-4 p-0'><Button style={{backgroundColor: 'var(--tertiary-color)'}}>Back</Button></Link>
                <Card className='flex-lg-row mt-4 shadow-lg rounded-5' style={{backgroundColor: 'var(--quaternary-color)'}}>
                    <Card.Header className='m-4 col-lg-5 order-lg-1 rounded-0 border-0' style={{backgroundColor: 'var(--quaternary-color)'}}>
                        <h1 className='slide-in-right text-center text-lg-start'>{ article.title }</h1>
                        <Image src={ article.image } alt={ article.title } fluid />
                    </Card.Header>
                    <Card.Body className='m-4'>
                        <Row style={{backgroundColor: 'var(--tertiary-color)'}} className='rounded-5 p-5'>
                            <Col>
                                <h3>Description</h3>
                                <p>{ article.description }</p>
                                <h3>Ingredients</h3>
                                <ul>
                                    { article.ingredients.map((ingredient, index) => (
                                        <li key={ index }>{ ingredient }</li>
                                    )) }
                                </ul>
                            </Col>
                        </Row>
                    </Card.Body>            
                </Card>
            </Container>
            <Footer />
        </>
    );
}