import styled from 'styled-components';

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
        height: 100%;
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

export const Text= styled.h3`
    font-size: 2.2rem;
`;