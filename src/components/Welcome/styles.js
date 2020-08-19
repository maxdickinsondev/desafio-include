import styled, { keyframes } from 'styled-components';

import background from '../../assets/images/home.jpg';

export const AreaSection = styled.section`
    background: url(${background}) no-repeat center;
    background-size: cover;
    width: 100vw;
    height: 100vh;

    &:before {
        content: '';
        position: absolute;
        background: #000000;
        opacity: 0.5;
        width: 100%;
        height: 100vh;
    }
  
`;

export const Container = styled.div`
    max-width: 90vw;
    margin: 0 auto;
`;

export const AreaText = styled.div`
    position: absolute;
    top: 40%;

    color: #f0f0f5;
`;

const slideLeft = keyframes`
    0% {
        transform: translateX(-150px)
    }
    100% {
        transform: translateX(0);
    }
`;

const slideRight = keyframes`
    0% {
        transform: translateX(120px)
    }
    100% {
        transform: translateX(0);
    }
`;

export const Text= styled.h3`
    font-size: 2.2rem;

    &:nth-child(1) {
        animation: ${slideLeft} 1.2s;
    }

    &:nth-child(2) {
        animation: ${slideRight} 1.2s;
    }

    &:nth-child(3) {
        animation: ${slideLeft} 1.2s;
    }
`;