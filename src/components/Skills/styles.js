import styled from 'styled-components';

export const AreaSection = styled.section`
    background: #595454;
    float: left;
    width: 100vw;
    padding: 80px 0px;
`;

export const Container = styled.div`
    width: 90vw;
    margin: 0 auto;

    
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
    float: left;
    width: 100%;
`;

export const Image = styled.img`
    width: 7rem;
    height: 7rem;
`;

export const Card = styled.div`
    float: left;
    width: 33.33%;
    padding: 15px;

    @media (max-width: 767px) {
        width: 50%;
    }

    @media (max-width: 500px) {
        width: 100%;
    }
`;

export const Box = styled.div`
   background: #4a4a4a;
   display: flex;
   align-items: center;
   flex-direction: column;

   padding: 20px;
   border-radius: 0.3rem;
`;

export const Tech = styled.h3`
    color: #f0f0f5;
    text-transform: uppercase;
    margin-bottom: 10px;

    font-size: 1.2rem;
`;