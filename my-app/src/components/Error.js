import React from 'react';
import { Container, Image } from 'react-bootstrap';
import error from '../assets/image/error.jpg';

export default function Error() {
    return (
        <>
            <Container className='d-flex justify-content-center align-items-center pt-5'>
                <Image src={ error } alt='404' style={ { width: '500px', height: '500px'} } fluid />
            </Container>
        </>
    );
}