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
    width: 100%;
    height: 100%;
`;

export const Card = styled.div`
    float: left;
    width: 33.33%;
    padding: 15px;

    transition: transform 0.2s ease-in-out;

    @media (max-width: 767px) {
        width: 50%;
    }

    @media (max-width: 500px) {
        width: 100%;
    }

    &:hover {
        transform: translateY(-10px);
    }
`;

export const Box = styled.div`
   background: #4a4a4a;
   display: flex;
   flex-direction: column;

   padding: 20px;
   border-radius: 0.3rem;

   position: relative;

   &:before {
       content: '';
       position: absolute;
       top: 0;
       left: 0;
       width: 0;
       height: 0.2rem;
       background-color: #f0f0f5;
       z-index: 1;

       transition: width .5s ease;
   }

   &:hover:before {
       width: 100%;
   }
`;

export const Tech = styled.h3`
    color: #f0f0f5;
    text-transform: uppercase;
    margin-bottom: 10px;

    font-size: 1.2rem;
`;