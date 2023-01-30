import React from 'react';
import { Container } from 'react-bootstrap';
import '../assets/styles/loading.css'

export default function Loading () {
    return (
        <>
            <Container className="d-flex align-items-center justify-content-center" style={{position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)"}}>
            <div class="banter-loader">
                <div class="banter-loader__box"></div>
                <div class="banter-loader__box"></div>
                <div class="banter-loader__box"></div>
                <div class="banter-loader__box"></div>
                <div class="banter-loader__box"></div>
                <div class="banter-loader__box"></div>
                <div class="banter-loader__box"></div>
                <div class="banter-loader__box"></div>
                <div class="banter-loader__box"></div>
            </div>
            </Container>
        </>
    );
}
