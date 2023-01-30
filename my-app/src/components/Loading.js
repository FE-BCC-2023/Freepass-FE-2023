import React from 'react';
import { Container } from 'react-bootstrap';

export default function Loading () {
    return (
        <>
            <Container className="d-flex align-items-center justify-content-center" style={{position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)"}}>
                <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </Container>
        </>
    );
}
