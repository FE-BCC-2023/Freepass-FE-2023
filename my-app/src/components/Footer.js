import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../assets/styles/style.css'

export default function Footer() {
    return (
        <footer className="footer mt-5 py-3" style={{backgroundColor: 'var(--primary-color)'}}>
            <Container>
                <span className="text-muted">
                    <p className="text-center">
                        @2023 
                        <Link to="/" className="text-white text-decoration-none" onClick={() => window.scrollTo(0, 0)}> KuBrew</Link>
                    </p>
                </span>
            </Container>
        </footer>
    );
}