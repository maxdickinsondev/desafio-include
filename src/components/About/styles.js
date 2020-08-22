import styled, { keyframes } from 'styled-components';

export const AreaSection = styled.section`
    background: #4a4a4a;

    width: 100vw;
`;

export const Container = styled.div`
    width: 90vw;
    margin: 0 auto;

    padding: 80px 0px;
`;

export const Title = styled.h3`
    display: flex;
    align-items: center;
    justify-content: center;

    margin-bottom: 70px;
    color: #fefefe;

    text-transform: uppercase;
    letter-spacing: .5px;

    position: relative;

    &:before {
        content: '';
        position: absolute;
        width: 6rem;
        height: 0.2rem;
        left: 50%;
        top: 110%;
        margin-left: -50px;
        background-color: #fefefe;
    }
`;

export const Content = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    width: 100%;
    height: 100%;
    padding: 0 30px;
    padding-bottom: 30px;

    @media (max-width: 767px) {
        flex-direction: column;
    }
`;

export const Image = styled.img`
    width: 15rem;
    height: 15rem;
    border-radius: 50%;

    margin-left: 100px;
    margin-right: 20px;

    transition: transform 0.3s ease-in-out;

    @media (max-width: 767px) {
        margin: 0;
        padding-bottom: 20px;
    }

    &:hover {
        transform: scale(1.1);
    }
`;

export const Description = styled.div`
    max-width: 500px;
    margin-right: 20px;

    padding: 15px;

    @media (max-width: 767px) {
        text-align: center;
        margin: 0;
    }
`;

const slideRight = keyframes`
    0% {
        transform: translateX(120px);
    }
    100% {
        transform: translateX(0);
    }
`;

const slideLeft = keyframes`
    0% {
        transform: translateX(-120px);
    }
    100% {
        transform: translateX(0);
    }
`;

export const Name = styled.h3`
    color: #f0f0f5;
    font: 700 2.4rem Raleway;

    animation: ${slideLeft} 1s;

    @media (max-width: 500px) {
        font-size: 2rem;
    }
`;

export const Ocupation = styled.h3`
    color: #f0f0f5;
    margin-bottom: 20px;
    margin-top: 10px;
    font: 400 2rem Raleway;

    @media (max-width: 500px) {
        font-size: 1.4rem;
    }
`;

export const Bio = styled.p`
    color: #f5f5f5;
    font: 400 1rem Poppins;

    animation: ${slideRight} 1s;
`;