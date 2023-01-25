import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, Row, Col, Form, Container, Pagination } from 'react-bootstrap';

export default function Article() {
    const [article, setArticle] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [count, setCount] = useState(0);

    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(10);

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = article.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    useEffect(() => {
        setLoading(true);
        fetch('https://api.sampleapis.com/coffee/hot')
            .then(response => response.json())
            .then(json => {
                setArticle(json);
                setCount(json.length);
            })
            .catch(error => {
                setError(error);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    if (loading) return (
        <div className='text-center'>
            <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    );
    if (error) return <p>Error!</p>;

    return (
        <>
            <Container>
                <h1 className='text-center mt-4'>article</h1>
                <Form className='d-flex justify-content-center mt-4'>
                    <Form.Control type='text' placeholder={ `Search within ${count} article...` } className='w-50' />
                    <Button variant='outline-success'>Search</Button>
                </Form>

                <Row xs={1} md={3} className='g-4 mt-4'>
                    {currentPosts.map((article, index) => (
                        <Col key={index}>
                            <Card>
                                <Card.Img variant='top' src={article.image} />
                                <Card.Body>
                                    <Card.Title>{article.title}</Card.Title>
                                    <Card.Text>
                                        {article.description}
                                    </Card.Text>
                                    <Link to={`/article/${article.id}`} className='btn btn-primary'>Read More</Link>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>

                <Pagination className='d-flex justify-content-center mt-4'>
                    <Pagination.First onClick={() => paginate(1)} />
                    <Pagination.Prev onClick={() => paginate(currentPage - 1)} />
                    {Array.from({ length: Math.ceil(count / postsPerPage) }, (_, i) => (
                        <Pagination.Item key={i + 1} active={i + 1 === currentPage} onClick={() => paginate(i + 1)}>
                            {i + 1}
                        </Pagination.Item>
                    ))}
                    <Pagination.Next onClick={() => paginate(currentPage + 1)} />
                    <Pagination.Last onClick={() => paginate(Math.ceil(count / postsPerPage))} />
                </Pagination>
            </Container>
        </>
    );
}