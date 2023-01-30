import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Card, Row, Col, Form, Container, Pagination, Button } from 'react-bootstrap';
import Footer from './components/Footer';
import Error from './components/Error';
import Loading from './components/Loading';
import { getAllDataCoffee } from './data/Coffee';

export default function Article() {
    const [search, setSearch] = useState('');
    const [article, setArticle] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [count, setCount] = useState(0);

    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(9);

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = article.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    useEffect(() => {
        setLoading(true);
        getAllDataCoffee()
            .then(response => {
                setArticle(response);
                setCount(response.length);
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
    if (error) return <Error />;

    return (
        <>
            <Container className=' pt-5'>
                <h1 className='text-center mt-4'>article</h1>
                <Form className='d-flex justify-content-center mt-4'>
                    <Form.Control onChange={ input => {
                        setSearch(input.target.value);
                        }
                    } type='text' placeholder={ `Search within ${count} article...` } className='w-50' />
                </Form>
                
                <Row xs={1} md={2} lg={3} className='g-4 mt-4'>
                {search === "" ? 
                    currentPosts.map((article, index) => (
                        <Col key={index}>
                            <Card className='rounded-2 shadow text-white' style={{backgroundColor: 'var(--quaternary-color)'}}>
                                <Card.Img variant='top' src={article.image} style={{ height: '300px', objectFit: 'cover' }} />
                                <Card.Body>
                                    <Card.Title>{article.title}</Card.Title>
                                    <Card.Text style={{ height: '150px' }}>
                                        {article.description}
                                    </Card.Text>
                                    <Link to={`/article/${article.id}`} className='p-0'><Button style={{backgroundColor: 'var(--tertiary-color)'}}>Read More</Button></Link>
                                </Card.Body>
                            </Card>
                        </Col>
                ))
                :
                article.filter((article) => {
                    if (article.title.toLowerCase().includes(search.toLowerCase())) {
                        return article;
                    }
                    return null;
                }).map((article, index) => (
                    <Col key={index}>
                        <Card className='rounded-2 shadow text-white' style={{backgroundColor: 'var(--quaternary-color)'}}>
                            <Card.Img variant='top' src={article.image} style={{ height: '300px', objectFit: 'cover' }} />
                            <Card.Body>
                                <Card.Title>{article.title}</Card.Title>
                                <Card.Text style={{ height: '150px' }}>
                                    {article.description}
                                </Card.Text>
                                <Link to={`/article/${article.id}`} className='p-0'><Button style={{backgroundColor: 'var(--tertiary-color)'}}>Read More</Button></Link>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
                </Row>
                {search === "" ? 
                    <Pagination className='d-flex justify-content-center mt-4'>
                        {
                            currentPage === 1 ? null : <Pagination.First onClick={() => paginate(1)} />
                        }
                        {
                            currentPage === 1 ? null : <Pagination.Prev onClick={() => paginate(currentPage - 1)} />
                        }
                        {Array.from({ length: Math.ceil(count / postsPerPage) }, (_, i) => (
                            <Pagination.Item key={i + 1} active={i + 1 === currentPage} onClick={() => paginate(i + 1)}>
                                {i + 1}
                            </Pagination.Item>
                        ))}
                        {
                            currentPage === Math.ceil(count / postsPerPage) ? null : <Pagination.Next onClick={() => paginate(currentPage + 1)} />
                        }
                        {
                            currentPage === Math.ceil(count / postsPerPage) ? null : <Pagination.Last onClick={() => paginate(Math.ceil(count / postsPerPage))} />
                        }
                    </Pagination> : null}
            </Container>

            {search === "" ? <Footer /> : null}
        </>
    );
}